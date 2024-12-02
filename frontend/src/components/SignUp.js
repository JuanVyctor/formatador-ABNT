import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
// import $ from "jquery";
// import '../js.cookie';
// import { SuapClient } from '../client';
// import '../settings.sample';

function FormFloatingCustom() {

  // var suap = SuapClient(
  //   "https://suap.ifrn.edu.br",
  //   "N5hd7LLkylnfp54A3NzK3Xlnp0XjYQjWAGhUNTDd",
  //   "http://localhost:8000",
  //   "http://localhost:8000/dashboard",
  //   "identificacao email documentos_pessoais"
  // );
  // suap.init();
  // $(document).ready(function () {
  //   $("#suap").attr("href", suap.getLoginURL());
  // });

  return (
    <>
      <div className="body">
        <div className="">
          <FaRegCircleUser className="UserIcon mb-4" />
        </div>
        <div className="formulario mt-4">
          <div>
            <Form.Floating className="mb-4">
              <Form.Control
                id="floatingNameCustom"
                type="text"
                placeholder="Name"
              />
              <label htmlFor="floatingNameCustom">Nome</label>
            </Form.Floating>
            <Form.Floating className="mb-4">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <Form.Floating className="mb-4">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Senha</label>
            </Form.Floating>
            <div className="Buttons d-flex justify-content-center">
              <a>
                <Button className="Button">Criar Conta</Button>
              </a>
            </div>
            <div className="Buttons d-flex justify-content-center">
              <a>
                <Button id="suap" className="Button">
                  Criar conta com SUAP
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormFloatingCustom;