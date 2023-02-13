import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

//Router:페이지를 나누기 위한 공간
//BrowerRouter -> Routes -> Route
//Home:메인페이지 / Detail:상세페이지
//Detail페이지에 path경로를 /:id로 설정하여 해당 id페이지에 들어가도록 한다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
