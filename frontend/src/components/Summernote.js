import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import "../css/Summernote.css";

const SummernoteComponent = () => {

  const { register, handleSubmit, setValue } = useForm();
  const editorRef = useRef(null);
  
  useEffect(() => {
      $(editorRef.current).summernote({
          height: 300,
          placeholder: "<p style='color: white;'>Digite aqui seu texto...</p>",
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
    
    const addDoc = data =>
      api.post("/documentos", data)
      .then(() => {
        alert('O procedimento deu certo');
      }).catch(() => {
        alert('O procedimento deu errado');
      });

  return (
    <form onSubmit={handleSubmit(addDoc)}>
      <Container className="mt-5 text-center">
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
          value="2"
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
      </Container>
    </form>
  );
};

export default SummernoteComponent;
