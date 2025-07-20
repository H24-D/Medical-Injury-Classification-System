
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom'; 
 
export default function InjuryForm() { 
  const [term, setTerm] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [field, setField] = useState(''); 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
 
  useEffect(() => { 
    if (id) { 
      axios.get(`http://localhost:5000/api/injuries/${id}`) 
        .then(res => { 
          const injury = res.data; 
          setTerm(injury.term); 
          setCategory(injury.category); 
          setField(injury.field); 
        }); 
    } 
  }, [id]); 
 
  const handleSubmit = async(e) => { 
    e.preventDefault(); 
    const data = { term, category, field }; 
 
    if (id) { 
      await axios.put(`http://localhost:5000/api/injuries/${id}`, data); 
    } else { 
      await axios.post('http://localhost:5000/api/injuries', data); 
    } 
 
    navigate('/'); 
  }; 
 
  return ( 
    <div className="app-container">
    <form onSubmit={handleSubmit}> 
      <h2>{id ? 'Edit Injury' : 'Add New Injury'}</h2> 
      <div className="form-group">
      <label> 
        Term: <input value={term} onChange={e => setTerm(e.target.value)} required /> 
      </label><br/> 
      <label> 
        Category: <input value={category} onChange={e => setCategory(e.target.value)} 
required /> 
      </label><br/> 
      <label> 
        Field: <input value={field} onChange={e => setField(e.target.value)} required /> 
      </label><br/> 
      </div>
      <button type="submit">Save</button> 
    </form> 
    </div>
  ); 
}

