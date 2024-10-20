import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex gap-3">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <Link to="/project">Project</Link>
      <Link to="/department">Department</Link>
    </nav>
  );
}
