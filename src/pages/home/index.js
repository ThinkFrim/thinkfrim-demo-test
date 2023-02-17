import './home.css';
import Nav from "../../components/nav";
import Cards from '../../components/cards';
import Services from '../services';

const Home = () => {
  return (
    <div className='ms:container h-max'>
      <div className='header darkGreenBg p-6' style={{ height: '100%' }}>
        <div className='header'>
          <Nav />
        </div>
        {/* Hero Section */}
        <div className='mainContainer flex max-sm:flex max-sm:flex-col items-center justify-between px-20'>
          <div>
            <h1 className='White text-5xl font-medium py-3'>Transform your online image <br /> with a professional website.</h1>
            <h2 className='White text-3xl font-light py-4'>Get ahead of the competition with <br /> a custom-built website</h2>
            <div>
              <button className='RajahBg p-3 rounded-xl w-1/4 font-bold text-lg'>Discover</button>
            </div>
          </div>
          <div>
            <img src="/media/illustrator/WebDesign.svg" alt="" />
          </div>
        </div>
        {/* Service section */}
      </div>
      <Services />
    </div>
  )
}

export default Home;