import React, { useState, ChangeEvent } from "react";
import { TitulosU, CategoriasEscalafon, ExperienciaCalificada, total_titulos_estudios, total_experiencia_calificada } from "./Fomula";
import InputControl from "../Global/InputControl";

const NominaForm = () => {
    const general = 16441.00;
    const [tituloSeleccionado, setTituloSeleccionado] = useState("");
    const [especializaciones, setEspecializaciones] = useState(0);
    const [magister, setMagister] = useState(0);
    const [doctorado, setDoctorado] = useState(0);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [aniosInvestigacion, setAniosInvestigacion] = useState(0);
    const [aniosDocenciaUniversitaria, setAniosDocenciaUniversitaria] = useState(0);
    const [aniosExperienciaProfesionalDireccionAcademica, setAniosExperienciaProfesionalDireccionAcademica] = useState(0);
    const [aniosExperienciaProfesionalDiferenteDocencia, setAniosExperienciaProfesionalDiferenteDocencia] = useState(0);
    const [totalCalculado, setTotalCalculado] = useState(0);
    const [totalExperienciaCalificada, setTotalExperienciaCalificada] = useState(0);
    const handleChangeTitulo = (event: ChangeEvent<HTMLSelectElement>) => {
        setTituloSeleccionado(event.target.value);
    };

    const handleChangeEspecializaciones = (event: ChangeEvent<HTMLInputElement>) => {
        setEspecializaciones(parseInt(event.target.value));
    };

    const handleChangeMagister = (event: ChangeEvent<HTMLInputElement>) => {
        setMagister(parseInt(event.target.value));
    };

    const handleChangeDoctorado = (event: ChangeEvent<HTMLInputElement>) => {
        setDoctorado(parseInt(event.target.value));
    };

    const handleChangeCategoria = (event: ChangeEvent<HTMLSelectElement>) => {
        setCategoriaSeleccionada(event.target.value);
    };

    const handleChangeAniosInvestigacion = (event: ChangeEvent<HTMLInputElement>) => {
        setAniosInvestigacion(parseInt(event.target.value));
    };

    const handleChangeAniosDocenciaUniversitaria = (event: ChangeEvent<HTMLInputElement>) => {
        setAniosDocenciaUniversitaria(parseInt(event.target.value));
    };

    const handleChangeAniosExperienciaProfesionalDireccionAcademica = (event: ChangeEvent<HTMLInputElement>) => {
        setAniosExperienciaProfesionalDireccionAcademica(parseInt(event.target.value));
    };

    const handleChangeAniosExperienciaProfesionalDiferenteDocencia = (event: ChangeEvent<HTMLInputElement>) => {
        setAniosExperienciaProfesionalDiferenteDocencia(parseInt(event.target.value));
    };
    
    const handleCalcularTotal = () => {
        if (tituloSeleccionado !== "" && categoriaSeleccionada !== "") {
            const tipoTitulo = tituloSeleccionado === "medicos" ? TitulosU.medicos : TitulosU.otros;
            const categoria = categoriaSeleccionada === "Instructor" ? CategoriasEscalafon.Instructor :
                              categoriaSeleccionada === "ProfesorAuxiliar" ? CategoriasEscalafon.ProfesorAuxiliar :
                              categoriaSeleccionada === "InstructorAsistente" ? CategoriasEscalafon.InstructorAsistente :
                              categoriaSeleccionada === "ProfesorAsistente" ? CategoriasEscalafon.ProfesorAsistente :
                              categoriaSeleccionada === "ProfesorAsociado" ? CategoriasEscalafon.ProfesorAsociado :
                              CategoriasEscalafon.ProfesorTitular;
    
            // Llama a total_titulos_estudios con los parámetros correspondientes
            const totalTitulosEstudios = total_titulos_estudios(
                general, 
                tipoTitulo, 
                especializaciones, 
                magister, 
                doctorado, 
                categoria,
                aniosInvestigacion, // Añade los años de experiencia calificada como parámetro
                aniosDocenciaUniversitaria,
                aniosExperienciaProfesionalDireccionAcademica,
                aniosExperienciaProfesionalDiferenteDocencia
            );
            setTotalCalculado(totalTitulosEstudios);
    
            // Llama a total_experiencia_calificada con los parámetros correspondientes
            const totalExperiencia = total_experiencia_calificada(
                aniosInvestigacion,
                aniosDocenciaUniversitaria,
                aniosExperienciaProfesionalDireccionAcademica,
                aniosExperienciaProfesionalDiferenteDocencia,
                general
            );
            setTotalExperienciaCalificada(totalExperiencia);
        }
    };
    
    return (
        <div className="">
            <div className="form-container">
                <h1 className="form-title" > <strong>Esta es la nómina</strong> </h1>
                <form className="">
                <div className="">
                     <label htmlFor="titulo" className="">Tipo de Título Universitario:</label>
                            <select id="titulo" value={tituloSeleccionado} onChange={handleChangeTitulo} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option value="">Selecciona un tipo de título</option>
                                 <option value="medicos">Médicos</option>
                                 <option value="otros">Otros</option>
                           </select>
                </div>
                    <div className="mb-4">
                        <label htmlFor="especializaciones" className="block text-sm font-medium text-gray-700">Especializaciones:</label>
                        <input id="especializaciones" type="number" value={especializaciones} onChange={handleChangeEspecializaciones} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div  className="mb-4">
                        <label htmlFor="magister" className="block text-sm font-medium text-gray-700">Magister o Maestría:</label>
                        <input id="magister" type="number" value={magister} onChange={handleChangeMagister} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="doctorado" className="block text-sm font-medium text-gray-700">Doctorado:</label>
                        <input id="doctorado" type="number" value={doctorado} onChange={handleChangeDoctorado} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoría Escalafón Docente:</label>
                        <select id="categoria" value={categoriaSeleccionada} onChange={handleChangeCategoria} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="">Selecciona una categoría</option>
                            <option value="Instructor">Instructor</option>
                            <option value="ProfesorAuxiliar">Profesor Auxiliar</option>
                            <option value="InstructorAsistente">Instructor Asistente</option>
                            <option value="ProfesorAsistente">Profesor Asistente</option>
                            <option value="ProfesorAsociado">Profesor Asociado</option>
                            <option value="ProfesorTitular">Profesor Titular</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aniosInvestigacion" className="block text-sm font-medium text-gray-700">Años de Experiencia en Investigación:</label>
                        <input id="aniosInvestigacion" type="number" value={aniosInvestigacion} onChange={handleChangeAniosInvestigacion} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aniosDocenciaUniversitaria" className="block text-sm font-medium text-gray-700">Años de Experiencia en Docencia Universitaria:</label>
                        <input id="aniosDocenciaUniversitaria" type="number" value={aniosDocenciaUniversitaria} onChange={handleChangeAniosDocenciaUniversitaria} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aniosExperienciaProfesionalDireccionAcademica" className="block text-sm font-medium text-gray-700">Años de Experiencia en Dirección Académica:</label>
                        <input id="aniosExperienciaProfesionalDireccionAcademica" type="number" value={aniosExperienciaProfesionalDireccionAcademica} onChange={handleChangeAniosExperienciaProfesionalDireccionAcademica} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="aniosExperienciaProfesionalDiferenteDocencia" className="block text-sm font-medium text-gray-700">Años de Experiencia Profesional Diferente a la Docencia:</label>
                        <input id="aniosExperienciaProfesionalDiferenteDocencia" type="number" value={aniosExperienciaProfesionalDiferenteDocencia} onChange={handleChangeAniosExperienciaProfesionalDiferenteDocencia} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={handleCalcularTotal} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Calcular Total
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Total Calculado: {totalCalculado}</p>
                        <p className="text-lg font-semibold">Total Experiencia Calificada: {totalExperienciaCalificada}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NominaForm;
