import { useState } from 'react';
import AddRentCar from './AddRentCar';
import AddSaleCar from './AddSaleCar';
import './mdashbord.css';
import Mnav from './Mnav';
import Sidebar from './Sidebar';

const Mdeshbord = () => {
    const [addCar, setAddCar] = useState(false);
    const [addSaleCar, setAddSaleCar] = useState(false);
    const [totalCars, setTotalCars] = useState(false);
    const [rentCars, setRentCars] = useState(false);
    const [saleCars, setSaleCars] = useState(false);

    let show=()=>{
        setAddCar(true)

        setAddSaleCar(false)
        setTotalCars(false)
        setRentCars(false)
        setSaleCars(false)
    }
    let show2=()=>{
        setAddSaleCar(true)
        
        setAddCar(false)
        setTotalCars(false)
        setRentCars(false)
        setSaleCars(false)


    }
    let show3=()=>{
        setTotalCars(true)

        setAddSaleCar(false)
        setAddCar(false)
        setRentCars(false)
        setSaleCars(false)

    }
    let show4=()=>{
        setRentCars(true)

        setTotalCars(false)
        setAddSaleCar(false)
        setAddCar(false)
        setSaleCars(false)

    }
    let show5=()=>{
        setSaleCars(true)

        setRentCars(false)
        setTotalCars(false)
        setAddSaleCar(false)
        setAddCar(false)
    }
    
    return (
        <>    
        <Mnav/>
        <div className='Mdashbord '>
        
        <div className='sbar'>
            <Sidebar/>
        </div>
           <div className="mainboard">
            <div className="btnbar">
                <div className="btn btn1" onClick={show}>Add for rent</div>
                <div className="btn btn2" onClick={show2}>Add for sale</div>
                <div className="btn btn3" onClick={show3}>Tolal Cars</div>
                <div className="btn btn4" onClick={show4}>Cars for rent </div>
                <div className="btn btn5" onClick={show5}>Cars for sale</div>
            </div>
            <div className="showcase">
                {addCar  && <AddRentCar/>}
                {addSaleCar  && <AddSaleCar/>}
                {totalCars  && <h1>All Cars</h1>}
                {rentCars  && <h1>Cars For Rent</h1>}
                {saleCars  && <h1>Cars For Sale</h1>}
            </div>
           </div>
        </div>
        </>

    );
}

export default Mdeshbord;
