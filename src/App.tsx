import "./Style";
import logo from "./Img/logo.jpg";
import { Conteiner, GlobalStyle } from "./Style";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner className="conteiner">
        <div className="caixa-img">
          <img className="imagem" src={logo} alt="Imagem de perfil" />
        </div>

        <ul>
          <li>
            <a href="https://github.com/Jacomel">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marlon-jacomel-bb4b37345">
              Linkedin
            </a>
          </li>
        </ul>
      </Conteiner>
    </>
  );
}
