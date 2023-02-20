import './home.css';
import Nav from "../../components/nav";
// import Cards from '../../components/cards';
import Services from '../../sections/services';
import Banner from '../../sections/banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div style={{ height: '100px' }}>
        <Services />
      </div>
    </div>
  )
}

export default Home;