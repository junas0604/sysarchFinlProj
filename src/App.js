import Home from "./components/Home"
import Login from "./components/Login"
import Registration from "./components/Registration"
import JobOppor from "./components/JobOppor"
import pageTwo from "./components/pageTwo"



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (



    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Home" element={<Home />} />
          <Route path="pageTwo" element={<pageTwo />} />
          <Route path="/JobOppor" element={<JobOppor />} />

          {/*<Route path="/Profile" element={<Profile />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;