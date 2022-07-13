import React, { useState, useEffect } from "react";
import axios from "axios";

const Statistical = () => {
  const [statistical, setStatistical] = useState({
    statisticalList: [],
  });
  const { statisticalList } = statistical;
  const getStatisticalList = async () => {
    var res = await axios.get("http://127.0.0.1:8000/api/statistical");
    setStatistical({ statisticalList: res.data });
  };
  useEffect(() => {
    getStatisticalList();
  }, []);
  return (
    <>
      <div className="container">
        <h3>Danh sách statistical</h3>
        {statisticalList.map((statistical) => {
          return (
            <div>
              {statistical.name_categoty} có {statistical.total} sản phẩm
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Statistical;
