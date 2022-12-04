import Footer from "../components/Footer";
import InProgress from "../components/InProgress";
import ImageHome from "../home/components/ImageHome";
import Navbar from "../home/components/Navbar";
import AboutInfo from "./components/AboutInfo";

export default function AboutPage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar section={1} />
        <div className="container align-middle">
          <InProgress />
        </div>
      </section>
      <footer className="footer-custom">
        <Footer />
      </footer>
    </div>
  );
}
