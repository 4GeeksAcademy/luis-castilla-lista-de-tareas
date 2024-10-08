import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, setCambiarMostrarCompletadas }) => {
    
    const toggleCompletadas = () => {
        setCambiarMostrarCompletadas(!mostrarCompletadas);
    };

    return (
        <div className="header">
            <h1 className="header__titulo">- Lista de Tareas -</h1>
            <button 
                className="header-boton"
                onClick={toggleCompletadas}
            >
                {mostrarCompletadas ? 
                    <>
                        No mostrar completadas
                        <FontAwesomeIcon 
                        icon={faEyeSlash} 
                        className="header__icono-boton" />
                    </> :
                    <>
                        Mostrar completadas
                        <FontAwesomeIcon 
                        icon={faEye} 
                        className="header__icono-boton" />
                    </>
                }
            </button>

        </div>
    );
};

export default Header;
