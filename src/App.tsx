import "./Style";
import Logo from "../public/img/logo.jpg";
import { Conteiner, GlobalStyle } from "./Style";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner className="conteiner">
        <div className="caixa-img">
          <img className="imagem" src={Logo} alt="Imagem de perfil" />
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
