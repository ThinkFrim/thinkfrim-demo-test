import './home.css';
import Nav from "../../components/nav";
// import styles from '../../styles/colors.module.css'
// import * as styles from './colors.module.css'

const Home = () => {
  return (
    <div className='root'>
      <div className='Container'>
        <div className='hero'>
          <Nav />
          <div className="contentContainer">
            <div className="content">
              <h1 className='text-6xl text-white py-5'>
                Transform your online image <br />
                with a professional website.
              </h1>
              <h2 className='text-3xl text-white py-5'>Get ahead of the competition with, <br /> a custom-built website</h2>
              <div>
                <button className='discoverButton'>Discover</button>
              </div>
            </div>

            <div>
              <img src="/media/illustrator/Web page layout for web design.svg" alt="" style={{ width: '555px' }} />
            </div>

          </div>
        </div>
        <div className='aboutSection'>
        <div className='aboutContainer'>
          <div className='content flex items-center justify-between'>
            <div className='title'>
              <h1 className='text-6xl'>Services ,<br /> we provide</h1>
            </div>
            <div className='subtitle'>
              <h2 className='text-2xl'>We're a full-service web agency specializing in <br /> custom website design, development, maintenance, optimization, <br /> and marketing. Our expert team creates beautiful, user- <br /> friendly websites that drive results.</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home;