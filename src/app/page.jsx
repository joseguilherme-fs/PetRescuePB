import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Pet Rescue Paraíba</title>
  <link href="css/style.css" rel="stylesheet" type="text/css" />
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
      <img
        src="img/banner.gif"
        style={{ maxWidth: "100%", height: "auto" }}
        alt="Banner pet rescue"
      />
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
              <button className="botao" id="btnReg">
                Registre-se
              </button>
            </li>
            <li>
              <a href="adote.html">
                <button className="botao" id="btnAdote">
                  {" "}
                  Adote!
                </button>
              </a>
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
    <section className="animais" id="animaisdesap" />
  </section>
  <footer data-aos="fade-up">
    <article>
      <h2 className="titulo2"> Sobre nós </h2>
      <p className="descriçao">
        {" "}
        Somos o maior site de busca de animais domesticos desaparecidos do
        Estado da Paraíba! <br />
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
  {/* The Modal */}
  <div id="myModal" className="modal">
    {/* Modal content */}
    <div className="modal-content">
      <span className="close">×</span>
      <h1 className="text-center pb-3 fw-bold">
        <i className="fa-solid fa-address-card" style={{ color: "#198754" }} />{" "}
        Registrar
      </h1>
      <form className="formularioreg" id="formulario">
        <div className="dados">
          <div className="reg-tutor">
            <h2>Tutor</h2>
            <div className="form-tutor nome">
              <label htmlFor="nometutor">Nome:</label>
              <input
                type="text"
                size={30}
                name="nometutor"
                id="nometutor"
                placeholder="ex: José"
              />
            </div>
            <div className="form-tutor email">
              <label htmlFor="emailtutor">E-mail:</label>
              <input
                type="email"
                size={30}
                name="emailtutor"
                id="emailtutor"
                placeholder="ex: alguem@gmail.com"
              />
            </div>
            <div className="form-tutor tel">
              <label htmlFor="teltutor">Número para contato:</label>
              <input
                type="tel"
                name="teltutor"
                id="teltutor"
                placeholder="(99) 99999-9999"
              />
            </div>
            <br />
          </div>
          <div className="reg-pet">
            <h2>
              <i className="fa-solid fa-paw-simple" />
              Pet
            </h2>
            <div className="reg-pet desaparecido">
              <div className="form-pet">
                <label htmlFor="nomepetdesap" className="pb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nomepetdesap"
                  id="nomepetdesap"
                  placeholder="ex: 'Aroldo'"
                />
              </div>
              <div className="form-pet">
                <label htmlFor="cidade-desap" className="pb-2">
                  Cidade em que desapareceu:
                </label>
                <input
                  type="text"
                  name="cidade-desap"
                  id="cidade-desap"
                  placeholder="ex: 'Cabedelo', 'Sapé'"
                />
              </div>
              <div className="form-pet">
                <label htmlFor="mes-desap" className="pb-2">
                  Mês do desaparecimento:
                </label>
                <input
                  type="text"
                  name="mes-desap"
                  id="mes-desap"
                  placeholder="ex: 'junho'"
                />
              </div>
              <div className="form-pet">
                <label htmlFor="ano-desap" className="pb-2">
                  Ano do desaparecimento:
                </label>
                <input
                  type="text"
                  name="ano-desap"
                  id="ano-desap"
                  placeholder="ex: '2021'"
                />
              </div>
              <div className="form-pet">
                <label htmlFor="fotopetdesap">Foto do animal:</label>
                <input
                  type="text"
                  name="fotopetdesap"
                  id="fotopetdesap"
                  placeholder="ex: './img/nomepet.jpeg'"
                />
              </div>
            </div>{" "}
            {/* REGISTRO PET DESAP */}
          </div>{" "}
          {/* REGISTRO PET */}
          <br />
          <div>
            <button id="btnenviar" type="submit" name="btnreg">
              Enviar
            </button>
          </div>
        </div>{" "}
        {/* DADOS */}
      </form>
    </div>{" "}
    {/* CONTENT MODAL */}
  </div>{" "}
  {/* MODAL */}
  {/* Scripts */}
</>
  )
}
