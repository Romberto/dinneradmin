import { Link, Outlet, Route, Routes } from "react-router";
import home from "../src/assets/home.svg";
import { Admin } from "./components/page/Admin/Admin";
import { Menu } from "./components/page/Menu/Menu";
import { useEffect } from "react";
import { BASE_URL } from "./utils/const";



function App() {

  return (
    <>
      <header>
        <p>Logo</p>
        <Link to="/" className="justify-self-end">
          <img
            src={home}
            alt="дом - иконка возвращения домой"
            className="w-8"
          />
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="*"
          element={
            <div className="container">
              <p>path not fond</p>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
