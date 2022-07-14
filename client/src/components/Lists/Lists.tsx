import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Alert from "react-bootstrap/Alert";

const Lists = ({ onClose, show }: { onClose: Function; show: boolean }) => {
  //TODO: Disabled create Todo while request is being made
  // Update message to close modal
  const [listName, setListName] = useState("");
  const [success, setSuccess] = useState(false);
  const { user } = useContext(UserContext);

  const handleListNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setListName(e.target.value);
  };

  const handleListNameSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/create_list", {
        name: listName,
        user_id: user.id,
      });

      if (response.data.list) {
        setSuccess(true);
      }
    } catch (error: any) {
      console.log(error);
      setSuccess(false);
    }
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {Boolean(success) && <Alert variant="success">List Created!</Alert>}
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a New ToDo List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleListNameSubmit(e)}>
          <Form.Group className="mb-3" controlId="formListName">
            <Form.Label>List Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter List Name"
              onChange={handleListNameChange}
              value={listName}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Create List
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onClose();
            setListName("");
            setSuccess(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Lists;
