import React, { useState } from "react";
import "./assets/style.css";
import parqueHalfeld from "./assets/parqueHalfeld.jpg";
import marianoProcopio from "./assets/marianoProcopio.jpg";
import morroImperador from "./assets/morroImperador.jpg";

export default function TurismoJF() {
  const [modalAberto, setModalAberto] = useState(null);

  const pontos = [
    {
      nome: "Parque Halfeld",
      desc: "O coração da cidade, ideal para passeios, eventos culturais e momentos de lazer ao ar livre.",
      img: parqueHalfeld,
      endereco: "Centro, Juiz de Fora - MG",
      horario: "Aberto 24 horas",
      mapsUrl: "https://www.google.com/maps/place/Parque+Halfeld,+Juiz+de+Fora",
      mapsEmbed:
        "https://maps.google.com/maps?q=Parque+Halfeld+Juiz+de+Fora&t=&z=16&ie=UTF8&iwloc=&output=embed",
      detalhes:
        "O Parque Halfeld é considerado o coração de Juiz de Fora e um dos espaços públicos mais emblemáticos da cidade. Criado no século XIX, o parque leva o nome de Henrique Guilherme Fernando Halfeld, o engenheiro alemão responsável pelo desenvolvimento urbano da região.\n\nCom seus jardins bem cuidados, coreto histórico, fontes ornamentais e árvores centenárias, o parque é palco de eventos culturais, feiras de artesanato, apresentações musicais e manifestações populares. É o principal ponto de encontro dos moradores e visitantes, reunindo história, cultura e lazer em pleno centro da cidade.\n\nAo redor do parque, encontram-se importantes edificações históricas, comércios tradicionais e a movimentada Rua Halfeld, uma das vias mais conhecidas de Juiz de Fora.",
    },
    {
      nome: "Museu Mariano Procópio",
      desc: "Um dos museus mais importantes de Minas Gerais, com acervo histórico, artístico e um belo jardim.",
      img: marianoProcopio,
      endereco: "R. Mariano Procópio, 1100 - Mariano Procópio, Juiz de Fora - MG",
      horario: "Terça a domingo, 10h às 17h",
      mapsUrl:
        "https://www.google.com/maps/place/Museu+Mariano+Procópio,+Juiz+de+Fora",
      mapsEmbed:
        "https://maps.google.com/maps?q=Museu+Mariano+Procopio+Juiz+de+Fora&t=&z=16&ie=UTF8&iwloc=&output=embed",
      detalhes:
        "O Museu Mariano Procópio (MMP) é um dos mais antigos e importantes museus do Brasil, fundado em 1921. Seu prédio principal, a Villa Ferreira Lage, foi construído em 1861 em estilo renascentista italiano e é considerado um marco da arquitetura do século XIX no país.\n\nO acervo conta com mais de 50 mil peças, incluindo pinturas, esculturas, mobiliário imperial, armas históricas, documentos raros e objetos pertencentes à família imperial brasileira. Entre as peças mais notáveis estão a bandeira do Brasil usada na Proclamação da República e obras de artistas como Victor Meirelles e Pedro Américo.\n\nO museu está inserido em um amplo parque com espécies botânicas raras, trilhas arborizadas e fauna diversificada, tornando a visita uma experiência que une cultura, história e contato com a natureza.",
    },
    {
      nome: "Morro do Imperador",
      desc: "Um dos pontos mais altos da cidade, oferecendo uma vista panorâmica incrível de Juiz de Fora.",
      img: morroImperador,
      endereco: "Alto do Morro do Imperador, Juiz de Fora - MG",
      horario: "Aberto 24 horas",
      mapsUrl:
        "https://www.google.com/maps/place/Morro+do+Imperador,+Juiz+de+Fora",
      mapsEmbed:
        "https://maps.google.com/maps?q=Morro+do+Imperador+Juiz+de+Fora&t=&z=15&ie=UTF8&iwloc=&output=embed",
      detalhes:
        "O Morro do Imperador é um dos pontos mais altos de Juiz de Fora, alcançando 1.164 metros de altitude. Seu nome é uma homenagem ao Imperador Dom Pedro II, que visitou a região durante o período imperial.\n\nNo topo do morro, encontra-se a Igreja de Nossa Senhora da Glória, construída na década de 1940, e um imponente monumento do Cristo Redentor, que pode ser visto de diversos pontos da cidade. O local oferece uma vista panorâmica de 360° de Juiz de Fora, sendo considerado um dos melhores mirantes da região.\n\nÉ um destino popular para caminhadas, trilhas ecológicas e contemplação da natureza. O acesso pode ser feito de carro ou a pé por trilhas que partem de diferentes pontos da cidade. Ao entardecer, o local se transforma em um cenário espetacular, sendo muito procurado para apreciar o pôr do sol.",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Turismo em Juiz de Fora</h1>
        <p>Descubra os melhores pontos turísticos da cidade</p>
      </header>

      <section className="cards">
        {pontos.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setModalAberto(index)}
          >
            <img src={item.img} alt={item.nome} />
            <div className="card-content">
              <h3>{item.nome}</h3>
              <p>{item.desc}</p>
              <span className="card-btn">Saiba mais →</span>
            </div>
          </div>
        ))}
      </section>

      {modalAberto !== null && (
        <div className="modal-overlay" onClick={() => setModalAberto(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalAberto(null)}
            >
              ✕
            </button>
            <img
              src={pontos[modalAberto].img}
              alt={pontos[modalAberto].nome}
              className="modal-img"
            />
            <div className="modal-body">
              <h2>{pontos[modalAberto].nome}</h2>
              <div className="modal-info">
                <span>📍 {pontos[modalAberto].endereco}</span>
                <span>🕐 {pontos[modalAberto].horario}</span>
              </div>
              {pontos[modalAberto].detalhes
                .split("\n\n")
                .map((paragrafo, i) => (
                  <p key={i} className="modal-detalhes">
                    {paragrafo}
                  </p>
                ))}
              <a
                href={pontos[modalAberto].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-maps-btn"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="video">
        <h2>Conheça Juiz de Fora</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zmSca0RbyHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className="map">
        <h2>Localização dos Pontos Turísticos</h2>
        <div className="map-grid">
          {pontos.map((item, index) => (
            <div key={index} className="map-item">
              <h3>{item.nome}</h3>
              <iframe
                src={item.mapsEmbed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Turismo JF &copy; 2025 — Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
