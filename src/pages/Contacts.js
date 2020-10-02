import React from "react";
import Title from "../components/Title";

function Contacts() {
  const styles = {
    minHeight: "100vh",
    padding: "5px",
    marginTop: "55px",
    textAlign: "center",
    background: "lightblue",
  };

  return (
    <div>
      <main style={styles}>
        <Title title="Contact page" />
      </main>
    </div>
  );
}

export default Contacts;
