import { NavLink, Route, Routes } from 'react-router-dom';
import { FindAll } from "./Component2/FindAll";
import { FindById } from "./Component2/FindById";
import { Update } from "./Component2/Update";
import { Delete } from "./Component2/DeleteFile";
import { Employee } from "./Component2/Employee";


function App() {
  return (
    <div>
       <nav className="nav-bar">
         <NavLink to={"/"} end className="nav-link">Add</NavLink>
          <span className="separator">|</span>
          <NavLink to={"/FindAll"} className="nav-link">FindAll</NavLink>
          <span className="separator">|</span>
         <NavLink to={"/FindOne"} className="nav-link">FindById</NavLink>
         <span className="separator">|</span>
         <NavLink to={"/Update"} className="nav-link">Update detail</NavLink>
         <span className="separator">|</span>
          <NavLink to={"/deletefile"} className="nav-link">Delete Details</NavLink>
</nav>


      <Routes>
        <Route path="/" element={<Employee/>} />
        <Route path="/FindAll" element={<FindAll />} />
         <Route path="/Findone" element={<FindById />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/deletefile" element={<Delete />} />
      </Routes>

     <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f8f9fa;
        }

        .nav-bar {
          background-color: #ffffff;
          border: 2px solid #ccc;
          border-radius: 10px;
          padding: 15px 20px;
          margin: 20px auto;
          max-width: 900px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: bold;
          padding: 8px 16px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background-color: #0ac9ebff;
          color: white;
        }

        .nav-link.active {
          background-color: #0ac5cfff;
          color: white;
        }

        .separator {
          color: #999;
        }
      `}</style>

    </div>
  );
}

export default App;
