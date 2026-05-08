// Esempio di utilizzo di un CSS Module.
//
// Importando il file ".module.css" come oggetto `styles`, possiamo
// applicare le sue regole con la sintassi `className={styles.nomeClasse}`.
// Le classi così applicate rimangono "scoped" al componente, evitando
// collisioni con altri stili globali (per esempio quelli di Bootstrap).
//
// Per combinare una classe del modulo con altre classi (globali o di
// Bootstrap) si usa un template literal, come nell'`<h1>` qui sotto.

import styles from "./HelloClasse154.module.css";

function HelloClasse154() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Hello Classe #154</h1>
        </div>
    );
}
export default HelloClasse154;
