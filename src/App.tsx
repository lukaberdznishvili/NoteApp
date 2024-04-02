import { BrowserRouter as Router, Route } from 'react-router-dom';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
// import EditComponent from './EditComponent';

function App(): JSX.Element {
  return (
    <Router>
      <Route path="/" exact={true} component={Note} />
      <Route path="/create" component={CreateNote} />
      {/* <Route path="/edit/:id" component={EditComponent} /> */}
    </Router>
  );
}

export default App;

