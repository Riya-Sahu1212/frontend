import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Riya</div>
      <div>
        <Link to={"https://www.linkedin.com/in/riya-sahu-32929b28b/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/riya-sahu-32929b28b/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.linkedin.com/in/riya-sahu-32929b28b/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
