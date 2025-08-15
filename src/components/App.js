import React, { useState } from "react";
import "./../styles/App.css";
import Review from "./Review";

export default function App() {
  return (
    <section className="container">
      <main>
        <h1 id="review-heading">Our Reviews</h1>
        <Review />
      </main>
    </section>
  );
}
