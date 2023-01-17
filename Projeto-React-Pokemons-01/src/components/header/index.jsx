import { useNavigate } from "react-router-dom";
import { navigateToDetalhes, navigateToHome } from "../../routes/coordinato";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => navigateToDetalhes(navigate)}>
        Ir para página detalhes 
      </button>
    </header>
  );
}

export default Header;
