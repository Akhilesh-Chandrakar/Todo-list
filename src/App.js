
import './App.css';
import React, {useState} from 'react';
import List from './List';

function App() {
  const [currentItem ,setCurrentItem]=useState('');
  const [itemList, updateList]=useState(getfromls);
  const onChangeHandler=(e)=>{
  setCurrentItem(e.target.value);
  }
  const addItemtolist=()=>{
    updateList([...itemList, {item:currentItem, key:Date.now()}]);
   setCurrentItem('');
  }
  localStorage.setItem("itemList", JSON.stringify(itemList))
  return (
    <div className="App">
      <header className="App-header">
       <div className="box">
        <div className="search">
          <input value={currentItem} onChange={onChangeHandler} />
          <button onClick={addItemtolist}>Add</button>
        </div>
        <List itemList={itemList} updateList={updateList}/>
       </div>

     
      </header>
    </div>
  );
  function getfromls(){
    const note=JSON.parse(localStorage.getItem("itemList"))
    if(note){
      return note;
    }
      else {
        return [];
      }
    }
}

export default App;
