import { useEffect, useState } from 'react'; 
import axios from 'axios'; 
export default function InjuryList() { 
const [injuries, setInjuries] = useState([]); 
const [searchTerm,setSearchTerm]=useState('');

useEffect(() => { 
axios.get('http://localhost:5000/api/injuries') 
.then(res => setInjuries(res.data)); 
}, []); 
useEffect(() => {
    fetchInjuries();
  }, []);

  const fetchInjuries = async () => {
    const res = await axios.get('http://localhost:5000/api/injuries');
    setInjuries(res.data);
  };

  const handleSearch = async (e) => {
    const q = e.target.value;
    setSearchTerm(q);

    if (q.trim() === '') {
      fetchInjuries(); // load all
    } else {
      const res = await axios.get(`http://localhost:5000/api/injuries/search?q=${q}`);
      setInjuries(res.data);
    }
  };

  
return ( 
<div className="app-container"> 
<h2>Injury List</h2> 
<input 
        type="text" 
        placeholder="Search by term, category, or field..." 
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {injuries.map(injury => (
          <li key={injury.id}>{injury.term} ({injury.category})</li>
        ))}
      </ul>
<ul> 
{injuries.map(injury => ( 
<li key={injury.id}>{injury.term} ({injury.category})</li> 
))} 
</ul>

</div> 
); 
} 
