// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edite <code>src/App.js</code> e salve para recarregar.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aprenda React
//         </a>
//       </header>
//     </div>
//   );
// }

// App.js
import React from "react";
import MeuComponente from "./components/MeuComponente";

function App() {
  return (
    <div>
      <h1>Meu Primeiro App React</h1>
      <MeuComponente nome="Mundo" />
    </div>
  );
}

export default App;
