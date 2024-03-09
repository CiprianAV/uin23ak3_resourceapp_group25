import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <div>
        <Route path="/html">
        <Resources category="HTML" />
      </Route>
      <Route path="/css">
        <Resources category="CSS" />
      </Route>
      <Route path="/javascript">
        <Resources category="JavaScript" />
      </Route>
      <Route path="/react">
        <Resources category="React" />
      </Route>
      <Route path="/sanity">
        <Resources category="Sanity and headless CMS" />
      </Route>
      </div>
    </Router>
  );
}

export default App;