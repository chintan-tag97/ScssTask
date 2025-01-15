import React from "react";
import "./Scssfile.scss";
import "./Color.scss";
import "./variable.scss";
import "./nested.scss";

function Scssfile() {
  return (
    <div>
      <div className="container">
        <h1>Welcome to Styled Component!</h1>
        <p>This is an example of SCSS in action.</p>
      </div>

      <div className="main">
        <h1>Hello World</h1>

        <p>This is a paragraph.</p>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">SASS</a>
          </li>
        </ul>
      </nav>

{/* 1.create a color.scss file and declared some root colors in that and try use that in your component scss file (using var())
 */}
      <div className="color">
        <h1>Welcome to React with SCSS</h1>
        <p>Scss is a syntactically awesome style sheets</p>
        <button className="button">Click Me</button>
      </div>
{/* 2.create a variable.scss file and declared some variables in that and try use that in your component scss file (using @use)
 */}
 {/* 4. create example of hover-effect on any element using scss */}
      <div className="variable">
        <h1>Using SCSS Variables</h1>
        <button className="button">Hover Over Me</button>
      </div>
{/* 3. create example of how we can use nested scss
 */}
      <div className="main1">
        <div className="main2">
          <h1>Nested scss</h1>
          <h2 className="main3">NScss</h2>
        </div>
        <div className="main4">
          <p>This is a nested content example.</p>
        </div>
      </div>
      
    </div>


  );
}


export default Scssfile;
