import React, { useEffect, useState } from 'react';
import './leccionDetallada.css';
import { lista_fechas } from '../../Data';
import SideBar from '../SideBar/SideBar';
import { lista_lecciones } from '../../Data';
import Imagen from '../../assets/imagen_mas.png'
import Hombre from '../../assets/hombre.jpg';
import Youtube from '../../assets/youtube.avif';
import { leccionDetallada, lista_temas } from '../../Data';
import 'boxicons';
import { useParams } from 'react-router-dom';


const LeccionDetallada = () => {
    const [token, setToken] = useState(useParams().accessToken);

const clikQuiz = () =>{
    window.location.href = `/EduWave/${token}/tarea/examen`;
}

const clikTarea = () =>{
    window.location.href = `/EduWave/${token}/tarea`;
}


    return (

        <div className="curso_det_body">
            <div className="sidebar_home">
                <SideBar accessToken={token}/>
            </div>
            <div className="leccion_det_content">
                <div className="leccion_content">               
                    <div className="detalles_leccion">
                        <h1 className="nombre_leccion_det">{leccionDetallada.nombre}</h1>
                        <p className="p_leccion">{leccionDetallada.descripcion_corta} 
                        <br/> {leccionDetallada.descripcion_corta}
                        <br/>{leccionDetallada.descripcion_corta}
                        <br/>{leccionDetallada.descripcion_corta}
                        </p>
                        <img src={Youtube}></img>
                    </div>
                    <div className="tareas_l_detallada" onClick={clikQuiz}>
                       <h3 classname="nonmbre_tema xd">
                            Quiz lección
                       </h3>
                       <br></br>
                       <h3 className="nonmbre_tema xd" onClick={clikTarea}>
                            Tarea Lección
                       </h3>
                    </div>
                </div>
                <div className="adicionales">
                    <h3 className="titulo_material">Material adicional</h3>
                    <div className="div_temas">
                        {
                            lista_temas.map(({ nombre, archivos }, index) => {
                                return (
                                    <div key={index} className="detalle_tema">
                                        <h3 className="nonmbre_tema">{nombre}</h3>
                                        {
                                            archivos.map(({nombre}, index) =>
                                                {
                                                    return(
                                                        <div className="detalle_archivos">
                                                            <h4 className="nombre_archivo">{nombre}</h4>
                                                        </div>
                                                    );
                                                })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="botones">
                        <div className="btn_terminada">
                            terminada
                        </div>
                        <div className="btn_next">
                            <box-icon type='solid' name='chevron-right'></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeccionDetallada;