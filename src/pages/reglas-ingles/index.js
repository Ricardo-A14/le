
import styles from './ReglasIngles.module.css';

const EnglishRules = () => {
    return (
        <div className={styles.english_rules}>

            <h1>Reglas del ingles.</h1>

            <section className={styles.verb_rules}>

                <div className={`${styles.verbs_container} ${styles.regular_verbs}`}>

                    <h2>Verbos regulares</h2>

                    <p>
                        Son aquellos que siguen un patrón predecible en su conjugación en tiempos pasados, generalmente añadiendo -ed al infinitivo. Ejemplos:
                    </p>
                    <ul>
                        <li>
                            <span>-</span> Walk Caminar Walk<span>ed</span> Caminó
                        </li>
                        <li>
                            <span>-</span> Talk Hablar talk<span>ed</span> Habló
                        </li>

                    </ul>

                </div>

                <div className={styles.verbs_container}>
                    <h2>Verbos irregulares</h2>

                </div>

            </section>
        </div>
    )
}

export default EnglishRules;
