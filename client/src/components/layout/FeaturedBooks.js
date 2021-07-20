import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getByIsFeature from "../../utils/getByIsFeature";

const FeaturedBooks = (e) => {
  const dots = Array.from(document.querySelectorAll(".front-page--dot"));
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [renderFeatures, setRenderFeatures] = useState([]);

  //TODO: Make this dynamic
  const features1 = featuredBooks.slice(0, 3);
  const features2 = featuredBooks.slice(3, 6);
  const features3 = featuredBooks.slice(6, 9);
  const groupedFeatures = [features1, features2, features3];

  useEffect(() => {
    getByIsFeature(setFeaturedBooks);
  }, []);

  // Click handler for rendered books
  dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      let clickedDotIndex;

      for (let index = 0; index < dots.length; index++) {
        if (dots[index] === dot) {
          clickedDotIndex = index;
        }
      }
      setRenderFeatures(groupedFeatures[clickedDotIndex]);
      console.log(groupedFeatures[clickedDotIndex]);
    });
  });

  return (
    <section className="featured-container">
      <div className="book-grid--front-page">
        {renderFeatures.map((feature) => {
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
        })}
      </div>
      <div className="featured--dot-container">
        <button className="front-page--dot"></button>
        <button className="front-page--dot"></button>
        <button className="front-page--dot"></button>
      </div>
    </section>
  );
};
export default FeaturedBooks;
