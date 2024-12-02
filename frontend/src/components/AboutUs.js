import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imagem from '../imagem.jpg';
import "../css/AboutUs.css";
import logo from '../logo.svg';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container>
      <Row className='linha'>
        <Col className='intro'>
            <img
                alt="Logo"
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top rounded-circle"
            />
            <h1 className='titulo'>Quem somos?</h1>
            <p className='texto'>Somos um grupo do 4º ano de Informática para Web que 
            idealizou esse sistema visando ajudar todos aqueles que sentem dificuldades 
            em escrever documentos formais em norma-ABNT. 
            Buscando solucionar esse problema de forma fácil e intuitiva, 
            nós desenvolvemos esta aplicação como nosso Projeto Multidisciplinar 
            referente às matérias de Interfaces de Usuários, Programação Orientada a 
            Serviços e Projeto de Desenvolvimento de Sistemas para Internet. <b>Siga o tutorial ao lado
            para testar o sistema!</b>
            </p>
        </Col>
        
        <Col>
            <Card className='m-3'>
                <Card.Header>Passo 1</Card.Header>
                    <Card.Body>
                        <Card.Title> Abra a página inicial do Formatador </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
            <Card className='m-3'>
                <Card.Header>Passo 3</Card.Header>
                    <Card.Body>
                        <Card.Title> Agora, clique em formatar </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
            <Card className='m-3'>
                <Card.Header>Passo 5</Card.Header>
                    <Card.Body>
                        <Card.Title> Se quiser, salve seu documento </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card className='m-3'>
                <Card.Header>Passo 2</Card.Header>
                    <Card.Body>
                        <Card.Title> Cole o seu texto nesse espaço </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
            <Card className='m-3'>
                <Card.Header>Passo 4</Card.Header>
                    <Card.Body>
                        <Card.Title> Ajuste a identação e detalhes que desejar </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
            <Card className='m-3'>
                <Card.Header>Passo 6</Card.Header>
                    <Card.Body>
                        <Card.Title> Na página de dashboard, acesse seu documento e faça download! </Card.Title>
                        <Card.Img src={imagem} />
                    </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;