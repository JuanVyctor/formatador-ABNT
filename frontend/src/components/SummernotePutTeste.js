import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Container, Button, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import api from "../services/api";

const SummernoteComponentPut = () => {

  const [doc, setDoc] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const editorRef = useRef(null);
  
  const id = 24;
  useEffect(() => {
    api.get(`/documentos/${id}`)
    .then((response) => setDoc(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

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

    if (doc) {
      $(editorRef.current).summernote("code", doc?.texto);
    }
    
    return () => {
      $(editorRef.current).summernote("destroy");
    };
  }, []);
    
    const addDoc = data => 
      api.put("/documentos", data)
      .then(() => {
        alert('O procedimento deu certo');
      }).catch(() => {
        alert('O procedimento deu errado');
      });

  return (
    <form onSubmit={handleSubmit(addDoc)}>
      <input
        type="text"
        value={doc?.texto}
        name="teste"
        {...register("teste")}
      ></input>
      <Container className="mt-5 text-center">
        <Card
          className="p-4"
          style={{
            backgroundColor: "#A583F5",
            color: "white",
            borderRadius: "20px",
          }}
        >
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
          className="mt-4"
          type="submit"
          style={{ border: "2px solid black" }}
        >
          Formatar
        </Button>
      </Container>
    </form>
  );
};

export default SummernoteComponentPut;