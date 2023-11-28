import { useContext } from "react";

import Link from "next/link";

import styles from "./MobileMenu.module.css";

import AppContext from "../../Context";

const MobileMenu = () => {
  const { HandlerMobileMenu } = useContext(AppContext);

  return (
    <aside className={styles.mobile_menu}>
      <ul>
        <li>
          <Link href="/" onClick={() => HandlerMobileMenu()}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/reglas-generales/" onClick={() => HandlerMobileMenu()}>
            Reglas
          </Link>
        </li>
        <li>
          <Link href="/reglas-ingles" onClick={() => HandlerMobileMenu()}>
            Reglas inglés
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MobileMenu;
