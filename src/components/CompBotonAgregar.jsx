import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const CompBotonAgregar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/add");
  };

  return (
    <div className="mt-2 mb-2">
      <Button className="btn btn-outline-dark" onClick={handleClick}>
        <i className="fa-regular fa-circle-check"> AGREGAR NOTA</i>
      </Button>
    </div>
  );
};

const keyframesGlowing = keyframes`
    0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Button = styled.button`
  background: black;
  cursor: pointer;
  border: none;
  padding: 16px 32px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  border-radius: 12px;

  &&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      deeppink,
      blue,
      red,
      blue,
      deeppink,
      blue
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: ${keyframesGlowing} 20s linear infinite;
  }
`;
