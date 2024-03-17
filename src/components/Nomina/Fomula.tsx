// Fórmulas para calcular el precio de títulos de pregrado
const general: number = 16441.00;

export enum TitulosU {
    medicos = 183,
    otros = 178,
}

export function total_pregrado(general: number, Titulos: TitulosU): number {
    if (Titulos === TitulosU.medicos) {
        return general * TitulosU.medicos;
    } else if (Titulos === TitulosU.otros) {
        return general * TitulosU.otros;
    }
    return 0; // Manejo del caso por defecto
}

// Fórmula para calcular puntos del posgrado
export enum TitulosPosgrado {
    Especializacion = 20,
    Magister = 40,
    Doctorado = 80,
}

export function total_posgrado(especializaciones: number, magister: number, doctorado: number, general: number): number {
    let totalPosgrado = 0;

    // Calcula los puntos por especialización
    totalPosgrado += Math.min(especializaciones, 2) * TitulosPosgrado.Especializacion * general;

    // Calcula los puntos por magister o maestría
    totalPosgrado += magister * TitulosPosgrado.Magister * general;

    // Calcula los puntos por doctorado
    totalPosgrado += Math.min(doctorado, 1) * TitulosPosgrado.Doctorado * general;

    // Calcula los puntos adicionales por tener dos títulos de magister o maestría
    if (magister >= 2) {
        totalPosgrado += 20 * general;
    }

    // Calcula los puntos adicionales por tener dos títulos de doctorado
    if (doctorado >= 2) {
        totalPosgrado += 20 * general;
    }

    // Calcula los puntos adicionales por tener magister o maestría junto con especializaciones
    if (magister > 0 && especializaciones > 0) {
        totalPosgrado += 20 * general;
    }

    return Math.min(totalPosgrado, 140 * general); // El máximo puntaje acumulable por títulos de posgrado es de 140 puntos
}

// Fórmula para calcular puntos de categorías
export enum CategoriasEscalafon {
    Instructor = 37,
    ProfesorAuxiliar = 37,
    InstructorAsistente = 37,
    ProfesorAsistente = 58,
    ProfesorAsociado = 74,
    ProfesorTitular = 96,
}

export function total_categorias(categoria: CategoriasEscalafon, general: number): number {
    return categoria * general;
}


//calcular experiencia 
// Enums para representar los diferentes tipos de experiencia calificada
export enum TipoExperiencia {
    Investigacion = 6,
    Docente = 4,
    ProfesionalAcademica = 4,
    ProfesionalNoDocente = 3,
}

// Función para calcular el puntaje por experiencia calificada
export function puntaje_experiencia(investigacion: number, docente: number, profesionalAcademica: number, profesionalNoDocente: number): number {
    let totalPuntaje = 0;

    totalPuntaje += investigacion * TipoExperiencia.Investigacion;
    totalPuntaje += docente * TipoExperiencia.Docente;
    totalPuntaje += profesionalAcademica * TipoExperiencia.ProfesionalAcademica;
    totalPuntaje += profesionalNoDocente * TipoExperiencia.ProfesionalNoDocente;

    return totalPuntaje;
}

// Función para calcular el puntaje máximo según la categoría del docente
export enum ExperienciaCalificada {
    Investigacion = 6,
    DocenciaUniversitaria = 4,
    ExperienciaProfesionalDireccionAcademica = 4,
    ExperienciaProfesionalDiferenteDocencia = 3,
}

export function total_experiencia_calificada(
    aniosInvestigacion: number,
    aniosDocenciaUniversitaria: number,
    aniosExperienciaProfesionalDireccionAcademica: number,
    aniosExperienciaProfesionalDiferenteDocencia: number,
    general: number
): number {
    const puntosInvestigacion = aniosInvestigacion * ExperienciaCalificada.Investigacion * general;
    const puntosDocenciaUniversitaria = aniosDocenciaUniversitaria * ExperienciaCalificada.DocenciaUniversitaria * general;
    const puntosExperienciaProfesionalDireccionAcademica = aniosExperienciaProfesionalDireccionAcademica * ExperienciaCalificada.ExperienciaProfesionalDireccionAcademica * general;
    const puntosExperienciaProfesionalDiferenteDocencia = aniosExperienciaProfesionalDiferenteDocencia * ExperienciaCalificada.ExperienciaProfesionalDiferenteDocencia * general;

    return puntosInvestigacion + puntosDocenciaUniversitaria + puntosExperienciaProfesionalDireccionAcademica + puntosExperienciaProfesionalDiferenteDocencia;
}

// Enums para representar los tipos de revistas
export enum TipoRevista {
    A1 = 15,
    A2 = 12,
    B = 8,
    C = 3,
}

// Función para calcular los puntos de productividad por artículo en revistas especializadas
export function puntos_productividad_revistas(tipoRevista: TipoRevista, cantidad: number, general: number): number {
    return tipoRevista * cantidad * general;
}

// Enums para representar las modalidades de producción de videos, cinematográficas o fonográficas
export enum ModalidadProduccion {
    Internacional = 12,
    Nacional = 7,
}

// Función para calcular los puntos de productividad por producción de videos, cinematográficas o fonográficas
export function puntos_productividad_videos(modalidad: ModalidadProduccion, cantidad: number, general: number): number {
    return modalidad * cantidad * general;
}

