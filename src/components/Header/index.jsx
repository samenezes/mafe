import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>Texto Aleatorio</span>
            <nav>
               <h2> Amo Framework</h2>
            </nav>
        </header>
    )    
}

export default Header