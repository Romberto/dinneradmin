import { Link, Route, Routes } from "react-router-dom";
import { Admin } from "./components/page/Admin/Admin";
import { ElementsList } from "./components/UI/ElementsList/ElementList";
import home from '../src/assets/home.svg'
function App() {
  return (
    <>
      <header>
        <p>Logo</p>
        <Link to="/admin" className="justify-self-end">
          <img src={home} alt="дом - иконка возвращения домой" className="w-8"/>
        </Link>
      </header>
      <Routes>
        <Route path="admin/" element={<Admin />}></Route>
        <Route path="category/" element={<ElementsList queryType={'category'}/>}></Route>
        <Route path="*" element={<p>not fond path</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
