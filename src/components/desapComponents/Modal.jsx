'use client'
import modalCSS from '../../css/Modal.module.css'
import { useState } from "react";

const formInicial = {
    nome: '',
    cidade: '',
    mes: '',
    ano: '',
    img: '',
};

const telPattern = /^(\d{2}\s\d\s\d{8}|\d{11}|\d{2}\s\d\s\d{4}-?d{4}|\d{2}\s\d\s?\d{4}-?\d{4})$/

export default function Modal({alternarStatusModal, salvarCard}){
    const [animal, addAnimal] = useState(formInicial);

    const enviarAnuncio = async (event) => {
        event.preventDefault();
    
        salvarCard(animal);
        
        addAnimal(formInicial);

        alternarStatusModal();
    };

    const tratarAlterações = (event) => {
        let { name, value } = event.target;
    
        if (name === 'value') {
          value = value;
        }
    
        addAnimal({ ...animal, [name]: value });
    };

    return(
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
                onSubmit={(event) => enviarAnuncio(event)}
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
                            pattern="[a-zA-Z]+"
                            onInvalid={(event) => {
                                event.target.setCustomValidity("Digite apenas letras.");
                            }}
                            onInput={(event) => {
                                event.target.setCustomValidity("");
                            }}
                            required
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
                            required
                            />
                        </div>
                        <div className={modalCSS['form-tutor']}>
                            <label htmlFor="teltutor">Número para contato:</label>
                            <input
                            type="tel"
                            name="teltutor"
                            id="teltutor"
                            placeholder="99 9 99999999"
                            pattern={telPattern.source}
                            onInvalid={(event) => {
                                event.target.setCustomValidity("Digite o número corretamente.");
                            }}
                            onInput={(event) => {
                                event.target.setCustomValidity("");
                            }}
                            required
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
                            <label htmlFor="nome" className="pb-2">
                                Nome:
                            </label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                onChange={tratarAlterações}
                                value={animal.nome}
                                placeholder="ex: 'Aroldo'"
                                pattern="[a-zA-Z]+"
                                onInvalid={(event) => {
                                    event.target.setCustomValidity("Digite apenas letras.");
                                }}
                                onInput={(event) => {
                                    event.target.setCustomValidity("");
                                }}
                                required
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="cidade" className="pb-2">
                                Cidade em que desapareceu:
                            </label>
                            <input
                                type="text"
                                name="cidade"
                                id="cidade"
                                onChange={tratarAlterações}
                                value={animal.cidade}
                                placeholder="ex: 'Cabedelo', 'Sapé'"
                                pattern="[a-zA-Z]+"
                                onInvalid={(event) => {
                                    event.target.setCustomValidity("Digite apenas letras.");
                                }}
                                onInput={(event) => {
                                    event.target.setCustomValidity("");
                                }}
                                required
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="mes" className="pb-2">
                                Mês do desaparecimento:
                            </label>
                            <input
                                type="text"
                                name="mes"
                                id="mes"
                                onChange={tratarAlterações}
                                value={animal.mes}
                                placeholder="ex: 'junho'"
                                pattern="[a-zA-Z]+"
                                onInvalid={(event) => {
                                    event.target.setCustomValidity("Digite apenas letras.");
                                }}
                                onInput={(event) => {
                                    event.target.setCustomValidity("");
                                }}
                                required
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="ano" className="pb-2">
                                Ano do desaparecimento:
                            </label>
                            <input
                                type="text"
                                name="ano"
                                id="ano"
                                onChange={tratarAlterações}
                                value={animal.ano}
                                placeholder="ex: '2021'"
                                pattern="[0-9]+"
                                onInvalid={(event) => {
                                    event.target.setCustomValidity("Digite apenas números.");
                                }}
                                onInput={(event) => {
                                    event.target.setCustomValidity("");
                                }}
                                required
                            />
                            </div>
                            <div className={modalCSS['form-pet']}>
                            <label htmlFor="img">Foto do animal:</label>
                            <input
                                type="text"
                                name="img"
                                id="img"
                                onChange={tratarAlterações}
                                value={animal.img}
                                placeholder="ex: './img/nomepet.jpeg'"
                                required
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
    )
}