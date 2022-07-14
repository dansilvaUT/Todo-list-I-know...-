import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "../TodoItem";

const Todos = ({
  onClose,
  show,
  listId,
}: {
  onClose: Function;
  show: boolean;
  listId: number;
}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/get_todos_by_list/${listId}`)
      .then((res) => setTodos(res.data.todos));
  }, [listId]);
  console.log(todos);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a New ToDo List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formListName">
            <ListGroup as="ol" numbered>
              {todos?.map((todo: { title: string; id: number }) => (
                <TodoItem todo={todo.title} key={todo.id} />
              ))}
            </ListGroup>
          </Form.Group>
          <Button variant="success" type="submit">
            Create List
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Todos;
