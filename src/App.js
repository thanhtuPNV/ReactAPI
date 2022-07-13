import Layout from './layout/Layout';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ResList from './pages/ResList';
import Statistical from './pages/Statistical';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<ResList />} />
      <Route path="/Statistical" element={<Statistical />} />
      {/* <Route path="/edit/:id" element={<Edit />} />
      <Route path="/count" element={<Count />} /> */}


    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;