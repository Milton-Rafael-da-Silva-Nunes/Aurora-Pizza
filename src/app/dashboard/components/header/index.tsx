import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LogOutIcon } from 'lucide-react';

const logoImg = "/logo.svg";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerConteudo}>
                <Link href="/dashboard">
                    <Image
                        src={logoImg}
                        alt="Logo Pizzaria"
                        width={190}
                        height={60}
                        priority={true}
                        quality={100}
                    />
                </Link>

                <nav>
                    <Link href="/dashboard/categoria">Categoria</Link>
                    <Link href="/dashboard/produto">Produto</Link>

                    <form>
                        <button type="submit">
                            <LogOutIcon size={24} color="#fff" />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
}