import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import {  faGitAlt, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ParticlesComponent from './components/particles'
import foto from './assets/foto1.jpg'

function App() {

  return (
    <>
      <ParticlesComponent id="particles" />

      <main>
        <header>

          <h3> <FontAwesomeIcon icon={faLaptop} /> Hiago | Dev</h3>

          <nav>
            <ul>
              <li> <a href="#">Inicio</a></li>
              <li> <a href="#">Projetos</a></li>
              <li> <a href="#sobre">Sobre</a></li>
              <button className='btn-contato'>
                <li>Contato</li>
              </button>
            </ul>
          </nav>
        </header>

        <section>
          <div className='section-conteudo'>
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

          <div className='fundo-foto'>
            <img src={foto} alt="" />
          </div>

        </section>

        <div className='tecnologias'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101011" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,80C672,53,768,43,864,69.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        <div className='meio' id='sobre'>
          <h1><FontAwesomeIcon icon={faGitAlt} size="2x" />Stacks e<span> Tecnologias</span> Que utilizo</h1>
          <div className='stacks'>
            <img align="center" alt="DotNet" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg"></img>
            <img align="center" alt="Csharp" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"></img>
            <img align="center" alt="Express" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"></img>
            <img align="center" alt="NodeJS" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"></img>
            <img align="center" alt="React" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
            <img align="center" alt="Ts" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"></img>
            <img align="center" alt="CSS" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></img>
            <img align="center" alt="HTML" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></img>
            <img align="center" alt="Js" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></img>
            <img align="center" alt="PostgreSQL" height="120" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" />
          </div>
        </div>

        <div className='tecnologias-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101011" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,144C672,128,768,128,864,154.7C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        </div>
      </main>
    </>
  )
}

export default App
