import Footer from "../components/Footer";
import Navbar from "../home/components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import dataExperience from "./data";
import Experiences from "./interfaces";

export default function ExperiencePage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar />

        <div className="container align-middle mt-3">
          <div className="text-center">
            <h1>Experiencias</h1>
          </div>
          <div className="row align-items-center">
            {dataExperience.map((experience: Experiences) => {
              return (
                <div className="col-sm-6 col-xs-12">
                  <ExperienceCard experience={experience} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}