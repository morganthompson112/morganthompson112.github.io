import "../css/Nav.css";

export default function Nav() {
  function handleClick(e, section) {
    //e.preventDefault();
    document.getElementById(section).scrollIntoView({behavior: "smooth"});
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#projects" onClick={e => {
            handleClick(e, "#projects");
          }}>Projects</a>
        </li>
        <li>
          <a href="#contactme" onClick={e => {
            handleClick(e, "#contactme");
          }}>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}