import './App.scss'
import logo from './images/logo.png'
import hero from './images/hero.gif'
import banner from './images/banner.png'
import Chat from './images/Chat.png'
import Talking from './images/Talking.png'
import { FaCog } from 'react-icons/fa'
import { FaAudioDescription } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'

function App() {
  return (
    <div className="App bg-dark">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top ">
        <div className="container">
          <a href="#" className="navbar-brand">
            <h4>DV</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-sm-flex justify-content-center align-items-center">
                <a href="#learn" className="nav-link text-white  ">
                  Services
                </a>
              </li>
              <li className="nav-item d-sm-flex justify-content-center align-items-center">
                <a href="#questions" className="nav-link text-white">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  <button className="nav-lin btn btn-sm bg-success text-white p-2">
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="img-background">
        <div className="container">
          <div className=" justify-content-center align-items-center">
            {/* <img src={ banner } alt="" /> */}

            <h1 className="text-white display1 pb-3 header-font fw-bold">
              Build Better Websites and Software,{' '}
              <span className="text-success">For Less</span>
            </h1>
            <h2 className="text-white pb-3">
              A <span className="text-success">global</span> DEVELOP L.L.C is a
              custom website and custom software development agency, which
              provides hardworking teams of exceptional developers.
            </h2>
            <h2 className="text-white ">
              Are you a rapidly growing startup or an existing enterprise?{' '}
            </h2>
          </div>
          <button className="btn btn-lg bg-white mt-5 ">TALK WITH US</button>
        </div>
      </main>

      <section className="bg-success p-2 text-white">
        <div className="container">
          <h3>Our Mission</h3>
          <h5>
            To guide the inexperienced and to enable the experienced to shine
            through, fulfilling any and all of your online needs.
          </h5>
        </div>
      </section>

      <section className="bg-black  text-white Sec-pad px-5">
        <div className="container">
          <h1></h1>
          <div className="d-sm-flex">
            <div>
              <div className="d-flex justify-content-center mb-3 ">
                <h1>
                  <FaCode />
                </h1>
              </div>
              <h2 className="px-4 text-md-start">
                Increase revenue through better conversion
              </h2>
              <p className="px-4 text-md-start">
                Identify revenue-impacting issues, understand how many customers
                are affected, and contextualize this data with real user
                sessions.
              </p>
            </div>

            <div>
              <div className="d-flex justify-content-center mb-3">
                <h1>
                  <FaAudioDescription />
                </h1>
              </div>
              <h2 className="px-4 text-md-start">
                Improve organizational efficiency
              </h2>
              <p className="px-4 text-md-start">
                Empower engineers with the data they need to identify,
                troubleshoot, and remediate bugs efficiently and effectively.
              </p>
            </div>

            <div>
              <div className="d-flex justify-content-center mb-3">
                <h1>
                  <FaCog />
                </h1>
              </div>
              <h2 className="px-4  text-md-start">
                Boost customer growth and retention
              </h2>
              <p className="px-4  text-md-start">
                Empower engineers with the data they need to identify,
                troubleshoot, and remediate bugs efficiently and effectively.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center ">
            <button className="btn btn-lg bg-success text-white  mt-5">
              Core Services
            </button>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white ">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div className=" px-2  ">
              <h1 className="text-left text-sm-start py-4 px-3 display-2 pt-xl-5 mt-xl-4  Main-font text-success fw-bold">
                What We Do
              </h1>
              <p className="lead  p-1 pb-3 px-3 text-sm-start fw-bold">
                Whether you running something of your own or looking for us to
                run the development for you, we are here to help. We can provide
                you with talent for your team, or handle all of the development
                ourselves! Other than our development, we provide affordable and
                customizable hosting options, as well as e-invitations.
              </p>
              <button className="btn btn-lg bg-white float-sm-start ms-sm-3">
                Learn More
              </button>
            </div>
            <div>
              <img
                src={Talking}
                alt=""
                className="img-fluid d-none d-md-block "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white ">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div>
              <img src={Chat} alt="" className="img-fluid d-none d-md-block " />
            </div>
            <div className=" px-2  ">
              <h1 className="text-left text-sm-end py-4 px-3 display-2 pt-xl-5 mt-xl-4  Main-font text-success  fw-bold">
                How We Are Different
              </h1>
              <p className="lead  p-1 pb-3 px-3 text-sm-end fw-bold ">
                Being a remote based team we are able to hire developers from
                all over, which means that we are able to assemble a roster of
                high tier developers at an affordable cost. This allows us to
                offer rapid learning, streamlined developers without breaking
                the bank.
              </p>
              <button className="btn btn-lg bg-white float-sm-end me-sm-3 ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-primary p-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-around">
            <div>
              <h1 className="header-font">DV</h1>
            </div>
            <div>
              <h5>ABOUT US</h5>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#learn" className="nav-link text-white  ">
                  Contact Us
                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  How it Works
                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5>SERVICES</h5>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#learn" className="nav-link text-white  ">
                  Website Design
                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  Hosting Options
                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  E-Invitations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5>SOCIAL MEDIA</h5>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#learn" className="nav-link text-white  ">
                  Instagram
                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  Twitter

                  </a>
                </li>
                <li className="nav-item d-sm-flex justify-content-center align-items-center">
                  <a href="#questions" className="nav-link text-white">
                  LinkedIn

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
