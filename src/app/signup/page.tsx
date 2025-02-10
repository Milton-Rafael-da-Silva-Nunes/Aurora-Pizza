import Image from "next/image";
import Link from "next/link";
import logoPrincipal from "../../../public/logo.svg";
import styles from "../page.module.scss";
import { redirect } from "next/navigation";
import { api } from "@/services/api";

export default function Signup() {

    async function handleResgistro(formData: FormData) {
        "use server"

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        if (name === "" || email === "" || password === "") {
            return;
        }

        try {
            await api.post("/user", {
                name,
                email,
                password
            });
        } catch (error) {
            console.log("Erro ao cadastrar: " + error);
        }

        redirect("/");
    }

    return (
        <>
            <div className={styles.containerCentro}>
                <Image
                    src={logoPrincipal}
                    alt="Logo Pizzaria" />

                <section className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form action={handleResgistro}>
                        <input
                            type="name"
                            required
                            name="name"
                            placeholder="Digite seu nome"
                            className={styles.input} />

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
                            Cadastrar
                        </button>
                    </form>

                    <Link href="/" className={styles.signup}>
                        Já possui conta? faça o login
                    </Link>
                </section>
            </div>
        </>
    );
}