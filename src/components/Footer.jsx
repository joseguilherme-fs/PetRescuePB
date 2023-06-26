export default function Footer (props) {
    return (
        <>
        <footer>
            <article>
            <h2 className="titulo2"> Sobre nós </h2>
            <p className="descriçao">
                Somos o maior site de busca de animais domesticos desaparecidos do
                Estado da Paraíba! <br />
                Totalmente gratuito, são mais de 5.000 acessos por dia!
            </p>
            </article>
            <section className="contato">
            <div className="marcas">
                <a href="#">
                <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                <i className="fa-brands fa-whatsapp" />
                </a>
            </div>
            <div className="final">
                <p style={{ fontWeight: "bold", fontSize: 10 }}>
                Projeto feito para a disciplina de Linguagem de Script | TSI - IFPB
                2023.1 | feito por Nirielly Brito, José Guilherme e Sofia Leal.
                </p>
            </div>
            </section>
         </footer>
        </>
    )
}