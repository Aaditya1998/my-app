import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Documentation() {
  return (
    <div className="container">
      <h1>Documentation</h1>
      <p>This is the Documentation page.</p>
      <h2>Charging Your Electric Vehicle</h2>
      <p>
        Charging your electric vehicle is a simple and straightforward process.
        Follow the steps below to ensure a successful charging session:
      </p>
      <ol>
        <li>
          Locate a Charging Station: Use our website or mobile app to find
          nearby charging stations. You can also plan your route in advance to
          include charging stops if needed.
        </li>
        <li>
          Connect Your Vehicle: Once you arrive at the charging station, park
          your vehicle in the designated spot and connect the charging cable to
          your vehicle's charging port.
        </li>
        <li>
          Start the Charging Session: Depending on the charging station, you may
          need to use an access card or mobile app to initiate the charging
          session. Follow the instructions provided at the charging station.
        </li>
        <li>
          Monitor the Charging Progress: Most charging stations provide
          real-time updates on the charging progress. You can check the charging
          status on the charging station display or through the mobile app.
        </li>
        <li>
          Complete the Charging Session: When your vehicle reaches the desired
          charge level or when you're ready to continue your journey, simply
          disconnect the charging cable from your vehicle.
        </li>
      </ol>
      <p>
        It's important to note that charging times can vary depending on factors
        such as the battery size, charging rate, and current battery level.
        Refer to your vehicle's manual or manufacturer's guidelines for specific
        charging recommendations.
      </p>
      <p>
        If you encounter any issues or have questions about charging your
        electric vehicle, please don't hesitate to reach out to our support team
        for assistance.
      </p>
    </div>
  );
}

export default Documentation;
