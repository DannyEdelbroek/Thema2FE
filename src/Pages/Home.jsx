import 'bootstrap/dist/css/bootstrap.min.css';
import BigCard from '../Components/BigCard';
import Card from '../Components/Card';
import SideHome from '../Components/SideHome';
import HumanRobot from '/img/humanoid-robot.webp';
import SmallRobot from '/img/small-robot.png';

function Home() {
  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-9 col-12">
          <BigCard />
          <div className="row mt-4">
            <div className="col-lg-6 col-12 mb-4">
              <Card
                picture={HumanRobot}
                pictureAlt="Human Robot"
                title="Researchers Develop Self-Learning Robots"
                cardText="In a significant leap forward..."
              />
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <Card
                picture={SmallRobot}
                pictureAlt="Small Robot"
                title="Astronauts Establish Colony on Mars"
                cardText="Some quick example text..."
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 mb-4">
          <SideHome />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
