import React, { useState } from 'react';
import  API from '@/lib/api';

export const Modal = (props) => {
  const [nomeTutor, setNomeTutor] = useState('');
  const [emailTutor, setEmailTutor] = useState('');
  const [numeroTutor, setNumeroTutor] = useState('');
  const [nomePetDesap, setNomePetDesap] = useState('');
  const [cidadeDesap, setCidadeDesap] = useState('');
  const [mesDesap, setMesDesap] = useState('');
  const [anoDesap, setAnoDesap] = useState('');
  const [fotoPetDesap, setFotoPetDesap] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      nomeTutor === '' ||
      emailTutor === '' ||
      numeroTutor === '' ||
      nomePetDesap === '' ||
      cidadeDesap === '' ||
      mesDesap === '' ||
      anoDesap === '' ||
      fotoPetDesap === ''
    ) {
      window.alert('Os dados não podem ficar vazios. Preencha corretamente!');
    } else {
      const data = {
        nome: nomePetDesap,
        cidade: cidadeDesap,
        mes: mesDesap,
        ano: anoDesap,
        img: fotoPetDesap,
      };
      await API.createAnimalDesaparecido(data);
      window.alert('Informações salvas!');
      resetForm();
    }
  };

  const resetForm = () => {
    setNomeTutor('');
    setEmailTutor('');
    setNumeroTutor('');
    setNomePetDesap('');
    setCidadeDesap('');
    setMesDesap('');
    setAnoDesap('');
    setFotoPetDesap('');
  };

  return (
    <>
      <div className="modal-content">
        <form className="formularioreg" id="formulario" onSubmit={handleSubmit}>
          <div className="form-tutor nome">
            <label htmlFor="nometutor">Nome:</label>
            <input
              type="text"
              size={30}
              name="nometutor"
              id="nometutor"
              placeholder="ex: José"
              value={nomeTutor}
              onChange={(e) => setNomeTutor(e.target.value)}
            />
          </div>
          <div className="form-pet">
            <label htmlFor="nomepetdesap" className="pb-2">
              Nome:
            </label>
            <input
              type="text"
              name="nomepetdesap"
              id="nomepetdesap"
              placeholder="ex: 'Aroldo'"
              value={nomePetDesap}
              onChange={(e) => setNomePetDesap(e.target.value)}
            />
          </div>
          <div>
            <button id="btnenviar" type="submit" name="btnreg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
