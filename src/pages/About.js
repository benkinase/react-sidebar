import React from "react";
import Title from "../components/Title";

function About() {
  const styles = {
    minHeight: "100vh",
    padding: "5px",
    marginTop: "55px",
    textAlign: "center",
    background: "lightgreen",
  };
  return (
    <div>
      <main style={styles}>
        <Title title="About page" />
      </main>
    </div>
  );
}

export default About;
