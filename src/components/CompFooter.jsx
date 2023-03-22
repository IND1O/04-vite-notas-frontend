import Logo from "../assets/imagen/logoJMA.jpg";

export const CompFooter = () => {
  const fecha = new Date().getFullYear();

  return (
    <footer>
      <div className="container text-center ">
        <div className="row">
          <div className="col l6 s12">
            <h5>DESING BY :</h5>
            <h6>
              <i className="fa-brands fa-react"></i>
              {"  "}José María Asial Diaz
            </h6>

            <h6>
              <i className="fa-brands fa-whatsapp"></i> +54 9 381 580-7972
            </h6>
            <h6>
              <i className="fa-brands fa-linkedin"></i> José María Asial Diaz
            </h6>

            <h6>
              <i className="fa-solid fa-at"></i> joseasial@alu.frt.unt.edu.ar
            </h6>
            <img
              className="rounded-circle align-item-center"
              src={Logo}
              alt="dev"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-center">
          <strong>Todos los derechos reservados © {fecha} Copyright</strong>
        </div>
      </div>
    </footer>
  );
};
