import { Button, Modal } from "antd";
import { useState } from "react";
import "./creating.css";

const Creating = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Product'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Create'
      >
        <div className='modal'>
          <h3>Product Name</h3>
          <input type='text' className='modal_input'></input>
          <h3>Price</h3>
          <input type='text' className='modal_input'></input>
          <h3>Quantity</h3>
          <input type='text' className='modal_input'></input>
        </div>
      </Modal>
    </>
  );
};
export default Creating;
