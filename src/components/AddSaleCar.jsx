import './addSaleCar.css';
import car from '../img/car.gif'
const AddSaleCar = () => {
    return (
        <div className='addSaleCar p-5'>
           <div className="innerleft">
           <form>
                <div class="mb-3">
                    
                    <input type="text" class="form-control"placeholder='Enter Car Brand' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="mb-3">
                    
                    <input type="text" class="form-control" placeholder='Enter Car Model' id=""/>
                </div>
                <div class="mb-3">
                   
                    <input type="text" class="form-control" placeholder='Enter Car Price' id=""/>
                </div>
                <div class="form-floating ">
                    <textarea class="form-control " placeholder="Add Car Discription" id="floatingTextarea"></textarea>
                    
                </div>

                <div class="custom-file mt-2 mb-2">
                    <input type="file" class="custom-file-input" id="customFile"/>
                    <label class="custom-file-label ml-auto" for="customFile">Car Image</label>
                </div>
                
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
           </div>
           <div className="innerright">
            <img src={car} alt="car" />
           </div>
        </div>
    );
}

export default AddSaleCar;
