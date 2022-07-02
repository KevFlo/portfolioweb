import React from "react";
import styles from "../../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={styles.footer.bar}>
        <div className={styles.footer.content}>
          <p className={styles.footer.p}>
            Copyright &copy; kevinflores.net 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;