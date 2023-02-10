import './home.css';
import Nav from "../../components/nav";
// import styles from '../../styles/colors.module.css'
// import * as styles from './colors.module.css'

const Home = () => {
  return (
    <div className='root'>
      <div className='container box-border py-2'>
        <Nav />
        <div className="main flex items-center justify-between">
          <div className='box-content'>
            <h1 className='text-4xl text-white'>Transform your online image <br />
              with a professional website.</h1>
            <h2 className='text-white py-3'>Get ahead of the competition with a custom-built website</h2>
            <button className='btn p-3' style={{ background: '#f9bc60 ' }}>Discover</button>
          </div>
          <div className='heroContainer flex'>
            <img src="/media/illustrator/WebPageLayout.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;