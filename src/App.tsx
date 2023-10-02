import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import * as C from "./styles.tsx";
import Header from "./componentes/header/index.tsx";
import Enterprises from "./componentes/enterprises/index.tsx";
import Software from "./componentes/software/index.tsx";
function App() {
  return (
    <C.ContainerMain>
      <GlobalStyle />
      <Header />
      <Enterprises />
      <Software />
    </C.ContainerMain>
  );
}

export default App;
