import 'bootstrap/dist/css/bootstrap.min.css';

function Signform() {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Stay up-to-date with the latest news.</h5>

                
                    <h6>Email address</h6>
                    <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter email" 
                        aria-label="Enter email" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                <a href="#" style={{width: '100%'}} className="btn btn-secondary">Sign me up</a>
            </div>
        </div>
    );
}

export default Signform;
