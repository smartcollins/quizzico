import React from 'react';
import Progress from "../components/Progress";
import Modal from "../components/Modal";

const CreateAccount = () => {
  return (
    <div> 
        
        <Progress />
    <Modal
      visible={true}
      desc="Sucessful!"
      txt="Please wait a moment, we are preparing for you..."
    />t</div>
  )
}

export default CreateAccount