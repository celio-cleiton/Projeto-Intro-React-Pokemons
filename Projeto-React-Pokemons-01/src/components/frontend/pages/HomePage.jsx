
import Header from "../../header/index";
import { useNavigate } from "react-router-dom";
import { navigateToDetalhes } from "../../../routes/coordinato";


function HomePage() {
  const navigate = useNavigate();

//   const pokomons = async () => {
//     const body = {
//       email: form.email,
//       password: form.senha
//     };

//     try {
//       const result = await axios.post(
//         "https://us-central1-missao-newton.cloudfunctions.net/futureX/darvas/login",
//         body
//       );
//       window.localStorage.setItem("token", result.data.token);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const handleDetalhes = (event) => {
    event.preventDefault()
    navigateToDetalhes(navigate);
    console.log();
  };
  return (
    <main>
      <Header />
      <h1>Olá</h1>
      <button onClick={(event)=>handleDetalhes(event)}>Detalhes</button>
    </main>
  );
}

export default HomePage;
