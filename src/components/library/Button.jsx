import { Link } from "react-router-dom";

const Button = ({ text, btnHandler, handler, path }) => {
  return (
    <Link
      onClick={btnHandler}
      to={path}
      className={`text-center w-40 px-3 font-semibold py-1 rounded-full
         border-spacing-5 capitalize ${
           handler === text
             ? "bg-purple text-white"
             : "text-purple bg-white border-2 border-purple"
         }`}
    >
      {text}
    </Link>
  );
};

export default Button;
