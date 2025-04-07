import "./App.css";
import Request_answer from "./components/request_answer";
import Foot from "./foot_nav/foot";
import Navbar from "./foot_nav/nav";
import Contact from "./sections/contact";
import Faq from "./sections/faq";
import For_section from "./sections/for_section";
import Get_results from "./sections/get_results";
import Grant_100 from "./sections/grant_100";
import Home_section from "./sections/home_section";
import Kurs_section from "./sections/kurs_section";
import Licence from "./sections/licence";
import Modal_section from "./sections/modal/modal";
import News from "./sections/news";
import Result_section from "./sections/result_section";
import Styde_center from "./sections/styde_center";
import Univer_section from "./sections/univer_section";

function App() {
  return (
    <div className="opacity ">
      <navbar>
        <Navbar />
      </navbar>

    
        <Modal_section />

      <section id="home">
        <Home_section />
      </section>

      <News />
      <Styde_center />
      <Get_results />
      <Grant_100 />

      <section id="natija">
        <Result_section />
      </section>

      <Univer_section />

      <section id="kurslar">
        <Kurs_section />
      </section>

      <Licence />
      <section id="negabiz">
        <For_section />
      </section>

      <section id="savollar">
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
