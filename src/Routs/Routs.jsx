import Header from '../Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import '../App.scss';

function Routs() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Routs;
