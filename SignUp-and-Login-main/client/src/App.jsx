import Home from "./Home";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Register
                text1={"Sign"}
                text2={"Up"}
                c1={true}
                c2={true}
                c3={true}
                c4={true}
                c5={false}
              />
            }></Route>
          <Route
            path="/login"
            element={
              <Register
                text1={"Log"}
                text2={"In"}
                c1={false}
                c2={true}
                c3={false}
                c4={true}
                c5={true}
              />
            }></Route>
          <Route path="/homepage" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
