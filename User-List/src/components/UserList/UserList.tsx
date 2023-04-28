import "./UserList.css";

import SingleUser from "./SingleUser/SingleUser";
import { User } from "../../vite-env";

const UserList = ({ users }: any) => {
  return (
    <ul className="user-list">
      {users.map((u: User, i: number) => (
        <SingleUser key={i} {...u} />
      ))}
    </ul>
  );
};

export default UserList;
