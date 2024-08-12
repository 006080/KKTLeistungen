import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/history")}>History</li>
          <li onClick={() => handleNavigation("/partner")}>Partner</li>
          <li onClick={() => handleNavigation("/leistungen")}>Leistungen</li>
          <li onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;