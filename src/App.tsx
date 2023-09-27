import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import * as C from "./styles.tsx";
function App() {
  return (
    <C.ContainerMain>
      <GlobalStyle />
      <div></div>
    </C.ContainerMain>
  );
}

export default App;
