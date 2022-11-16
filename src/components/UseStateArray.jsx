import React, {useState} from "react";
import '../App.css';


function UseStateArray() {
  const data = [
    {
      id: 1,
      name: "Humaira",
      fName: "Habib-un-nabi"
    },
    {
      id: 2,
      name: "Tazmeen",
      fName: "safeerUllah"
    },
    {
      id: 3,
      name: "Horulain",
      fName: "Jameel"
    },
    {
      id: 4,
      name: "Afia",
      fName: "Anees"
    },
    {
      id: 5,
      name: "Fareha",
      fName: "Yousuf"
    },
    {
      id: 6,
      name: "Sadiqa",
      fName: "Badal khan"
    },
  ];
const [array , setData] = useState(data) ;
const clear = () => {
  setData ([]);
}

  return (
    <>
    
      <div className="array">
        {array.map((currElm) => (
          <h2 key={currElm.id} >
          Name:{currElm.name} <br />
          Father Name:{currElm.fName}
          </h2>
        ))}
        <span>
          <button onClick={clear} >Clear</button>
        </span>
      </div>
    </>
  );
}

export default UseStateArray;
