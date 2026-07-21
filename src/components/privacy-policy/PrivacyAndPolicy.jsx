import React from "react";
import styles from "./privacy.module.css"

const PrivacyAndPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <h1>Privacy Policy – EcoRinse</h1>
      <p>
        <strong>Effective Date:</strong> 18 Jul 2026
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect certain information when you interact with our website,
          app, or services:
        </p>

        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            address, and payment details.
          </li>
          <li>
            <strong>Usage Data:</strong> Device type, browser, IP address, and
            user interaction data.
          </li>
          <li>
            <strong>Cookies:</strong> Used to improve user experience. You can
            disable them via your browser settings.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            To process laundry service orders including pickup and delivery.
          </li>
          <li>
            To communicate order updates, invoices, and promotional offers (if
            opted in).
          </li>
          <li>To enhance website performance and service efficiency.</li>
          <li>To comply with legal obligations or prevent fraud.</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Sharing and Disclosure</h2>
        <p>We do not sell your data. We may share limited information with:</p>

        <ul>
          <li>Delivery partners for logistics coordination.</li>
          <li>Payment processors for secure transactions.</li>
          <li>
            IT and cloud service providers for website and database management.
          </li>
          <li>Law enforcement or regulatory agencies when required by law.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We use secure servers, encrypted data storage, and limited access
          controls to protect your information. However, no system is completely
          immune to risks.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You may request:</p>

        <ul>
          <li>Access to the data we hold about you.</li>
          <li>Corrections to your information.</li>
          <li>
            Deletion of your account or data (subject to applicable
            regulations).
          </li>
          <li>To opt out of promotional communications at any time.</li>
        </ul>

        <p>
          Email us at{" "}
          <a href="mailto:ecorinselaundry@gmail.com">
            ecorinselaundry@gmail.com
          </a>{" "}
          to exercise your rights.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Links</h2>
        <p>
          Our website or app may link to external websites. We are not
          responsible for their privacy practices. Please review their policies
          independently.
        </p>
      </section>

      <section>
        <h2>7. Children's Privacy</h2>
        <p>
          Eco Rinse does not knowingly collect personal data from individuals
          under the age of 18. If we become aware of such data, we will delete
          it immediately.
        </p>
      </section>

      <section>
        <h2>8. Policy Updates</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with a new effective date.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ecorinselaundry@gmail.com">
            ecorinselaundry@gmail.com
          </a>
        </p>

        <p>
          <strong>Address:</strong>
          <br />
          Ground Floor of KVG Complex, No. 9 situated at 3rd main
          <br />
          Raghavendra Circle , Ramamurthy Nagar
          <br />T C Palya Main Road, Bangalore, India, 560016
        </p>

        <p>
          <strong>Phone:</strong> <a href="tel:+919900388956">+91 9900388956</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyAndPolicy;
