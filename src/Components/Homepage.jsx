import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Homepage.css";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

import { postRequest } from "../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Homepage({setSelectedItem}) {
  const { loading, data, error } = useSelector((state) => state);
  console.log(loading, data, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequest());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <h1>Social Media For Travellers</h1>
        <div className="search">
          <CiSearch className="serach-icon" style={{ cursor: 'pointer' }}/>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="card-container">
          {data.length > 0 &&
            data.map((post) => (
              <div key={post.id} className="card">
                <img
                  src={`https://picsum.photos/200?random=${post.id}`}
                  className="pic"
                ></img>
                <div className="detail-btn">
                  <div className="texts">
                    <h3>{post.title}</h3>
                    <p>
                      {post.body}, <span>Read more...</span>
                    </p>
                  </div>
                  <Link to={`/item/:${post.id}`}>
                    <button type="button" onclick={setSelectedItem(post)}>
                    <FaAngleRight />
                  </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
