import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/AboutUs.css';
import logo from '../logo.svg';
import passo1 from '../passo1.png';
import passo2 from '../passo2.png';
import passo3 from '../passo3.png';
import passo4 from '../passo4.png';

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
                <p className='texto'>Somos um grupo do 4º ano de Informática para Internet do 
                Instituto Federal do Rio Grande do Norte, Campus Caicó, que idealizou esse sistema
                visando ajudar todos aqueles que sentem dificuldades 
                em escrever documentos formais em norma-ABNT. 
                Buscando solucionar esse problema de forma fácil e intuitiva, 
                nós desenvolvemos esta aplicação como nosso Projeto Multidisciplinar 
                referente às matérias de Interfaces de Usuários, Programação Orientada a 
                Serviços e Projeto de Desenvolvimento de Sistemas para Internet. <b>Siga o tutorial ao lado
                para testar o sistema!</b>
                </p>
            </Col>
            
            <Col className='cards'>
                <Card className='m-3'>
                    <Card.Header className='fundoCardTitle'>Passo 1</Card.Header>
                        <Card.Body>
                            <Card.Title> Abra a página inicial do Formatador </Card.Title>
                            <Card.Img src={passo1} />
                        </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Header className='fundoCardTitle'>Passo 2</Card.Header>
                        <Card.Body>
                            <Card.Title> Cole o seu texto nesse espaço </Card.Title>
                            <Card.Img src={passo2} />
                        </Card.Body>
                </Card>
            </Col>
            <Col className='cards'>
                <Card className='m-3'>
                    <Card.Header className='fundoCardTitle'>Passo 3</Card.Header>
                        <Card.Body>
                            <Card.Title> Ajuste a identação e detalhes que desejar </Card.Title>
                            <Card.Img src={passo3} />
                        </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Header className='fundoCardTitle'>Passo 4</Card.Header>
                    <Card.Body>
                        <Card.Title> Se quiser, salve seu documento clicando em "Salvar" </Card.Title>
                        <Card.Img src={passo4} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;