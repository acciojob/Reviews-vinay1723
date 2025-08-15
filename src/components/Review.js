import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default function Review() {
  const [reviewIndex, setReviewIndex] = useState(0);
  function handleRight(e) {
    if (reviewIndex < reviews.length - 1) {
      setReviewIndex((prev) => prev + 1);
    }
  }

  function handleLeft(e) {
    if (reviewIndex > 0) {
      setReviewIndex((prev) => prev - 1);
    }
  }

  function randomIndex() {
    let index = Math.floor(Math.random() * reviews.length);
    setReviewIndex(index);
  }
  return (
    <div>
      <div className="review">
        <div id="profile">
          <img
            width={"50px"}
            height={"50px"}
            className="person-img"
            src={reviews[reviewIndex].image}
          />
          <div>
            <p className="author" id={`author-${reviews[reviewIndex].id}`}>
              {reviews[reviewIndex].name}
            </p>
            <p className="job">{reviews[reviewIndex].job}</p>
          </div>
        </div>

        <p className="info">{reviews[reviewIndex].text}</p>
        <div id="buttons">
          <button className="prev-btn" onClick={handleLeft}>
            &larr;
          </button>
          <button className="next-btn" onClick={handleRight}>
            &rarr;
          </button>
          <button className="random-btn" onClick={randomIndex}>
            Surprise me
          </button>
        </div>
      </div>
    </div>
  );
}
