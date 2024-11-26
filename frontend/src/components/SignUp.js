import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/SignUp.css";

function FormFloatingCustomSignup() {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Maria Eduarda"
          className="formulario"
        />
        <label htmlFor="floatingInputCustom">Nome de Usuário</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingEmailCustom"
          type="email"
          placeholder="nome@exemplo.com"
          className="formulario"
        />
        <label htmlFor="floatingEmailCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Senha"
          className="formulario"
        />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating>
      <hr></hr>
      <a>
        <Button variant="outline-primary">Cadastrar-se</Button>
      </a>
    </>
  );
}

export default FormFloatingCustomSignup;