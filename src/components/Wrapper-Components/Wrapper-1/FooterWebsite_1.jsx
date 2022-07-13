import { Link } from "react-router-dom";

const FooterWebsite = () => {
  return (
    <div>
      <h3>Newton Timetables v0.1</h3>
      <div className="links">
        <ul>
          <li>
            <Link to="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <a>Settings</a>
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <h3>All Rights Reserved &copy; 2022 The Newton Sixth Form School</h3>
          <br />
          <h3>
            Made With ❤️ by
            <Link to="/Developers">Developers</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FooterWebsite;