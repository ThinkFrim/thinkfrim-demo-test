// import './home.css';
import Services from '../../sections/services';
import Banner from '../../sections/banner';
import LatestProjects from '../../sections/ourwork';
import Team from '../../sections/team';
import { HashRouter } from 'react-router-dom';
import Footer from '../../components/footer';
import Contactus from '../../sections/contactus';

const Home = () => {
  return (
    <HashRouter>
      <Banner />
      <Services />
      <LatestProjects />
      <Team />
      <Contactus />
      {/* <Footer /> */}
    </HashRouter>
  )
}

export default Home;