import React from "react";
import testImage from "../../public/images/12.png";

function Card() {
  return (
    <>
      <div class="card">
        <img
          src="https://cdn.pixabay.com/photo/2021/06/22/14/55/girl-6356393_1280.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
