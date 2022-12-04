import { useCallback, useState } from "react";
import Footer from "../components/Footer";
import HomeInfo from "./components/HomeInfo";
import ImageHome from "./components/ImageHome";
import InfoMyHabilities from "./components/InfoMyHabilities.tsx";
import Navbar from "./components/Navbar";

export default function HomePage() {
  const [section, setSection] = useState(0);
  const [time, setTime] = useState(0);

  const checkSection = useCallback(
    (newSection: number) => {
      if (newSection >= 0 && newSection <= 3) {
        setSection(newSection);
      }
    },
    [section]
  );

  const handleNavigation = useCallback(
    (e: any) => {
      const current: number = Date.now();
      if (current - time > 2000) {
        if (e !== undefined && e.nativeEvent.wheelDelta > 0) {
          checkSection(section - 1);
        } else if (e !== undefined && e.nativeEvent.wheelDelta < 0) {
          checkSection(section + 1);
        }
        setTime(Date.now());
      }
    },
    [section]
  );

  return (
    <div className="content-page">
      <section id="content" onWheel={(e) => handleNavigation(e)}>
        <Navbar />

        <div className="container align-middle">
          <div
            className={
              "row align-items-center " + (section === 0 ? "" : "section-hide")
            }
          >
            <div className="col-sm-7 col-xs-12">
              <HomeInfo />
            </div>
            <div className="col-sm-5 hidden-xs">
              <ImageHome />
            </div>
          </div>
          <div
            className={
              "info-habilities " + (section >= 1 ? "" : "section-hide")
            }
          >
            <InfoMyHabilities section={section} />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
