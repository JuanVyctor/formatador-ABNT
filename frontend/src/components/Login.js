import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormFloatingCustom() {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating>
      <hr></hr>
      <a><Button variant="outline-primary">Login</Button></a>
      <hr></hr>
      <a><Button variant="outline-primary">Primeira vez aqui? Cadastre-se</Button></a>
    </>
  );
}

export default FormFloatingCustom;