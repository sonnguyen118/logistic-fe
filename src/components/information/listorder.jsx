import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../Pagination";

const ListOrder = (props) => {
  const [backgroundImage, setBackgroundImage] = useState("/emptycart.png");
  const location = useLocation();
  const [maxpage, setMaxPage] = useState(30);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    // console.log(searchParams, "searchParams");
    // console.log(location.pathname, "searchParams");
  }, [location.search]);

  const [data, setData] = useState([
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
  ]);
  const [data_origin, setDataOrigin] = useState([
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo ",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
    {
      orCode: "JT3025901027389",
      status: "Đã nhập kho trung quốc",
      createdDate: "1678034071405",
      updatedDate: "1678034071405",
      description: "Hàng gồm 12 bao thuốc lá, 15 bịch quần áo",
    },
  ]);

  useEffect(() => {
    setData(data_origin.slice(0, Number(maxpage)));
  }, [data_origin, maxpage]);

  // Hàm change time
  function formatDate(time) {
    const date = new Date(time);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${day}/${month}/${year} ${hour}:${minute}`;
    return formattedTime;
  }
  // Hàm tính toán số trang có thể hiển thị dựa trên số phần tử của mỗi trang và tổng số phần tử trong danh sách
  const calculatePages = (itemsPerPage, totalItems) => {
    const numPages = Math.ceil(totalItems / itemsPerPage);
    const pagesArr = [];

    for (let i = 1; i <= numPages; i++) {
      pagesArr.push(i);
    }

    return pagesArr;
  };

  return (
    <>
      <div className="list-order">
        {data !== undefined ? (
          <>
            {data.length > 0 ? (
              <>
                <div className="list-order-header">
                  <div className="list-order-header-item">STT</div>
                  <div className="list-order-header-item">Mã đơn hàng</div>
                  <div className="list-order-header-item">Ghi chú</div>
                  <div className="list-order-header-item">Ngày tạo</div>
                  <div className="list-order-header-item">
                    Cập nhật gần nhất
                  </div>
                  <div className="list-order-header-item">Trạng thái</div>
                </div>
                {data.map((information, i) => (
                  <div className="list-order-item">
                    <div className="list-order-item-infor">{Number(i + 1)}</div>
                    <div className="list-order-item-infor">
                      {information.orCode}
                    </div>
                    <div className="list-order-item-infor">
                      {information.description}
                    </div>
                    <div className="list-order-item-infor">
                      {formatDate(Number(information.createdDate))}
                    </div>
                    <div className="list-order-item-infor">
                      {formatDate(Number(information.updatedDate))}
                    </div>
                    <div className="list-order-item-infor">
                      {information.status}
                    </div>
                  </div>
                ))}
                <div className="list-order-pagination">
                  <Pagination param={"type0"} max={500} maxpage={maxpage} />
                  <div className="list-order-search">
                    <span className="list-order-search-title">
                      Số đơn hàng hiển thị:
                    </span>
                    <select
                      className="form-select form-select-sm list-order-search-input"
                      aria-label=".form-select-sm example"
                      value={maxpage}
                      onChange={(e) => setMaxPage(e.target.value)}
                    >
                      <option selected value={maxpage}>
                        {maxpage}
                      </option>
                      <option value={10}>10</option>
                      <option value={10}>20</option>
                      <option value={10}>30</option>
                      <option value={50}>50</option>
                      <option value={80}>80</option>
                      <option value={100}>100</option>
                      <option value={200}>200</option>
                      <option value={300}>300</option>
                      <option value={500}>500</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="list-order-none">
                  <div
                    className="list-order-none-image"
                    style={{
                      backgroundImage: `url(${backgroundImage})`,
                    }}
                  ></div>
                  <div className="list-order-none-text">
                    Hiện hệ thống chưa ghi nhận đơn hàng nào, xin vui lòng quay
                    lại sau ...
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="list-order-none">
              <div
                className="list-order-none-image"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              ></div>
              <div className="list-order-none-text">
                Hiện hệ thống chưa ghi nhận đơn hàng nào, xin vui lòng quay lại
                sau ...
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListOrder;
