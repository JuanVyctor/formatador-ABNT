import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [texto, setTexto] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  
  function handleTexto(e) {
    setValue('texto', e.target.value);
    let texto_seco = e.target.value;
    let texto_formatado = '<p style="margin-left:; margin-rigth:; margin-top: 0;text-align: justify; text-indent: 1.5em ;font-family: Arial, Times New Roman, serif; color: black; font-size: 12;">' + texto_seco + '</p>'; 
    setTexto(texto_formatado);
  }
  
  useEffect(() => {
    $(editorRef.current).summernote({
      height: 300,
      placeholder: "<p style='color: white;'>Ele sairá aqui.</p>",
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "italic", "underline", "clear"]],
          ["fontname", ["fontname"]],
          ["color", ["color"]],
          ["view", [ "codeview", "help"]],
        ],
      });

      return () => {
        $(editorRef.current).summernote("destroy");
      };
  }, []);
    
  useEffect(() => {
    $(editorRef.current).summernote("code", texto);
  })
  const addDoc = data =>
    api.post("/documentos", data)
    .then(() => {
      alert('O procedimento deu certo');
    navigate(`/meus_documentos/${1}`);
    }).catch(() => {
      alert('O procedimento deu errado');
    });

  return (
    <Container className="mt-5 text-center conteudo">
      <div className="caixa">
        <textarea className="textoSimples" placeholder="Coloque aqui o texto não formatado..." onChange={handleTexto} />
      </div>
      <form className="summer" onSubmit={handleSubmit(addDoc)}>
          <Card className="p-4 custom-card">
            <div ref={editorRef} />
          </Card>
          <input
            type="hidden"
            name="texto"
            {...register("texto")}
          ></input>
          <input
            type="hidden"
            value="1"
            name="usu_id"
            {...register("usu_id")}
          ></input>
          <Button
            variant="light"
            className="mt-4 custom-button"
            type="submit"
          >
            Formatar
          </Button>
      </form>
    </Container>
  );
};

export default Home;
