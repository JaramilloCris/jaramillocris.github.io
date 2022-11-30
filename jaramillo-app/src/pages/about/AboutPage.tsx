import Footer from "../components/Footer";
import ImageHome from "../home/components/ImageHome";
import Navbar from "../home/components/Navbar";
import AboutInfo from "./components/AboutInfo";

export default function AboutPage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar />
        <div className="container align-middle">
          <div className="row align-items-center">
            <div className="col-7">
              <AboutInfo />
            </div>
            <div className="col-5">
              <ImageHome />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
