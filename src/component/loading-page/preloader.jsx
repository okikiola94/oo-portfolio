import React, { useEffect, useState} from "react";
import "./preloader.css"
import Parent from "../parent/parent";


function PreLoader(){
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);


    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json)
            .then((json)=>{
                console.log(json);
                setloading(true);

                setTimeout(() => {
                    setcompleted(true);
                }, 1000);
            });
        }, 2000);
    },[]);

    return(
      <>
      {!completed?(
        <>
        {!loading?(
            // <div className="preload">
            // <section>
            //     <p>Loading...</p>
            //     </section>
            // <div>
            //     <span></span>
            //     <span></span>
            // </div>
            // </div>
            <div className="spinner">
                <section className="loadit">hello...</section>
                {/* <div className="half-spinner"></div> */}
                <div className="span-load">
                    <span className="i"></span>
                    <span className="j"></span>
                </div>

            </div>
        ):(
            <div className="completed">
                Welcome!!!
            </div>
        )}
              </>  
      ):(
        <>
        <Parent/>
</>
      )}
      </>
    );
     
}

export default PreLoader;