import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Support() {
  return (
    <div className="container">
      <h1>Support</h1>
      <p>This is the Support page.</p>
      <h2>Charging Station Assistance</h2>
      <p>
        Our dedicated support team is available to assist you with any issues or
        inquiries related to charging stations. Whether you need help
        troubleshooting a charging session, have questions about payment or
        billing, or require technical assistance, we're here to help.
      </p>
      <p>You can reach our support team through the following channels:</p>
      <ul>
        <li>
          <strong>Phone:</strong> Call our support hotline at{" "}
          <a href="tel:123456789">123-456-789</a> for immediate assistance.
        </li>
        <li>
          <strong>Email:</strong> Send us an email at{" "}
          <a href="mailto:support@example.com">support@example.com</a>
          and we'll get back to you as soon as possible.
        </li>
        <li>
          <strong>Live Chat:</strong> Chat with one of our support
          representatives in real-time through our website or mobile app during
          business hours.
        </li>
      </ul>
      <p>
        When contacting our support team, please provide detailed information
        about the issue or inquiry, including the charging station location, any
        error messages encountered, and any relevant account or payment
        information. This will help us assist you more efficiently.
      </p>
      <p>
        We strive to provide prompt and reliable support to ensure that your
        charging experience is seamless and hassle-free. We're committed to
        resolving any issues and addressing your concerns in a timely manner.
      </p>
    </div>
  );
}

export default Support;
