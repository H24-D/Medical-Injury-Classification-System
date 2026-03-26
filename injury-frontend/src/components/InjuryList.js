import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'https://injury-backend-kwmv.onrender.com';

export default function InjuryList() {
  const [injuries, setInjuries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchInjuries();
  }, []);

  const fetchInjuries = async () => {
    try {
      const res = await axios.get(`${API}/api/injuries`);
      setInjuries(res.data);
    } catch (err) {
      console.error('Failed to fetch injuries:', err);
    }
  };

  const handleSearch = async (e) => {
    const q = e.target.value;
    setSearchTerm(q);

    try {
      if (q.trim() === '') {
        fetchInjuries();
      } else {
        const res = await axios.get(`${API}/api/injuries/search?q=${q}`);
        setInjuries(res.data);
      }
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this injury?')) return;
    try {
      await axios.delete(`${API}/api/injuries/${id}`);
      setInjuries(injuries.filter((injury) => injury.id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <h2>Injury Dictionary</h2>

      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by term, category, or field..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-btn" onClick={() => navigate('/add')}>
          + Add New
        </button>
      </div>

      {injuries.length === 0 ? (
        <p className="empty-msg">No injuries found.</p>
      ) : (
        <ul>
          {injuries.map((injury) => (
            <li key={injury.id}>
              <div className="injury-info">
                <span className="injury-term">{injury.term}</span>
                <span className="injury-meta">
                  {injury.category} &mdash; {injury.field}
                </span>
              </div>
              <div className="injury-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${injury.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(injury.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
