import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/");
      const resjson = await res.json();
      setData(resjson);
    }
    fetchData();
  }, []);
  return (<>
  {data.map(item=>{
    return <ul><li>{item}</li></ul>
  })}
  </>);
};

export default App;
