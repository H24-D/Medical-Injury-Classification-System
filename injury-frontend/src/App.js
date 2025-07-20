import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import InjuryList from './components/InjuryList'; 
import InjuryForm from  './components/InjuryForm'; 
 
function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<InjuryList />} /> 
        <Route path="/add" element={<InjuryForm />} /> 
        <Route path="/edit/:id" element={<InjuryForm />} /> 
        <Route path="/search" element={<InjuryList/>}/>
      </Routes> 
    </Router> 
  ); 
} 
export default App;