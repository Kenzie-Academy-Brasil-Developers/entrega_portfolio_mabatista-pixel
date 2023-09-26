import user from "../../data/user.js"
import styles from "./styles.module.css"
import bannerImg from "../../assets/banner-img.png"

export const BannerSection = () => {
    return (
        <section className="container">
            <div className={styles.flexbox}>
                <span className="label">{user}</span>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className="btn">Saiba mais</button>
            </div >
            <img className="banner-img" src={bannerImg} alt="Imagem Banner" />
        </section>
    )
}