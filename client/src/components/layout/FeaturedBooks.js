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

  // change styling of dot, on click
  function removeIsSelected() {
    dots.forEach((dot) => {
      if (dot.hasAttributes("is-selected--dot")) {
        dot.classList.remove("is-selected--dot");
      }
    });
  }
  // Click handler for rendered books
  dots.forEach((dot) => {
    if (renderFeatures.length == []) {
      setRenderFeatures(features1);
    }
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      removeIsSelected();
      let clickedDotIndex;

      for (let index = 0; index < dots.length; index++) {
        if (dots[index] === dot) {
          clickedDotIndex = index;
          dot.classList.add("is-selected--dot");
        }
      }
      setRenderFeatures(groupedFeatures[clickedDotIndex]);
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
                    className="book-card--cover featured--book-cover"
                    data-book={feature._id}
                    alt="book cover"
                    src={feature.img}
                  />
                  <p className="book-author">by {feature.author}</p>
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
