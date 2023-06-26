import { useEffect, useState } from 'react';
import CardDesap from './CardDesap';
import API from '@/lib/api';

export default function AnimaisDesap(){
    const [AnimaisDesaparecidos, mostrarAnimais] = useState([]);


    const mostrarCards = async () => {
        const AnimaisDesaparecidos = await API.exibirCards('AnimaisDesaparecidos');
        mostrarAnimais(AnimaisDesaparecidos);
    };

    useEffect(() => {
        mostrarCards();
      }, []);

    return(
<>
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
            {AnimaisDesaparecidos.map((animal, index) => (
            <CardDesap AnimaisDesaparecidos={animal} key={index} />
            ))};
        </div>
        
    </section>
</>
    )
}