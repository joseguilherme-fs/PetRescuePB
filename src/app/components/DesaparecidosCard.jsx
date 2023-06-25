export default function AnimalCardDesaparecido({ animal }) {
  return (
    <article id={animal.nome} className="card" style={{ display: 'block' }}>
      <div className="status">DESAPARECIDO</div>
      <div>
        <img src={animal.img} height="250px" width="250px" alt={animal.nome} />
      </div>
      <div className="name">{animal.nome}</div>
      <div className="cidademes">
        Em {animal.cidade} desde {animal.mes} de {animal.ano}
      </div>
      <div className="btm">
        <div className="detalhes">
          <a href="#">
            <button>detalhes</button>
          </a>
        </div>
      </div>
      <div
        className="fb-share-button"
        data-href="https://pet-rescue.projetols.repl.co//"
        data-layout="button"
        data-size="small"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpet-rescue.projetols.repl.co%2F&src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          Compartilhar
        </a>
      </div>
    </article>
  );
}
