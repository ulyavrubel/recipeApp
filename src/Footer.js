import React from "react";

function Footer(props) {
  return (
    <footer>
      <p>
        <a href={props.href} className="text-primary" target="_blank">
          Recipe source
        </a>
      </p>
      <p>
        <a
          href="https://www.themealdb.com/api.php"
          className="text-secondary"
          target="_blank"
        >
          API source
        </a>
      </p>
    </footer>
  );
}

export default Footer;
