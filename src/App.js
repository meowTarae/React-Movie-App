import { useEffect, useState } from "react";
import styles from "./App.module.css";
import style from "./Btn.module.css"

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=>{
    console.log("난 한번만 실행 됨");
  },[]);
  useEffect(()=>{
    console.log("Count마다 실행 됨");
  },[counter]);
  useEffect(()=>{
    console.log("Key Input마다 실행 됨");
  },[keyword]);
  return(
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Input value" 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button className={style.btn} onClick={onClick}>Click!</button>
    </div>
  );
}

export default App;
