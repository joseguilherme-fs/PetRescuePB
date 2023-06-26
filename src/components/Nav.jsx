import { useEffect, useState } from "react";
import modalCSS from '../css/Modal.module.css'
import '@/app/globals.css'
import API  from '../lib/api'

export default function Nav(){
    const formInicial = {
        nomepetdesap: '',
        cidadedesap: '',
        mesdesap: '',
        anodesap: '',
        fotopetdesap: '',
    };

    const [statusModal, setStatusModal] = useState(false);
    const [animal, salvarAnimal] = useState(formInicial)

    const enviarAnuncio = async (event) => {
        event.preventDefault();
    
        salvarCard(animal);
    
        alternarStatusModal();
    };

    const salvarCard = async (animal) => {
        const novoAnimal = await API.inserir('AnimaisDesaparecidos', animal);
    
        salvarAnimal([...AnimaisDesaparecidos, novoAnimal]);
    };

    const alternarStatusModal = () => {
        setStatusModal(!statusModal)
    };

    return(
    <>
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

        {statusModal && (
        <div id="myModal" className={modalCSS.modal}>
            <div className={modalCSS['modal-content']}>
                <span
                className={modalCSS.close}
                onClick={() => alternarStatusModal()}
                >
                ×
                </span>
                <h1 className="text-center pb-3 fw-bold">
                <i className="fa-solid fa-address-card" style={{ color: "#198754" }} />{" "}
                Registrar
                </h1>
                <form
                className="formularioreg"
                id="formulario"
                onSubmit={() => enviarAnuncio()}
                >
                    <div className="dados">
                        <div className="reg-tutor">
                        <h2>Tutor</h2>
                        <div className={modalCSS['form-tutor']}>
                            <label htmlFor="nometutor">Nome:</label>
                            <input
                            type="text"
                            size={30}
                            name="nometutor"
                            id="nometutor"
                            placeholder="ex: José"
                            />
                        </div>
                        <div className={modalCSS['form-tutor']}>
                            <label htmlFor="emailtutor">E-mail:</label>
                            <input
                            type="email"
                            size={30}
                            name="emailtutor"
                            id="emailtutor"
                            placeholder="ex: alguem@gmail.com"
                            />
                        </div>
                        <div className={modalCSS['form-tutor']}>
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
                            <div className={modalCSS['form-pet']}>
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
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="cidadedesap" className="pb-2">
                                Cidade em que desapareceu:
                            </label>
                            <input
                                type="text"
                                name="cidade-desap"
                                id="cidade-desap"
                                placeholder="ex: 'Cabedelo', 'Sapé'"
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="mesdesap" className="pb-2">
                                Mês do desaparecimento:
                            </label>
                            <input
                                type="text"
                                name="mes-desap"
                                id="mes-desap"
                                placeholder="ex: 'junho'"
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="anodesap" className="pb-2">
                                Ano do desaparecimento:
                            </label>
                            <input
                                type="text"
                                name="ano-desap"
                                id="ano-desap"
                                placeholder="ex: '2021'"
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="fotopetdesap">Foto do animal:</label>
                            <input
                                type="text"
                                name="fotopetdesap"
                                id="fotopetdesap"
                                placeholder="ex: './img/nomepet.jpeg'"
                            />
                            </div>
                        </div>
                        </div>
                        <br />
                        <div>
                        <button id={modalCSS['btnenviar']} type="submit" name="btnreg">
                            Enviar
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )};
    </>
    );
}