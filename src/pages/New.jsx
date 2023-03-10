import React, { useState } from "react";
import Modal from "../components/Modal";
import Purpose from "../components/Purpose";

const New = () => {
  const [modal, setModal] = useState(false);

  const onModal = () => {
    setModal(true);
  };

  return (
    <div className="px-2">
      <Purpose
        new_pass={true}
        extra={true}
        place="/sign-in"
        btn_place={onModal}
        txt="Create new password 🔐"
        txt2="Save the new password in asafe place, if you forget it then you have to do a forgot password again."
        btn_txt="Continue"
      />
      {modal && (
        <Modal
          btn={true}
          desc="Welcome Back!"
          txt="You have successfully reset and created a new password."
          btn_txt="Go to Home"
          duty="/home"
        />
      )}
    </div>
  );
};

export default New;
