import "./SingleUser.css";

const SingleUser = ({ gender, name, picture, nat }: any) => {
  return (
    <li className="user">
      <div className="user-left--box">
        <img src={picture.thumbnail} alt="user image" className="user-image" />
        <p className="user-names">
          {name.first} {name.last}
        </p>
      </div>
      <div className="user-right--box">
        <p>Gender: {gender.replace(gender[0], gender[0].toUpperCase())}</p>
        <p>Nationality: {nat}</p>
      </div>
    </li>
  );
};
export default SingleUser;
