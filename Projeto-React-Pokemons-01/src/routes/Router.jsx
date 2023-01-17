import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalhesPage from "../components/frontend/pages/DetalhesPage";
import ErrorPage from "../components/frontend/pages/ErrorPage";
import HomePage from "../components/frontend/pages/HomePage";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/detalhes"} element={<DetalhesPage />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;