// Tipo de producción 
export enum TipoProduccion {
    LibrosInvestigacion = 20,
    LibrosTexto = 15,
    LibrosEnsayo = 15,
    Premios = 15,
    Patentes = 25,
    TraduccionesLibros = 15,
}

// Función para calcular los puntos de productividad por tipo de producción
export function puntos_productividad_produccion(tipoProduccion: TipoProduccion, cantidad: number, general: number): number {
    return tipoProduccion * cantidad * general;
}

// Calcular tipos de obra artística
export enum TipoObraArtistica {
    OriginalInternacional = 20,
    OriginalNacional = 14,
    ComplementariaInternacional = 12,
    ComplementariaNacional = 8,
}

// Función para calcular los puntos de productividad por tipo de obra artística
export function puntos_productividad_obras(tipoObra: TipoObraArtistica, cantidad: number, general: number): number {
    return tipoObra * cantidad * general;
}

// Calcular puntos de interpretación
export enum TipoInterpretacion {
    Internacional = 14,
    Nacional = 8,
}

// Función para calcular los puntos de productividad por tipo de interpretación
export function puntos_productividad_interpretacion(tipoInterpretacion: TipoInterpretacion, cantidad: number, general: number): number {
    return tipoInterpretacion * cantidad * general;
}

// Restricción de puntajes para la misma obra o actividad productiva considerada
export function ajuste_puntajes_anuales(puntajeActual: number, nuevoPuntaje: number): number {
    return Math.max(puntajeActual, nuevoPuntaje);
}

// Restricción de puntajes según el número de autores
export function asignacion_puntajes_autores(puntaje: number, numeroAutores: number): number {
    if (numeroAutores <= 3) {
        return puntaje;
    } else if (numeroAutores >= 4 && numeroAutores <= 5) {
        return puntaje / 2;
    } else {
        return puntaje / (numeroAutores / 2);
    }
}

function totalProductividad(
    tipoRevista: TipoRevista, cantidadRevistas: number, 
    modalidadProduccion: ModalidadProduccion, cantidadProducciones: number, 
    tipoProduccion: TipoProduccion, cantidadProduccionesTipo: number, 
    tipoObra: TipoObraArtistica, cantidadObras: number, 
    tipoInterpretacion: TipoInterpretacion, cantidadInterpretaciones: number, 
    general: number, numeroAutores: number
): number {
    let total = 0;

    // Calcular puntos de productividad por artículo en revistas especializadas
    total += puntos_productividad_revistas(tipoRevista, cantidadRevistas, general);

    // Calcular puntos de productividad por producción de videos, cinematográficas o fonográficas
    total += puntos_productividad_videos(modalidadProduccion, cantidadProducciones, general);

    // Calcular puntos de productividad por tipo de producción
    total += puntos_productividad_produccion(tipoProduccion, cantidadProduccionesTipo, general);

    // Calcular puntos de productividad por tipo de obra artística
    total += puntos_productividad_obras(tipoObra, cantidadObras, general);

    // Calcular puntos de productividad por tipo de interpretación
    total += puntos_productividad_interpretacion(tipoInterpretacion, cantidadInterpretaciones, general);

    // Aplicar restricción de puntajes para el mismo trabajo o actividad productiva considerada
    total = ajuste_puntajes_anuales(0, total);

    // Aplicar restricción de puntajes según el número de autores
    total = asignacion_puntajes_autores(total, numeroAutores);

    return total;
}





// Función para calcular el total de sueldos
export function total_titulos_estudios(
    general: number, 
    Titulos: TitulosU, 
    especializaciones: number, 
    magister: number, 
    doctorado: number, 
    categoria: CategoriasEscalafon,
    aniosInvestigacion: number, 
    aniosDocenciaUniversitaria: number, 
    aniosExperienciaProfesionalDireccionAcademica: number, 
    aniosExperienciaProfesionalDiferenteDocencia: number,
    tipoRevista: TipoRevista, cantidadRevistas: number,
    modalidadProduccion: ModalidadProduccion, cantidadProducciones: number,
    tipoProduccion: TipoProduccion, cantidadProduccionesTipo: number,
    tipoObra: TipoObraArtistica, cantidadObras: number,
    tipoInterpretacion: TipoInterpretacion, cantidadInterpretaciones: number,
    numeroAutores: number
): number {
    const totalPregrado = total_pregrado(general, Titulos);
    const totalPosgrado = total_posgrado(especializaciones, magister, doctorado, general);
    const totalCategorias = total_categorias(categoria, general);
    const totalExperiencia = total_experiencia_calificada(aniosInvestigacion, aniosDocenciaUniversitaria, aniosExperienciaProfesionalDireccionAcademica, aniosExperienciaProfesionalDiferenteDocencia, general);
    const totalP = totalProductividad(
        tipoRevista, cantidadRevistas,
        modalidadProduccion, cantidadProducciones,
        tipoProduccion, cantidadProduccionesTipo,
        tipoObra, cantidadObras,
        tipoInterpretacion, cantidadInterpretaciones,
        general, numeroAutores
    );
    return totalPregrado + totalPosgrado + totalCategorias + totalExperiencia  ;
}
