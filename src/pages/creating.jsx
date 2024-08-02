
import React, { useState } from 'react';
import { DollarOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import "./creating.css"

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
  const classNames = {
    footer: styles['my-modal-footer']
  };
  const modalStyles = {
    footer: {
        borderTop: '1px solid #333',
      }
    };
  return (
    <>
    
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Create" >
        
        <div className="modal">
            <h3>Product Name</h3>
            <input type="text" className='modal_input' ></input>
            <h3>Price</h3>
            <input type="text" className='modal_input'></input>
            <h3>Quantity</h3>
            <input type="text" className='modal_input'></input>
        </div>
       
      </Modal>
    </>
  );
};
export default Creating;