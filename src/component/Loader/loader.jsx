import React, { useEffect, useState } from "react";
import "./loader.css";
import { BiLoaderCircle, BiDotsHorizontalRounded } from "react-icons/bi";
// import ReactLoading from 'react-loading';
import Parent from "../parent/parent";

const Loader = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          //   console.log(json);
          setData(json);
          setDone(true);
        });
    }, 3000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="spinner">
          <div class="wrapper">
  <span>O</span>
  <span>k</span>
  <span>i</span>
  <span>k</span>
  <span>o</span>
  <span>l</span>
  <span>a</span>
  <span>.</span>
  <span>.</span>
  <span>.</span>

</div>
          {/* <p className="loader_wrap">Okikiola..</p> */}
          {/* <BiDotsHorizontalRounded
          className="loader_wrap"
          /> */}
        </div>
      ) : (
        <Parent />
      )}
    </>
  );
};
export default Loader;
