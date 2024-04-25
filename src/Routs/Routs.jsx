import Header from "../Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import "../App.scss";
import NotFound from "../Pages/NotFound";
import { useEffect } from "react";
import axios from "axios";

// const config = {
//   enabled: true,
//   checkInterval: 10,
// };

const Routs = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://snazzy-quokka-9eb30f.netlify.app/",
          {
            // Данные, которые вы отправляете обратно при обработке вебхука
            data: "Hello from React",
          }
        );
        console.log(response.data);
        response.data && window.location.reload(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      {/* <AutoReload  config={config} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routs;
