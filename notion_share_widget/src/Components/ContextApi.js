import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Share from './Share';
import InputField from './InputField';

export const AppContext = createContext(null);

function ContextApi() {

  const [persons, setPerson] = useState(['Tom Cook', 'Arlene Mccoy']);
  const [groups, setGroups] = useState(['Product', 'Engineering']);
  const [selectedOption, setSelectedOption] = useState('No Access');
  const [addAccess, setAddAccess] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false)


  return (
    <AppContext.Provider value={{ persons, setPerson, groups, setGroups, selectedOption, setSelectedOption, addAccess, setAddAccess, buttonClicked, setButtonClicked }}>
      {/* <Share/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Share />} />
          <Route path='/inputField' element={<InputField />} />
        </Routes>
      </Router>
      {/* <InputField/> */}
    </AppContext.Provider>
  )
}

export default ContextApi