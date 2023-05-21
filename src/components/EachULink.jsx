import { Link } from "react-router-dom";
 const EachULink = ({ path, text, targetId, btnHandler, handler }) => {
    return (
      <Link
        onClick={btnHandler}
        to={path}
        className={`text-center w-content px-3 font-semibold py-1 rounded-full
         border-spacing-5 ${
           handler === targetId
             ? "bg-purple text-white"
             : "text-purple bg-white border-2 border-purple"
         }`}
      >
        {text}
      </Link>
    );
  };
  export default EachULink;