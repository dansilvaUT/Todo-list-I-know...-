import { useState } from "react";
import NavComponent from "../../components/Nav/NavComponent";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import List from "../../components/Lists/List";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
              <Button onClick={() => setModalOpen(!isModalOpen)}>
                New List
              </Button>
              <Button>
                <Link to="/userLists">My Lists</Link>
              </Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
      <List show={isModalOpen} onClose={() => setModalOpen(!isModalOpen)} />
    </>
  );
};

export default Dashboard;
