import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Homepage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}