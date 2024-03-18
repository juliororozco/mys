import React, { useState, ChangeEvent } from "react";
import { TitulosU, CategoriasEscalafon, ExperienciaCalificada, total_titulos_estudios, total_experiencia_calificada,TipoRevista,
    ModalidadProduccion,
    TipoProduccion,
    TipoObraArtistica,
    TipoInterpretacion, } from "./Fomula";

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
    const [tipoRevista, setTipoRevista] = useState(TipoRevista.A1);
    const [cantidadRevistas, setCantidadRevistas] = useState(0);
    const [modalidadProduccion, setModalidadProduccion] = useState(ModalidadProduccion.Internacional);
    const [cantidadProducciones, setCantidadProducciones] = useState(0);
    const [tipoProduccion, setTipoProduccion] = useState(TipoProduccion.LibrosInvestigacion);
    const [cantidadProduccionesTipo, setCantidadProduccionesTipo] = useState(0);
    const [tipoObra, setTipoObra] = useState(TipoObraArtistica.OriginalInternacional);
    const [cantidadObras, setCantidadObras] = useState(0);
    const [tipoInterpretacion, setTipoInterpretacion] = useState(TipoInterpretacion.Internacional);
    const [cantidadInterpretaciones, setCantidadInterpretaciones] = useState(0);
    const [numeroAutores, setNumeroAutores] = useState(1);


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
    
    const handleChangeTipoRevista = (event: ChangeEvent<HTMLSelectElement>) => {
        setTipoRevista(parseInt(event.target.value));
    };

    const handleChangeCantidadRevistas = (event: ChangeEvent<HTMLInputElement>) => {
        setCantidadRevistas(parseInt(event.target.value));
    };

    const handleChangeModalidadProduccion = (event: ChangeEvent<HTMLSelectElement>) => {
        setModalidadProduccion(parseInt(event.target.value));
    };

    const handleChangeCantidadProducciones = (event: ChangeEvent<HTMLInputElement>) => {
        setCantidadProducciones(parseInt(event.target.value));
    };

    const handleChangeTipoProduccion = (event: ChangeEvent<HTMLSelectElement>) => {
        setTipoProduccion(parseInt(event.target.value));
    };

    const handleChangeCantidadProduccionesTipo = (event: ChangeEvent<HTMLInputElement>) => {
        setCantidadProduccionesTipo(parseInt(event.target.value));
    };

    const handleChangeTipoObra = (event: ChangeEvent<HTMLSelectElement>) => {
        setTipoObra(parseInt(event.target.value));
    };

    const handleChangeCantidadObras = (event: ChangeEvent<HTMLInputElement>) => {
        setCantidadObras(parseInt(event.target.value));
    };

    const handleChangeTipoInterpretacion = (event: ChangeEvent<HTMLSelectElement>) => {
        setTipoInterpretacion(parseInt(event.target.value));
    };

    const handleChangeCantidadInterpretaciones = (event: ChangeEvent<HTMLInputElement>) => {
        setCantidadInterpretaciones(parseInt(event.target.value));
    };

    const handleChangeNumeroAutores = (event: ChangeEvent<HTMLInputElement>) => {
        setNumeroAutores(parseInt(event.target.value));
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
                //categoria 
                categoria,
                //experiencia
                aniosInvestigacion, // Añade los años de experiencia calificada como parámetro
                aniosDocenciaUniversitaria,
                aniosExperienciaProfesionalDireccionAcademica,
                aniosExperienciaProfesionalDiferenteDocencia,
            //productividad
                tipoRevista,
                 cantidadRevistas,
                 modalidadProduccion,
                cantidadProducciones,
                tipoProduccion,
                cantidadProduccionesTipo,
                tipoObra,
                cantidadObras,
                tipoInterpretacion,
                cantidadInterpretaciones,
                numeroAutores
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
                <h1 className="form-title" > <strong>factor titulos universitarios</strong> </h1>
                <form className="">
                <div className="">
                     <label htmlFor="titulo" className="">Tipo de Título Universitario:</label>
                            <select id="titulo" value={tituloSeleccionado} onChange={handleChangeTitulo} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option value="">Selecciona un tipo de título</option>
                                 <option value="medicos">Médicos</option>
                                 <option value="otros">Otros</option>
                           </select>
                </div>
                <h1>Años de estudios Posgrado</h1>
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

                    <h2>Factor categoria de docente</h2>
            
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
                    <h2>Factor de experiencia</h2>
            
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
                    <h2>Formulario de Cálculo de Productividad</h2>
                    <div className="mb-4">
                    ¡Por supuesto! Aquí está el código con el número de actores y la cantidad al lado de cada factor:

```jsx
<div className="mb-4">
    <label htmlFor="tipoRevista" className="block text-sm font-medium text-gray-700">Tipo de Revista:</label>
    <select id="tipoRevista" value={tipoRevista} onChange={handleChangeTipoRevista} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value={TipoRevista.A1}>A1</option>
        <option value={TipoRevista.A2}>A2</option>
        <option value={TipoRevista.B}>B</option>
        <option value={TipoRevista.C}>C</option>
    </select>
    <label htmlFor="cantidadRevistas" className="block text-sm font-medium text-gray-700 mt-2">Cantidad:</label>
    <input id="cantidadRevistas" type="number" value={cantidadRevistas} onChange={handleChangeCantidadRevistas} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>

<div className="mb-4">
    <label htmlFor="modalidadProduccion" className="block text-sm font-medium text-gray-700">Modalidad de Producción:</label>
    <select id="modalidadProduccion" value={modalidadProduccion} onChange={handleChangeModalidadProduccion} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value={ModalidadProduccion.Internacional}>Internacional</option>
        <option value={ModalidadProduccion.Nacional}>Nacional</option>
    </select>
    <label htmlFor="cantidadProducciones" className="block text-sm font-medium text-gray-700 mt-2">Cantidad:</label>
    <input id="cantidadProducciones" type="number" value={cantidadProducciones} onChange={handleChangeCantidadProducciones} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>

<div className="mb-4">
    <label htmlFor="tipoProduccion" className="block text-sm font-medium text-gray-700">Tipo de Producción:</label>
    <select id="tipoProduccion" value={tipoProduccion} onChange={handleChangeTipoProduccion} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value={TipoProduccion.LibrosInvestigacion}>Libros de Investigación</option>
        <option value={TipoProduccion.LibrosTexto}>Libros de Texto</option>
        <option value={TipoProduccion.LibrosEnsayo}>Libros de Ensayo</option>
        <option value={TipoProduccion.Premios}>Premios</option>
        <option value={TipoProduccion.Patentes}>Patentes</option>
        <option value={TipoProduccion.TraduccionesLibros}>Traducciones de Libros</option>
    </select>
    <label htmlFor="cantidadProduccionesTipo" className="block text-sm font-medium text-gray-700 mt-2">Cantidad:</label>
    <input id="cantidadProduccionesTipo" type="number" value={cantidadProduccionesTipo} onChange={handleChangeCantidadProduccionesTipo} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>

<div className="mb-4">
    <label htmlFor="tipoObra" className="block text-sm font-medium text-gray-700">Tipo de Obra Artística:</label>
    <select id="tipoObra" value={tipoObra} onChange={handleChangeTipoObra} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value={TipoObraArtistica.OriginalInternacional}>Original Internacional</option>
        <option value={TipoObraArtistica.OriginalNacional}>Original Nacional</option>
        <option value={TipoObraArtistica.ComplementariaInternacional}>Complementaria Internacional</option>
        <option value={TipoObraArtistica.ComplementariaNacional}>Complementaria Nacional</option>
    </select>
    <label htmlFor="cantidadObras" className="block text-sm font-medium text-gray-700 mt-2">Cantidad:</label>
    <input id="cantidadObras" type="number" value={cantidadObras} onChange={handleChangeCantidadObras} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>

<div className="mb-4">
    <label htmlFor="tipoInterpretacion" className="block text-sm font-medium text-gray-700">Tipo de Interpretación:</label>
    <select id="tipoInterpretacion" value={tipoInterpretacion} onChange={handleChangeTipoInterpretacion} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value={TipoInterpretacion.Internacional}>Internacional</option>
        <option value={TipoInterpretacion.Nacional}>Nacional</option>
    </select>
    <label htmlFor="cantidadInterpretaciones" className="block text-sm font-medium text-gray-700 mt-2">Cantidad:</label>
    <input id="cantidadInterpretaciones" type="number" value={cantidadInterpretaciones} onChange={handleChangeCantidadInterpretaciones} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>

<div className="mb-4">
    <label htmlFor="numeroAutores" className="block text-sm font-medium text-gray-700">Número de Autores:</label>
    <input id="numeroAutores" type="number" value={numeroAutores} onChange={handleChangeNumeroAutores} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</div>
```

Ahora, el número de actores y la cantidad están al lado de cada factor correspondiente.</div>



                        
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
