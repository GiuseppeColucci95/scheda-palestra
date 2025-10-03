import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import WorkoutPage from "./pages/WorkoutPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Homepage}></Route>
            <Route path='/workout/:id' Component={WorkoutPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}