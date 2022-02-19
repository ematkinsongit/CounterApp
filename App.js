import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      {/* login box, popup "You're logged in!" */}
      <div className="BlogPage">
        <Form />
      </div>
    </div>
  );
}

export default App;
