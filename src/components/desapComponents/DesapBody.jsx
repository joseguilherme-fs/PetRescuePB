'use client'
import { useEffect, useState } from "react";
import '../../app/globals.css'
import Modal from '@/components/desapComponents/Modal'
import CardDesap from './CardDesap';
import API  from '../../lib/api'

export default function DesapBody({ alternarDesapBody, alternarAdoteBody }){

    const fecharDesapBody = async (event) => {
        event.preventDefault();
        alternarDesapBody();
        alternarAdoteBody();
    };

    // Mostrar animais //
    const [AnimaisDesaparecidos, setAnimaisDesaparecidos] = useState([]);
    const [erro, exibirErro] = useState(null);
    
    useEffect(() => {
        async function mostrarCards() {
          try {
            const animais = await API.exibirCards('AnimaisDesaparecidos');
            setAnimaisDesaparecidos(animais);
          } catch (error) {
            exibirErro("Erro ao carregar os cards: " + error.message);
          }
        }
    
        mostrarCards();
    }, []);


    // Salvar novo card e mostrar modal //
    const [statusModal, setStatusModal] = useState(false);
    const [animais, salvarAnimal] = useState([])

    const salvarCard = async (animal) => {
        try {
            const novoAnimal = await API.inserir('AnimaisDesaparecidos', animal);
    
            salvarAnimal([...animais, novoAnimal]);
            window.alert("Anúncio salvo com sucesso!");
        } catch (error) {
            window.alert("Erro ao salvar o animal: " + error.message);
        }
    };

    const alternarStatusModal = () => {
        setStatusModal(!statusModal)
    };

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Pet Rescue Paraíba</title>
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap"
                rel="stylesheet"
            />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

            <header>
                <picture>
                    <source media="(max-width: 415px)" srcSet="img/banner(415).png" />
                    <source media="(max-width: 633px)" srcSet="img/banner(633).png" />
                    <img src="img/banner.gif" style={{ maxWidth: "100%", height: "auto" }}/>
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
                                    <button type='button' className="botao" id="btnReg" onClick={() => alternarStatusModal()}>
                                        Registre-se
                                    </button>
                                </li>

                                <li>
                                    <button type='button' className="botao" id="btnAdote" onClick={(event) => fecharDesapBody(event)}>
                                        Adote!
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </section>
            </div>

            <section id="desaparecidos">
                <div style={{ marginBottom: 30 }}>
                <h1 className="titulo1">
                    <i className="fa-solid fa-location-dot" style={{ color: "red" }} /> Você
                    viu algum desses animais?
                </h1>
                <p className="instrucao">
                    Caso você encontre algum desses pets desaparecidos, não deixe de entrar
                    em contato com as pessoas que os procuram!
                </p>
                <p className="instrucao">
                    Você também pode anunciar o desaparecimento do seu animal por aqui! É de
                    graça, basta registrar-se.
                </p>
                </div>

                <div className="animais" id="animaisdesap">
                    {erro && <div>{erro}</div>}
                    {AnimaisDesaparecidos.map((animal, index) => (
                    <CardDesap AnimaisDesaparecidos={animal} key={index} />
                    ))}
                </div>
            </section>

            {statusModal && (<Modal
            alternarStatusModal={alternarStatusModal}
            salvarCard={salvarCard}
            AnimaisDesaparecidos = {AnimaisDesaparecidos}
            setAnimaisDesaparecidos={setAnimaisDesaparecidos}
            />)};
            <footer data-aos="fade-up">
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