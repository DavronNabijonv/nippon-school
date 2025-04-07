import "./App.css";
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
import News from "./sections/news";
import Result_section from "./sections/result_section";
import Styde_center from "./sections/styde_center";
import Univer_section from "./sections/univer_section";

function App() {
  return (
    <div className="opacity ">
      <navbar>
        <Navbar/>
      </navbar>

      <section id="home" >
        <Home_section/>
      </section>

      <News/>
      <Styde_center/>
      <Get_results/>
      <Grant_100/>

      <section id="result" >
        <Result_section/>
      </section>

      <Univer_section/>

      <section id="kurslar" >
        <Kurs_section />
      </section>

      <Licence/>
      <For_section/>

      <section id="faq" >
        <Faq/>
      </section>

      <Contact  />

      <footer>
        <Foot/>
      </footer>
    </div>
  );
}

export default App;
