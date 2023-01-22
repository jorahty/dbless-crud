const { useState, useEffect } = React;

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

function fetchNotes(setNotes) {
  fetch('/api/note')
    .then(res => res.json())
    .then(data => setNotes(data));
}

async function postNote(note) {
  const res = await fetch('/api/note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note),
  });
  return res.json();
}

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  function handleChange(e) {
    const content = e.target.value;
    setNewNote({ content });
  }

  function handleClick() {
    postNote(newNote)
      .then(postedNote => {
        setNotes(notes.concat(postedNote));
      });
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.content}
          </li>
        ))}
      </ul>
      <footer>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          Post
        </button>
      </footer>
    </div>
  );
}
