import { Route, Routes } from 'react-router-dom';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
// import EditComponent from './EditComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Note />} />
      <Route path="/create" element={<CreateNote />} />
      {/* <Route path="/edit/:id" component={EditComponent} /> */}
    </Routes>
  );
}

export default App;

