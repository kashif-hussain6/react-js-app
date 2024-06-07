import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Btn from "./components/Button/Button";
import Counter from "./usestate/counter";
import Change from "./usestate/inches";
import NumberDoubler from "./usestate/number";
import ShowHideText from "./usestate/hidetext";
import BackgroundChanger from "./usestate/baground";
import GreetingToggler from "./usestate/greeting";
import SetBgColor from "./usestate/practies";
import RandomColor from "./usestate/ranom";



function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>TODO app</h1>
      <input
        type="text"
        placeholder="Enter the ..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Btn onClick={addItem}>Add</Btn>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Header />
      <Footer />
      
      
      <hr/>
      <h1>UseState</h1>
      <Counter/>
      <br/>
      <br/>

      <Change/>
      <br/>
      <br/>
     
      <BackgroundChanger/>
      <hr/>
      <GreetingToggler/>
      <br/>
      
      <NumberDoubler/>
      <ShowHideText/>

      <hr/>
      <SetBgColor/>

      <br/>


      <br/>

<br/>     
 <RandomColor/>
      


      
    </div>
  );
}

export default App;
