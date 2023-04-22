import { useRef, useState, useEffect } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

const DropDown = ({ title, contents }) => {
  const [inputValue, setInputValue] = useState("Select");
  const [dropAction, setDropAction] = useState(false);

  const handleDropAction = () => setDropAction(!dropAction);
  const selectInput = (item) => {
    setInputValue(item);
    handleDropAction();
  };

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef && !divRef.current.contains(e.target)) handleDropAction();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef.current]);

  return (
    <div className="space-y-4">
      <p className="font-bold">{title}</p>
      <div
        className="flex items-center justify-between  border-gray-400 border-b-2"
        onClick={handleDropAction}
      >
        <input
          type={"text"}
          className=" outline-none w-full font-semibold "
          readOnly
          value={inputValue}
        />
        <span className=" p-2 cursor-pointer text-black">
          {dropAction ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </span>
      </div>
      {dropAction && (
        <div className="m-0 space-y-2  shadow-sm " ref={divRef}>
          {contents.map((item) => (
            <p
              className="capitalize font-semibold py-1"
              onClick={() => selectInput(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
