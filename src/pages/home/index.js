import './home.css';
import Nav from "../../components/nav";
// import Cards from '../../components/cards';
import Services from '../../sections/services';
import Banner from '../../sections/banner';
import LatestProjects from '../../sections/ourwork';
import Team from '../../sections/team';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <LatestProjects />
      <Team />
    </>
  )
}

export default Home;