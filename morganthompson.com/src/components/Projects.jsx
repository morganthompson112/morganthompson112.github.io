import "../css/Projects.css";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "20px",
    margin: "0 auto",
    gap: "20px",
    maxWidth: "1000px",
    width: "90%"
  }

  return (
    <section id="projects" style={styles}>
      <h2 style={{
        gridColumn: "span 3",
        width: "min-content",
        margin: "0 auto"
      }}>Projects</h2>

      <ProjectCard link="https://morganthompson112.github.io/pinetreesoaps.com/" title="Pine Tree Soaps" shorturl="morganthompson112.github.io/pinetreesoaps.com">
      
      </ProjectCard>
      <ProjectCard>
        test
      </ProjectCard>
      <ProjectCard>
        test
      </ProjectCard>
    </section>
  );
}