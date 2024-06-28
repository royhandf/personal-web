import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/royhandf" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/royhandf_/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            key={index}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
