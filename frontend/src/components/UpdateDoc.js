import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import "../css/Summernote.css";

const UpdateDoc = (id) => {
  const [doc, setDoc] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const editorRef = useRef(null);

  function handleDeleteDoc() {
    if (window.confirm('Tem certeza que deseja apagar seu documento?') == true) {
      api.delete(`/documentos/${id}`)
      .then(() => {
        alert('Documento deletado com sucesso.');
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
        ["style", ["style"]],
        ["font", ["bold", "italic", "underline", "clear"]],
        ["fontname", ["fontname"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link", "picture", "video"]],
        ["view", ["fullscreen", "codeview", "help"]],
      ],
      callbacks: {
          onChange: function (content, $edidable) {
              setValue('texto', content);
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
  })
    
  const putDoc = data => 
    api.put(`/documentos/${id}`, data)
    .then(() => {
      alert('O procedimento deu certo');
    }).catch(() => {
      alert('O procedimento deu errado');
    });

  return (
    <div>
      <form onSubmit={handleSubmit(putDoc)}>
        <Container className="mt-5 text-center">
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
        </Container>
      </form>
    </div>
  );
};

export default UpdateDoc;
