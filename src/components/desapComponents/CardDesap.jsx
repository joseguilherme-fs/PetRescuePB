import AOSFunction from '@/components/AOSFunction'
export default function CardDesap( {AnimaisDesaparecidos} ) { 
    return (
<>
<article id={AnimaisDesaparecidos.id} data-aos="zoom-in" data-aos-duration="1250" className="card" style={{ display: "block" }}>
  <div className="status">DESAPARECIDO</div>
  <div>
    <img src={AnimaisDesaparecidos.img} height="250px" width="250px" />
  </div>
  <div className="name">
    {AnimaisDesaparecidos.nome}
  </div>
  <div className="cidademes">
    Em {AnimaisDesaparecidos.cidade} desde {AnimaisDesaparecidos.mes} de {AnimaisDesaparecidos.ano}
  </div>
  <div className="btm">
    <div className="detalhes">
      <a href="#">
        <button>detalhes</button>
      </a>
    </div>
  </div>
  <button
  className="share-button"
  onClick={() =>
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpet-rescue.projetols.repl.co%2F&src=sdkpreparse',
      '_blank'
    )
  }
>
<i className="fa-brands fa-facebook" />  Compartilhar 
</button>


</article>
<AOSFunction/>
</>
            
    )
}