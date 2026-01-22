import 'bootstrap/dist/css/bootstrap.min.css';
import Signform from './Sign-form'
import SideText from './SideText'

function SideHome() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4>Catch up on the latest global news</h4>
                    <SideText
                        title="Global Health Crisis:"
                        text="New Pandemic Strain Emerges"
                    />
                    <hr />
                    <SideText
                        title="Tech:"
                        text="industry Giants Face Antitrust Probe over Marked Dominance"
                    />
                    <hr />
                    <div className='ms-3'>
                        <p><span className='fw-bolder text-danger'>LIVE:</span> Electric Flying Cars Set to Take to the Skies</p>
                    </div>
                    <hr />
                    <SideText
                        title="Climate:"
                        text="Environmental Activist Rally Against Amazon Rainforest Deforation (3min)"
                    />
                </div>
                <div class="col-12">
                    <Signform />
                </div>
                <div class="col-12">
                    <h4 className='mt-4'>Trending Articles</h4>
                    <SideText
                        title="Medical:"
                        text="Gene Therapy Offers Hope for Incurable Deseases"
                    />
                    <hr />
                    <SideText
                        title="Tech:"
                        text="Emerging Cybersecurity Threats Highlifted in International Conference "
                    />
                    <hr />
                    <SideText
                        title="Science"
                        text="Submersible Mission Uncovers Hidden Ecosytems in Mariana Trench"
                    />
                </div>
            </div>
        </div>
    );
}

export default SideHome;