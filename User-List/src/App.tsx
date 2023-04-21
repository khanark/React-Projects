import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import CountrySearch from "./components/CountrySearch/CountrySearch";
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
    <>
      <h1 className="title">Users Infinite Scroll & Pagination App</h1>
      <p className="text">Sort By</p>
      <div className="sort--wrapper">
        <CountrySearch />
      </div>
      {users.length > 0 && (
        <div className="table--wrapper">
          <UserList users={users} />
        </div>
      )}
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <Button variant="outline-secondary" onClick={onShowMoreClick}>
          Show more...
        </Button>
      )}
    </>
  );
}

export default App;
