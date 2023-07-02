import '../../app/globals.css'
import AnimaisAdote from '@/components/adoteComponents/AnimaisAdote'

export default function AdoteBody({ alternarDesapBody, alternarAdoteBody }){

    const fecharAdoteBody = async (event) => {
        event.preventDefault();
        alternarAdoteBody();
        alternarDesapBody();
    };

    return(
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Adote um pet!</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"
                integrity="sha512-HHsOC+h3najWR7OKiGZtfhFIEzg5VRIPde0kB0bG2QRidTQqf+sbfcxCTB16AcFB93xMjnBIKE29/MjdzXE+qw=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap"
                rel="stylesheet"
            />

            <header>
                <picture>
                    <source media="(max-width: 415px)" srcSet="img/banner(415)2.png" />
                    <source media="(max-width: 633px)" srcSet="img/banner(633)2.png" />
                    <img src="img/banner2.gif" style={{ maxWidth: "100%", height: "auto" }} />
                </picture>
            </header>

            <div className="posicionamento">
                <section className="navegacao">
                    <nav>
                        <ul>
                            <div className="barra">
                                <form className="pesquisa">
                                    <input
                                    type="text"
                                    className="search"
                                    placeholder="busque por nomes de cidades e animais"
                                    />
                                    <button className="botaobusca">
                                    <i className="fa-solid fa-magnifying-glass" />
                                    </button>
                                </form>
                            </div>

                            <div className="botaopiloto">
                                <li>
                                    <button className="botao" id="btnDesap" onClick={(event) => fecharAdoteBody(event)}>
                                        <b>Desaparecidos</b>
                                    </button>
                                </li>
                            </div>

                        </ul>
                    </nav>
                </section>
            </div>

            <div style={{ marginBottom: 30 }}>
                <h1
                    className="titulo1"
                    style={{
                    textAlign: "left",
                    marginLeft: "3em",
                    marginTop: 40,
                    marginBottom: 18,
                    fontSize: 38,
                    fontWeight: 750
                    }}
                >
                    <i className="fa-solid fa-heart-circle-plus" style={{ color: "#ab8fe0" }} />{" "}
                    Animais para adotar!{" "}
                </h1>
                <p className="instrucao">
                    Não compre, adote! Confira esses bichinhos que aguardam um lar.{" "}
                </p>
                <p className="instrucao">
                    Você também pode anunciar um animal para adoção! É de graça, basta
                    registrar-se.
                </p>
            </div>

            <section className="animais" id="animaisadoçao">
                <AnimaisAdote />
            </section>

            <footer>
                <article>
                    <h2 className="titulo2"> Sobre nós </h2>
                    <p className="descriçao">
                    {" "}
                    Somos o maior site de busca de animais domesticos desaparecidos do Estado
                    da Paraíba! <br />
                    Totalmente gratuito, são mais de 5.000 acessos por dia!{" "}
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