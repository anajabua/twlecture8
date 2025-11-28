import "./index.css";

export default function App() {
  return (
    <div className="bg-[#0c0c0c] text-white font-sans">
      
      <div className="text-center p-2 bg-gradient-to-r from-[#6c63ff] to-[#23d5ab] text-[14px] tracking-wider">
        VEJA O 1º TRAILER DE GRAND THEFT AUTO VI AGORA
      </div>

      <header className="flex justify-between items-center px-10 py-4 bg-black border-b border-[#222]">
        <div className="flex items-center gap-10 nav-left">
          <div className="logo text-2xl font-bold">
            <img src="/Logo.png" className="w-[120px]" />
          </div>

          <nav className="flex gap-6">
            <a className="text-[#eee] hover:text-white" href="#">Jogos ▾</a>
            <a className="text-[#eee] hover:text-white" href="#">Boletim</a>
            <a className="text-[#eee] hover:text-white" href="#">Vídeos</a>
            <a className="text-[#eee] hover:text-white" href="#">Downloads</a>
            <a className="text-[#eee] hover:text-white" href="#">Loja</a>
            <a className="text-[#eee] hover:text-white" href="#">Suporte</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#f4b400] font-bold px-5 py-2 rounded">
            OBTER LAUNCHER
          </button>

          <button className="bg-[#111] border border-[#333] p-2 rounded-full">
            <img src="/icon1.png" className="w-5 h-5" />
          </button>

          <button className="bg-[#111] border border-[#333] p-2 rounded-full">
            <img src="/icon2.png" className="w-5 h-5" />
          </button>
        </div>
      </header>

      <section className="flex gap-8 p-10">
        <img
          src="/Screenshot 2025-11-28 020506.png"
          className="w-[65%] rounded border border-[#222]"
        />

        <div className="w-[35%] flex flex-col justify-center">
          <h4 className="text-[#bbb] mb-2">Grand Theft Auto Online</h4>
          <h1 className="text-[32px] mb-6">
            San Andreas Mercenaries já disponível
          </h1>

          <button className="px-6 py-3 border-2 border-white rounded hover:bg-white hover:text-black transition">
            ASSISTA AGORA
          </button>

          <div className="flex gap-2 mt-8">
            <span className="w-10 h-1 bg-white rounded"></span>
            <span className="w-10 h-1 bg-[#333] rounded"></span>
            <span className="w-10 h-1 bg-[#333] rounded"></span>
            <span className="w-10 h-1 bg-[#333] rounded"></span>
          </div>
        </div>
      </section>

      <section className="w-[90%] max-w-[1300px] mx-auto my-10">
        <h2 className="text-[28px] font-semibold mb-6">Boletim</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {[
            { img: "photo1.png", date: "5 de dezembro de 2023", title: "Grand Theft Auto VI – Veja o 1º trailer agora" },
            { img: "photo2.png", date: "1 dezembro de 2023", title: "1º TRAILER. TERÇA-FEIRA, 5 DE DEZEMBRO. 9H ET." },
            { img: "photo3.png", date: "30 de novembro de 2023", title: "Nova atualização do GTA Online chegando em dezembro" },
            { img: "photo4.png", date: "30 de novembro de 2023", title: "2x GTA$ e RP nas missões do Projeto Subversão" },
            { img: "photo5.png", date: "28 de novembro de 2023", title: "Novos produtos da Rockstar Games já disponíveis" },
            { img: "photo6.png", date: "23 de novembro de 2023", title: "Fature bônus nas missões do Cassino e mais" }
          ].map((item) => (
            <article
              key={item.title}
              className="bg-[#141414] rounded-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
            >
              <img src={`/${item.img}`} className="w-full h-[230px] object-cover" />
              <div className="p-4">
                <p className="text-[#999] text-[13px] mb-2">{item.date}</p>
                <h3 className="text-[17px] leading-[1.35]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="text-white text-[15px] opacity-70 hover:opacity-100 relative inline-block pb-1"
            href="#"
          >
            View More
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f5c518]"></span>
          </a>
        </div>
      </section>

      <section className="w-[90%] max-w-[1300px] mx-auto mt-16 mb-12">
        <h2 className="text-[26px] mb-6">Jogos em destaque</h2>

        <div className="flex gap-8 flex-wrap">
          {["b1.png", "b2.png", "b3.png", "b4.png"].map((g) => (
            <div
              key={g}
              className="bg-[#111] w-[250px] rounded-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
            >
              <img src={`/${g}`} className="w-full h-[330px] object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="text-white text-[15px] opacity-70 hover:opacity-100 relative inline-block pb-1"
            href="#"
          >
            View More
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f5c518]"></span>
          </a>
        </div>
      </section>

      <footer className="mt-20 bg-[#0a0a0a] px-[5%] py-14 text-[#aaa] text-[13px]">
        <div className="flex justify-between items-center border-b border-[#222] pb-6">
          <a className="text-white mr-4 hover:opacity-70" href="#">Contact</a>
          <a className="text-white mr-4 hover:opacity-70" href="#">Empregos</a>
          <a className="text-white hover:opacity-70" href="#">Inscrever-se</a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {[
            "Corporativo",
            "Privacidade",
            "Cookie Settings",
            "POLÍTICA DE COOKIES - ROCKSTAR GAMES",
            "Aviso Legal",
            "Não vendam a minha informação"
          ].map((t) => (
            <a key={t} className="text-[#aaa] hover:text-white" href="#">{t}</a>
          ))}
        </div>
<div className="flex gap-4 mt-8">
  {[
    { src: "twitch.png", bg: "bg-purple-600" },
    { src: "instagram.png", bg: "bg-pink-500" },
    { src: "twitter.png", bg: "bg-blue-400" },
    { src: "youtube.png", bg: "bg-red-600" },
    { src: "facebook.png", bg: "bg-blue-700" },
  ].map(({ src, bg }) => (
    <div
      key={src}
      className={`${bg} w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer transition`}
    >
      <img
        src={`/assets/${src}`}
        alt={src.split(".")[0]}
        className="w-6 h-6"
      />
    </div>
  ))}
</div>


        <div className="flex justify-between mt-10 text-[#666] text-[12px]">
          <span>RockstarGames</span>
          <span>New York • London • Paris • Bogotá</span>
          <span>MCMXCVII</span>
        </div>
      </footer>
    </div>
  );
}
