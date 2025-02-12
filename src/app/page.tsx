import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import logoImg from "../../public/logo.svg";
import styles from "./page.module.scss";

export default function App() {


  async function handleLogar(form: FormData) {
    "use server"

    const name = form.get("name");
    const email = form.get("email");

    if (name === "" && email === "") {
      return;
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCentro}>
        <Image
          alt="Logo Pizzaria"
          src={logoImg}
        />

        <section className={styles.login}>
          <h1>Faça seu login</h1>
          <form action={handleLogar}>
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