import React, { useState, useEffect } from "react";
import axios from "axios";

const ResList = () => {
  //   const [isLoaded, setIsLoaded] = useState(false);
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState();
  //
  useEffect(() => {
    getRes();
  console.log(resList);

  }, []);
  const getRes = async () => {
    var res = await axios.get("http://127.0.0.1:8000/api/show");
    // var resList = await res.data;
    setResList(res.data);
  };
  // Search
  const handlerSearch = async (e) => {
    var res = await axios.get(
      `http://127.0.0.1:8000/api/search?search=${search}`
    );
    // var resList = await res.data;
  
    setResList(res.data);
  };
  console.log(resList);
  // Search
  return (
    <>
      <div className='container'>

            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Search food</label>
            <div className="col-sm-10">
                <input type="text" name="search" className="form-control" id="inputPassword" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-danger" type='button' onClick={(e) => handlerSearch(e)}>Search</button>
            </div>
            <br />
            <div className='row'>
                {resList.length &&resList.map((res, index) => {
                    return (
                        <div className='col-sm-3' key={index}>
                            <div className="card">
                                <img src={'http://127.0.0.1:8000/image/' + res.image} style={{ width: '250px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{res.name_food}</h5>
                                    <p className="card-text">{res.price}</p>
                                    <p className="card-text">{res.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </>
  );
};

export default ResList;
