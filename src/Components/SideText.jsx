import 'bootstrap/dist/css/bootstrap.min.css';

function SideText(props) {
    return (
        <>
            <div className='ms-3'>
                <p><span className='fw-bolder'>{props.title}</span> {props.text}</p>
            </div>
        </>
    );
}

export default SideText;