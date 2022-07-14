import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const TodoItem = (props: any) => {
  return (
    <ListGroup.Item key={props.id} as="li">
      {props.todo} <Button variant="info">Done</Button>
      <Button variant="warning">Edit</Button>
      <Button variant="danger">Delete</Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
