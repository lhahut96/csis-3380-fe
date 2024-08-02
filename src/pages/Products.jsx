import { Button, Table } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { deleteProductApi, getProductApi } from "../helper/fetchApi";

const Products = () => {
  const [data, setData] = useState([]);

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
        <img alt={imageUrl} src={imageUrl} width={40} height={40} />
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
          <Button>Edit</Button>
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
    <section className='products flex p-10 h-screen flex-col justify-center'>
      <div className='control-handler flex justify-between mb-10'>
        <Search
          placeholder='input search text'
          onSearch={() => {}}
          style={{ width: 200 }}
        />
        <Button type='primary'>Add Product</Button>
      </div>
      <div className='products-table'>
        <Table columns={columns} dataSource={data} />
      </div>
    </section>
  );
};

export default Products;
