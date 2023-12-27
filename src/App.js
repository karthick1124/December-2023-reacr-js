import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ToggleImageApp from './components/ToggleImageApp';
import ItemList from './components/Item';
import ApiTable from './components/ApiTable';
import Home from './components/Home';
import About from './components/About';
import DropdownForm from './components/DropDown';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1>My App</h1>
        <ItemList items={items} />
        <ToggleImageApp />
        <ApiTable />
        <DropdownForm/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
