import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import * as C from "./styles.tsx";
import Header from "./componentes/header/index.tsx";
import Enterprises from "./componentes/enterprises/index.tsx";
function App() {
  return (
    <C.ContainerMain>
      <GlobalStyle />
      <Header />
      <Enterprises />
    </C.ContainerMain>
  );
}

export default App;
