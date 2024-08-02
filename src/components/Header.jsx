import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const usernameStorage = localStorage.getItem("username");
    if (!usernameStorage) {
      navigate("/login");
    } else {
      setUsername(usernameStorage);
    }
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className='navbar flex justify-center items-center'>
      <a href='#user'>{username}</a>
      <div className='divider h-4 bg-white w-[1px]'></div>
      <a href='#' onClick={handleLogout}>
        Log out
      </a>
    </div>
  );
};

export default Header;
