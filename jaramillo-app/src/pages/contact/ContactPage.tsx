import Navbar from "../home/components/Navbar";
import EmailForm from "./components/EmailForm";

export default function ContactPage() {
  return (
    <div id="content" className="content-page">
      <Navbar />
      <div className="container mt-3">
        <div className="text-center">
          <h1>Contacto</h1>
        </div>
        <div className="container align-middle email-container">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
