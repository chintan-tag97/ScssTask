import React from "react";
import "./testdemo.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function TestDemo() {
  return (
    <div>
      <div className="background">
        <header className="navbar-container">
          <div className="navbar">
            <div className="navbar-brand">
              <a href="#" className="brand">
                <span className="brand-bold">TEST</span>DEMO
              </a>
            </div>
            <nav className="navbar-menu">
              <ul className="menu-items">
                <li>
                  <a href="#" className="menu-link">
                    Home
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="menu-link dropdown-toggle">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
                        about
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        about
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="auth-buttons">
                <a href="#" className="menu-link">
                  Log In
                </a>
                <a href="#" className="menu-link">
                  Register
                </a>
                <a href="#" className="btn btn-test">
                  + Test
                </a>
              </div>
            </nav>
          </div>
        </header>

        <div className="hero-section text-center">
          <h1>Largest Classifieds In The World</h1>
          <p>You can buy, sell anything you want!</p>
        </div>

        <div className="search-bar">
          <form className="form-inline justify-content-center">
            <input
              type="text"
              className="form-control mr-2"
              placeholder="What are you looking for?"
            />
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Location"
            />
            <select className="form-control mr-2">
              <option>All Categories</option>
              <option>react</option>
              <option>react</option>
            </select>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mt-5">
     
          <div className="row text-center mb-4 categories">
            {[
              { name: "Real Estate", count: 3921 },
              { name: "Books & Magazines", count: 398 },
              { name: "Furniture", count: 1229 },
              { name: "Electronics", count: 32891 },
              { name: "Cars & Vehicles", count: 29221 },
              { name: "Other", count: 219 },
            ].map((category, index) => (
              <div className="col-6 col-md-4 col-lg-2 mb-3" key={index}>
                <div className="category-item">
                  <div className=""></div>
                  <p>{category.name}</p>
                  <span className="count">{category.count}</span>
                </div>
              </div>
            ))}
          </div>
    </div>
    </div>
    
  );
}

export default TestDemo;
