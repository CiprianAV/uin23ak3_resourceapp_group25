import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <div>
        <Route path="/html">
          <Resources category="html" />
        </Route>
        <Route path="/css">
          <Resources category="css" />
        </Route>
        <Route path="/javascript">
          <Resources category="javascript" />
        </Route>
        <Route path="/react">
          <Resources category="react" />
        </Route>
        <Route path="/sanity">
          <Resources category="sanity" />
        </Route>
      </div>
    </Router>
  );
}

export default App;