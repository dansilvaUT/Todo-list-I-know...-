import NavComponent from "../../components/Nav/NavComponent";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Todos from "../../components/Lists/Todos";

const ListView = () => {
  const [lists, setLists] = useState([]);
  const [showTodo, setTodoShow] = useState(false);
  const [todo, setTodo] = useState<number>(0);

  useEffect(() => {
    axios.get("/api/lists").then((res) => setLists(res.data.lists));
  }, []);
  const renderList = () => {
    return (
      <ListGroup>
        {lists.map((list: { name: string; id: number }) => (
          <ListGroup.Item key={list.id}>
            {list.name}
            <Badge pill bg="info">
              Number of Items: 3
            </Badge>
            <Button
              variant="primary"
              onClick={() => {
                setTodoShow(!showTodo);
                setTodo(list.id);
              }}
            >
              Visit
            </Button>
            <Button variant="danger">Delete</Button>
          </ListGroup.Item>
        ))}{" "}
        <Todos
          show={showTodo}
          listId={todo}
          onClose={() => setTodoShow(!showTodo)}
        />
      </ListGroup>
    );
  };

  return (
    <>
      <NavComponent />
      <ListGroup>{renderList()}</ListGroup>
    </>
  );
};

export default ListView;
