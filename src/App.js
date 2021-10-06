import { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
import NoteList from './component/Notelist';
import Search from './component/Search'
import Header from './component/Header'

const App = () => {
  const [notes, setNotes] = useState([
   {
     id: nanoid(),
     text: 'First Name 1',
     date: '1/1/2015',
   },
   {
    id: nanoid(),
    text: 'First Name 2',
    date: '1/1/2015',
  },
  {
    id: nanoid(),
    text: 'First Name 3',
    date: '1/1/2015',
  }
  ]);

  const [searchText, setSearchText] = useState('')
  const [darkMode , setDarkMode] = useState(false)
  const deleteNote = (id) => {
    const  newNotes = notes.filter((note) => note.id  !== id);
    setNotes(newNotes);

  }

  useEffect(() => {
    const saveNotes = 
    JSON.parse(localStorage.getItem('react-note'))
    if(saveNotes) {
      setNotes(saveNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-note',
    JSON.stringify(notes));
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  } 

  

  return <div className={`${darkMode && 'dark-mode'}`}>
  <div className="container">
      <Header handleToggleMode = {setDarkMode} />
      <Search handleSearch={setSearchText}/>
      <NoteList notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
       handleAddNote = {addNote}
       handleDeleteNote = {deleteNote}/>
    </div>
    </div>
}



export default App ; 
