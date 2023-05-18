import { Link } from "react-router-dom";

const QuizBtn = ({btnHandler, handler="button", path, children}) => {
  return (
    <Link
      onClick={btnHandler}
      to={path||null}
      className={`flex items-center justify-center w-40 px-3 font-semibold py-1 rounded-full
         border-spacing-5 capitalize ${
           handler === children
             ? "bg-purple  text-zinc-300"
             : "text-purple bg-zinc-200"
         }`}
         id={children}
    >
      {children}
    </Link>
  );
};

export default QuizBtn;