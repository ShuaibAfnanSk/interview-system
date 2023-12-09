import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { useContext } from "react";
import { Context } from "./context/Context";
import Question from "./pages/Question";
import Test from "./pages/Test";
import Finder from "./pages/Finder";
import Feedback from "./pages/Feedback";

function App() {

  const { user } = useContext(Context);

  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question" element={user ? <Question /> : <Login />} />
          <Route path="/finder" element={<Finder />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
