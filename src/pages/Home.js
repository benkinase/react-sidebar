import React from "react";
import Title from "../components/Title";

function Home() {
  const styles = {
    minHeight: "100vh",
    padding: "5px",
    marginTop: "55px",
    textAlign: "center",
    background: "azure",
  };
  return (
    <div>
      <main style={styles}>
        <Title title="Custom react Sidebar" />
      </main>
    </div>
  );
}

export default Home;
