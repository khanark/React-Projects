import "./App.css";

import { useEffect, useState } from "react";

import Spinner from "./components/Spinner/Spinner";
import { User } from "./vite-env";
import UserList from "./components/UserList/UserList";
import { getUsers } from "./services/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const onShowMoreClick = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    getUsers(page, controller.signal)
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data]);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [page]);

  return (
    <div className="user-listing">
      <h1 className="title">Users Infinite Scroll & Pagination App</h1>
      <p className="desc">
        This app is made to showcase simple pagination upon user action.
        Fetching is done whenever user clicks <span>Show More</span> button.
      </p>
      {!users.length && <Spinner />}
      {users.length > 0 && <UserList users={users} />}
      {loading && users.length > 0 && <Spinner />}
      {!loading && (
        <button className="btn" onClick={onShowMoreClick}>
          Show More...
        </button>
      )}
    </div>
  );
}

export default App;
