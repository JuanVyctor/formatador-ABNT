import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "../css/Home.css";


const UpdateDoc = () => {
  const [token] = useState(localStorage.getItem('token'));
  const [doc, setDoc] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  
  useEffect(() => {
    api.get("/id"
    , {
        headers: { Authorization: `Bearer ${token}` },
      })
    .then((response) => {
      setValue('usu_id', response.data)
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
    });
  })

  function formataTexto(texto) {
    return `<p style="text-align: justify; line-height: 1.5; text-indent: 1.25em; font-family: Arial, Times New Roman, serif; color: black; font-size: 12;">${texto}`;
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
  
  const putDoc = data => 
    api.put(`/usuarios/documentos/${params.id}`, data, {
      headers : {Authorization: `Bearer ${token}`},
    })
    .then(() => {
      alert('Documento alterado com sucesso.');
      navigate('/meus_documentos');
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
    });

  function handleDeleteDoc() {
    if (window.confirm('Tem certeza que deseja apagar seu documento?') === true) {
      api.delete(`/usuarios/documentos/${params.id}`, {
        headers : {Authorization: `Bearer ${token}`},
      })
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
      .get(`/usuarios/documentos/${params.id}`, {
        headers : {Authorization: `Bearer ${token}`},
      })
      .then((response) => {console.log(response.data); setDoc(response.data)})
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
  }, [doc]);
    
  return (
    <Container className="mt-5 text-center conteudo">
      <form className="summer" onSubmit={handleSubmit(putDoc)}>
          <Card className="p-4 custom-card">
            <div ref={editorRef} />
          </Card>
          <input type="hidden" name="texto" {...register("texto")}></input>
          <input type="hidden" name="usu_id"{...register("usu_id")}></input>
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
