import React, { useState, ChangeEvent } from "react";
import { total_titulos_estudios, TitulosU, CategoriasEscalafon } from "./Fomula";

const NominaForm = () => {
    const general = 16441.00;
    const [tituloSeleccionado, setTituloSeleccionado] = useState("");
    const [especializaciones, setEspecializaciones] = useState(0);
    const [magister, setMagister] = useState(0);
    const [doctorado, setDoctorado] = useState(0);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [totalCalculado, setTotalCalculado] = useState(0);

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

    const handleCalcularTotal = () => {
        if (tituloSeleccionado !== "" && categoriaSeleccionada !== "") {
            const tipoTitulo = tituloSeleccionado === "medicos" ? TitulosU.medicos : TitulosU.otros;
            const categoria = parseInt(categoriaSeleccionada);
            const total = total_titulos_estudios(general, tipoTitulo, especializaciones, magister, doctorado, categoria);
            setTotalCalculado(total);
        }
    };

    return (
        <div className="">
            <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4">Calculo de nomina de docentes de planta</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Tipo de Título Universitario:</label>
                        <select id="titulo" value={tituloSeleccionado} onChange={handleChangeTitulo} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="">Selecciona un tipo de título</option>
                            <option value="medicos"> Estudios Médicos</option>
                            <option value="otros">otros estudios</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="especializaciones" className="block text-sm font-medium text-gray-700">Especializaciones años de estudios:</label>
                        <input id="especializaciones" type="number" value={especializaciones} onChange={handleChangeEspecializaciones} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="magister" className="block text-sm font-medium text-gray-700">Magister o Maestría años de estudios:</label>
                        <input id="magister" type="number" value={magister} onChange={handleChangeMagister} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="doctorado" className="block text-sm font-medium text-gray-700">Doctorado años de estudios:</label>
                        <input id="doctorado" type="number" value={doctorado} onChange={handleChangeDoctorado} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoría Académica:</label>
                        <select id="categoria" value={categoriaSeleccionada} onChange={handleChangeCategoria} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="">Selecciona una categoría</option>
                            <option value={CategoriasEscalafon.Instructor}>Instructor</option>
                            <option value={CategoriasEscalafon.ProfesorAuxiliar}>Profesor Auxiliar</option>
                            <option value={CategoriasEscalafon.InstructorAsistente}>Instructor Asistente</option>
                            <option value={CategoriasEscalafon.ProfesorAsistente}>Profesor Asistente</option>
                            <option value={CategoriasEscalafon.ProfesorAsociado}>Profesor Asociado</option>
                            <option value={CategoriasEscalafon.ProfesorTitular}>Profesor Titular</option>
                        </select>
                    </div>
                    <button type="button" onClick={handleCalcularTotal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Calcular</button>
                </form>
                {totalCalculado !== 0 && (
                    <p className="mt-4">Total calculado: {totalCalculado}</p>
                )}
            </div>
        </div>
    );
};

export default NominaForm;
