import styles from "./page.module.scss";
import logoPrincipal from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <>

      <div className={styles.containerCentro}>
        <Image
          src={logoPrincipal}
          alt="Logo Pizzaria" />

        <section className={styles.login}>
          <form>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email"
              className={styles.input} />

            <input
              type="password"
              required
              name="password"
              placeholder="Sua senha"
              className={styles.input} />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>

          <Link href="/signup" className={styles.signup}>
            Registrar minha empresa
          </Link>
        </section>
      </div>

    </>
  );
}