import React from "react";
import FormCreate from "./components/Form/FormCreate";
import FormFiltro from "./components/Form/FormFiltro";
import Message from "./components/Message/Message";
import Table from "./components/Table/Table";

import './index.css'

function App() {
  return (
    <div className="App">
      <FormFiltro />
      <Table />
      <FormCreate />
      <Message />
    </div>
  );
}

export default App;
