import './App.css'
import './Responsivo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ParticlesComponent from './components/particles'
import foto from './assets/foto1.jpg'
import projeto1 from './assets/projeto1.webp'
import movieflix from './assets/movieflix.png'
import projeto2 from './assets/projeto2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ParticlesComponent id="particles" />
      <main>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark  w-100">
            <div className="container-fluid">
              <h3 className="navbar-brand">
                <FontAwesomeIcon icon={faLaptop} /> Hiago | Dev
              </h3>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-center gap-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Início</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projetos">Projetos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sobre">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary ms-2"> <a href="https://www.linkedin.com/in/hiago-mendes-dev/" target="_blank">Contato</a></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section>
          <div className='section-conteudo' data-aos="fade-up">
            <div className='sobre'><h3>Sobre min...</h3></div>

            <h1>Desenvolvedor & Software</h1>
            <p>Ola me chamo Hiago e Desenvolvo softwares Full-Stack que otimizam e resolvem problemas praticos. Atualmente sou estudante de Analise e Desenvolvimento De Sistemas, com fogo em desenvolvimento as tecnologias que mais utilizo, C# .Net React Node Express, Sql Docker, Atualmente sou Freelancers, porem participos de projetos de desenvolvimento focado em automatizacao em empresas de tecnologia</p>

            <div className='redes-sociais'>
              <ul>
                <li> <a href="https://github.com/Hiago7k" target="_blank"> <FontAwesomeIcon icon={faGithub} size="2x" /> </a></li>
                <li> <a href="https://www.linkedin.com/in/hiago-mendes-dev/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2x" /> </a> </li>
                <li> <a href="https://www.instagram.com/hiagoskz/?hl=pt-br" target="_blank">  <FontAwesomeIcon icon={faInstagram} size="2x" /></a> </li>
              </ul>
            </div>
          </div>

          <div className='fundo-foto' data-aos="fade-up">
            <img src={foto} alt="" />
          </div>

        </section>

        <div className='tecnologias' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101011" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,80C672,53,768,43,864,69.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        <div className='meio' id='sobre'>
          <h1>Stacks</h1>
          <div className='stacks' data-aos="fade-up">
            <img align="center" alt="DotNet" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg"></img>
            <img align="center" alt="Csharp" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"></img>
            <img align="center" alt="Express" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"></img>
            <img align="center" alt="NodeJS" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"></img>
            <img align="center" alt="React" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
            <img align="center" alt="Ts" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"></img>
            <img align="center" alt="Js" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></img>
            <img align="center" alt="PostgreSQL" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" />
          </div>
        </div>

        <div className='tecnologias-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101011" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,144C672,128,768,128,864,154.7C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        </div>


        <section className='projetos ' id='projetos'>
          <div className='projeto' data-aos="fade-up">
            <h1>Lading Page Freelancer</h1>
            <p>MKT Midia Social landing page, feita para MKT Midia Social, com entuito de divulgar e exibir seu trabalho, tecnologias utilizadas React, biblioteca AOS animacoes suave no site, JavaScript, API wpp, para contato, Site Responssivo para layout mobile </p>
            <div className='btn-container'>
              <div className='btn-projeto'><a href="https://github.com/Hiago7k/Teste-Tecnico-Desktop" target="_blank">Repositorio</a></div>
              <div className='btn-projeto'><a href="https://mkt-social.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAafjUQRlzfeC8XzMSck2JtX6Aps54PmYv_jwNe3bSXf5gmEtOTWTV32vcBli0A_aem_7pdntvT4f9I1uXdXqLv7CA" target="_blank">Link do Site</a></div>
            </div>
          </div>
          <div className='projeto-image' data-aos="fade-up">
            <img src={projeto1} alt="" />
          </div>

          <div className='projeto' data-aos="fade-up">
            <h1>Crud MovieFlix-API</h1>
            <p>Crud, que desenvolvi para uma lista de filmes, utilizei Node.JS Expess, PostgreSQL, DBeve e Swagger</p>
            <div className='btn-container'>
              <div className='btn-projeto'><a href="https://github.com/Hiago7k/movieflix-api" target="_blank">Repositorio</a></div>
              <div className='btn-projeto'><a href="https://github.com/Hiago7k/movieflix-api" target="_blank">Link do Site</a></div>
            </div>
          </div>
          <div className='projeto-image' data-aos="fade-up">
            <img src={movieflix} alt="" />
          </div>

          <div className='projeto' data-aos="fade-up">
            <h1>Portfolio Antigo</h1>
            <p>Portfolio antigo que criei para min mesmo, deixei aqui para acompanhar a evolucao, tecnologias simples React, JS, CSS</p>
            <div className='btn-container'>
              <div className='btn-projeto'><a href="https://github.com/Hiago7k/Teste-Tecnico-Desktop" target="_blank">Repositorio</a></div>
              <div className='btn-projeto'><a href="https://mkt-social.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAafjUQRlzfeC8XzMSck2JtX6Aps54PmYv_jwNe3bSXf5gmEtOTWTV32vcBli0A_aem_7pdntvT4f9I1uXdXqLv7CA" target="_blank">Link do Site</a></div>
            </div>
          </div>
          <div className='projeto-image' data-aos="fade-up">
            <img src={projeto2} alt="" />
          </div>

        </section>


        <footer>
          <p>📧 hiago7k@gmail.com | 📞 (47) 99175-2932 | 📍 Joinville, SC</p>
          <p>© 2025 Hiago Mendes. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  )
}

export default App
