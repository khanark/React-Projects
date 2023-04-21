import "./UserList.css";

import SingleUser from "./SingleUser/SingleUser";
import Table from "react-bootstrap/Table";
import { User } from "../../vite-env";

const UserList = ({ users }: any) => {
  return (
    <Table
      responsive
      striped
      bordered
      hover
      size="lg"
      variant="dark"
      className="rounded centered"
    >
      <tbody>
        {users.map((user: User, i: number) => (
          <SingleUser key={i} {...user} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
