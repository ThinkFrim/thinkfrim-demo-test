import './home.css';
import Services from '../../sections/services';
import Banner from '../../sections/banner';
import LatestProjects from '../../sections/ourwork';
import Team from '../../sections/team';
import { HashRouter } from 'react-router-dom';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <HashRouter>
      <Banner />
      <Services />
      <LatestProjects />
      <Team />
      {/* <Footer /> */}
    </HashRouter>
  )
}

export default Home;