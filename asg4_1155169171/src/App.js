// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("Ready...");

//   const onDemoClick = () => {
//     fetch("/.netlify/functions/demo")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setMessage(json.value);
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="App">
//         <header className="App-header">
//         <img src={tsIcon} className="App-logo" alt="logo" />
//       <button onClick={onDemoClick}>Demo Button</button>
//       </header>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import MessageBoard from "./pages/MessageBoard.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/message-board" element={<MessageBoard/>}/>
          <Route path="/posts/:postId" element={<PostDetail/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App