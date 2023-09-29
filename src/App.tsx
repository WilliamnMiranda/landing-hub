import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import * as C from "./styles.tsx";
import Header from "./componentes/header/index.tsx";
function App() {
  return (
    <C.ContainerMain>
      <GlobalStyle />
      <Header />
      <div>teste</div>
    </C.ContainerMain>
  );
}

export default App;
