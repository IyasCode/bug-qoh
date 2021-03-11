import { Route } from "react-router";

import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.scss";
import { ReactNode, useState } from "react";

function List<T>({
  items,
  render
}: {
  items: T[]
  render: (item: T) => ReactNode
}) {
  return <ul>
    {items.map((item, index) => <li key={index}>{render(item)}</li>)}
  </ul>
}

function Increment() {
  const [number, setNumber] = useState<number>()
  
  return (
    <div>
      <h2>this is increment by {number}</h2>
      <button onClick={() => setNumber((prevNum) => prevNum! + 1)}>click here</button>
    </div>
  )
}

function Arra() {
  const [arr, setArr] = useState<number[]>([])
  return (
    <div>
      <button onClick={() => setArr((prevVal) => [...prevVal, prevVal.length + 1])}>add to array</button>
      <h1>{JSON.stringify(arr)}</h1>
    </div>
  )
}

function App() {
  return (
    // <div> 
    //   <h1>Hello World</h1>
    //   <List 
    //     items={["Zana", "molinoer", "Sabusi"]}
    //     render={(item) => <div>{item}</div> }  
    //   />
    //   <Increment/>
    //   <Arra/>
    // </div>
    <Layout>
      <div className="App">
        <Route path="/" component={Home} />
      </div>
    </Layout>
  );
}

export default App;
