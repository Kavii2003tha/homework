import React,{ useState,useEffect} from "react";

const App = () => {
  const [name, setName] = useState("");
  const[list,setList] = useState([]);

  useEffect(()=>{
    console.log(list);
  },[list]);
  
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    setList([...list, name]);
  };

  return (
  <form className="form" onSubmit={handleAdd}>
    <label>Name:</label>
    <input placeholder="your Name" value={name} onChange={handleChange} />
    <button>Add</button>
    
    </form>
  );
  
};

export default App;