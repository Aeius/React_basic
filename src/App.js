import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/List";

import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/Counter">Counter</Link> |
      <Link to="/Input">Input</Link> | 
      <Link to="/Input2">Input2</Link> | 
      <Link to="/List">List</Link> | 
      <Link to="/Payment">Payment</Link> | 
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input" element={<Input />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/List" element={<UserList />}/>
        <Route path="/Payment" element={<Payment />}/>
      </Routes>
    </div>
  );
}

export default App;
