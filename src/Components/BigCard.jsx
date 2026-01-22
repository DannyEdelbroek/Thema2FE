import 'bootstrap/dist/css/bootstrap.min.css';
import picture from '/img/PictureBig.webp';

function BigCard() {
    return (
        <div className="card">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-semibold">Breakthrough in renewable Energy: Solar Panels Now 50% More Efficient</h5>
                <p claclassNames="card-text">Scientist at the forefront of renewable energy research have announced a groundbreaking advancement in solar panel technology. The new panels boast a remarkable 50% increase.</p>
                <a href="#" style={{ width: '100%' }} className="btn btn-primary button-red border-0">Read more</a>
            </div>
        </div>
    );
}

export default BigCard;




