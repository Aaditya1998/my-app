import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Pricing() {
  return (
    <div className="container">
      <h1>Pricing</h1>
      <p>This is the Pricing page.</p>
      <h2>Electric Vehicle Charging Plans</h2>
      <p>
        Our pricing plans are designed to cater to the needs of electric vehicle
        owners. We offer flexible and affordable options to ensure that charging
        your electric vehicle is convenient and cost-effective.
      </p>
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Basic Plan</h3>
              <h4 class="card-subtitle">Free</h4>
              <ul class="list-group">
                <li class="list-group-item">
                  Access to public charging stations
                </li>
                <li class="list-group-item">Standard charging rates</li>
                <li class="list-group-item">Pay-as-you-go billing</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Premium Plan</h3>
              <h4 class="card-subtitle">$9.99/month</h4>
              <ul class="list-group">
                <li class="list-group-item">
                  Access to premium charging stations
                </li>
                <li class="list-group-item">Faster charging speeds</li>
                <li class="list-group-item">Discounted charging rates</li>
                <li class="list-group-item">Monthly billing</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Business Plan</h3>
              <h4 class="card-subtitle">Custom Pricing</h4>
              <ul class="list-group">
                <li class="list-group-item">
                  Tailored charging solutions for businesses
                </li>
                <li class="list-group-item">Dedicated charging stations</li>
                <li class="list-group-item">24/7 support</li>
                <li class="list-group-item">Consolidated billing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
