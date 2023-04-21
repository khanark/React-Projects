import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SingleUser = ({ gender, name, picture, nat }: any) => {
  return (
    <tr>
      <td>
        <Col xs={2} md={1}>
          <Image src={picture.thumbnail} roundedCircle />
        </Col>
      </td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{gender}</td>
      <td>{nat}</td>
    </tr>
  );
};
export default SingleUser;
