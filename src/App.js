import ListTask from './components/listTask/listTask'
import AddTask from './components/addTask/addTask'
import 'bootstrap/dist/css/bootstrap.css'
import React , {useState} from 'react'
import "./App.css";
import Filter from './components/filter/filter'


function App() {
  
  return (
    <div className="App m-5">
     <AddTask />
     <ListTask />
     <Filter />
    </div>
  );
}

export default App;
