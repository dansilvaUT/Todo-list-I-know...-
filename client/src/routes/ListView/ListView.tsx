import NavComponent from "../../components/Nav/NavComponent";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useEffect, useState } from "react";

const ListView = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios.get("/api/lists").then((res) => setLists(res.data.lists));
  }, []);
  const renderList = () => {
    return lists?.map((list: { name: string; id: number }) => (
      <ListGroup.Item key={list.id}>{list.name}</ListGroup.Item>
    ));
  };

  return (
    <>
      <NavComponent />
      <ListGroup>{renderList()}</ListGroup>
    </>
  );
};

export default ListView;
