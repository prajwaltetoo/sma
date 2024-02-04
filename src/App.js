import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Item from './Components/Item';

const App = () => {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage setSelectedItem={setSelectedItem}/>} />
        <Route path={`/item/:${selectedItem.id}`} element={<Item selectedItem={setSelectedItem}/>} />
      </Routes>
    </div>
  );
};

export default App;
