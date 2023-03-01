import Services from '../../sections/services';
import Banner from '../../sections/banner';
import LatestProjects from '../../sections/ourwork';
import Team from '../../sections/team';
import { HashRouter } from 'react-router-dom';
import Contactus from '../../sections/contactus';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <LatestProjects />
      <Team />
      <Contactus />
    </>
  )
}

export default Home;