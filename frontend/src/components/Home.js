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
  
  function formataTexto(texto) {
    return `<p style="text-align: justify; line-height: 1.5; text-indent: 1.25em; font-family: Arial, Times New Roman, serif; color: black; font-size: 12;">${texto}</p>`;
  }

  function handleTexto(e) {
    setValue('texto', e.target.value);
    let texto_seco = e.target.value;
    let texto = texto_seco.replaceAll('\n', '<br>');
    let texto_array = texto.split('<br>');
    let texto_formatado = '';
    for(let i of texto_array) {
      texto_formatado += `${formataTexto(i)}`;
    }
    setTexto(texto_formatado);
  }
  
  useEffect(() => {
    $(editorRef.current).summernote({
      height: 300,
        toolbar: [
          ["font", ["bold", "italic", "underline", "clear"]],
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
      navigate(`/meus_documentos`);
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
    });

  return (
    <Container className="mt-5 text-center conteudo">
      <div className="caixa">
        <textarea className="textoSimples" placeholder="Coloque aqui o texto não formatado..." onChange={handleTexto} />
      </div>
      <form className="summer" onSubmit={handleSubmit(addDoc)}>
          <Card className="p-4 custom-card">
            <div className="text-center bg-danger" ref={editorRef} />
          </Card>
          <input
            type="hidden"
            name="texto"
            {...register("texto")}
          ></input>
          <input
            type="hidden"
            value="4"
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
