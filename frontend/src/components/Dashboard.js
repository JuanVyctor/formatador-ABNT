import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import newDocument from '../newDocument.png';
import imagem from '../imagem.jpg';
import "../css/Dashboard.css";


function GridExample() {
  return (
    <Row className='row'>
        <Col className='col-4'>
        <a>   
            <Card className='m-4'>
                <Card.Body>
                  <Card.Img src={newDocument}/> 
                </Card.Body>
              </Card>
        </a>
        </Col>
        <Col className='col-8'>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Img src={imagem} />
              </Card.Body>
            </Card>
        </Col>

    </Row>
  );
}

export default GridExample;