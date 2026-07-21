import React from "react";
import styles from "./terms.module.css";

const TermsConditions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Terms & Conditions</h1>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using NeatnClean&apos;s services, you agree to comply
            with these Terms & Conditions. If you do not agree, please refrain
            from using our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Offered</h2>
          <p>
            NeatnClean provides professional laundry and dry-cleaning services,
            including pickup and delivery. Service availability may vary
            depending on your location.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. User Responsibilities</h2>

          <div className={styles.subSection}>
            <h3>Eligibility</h3>
            <p>
              Users must be at least 18 years old to use our services.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3>Accurate Information</h3>
            <p>
              You agree to provide true, accurate, and up-to-date information
              when registering or placing orders.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3>Compliance</h3>
            <p>
              You agree not to misuse our services or engage in any unlawful or
              disruptive activities.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. Orders and Payments</h2>

          <div className={styles.subSection}>
            <h3>Booking</h3>
            <p>
              Orders can be placed through our website, mobile app, or customer
              support.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3>Pricing</h3>
            <p>
              All prices listed on our platform are subject to change without
              prior notice.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3>Payment</h3>
            <p>
              Payments must be made at the time of placing the order. We accept
              credit/debit cards, UPI, net banking, and other supported payment
              methods.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Cancellation and Refunds</h2>

          <div className={styles.subSection}>
            <h3>Cancellation</h3>
            <p>
              Orders may be canceled within the permitted timeframe before the
              scheduled pickup. Please contact our support team for assistance.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3>Refunds</h3>
            <p>
              Eligible refunds will be processed within 5–7 business days to
              the original payment method.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            NeatnClean is not responsible for damage or loss of garments caused
            by manufacturing defects, improper labeling, or personal items left
            inside clothing. Any liability, if applicable, shall be limited to
            the service charges paid.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Modifications</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time.
            Continued use of our services constitutes acceptance of the updated
            Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;