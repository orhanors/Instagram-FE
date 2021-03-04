import React, { useState } from "react";
import "./feed.scss";
import Stories from "../stories/Stories";
import { Carousel } from "react-bootstrap";

export default function Feed() {
  const [marginLeft, setMarginLeft] = useState(0);

  return (
    <div>
      <div className="container-feed d-flex align-items-center my-4 border-3">
        {/* <Carousel>
                <Carousel.Item className="d-flex carousel ">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <Stories key={n} />)}
                </Carousel.Item>
                <Carousel.Item className="d-flex carousel ">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <Stories key={n} />)}
                </Carousel.Item>
            </Carousel> */}

        <div className="slider mb-4 py-2">
          <button
            className="stories-prev"
            onClick={() => setMarginLeft(marginLeft + 60)}
          >
            <i class="fas fa-chevron-circle-left myIc"></i>
          </button>
          <button
            className="stories-next"
            onClick={() => setMarginLeft(marginLeft - 60)}
          >
            <i class="fas fa-chevron-circle-right myIc"></i>
          </button>
          <div
            className="slide-container"
            style={{ width: "300%", marginLeft: `${marginLeft}%` }}
          >
            <div className="slide mr-1">
              {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                <div className="story">
                  {" "}
                  <Stories key={n} />{" "}
                </div>
              ))}
            </div>
            <div className="slide mr-1">
              {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                <div className="story">
                  {" "}
                  <Stories key={n} />{" "}
                </div>
              ))}
            </div>
            <div className="slide mr-1">
              {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                <div className="story">
                  {" "}
                  <Stories key={n} />{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
