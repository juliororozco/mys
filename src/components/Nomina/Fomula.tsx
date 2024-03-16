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

// Función para calcular el total de sueldos
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
    aniosExperienciaProfesionalDiferenteDocencia: number
): number {
    const totalPregrado = total_pregrado(general, Titulos);
    const totalPosgrado = total_posgrado(especializaciones, magister, doctorado, general);
    const totalCategorias = total_categorias(categoria, general);
    const totalExperiencia = total_experiencia_calificada(aniosInvestigacion, aniosDocenciaUniversitaria, aniosExperienciaProfesionalDireccionAcademica, aniosExperienciaProfesionalDiferenteDocencia, general);
    return totalPregrado + totalPosgrado + totalCategorias + totalExperiencia;
}
