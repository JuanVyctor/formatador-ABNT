import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import newDocument from '../newDocument.png';
import imagem from '../imagem.jpg';
import "../css/Dashboard.css";

function Grid() {
  return (
  <>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={newDocument} />
    </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Img src={imagem} />
              </Card.Body>
            </Card>
            </>
  );
}

export default Grid;