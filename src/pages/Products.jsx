import { DollarOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import {
  addProductApi,
  deleteProductApi,
  getProductApi,
  updateProductApi,
} from "../helper/fetchApi";

const Products = () => {
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
    setProductName("");
    setProductPrice(0);
    setIsEdit(false);
    setSelectedProduct("");
  };

  const handleAddProduct = async () => {
    try {
      const newProduct = await addProductApi({
        title: productName,
        price: productPrice,
        description: `This is a ${productName}`,
      });
      setData([...data, newProduct]);
      setIsModalOpen(false);
      setProductName("");
      setProductPrice(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditProduct = async () => {
    try {
      await updateProductApi(selectedProduct, {
        title: productName,
        price: productPrice,
        description: `This is a ${productName}`,
      });
      setData(
        data.map((product) => {
          if (product.id === selectedProduct) {
            return {
              ...product,
              title: productName,
              price: productPrice,
            };
          }
          return product;
        })
      );
      setIsModalOpen(false);
      setProductName("");
      setProductPrice(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductApi(id);
      setData(data.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Picture",
      dataIndex: "imageSrc",
      key: "imageSrc",
      render: (imageUrl) => (
        <img alt={imageUrl} src={imageUrl} width={20} height={20} />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      render: (id) => (
        <div className='flex flex-row gap-2'>
          <Button
            onClick={() => {
              const product = data.find((product) => product.id === id);
              setProductName(product.title);
              setProductPrice(product.price);
              setIsEdit(true);
              setIsModalOpen(true);
              setSelectedProduct(id);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => deleteProduct(id)}>Delete</Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductApi();
      setData(response.docs);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className='products flex p-10 flex-col justify-center'>
        <div className='control-handler flex justify-end mb-10'>
          {/* <Search
            placeholder='input search text'
            onSearch={() => {}}
            style={{ width: 200 }}
          /> */}
          <Button
            type='primary'
            onClick={() => {
              setIsEdit(false);
              setIsModalOpen(true);
            }}
          >
            Add Product
          </Button>
        </div>
        <div className='products-table'>
          <Table columns={columns} dataSource={data} />
        </div>
      </section>

      <Modal
        title='Product'
        open={isModalOpen}
        onOk={(id) => {
          if (isEdit) {
            handleEditProduct(id);
          } else {
            handleAddProduct();
          }
        }}
        onCancel={handleCancel}
        okText={`${isEdit ? "Edit" : "Create"}`}
        styles={{
          body: {
            padding: "20px 100px",
          },
        }}
      >
        <div className='modal'>
          <h3>Product Name</h3>
          <Input
            placeholder='Input product name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <br />
          <h3>Price</h3>
          <Input
            placeholder='input the price'
            prefix={<DollarOutlined />}
            type='number'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default Products;
