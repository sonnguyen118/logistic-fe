import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";
const url = require("../config/variable");

function Test() {
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(orders, "orders");
  const onEditorChange1 = (event) => {
    let data = event.editor.getData();
    setData(data);
  };
  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders != undefined ? (
          <>
            {orders.length > 0 ? (
              <>
                {orders.map((order, i) => (
                  <>
                    <li key={order.id}>{order.id}</li>
                    <li>{order.order_code}</li>
                    {/* <li>{order.order_name}</li> */}
                    <li>{order.created_date}</li>
                    <li> ----------------</li>
                  </>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </ul>
      <CKEditor
        initData={`hello world`}
        editorUrl={`http://localhost:3000/ckeditor/ckeditor.js`}
        config={{ ...url.ckeditor4_little, height: "620px" }}
        onChange={(e) => onEditorChange1(e)}
      />
      <div>{data}</div>
    </div>
  );
}

export default Test;

// src/components/ProductList.js

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../actions/productActions";

// const Test = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.products);
//   const loading = useSelector((state) => state.product.loading);
//   const error = useSelector((state) => state.product.error);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }
//   console.log(products);

//   return (
//     <div>
//       123
//       <div>{products.message}</div>
//       {/* {products.map((product, i) => (
//          <div>{product.message}</div>
//       ))} */}
//     </div>
//   );
// };

// export default Test;

// import React from "react";
// import Transmit from "react-transmit";

// function DogImage({ dogImageUrl }) {
//   return (
//     <div>
//       <img src={dogImageUrl} alt="Dog" />
//     </div>
//   );
// }

// async function getServerData({ transmit }) {
//   const response = await transmit.forceFetch(
//     "https://dog.ceo/api/breeds/image/random"
//   );
//   const json = await response.json();
//   return { dogImageUrl: json.message };
// }

// export default Transmit.createContainer(DogImage, {
//   initialVariables: {},
//   shouldFetch: () => true,
//   getServerData,
// });
