import React from "react";

import "../../../styles/AboutFooterItem.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

export interface AboutFooterItemProps {
  id?: number;
  title: string;
  href: string;
  className: string;
}

const AboutFooterItem: React.FC<AboutFooterItemProps> = ({
  title,
  href,
  className,
}) => {
  return (
    <div className="footer__item">
      <h2>{title}</h2>
      <div className="icon__container">
        <a
          href={href}
          target="_blank"
          aria-label={className}
          rel="noreferrer"
          className={className}
        >
          {className === "facebook" && <FacebookIcon />}
          {className === "instagram" && <InstagramIcon />}
          {className === "google" && <GoogleIcon />}
        </a>
      </div>
    </div>
  );
};

export default AboutFooterItem;
