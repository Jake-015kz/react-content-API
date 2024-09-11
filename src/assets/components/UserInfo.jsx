import styles from "./UserInfo.module.css";
import UserContext from "../context/UserContex";
import { useContext } from "react";

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default UserInfo;
