import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <h2>Electric Vehicles</h2>
      <p>
        Discover the future of transportation with electric vehicles. Electric
        vehicles are powered by electricity and offer several advantages,
        including:
      </p>
      <ul>
        <li>
          Zero emissions, reducing air pollution and greenhouse gas emissions
        </li>
        <li>Lower operating costs compared to traditional gasoline vehicles</li>
        <li>Quiet and smooth driving experience</li>
        <li>Reduced dependence on fossil fuels</li>
      </ul>
      <p>
        Electric vehicles are becoming increasingly popular, with a wide range
        of models available to suit various needs and preferences. Whether
        you're looking for a compact electric car for city driving or a spacious
        electric SUV for family trips, there's an electric vehicle for you.
      </p>

      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img
              src="https://i.ibb.co/p2JNrCB/pexels-auto-records-10549262.jpg"
              class="card-img-top"
              alt="Tesla"
              height="300"
              width="400"
            />
            <div class="card-body" />
            <h5 class="card-title">Tesla Electric Cars</h5>
            <p class="card-text">
              Tesla is a leading manufacturer of electric vehicles known for
              their innovative technology, performance, and range. They offer a
              range of electric car models, including the popular Tesla Model S,
              Model 3, Model X, and Model Y.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img
            src="https://i.ibb.co/zVLZ7r3/ola-electric-scooter-8.jpg"
            class="card-img-top"
            alt="Ola Electric Scooter"
            height="300"
            width="400"
          />
          <div class="card-body">
            <h5 class="card-title">Ola Electric Scooter</h5>
            <p class="card-text">
              Ola is a renowned brand in the electric mobility space. They have
              recently introduced their Ola Electric Scooter, which offers a
              convenient and eco-friendly mode of transportation for short
              commutes and urban mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
