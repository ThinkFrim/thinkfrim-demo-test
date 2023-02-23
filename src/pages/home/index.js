import './home.css';
import Nav from "../../components/nav";
// import Cards from '../../components/cards';
import Services from '../../sections/services';
import Banner from '../../sections/banner';
import LatestProjects from '../../sections/ourwork';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <LatestProjects />
    </>

  )
}

export default Home;