import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getByIsFeature from "../../utils/getByIsFeature";

const FeaturedBooks = () => {
  const dots = Array.from(document.querySelectorAll(".front-page--dot"));
  const [featuredBooks, setFeaturedBooks] = useState([]);

  //TODO: find better way to implement with react
  const features1 = featuredBooks.slice(0, 3);
  const features2 = featuredBooks.slice(3, 6);
  const features3 = featuredBooks.slice(6, 9);
  const showFeatures = [features1, features2, features3];
  console.log(showFeatures);

  useEffect(() => {
    getByIsFeature(setFeaturedBooks);
  }, []);

  //TODO: make dynamic and dry
  dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      let clickedDotIndex;

      for (let index = 0; index < dots.length; index++) {
        if (dots[index] === dot) {
          clickedDotIndex = index;
        }
      }
      console.log(clickedDotIndex);
    });
  });
  function featuresShowing() {}

  return (
    <section className="featured-container">
      <div className="book-grid--front-page">
        {/* {featuredBooks.map((feature) => {
          return (
            <div className="book-card-container">
              <Link
                to={`/books/${feature._id}`}
                data-id={feature._id}
                key={feature._id}
              >
                <div className="book-card--cover-container">
                  <img
                    className="book-card--cover"
                    data-book={feature._id}
                    alt="book cover"
                    src={feature.img}
                  />
                </div>
              </Link>
            </div>
          );
        })} */}
      </div>
      <div className="featured--dot-container">
        <button onClick={featuresShowing} className="front-page--dot"></button>
        <button onClick={featuresShowing} className="front-page--dot"></button>
        <button onClick={featuresShowing} className="front-page--dot"></button>
      </div>
    </section>
  );
};
export default FeaturedBooks;
