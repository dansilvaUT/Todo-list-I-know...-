import NavComponent from "../../components/Nav/NavComponent";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Dashboard = () => {
  return (
    <>
      <NavComponent />
      <Container className="Dashboard-container">
        <Row>
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src="https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png"
              rounded
            />
          </Col>
          <Col>
            <ButtonGroup size="lg" className="mb-2">
              <Button>My Lists</Button>
              <Button>New List</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
