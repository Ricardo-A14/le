
import { useContext } from "react";
import AppContext from "../../Context";

import styles from './Header.module.css';
import Link from 'next/link';


const Header = () => {

  const { ActiveNote, wordCounter, HandlerMobileMenu } = useContext(AppContext);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_left}>
          <div
            className={styles.nav_menu}
            onClick={() => HandlerMobileMenu()}
          >
            <div className={styles.d}></div>
            <div className={styles.d}></div>
            <div className={styles.d}></div>
          </div>

          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/reglas-generales/">Reglas</Link>
            </li>
            <li>
              <Link href="/reglas-ingles/">Reglas ingles</Link>
            </li>
            <li>
              <Link href="/palabras/">Palabras</Link>
            </li>
          </ul>
        </div>

        <div className={styles.nav_right}>
          <div className={styles.notes} onClick={() => ActiveNote()}>Notas</div>
          <div className={styles.learned_words}>
            <p>Palabras: </p>
            <span>{wordCounter.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
