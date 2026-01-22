import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineGlobal } from "react-icons/ai";

function SideContact() {
    return (

            <div className="border rounded p-3">
                <div className='d-flex justify-content-between'>
                    <h5>Headquarters:</h5>
                     <div className="p-1 rounded-1 bg-black">
                        <AiOutlineGlobal size={50} color="white" />
                    </div>
                </div>
                <div className='d-flex flex-wrap gap-1 mb-3'>
                    <span>Global News Wire:</span>
                    <span>123 Main street:</span>
                    <span>New York NY 10001:</span>
                    <span>United States:</span>
                </div>
                <div className='d-flex flex-wrap gap-1 mb-3'>
                    <span>Phone: +1 (500)-500-500</span>
                    <span>Email: <a className='anchor' href="#">info@globalenewswire.com</a></span>
                </div>
                <div className='d-flex flex-wrap gap-1 mb-3'>
                    <h5>For media queries:</h5>
                    <span>Press Contact: Sarah Johnson</span>
                    <span>Email: <a className='anchor' href="#">press@globalnewswire.com</a></span>
                    <span>Phone: +1 (500)-500-1234</span>
                </div>
                <div className='d-flex flex-wrap gap-1 mb-3'>
                    <h5>For Advertising Opportunities:</h5>
                    <span>Advertising Department:</span>
                    <span>Email: <a className='anchor' href="#">advertise@globalnewswire.com</a></span>
                    <span>Phone: +1 (500)-500-5678</span>
                </div>
            </div>
    );
}

export default SideContact;