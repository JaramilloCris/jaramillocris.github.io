import Footer from "../components/Footer";
import Navbar from "../home/components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import dataExperience from "./data";
import Experiences from "./interfaces";

export default function ExperiencePage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar section={2} />

        <div className="container align-middle mt-3">
          <div className="text-center">
            <h1>Experiencias</h1>
          </div>
          <div className="row align-items-center">
            {dataExperience.map((experience: Experiences, index: number) => {
              return (
                <div key={index} className="col-sm-6 col-xs-12">
                  <ExperienceCard experience={experience} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="footer-custom">
        <Footer />
      </footer>
    </div>
  );
}
