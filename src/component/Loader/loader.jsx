import React, { useEffect, useState } from "react";
import "./loader.css";
import ReactLoading from 'react-loading';
import Parent from "../parent/parent";

const Loader =()=>{
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

    return(
        <>
        {!done ? (

            <div className="spinner">
          <ReactLoading
            type={"bars"}
            color={"#b36b43"}
            height={100}
            width={100}
            delay={2}
            className="loader_wrap"
          />
          </div>
        ) : (
         <Parent/>
        )}
      </>

    )
}
export default Loader;