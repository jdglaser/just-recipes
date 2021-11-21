import './styles/globals.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import RecipeDetailView from './RecipeDetailView';
import Header from './Header';
import RecipeList from './RecipeList';

function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Header>
              <Routes>
                <Route path="/" element={<RecipeList/>}/>
                <Route path="/recipe/:id" element={<RecipeDetailView />}/>
              </Routes>
            </Header>
          </Router>
      </div>
    </>
  )
}

export default App
