import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../css/Home.css";


const UpdateDoc = () => {
  const id = 3;
  const navigate = useNavigate();

  function formataTexto(texto) {
    return `<p style="text-align: justify; line-height: 1.5; text-indent: 1.25em; font-family: Arial, Times New Roman, serif; color: black; font-size: 12;">${texto}</p>`;
  }
  
  function handleTexto(conteudo) {
    let texto_seco = conteudo;
    let texto = texto_seco.replaceAll('\n', '<br>');
    let texto_array = texto.split('<br>');
    let texto_formatado = '';
    for(let i of texto_array) {
      texto_formatado += `${formataTexto(i)}`;
    }
    setValue('texto', texto_formatado);
  }
  
  const [doc, setDoc] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const editorRef = useRef(null);
  
  const putDoc = data => 
    api.put(`/documentos/${id}`, data)
    .then(() => {
      alert('Documento alterado com sucesso.');
      navigate('/meus_documentos');
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
    });

  function handleDeleteDoc() {
    if (window.confirm('Tem certeza que deseja apagar seu documento?') === true) {
      api.delete(`/documentos/${id}`)
      .then(() => {
        alert('Documento deletado com sucesso.');
        navigate('/meus_documentos');
      }).catch(() => {
        alert('Ocorreu um erro inesperado.');
      });
    }
  }
  
  useEffect(() => {
    api
      .get(`/documentos/${id}`)
      .then((response) => setDoc(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

      if (!editorRef.current) return;
      
    $(editorRef.current).summernote({
      height: 300,
      placeholder: "Digite seu texto aqui...",
      toolbar: [
        ["font", ["bold", "italic", "underline", "clear"]],
        ["color", ["color"]],
        ["view", ["codeview", "help"]],
      ],
      callbacks: {
          onChange: function (content) {
            handleTexto(content)
          },
        },
    });
    
    return () => {
      $(editorRef.current).summernote("destroy");
    };
  }, []);

  useEffect(() => {
    if (doc) {
      $(editorRef.current).summernote("code", doc?.texto);
    }
  });
    
  return (
    <Container className="mt-5 text-center conteudo">
      <form className="summer" onSubmit={handleSubmit(putDoc)}>
          <Card className="p-4 custom-card">
            <div ref={editorRef} />
          </Card>
          <input type="hidden" name="texto" {...register("texto")}></input>
          <input
            type="hidden"
            value="1"
            name="usu_id"
            {...register("usu_id")}
          ></input>
          <Button
            variant="light"
            className="mt-4 custom-button me-3"
            type="submit"
          >
            Formatar
          </Button>
          <Button
            variant="light"
            className="mt-4 custom-button"
            onClick={handleDeleteDoc}
          >
            Deletar
          </Button>
      </form>
    </Container>
  );
};

export default UpdateDoc;
