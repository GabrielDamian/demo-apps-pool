import styles from '../styles/Layout.module.css';
import Link from 'next/link';

//Layout wrap the entire page component
const Layout = ({children}) => {
    return (
        <div className={styles.layout_container}>
            <div className={styles.layout_menu}>
                <Link href="/">
                    <button className={styles.menu_btn}>
                        Intro
                    </button>
                </Link>
                <Link href="/articleIndex">
                    <button className={styles.menu_btn}>
                        Articles
                    </button>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default Layout
