import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PaginaInicial() {
    
  
  const [heroiname, setHeroiname] = useState("7");
  const [data, setData] = useState([]);

  function getHeroi() {
    axios
      .get(searchHero)
      .then((response) => {
        setData(response.data);
       // console.log(response.data)
      })
      .catch((error) => console.log(`do errorCu ${error}`));
  }

  useEffect(() => {
    getHeroi();
  }, [heroiname]); // tirar heroiname ???
  

  return (
    <>
         <input
      onSubmit={(e) => {
        const nome = e.target.value;
     // console.log("asdasda");
     //   console.log(data.result.name);
        setHeroiname(nome);
      }}
    ></input>
    <button onClick={(e)=>{
        console.table(data.name)
    }
        
    }>AQUI</button>
    
    </>
   
  );
}
