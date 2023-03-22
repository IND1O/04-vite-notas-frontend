import Logo from "../assets/imagen/logo.gif";
import { CompFooter } from "./CompFooter";
import { CompLinea } from "./CompLinea";

export const CompError404 = () => {
  return (
    <>
      <div className="mb-4">
        <div className="alert alert-danger text-center" role="alert">
          <h2>Pagina no encontrada!</h2>
          <h3>Error 404</h3>
        </div>
        <h3 className="text-alert">Not Found</h3>
        <img src={Logo} alt="error404" />
        <h1 className="text-dark">Que la fuerza te acompañe ...</h1>
      </div>
      <CompLinea />
      <CompFooter />
    </>
  );
};
