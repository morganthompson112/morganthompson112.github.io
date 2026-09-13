import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [showHeader, setShowHeader] = useState(true);

  const [messageSent, setMessageSent] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setMessageSent(true);
};

useEffect(() => {
  let lastScroll = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScroll) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    lastScroll = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
      <header className={showHeader ? "header" : "header hidden"}>
        <div className="logo">
          Mahmoud Ibrahim
        </div>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Mahmoud Ibrahim</h1>
        <p>Computer Engineering Student</p>
      </section>
      <section id="projects" className="projects">

  <h2>Featured Projects</h2>

  <div className="projects-grid">

  <div className="card">
    <a
  href="https://github.com/7ouda2/Java-Project-Banking-System"
  target="_blank"
>
  <img src="bank.webp" alt="Banking project" />
</a>
    <h3>Java Banking System</h3>
    <p>A Java project for managing bank accounts, deposits, withdrawals, and customer data.</p>
  </div>

  <div className="card">
    <a
  href="https://github.com/7ouda2/Little-Lemon-web-page-project"
  target="_blank"
>
  <img src="ll.jpg" alt="Restaurant website" />
</a>
    <h3>Little Lemon Web Page</h3>
    <p>A restaurant landing page project using HTML and CSS with clean layout and styling.</p>
  </div>

  <div className="card">
    <a
  href="https://github.com/7ouda2/Little-Lemon-web-page-project-v2"
  target="_blank"
>
  <img src="llv2.png" alt="Little Lemon version 2" />
</a>
    <h3>Little Lemon Web Page V2</h3>
    <p>An improved version of the Little Lemon website with better structure and design.</p>
  </div>

  <div className="card">
   <a
  href="https://github.com/7ouda2/little-lemon-js-project"
  target="_blank"
>
  <img src="llv3.png" alt="JavaScript project" />
</a>
    <h3>Little Lemon JS Project</h3>
    <p>A JavaScript project that adds interactivity and logic to the Little Lemon application.</p>
  </div>
<section id="contact" className="contact">

  <h2>Contact Me</h2>

<form className="contact-form" onSubmit={handleSubmit}>

    <input type="text" placeholder="Your Name" />

    <input type="email" placeholder="Your Email" />

    <select>
      <option>Freelance Project</option>
      <option>Job Opportunity</option>
      <option>Collaboration</option>
    </select>

    <textarea
      placeholder="Your Message"
      rows="6"
    ></textarea>

    <button type="submit">Submit</button>
{messageSent && (
  <p className="success-message">Message sent successfully thank you we will get back to you soon</p>
)}
  </form>

</section>
</div>
</section>
    </>
  );
}

export default App;