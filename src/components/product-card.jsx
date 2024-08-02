import { Button } from "antd";
import { useOutletContext } from "react-router-dom";
import { DollarOutlined } from "@ant-design/icons";
import "./product-card.css";

const ProductCard = (props) => {
  const { messageApi } = useOutletContext();

  const clickBtn = () => {
    messageApi.open({
      type: "success",
      content: "Success!",
    });
  };

  return (
    <div className="productCard">
      <img src={props.img} />
      <div className="content">
        <p className="productName">{props.name}</p>
        <div>
          <DollarOutlined /> <p className="price inline-block">{props.price}</p>
        </div>
        <div className="flex justify-end w-full">
          <Button type="primary" onClick={clickBtn}>
            BUY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
