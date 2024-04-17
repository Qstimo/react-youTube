import Header from "../Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import "../App.scss";
import NotFound from "../Pages/NotFound";
import AutoReload from "../plugins/AutoReload/AutoReload";

const config = {
  Enabled: true,
  CheckInterval: 300,
};

const Routs: React.FC = () => {
  return (
    <div className="App">
      <AutoReload  config={config} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routs;
