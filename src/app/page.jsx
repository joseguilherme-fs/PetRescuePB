import Image from 'next/image';
import styles from './page.module.css';
import Links from './components/Links';
import Header from './components/Header';
import Footer from './components/Footer';
import supabase from './/lib/api';


const Page = () => {
  const [animaisDesaparecidos, setAnimaisDesaparecidos] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data, error } = await _supabase.from('AnimaisDesaparecidos').select();
    if (error) {
      console.log(error);
      return;
    }
    console.table(data);
    setAnimaisDesaparecidos(data || []);
  };

  

  return (
    <>
  <Links />

  <Header />

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
   {/* ... */}
   <Modal loadData={loadData} />
      {/* ... */}
      <section className="animais" id="animaisdesap">
        {animaisDesaparecidos.map((animal) => (
          <AnimalCardDesaparecido key={animal.nome} animal={animal} />
        ))}
      </section>
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
    <Footer />
    {/* <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v15.0" nonce="ptzRCAY8"></script> */}
</>
  )
}
