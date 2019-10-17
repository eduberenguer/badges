import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//import Badge from './components/Badge/Badge'
import BadgeNew from './pages/BadgeNew'
import Badges from "./pages/Badges";

function App() {
  return (
    <div className="App">
      {/*<BadgeNew />*/}
      <Badges />
    </div>
  );
}

export default App;
