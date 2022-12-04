import Footer from "../components/Footer";
import InProgress from "../components/InProgress";
import ImageHome from "../home/components/ImageHome";
import Navbar from "../home/components/Navbar";
import AboutInfo from "./components/AboutInfo";

export default function AboutPage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar />
        <div className="container align-middle">
          <InProgress />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
