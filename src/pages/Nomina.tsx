import CardsForm from "../components/Global/CardsForm"
import NominaForm from "../components/Nomina/FormNomina"
import "../App.css"

const Nomina = () => {
    return (
      <>
        <div className="flex justify-center items-center text-7xl text-black font-medium pt-10 border-[#967460] ">
          <strong> CALULO DE NOMINA DE DOCENTES </strong> 
        </div>
        <CardsForm Component={NominaForm} />
      </>
      
    )
  }
  export default Nomina
  