import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CountrySearch = () => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
      <Form.Control
        placeholder="Spain"
        aria-label="Country"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default CountrySearch;
