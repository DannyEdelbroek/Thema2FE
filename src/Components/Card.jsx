import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.picture} className="card-img-top" alt={props.pictureAlt} />
            <div className="card-body">
                <h5 className="card-title fw-semibold">{props.title}</h5>
                <p claclassNames="card-text">{props.cardText}</p>
                <a href="#" style={{ width: '100%' }} className="btn btn-primary button-red border-0">Read more</a>
            </div>
        </div>
    );
}

export default Card;