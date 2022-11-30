import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("mvoyjzpb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          className="form-control"
          type="email"
          name="email"
          placeholder="Correo electronico"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message">Ingrese un mensaje</label>
        <textarea
          id="message"
          className="form-control"
          name="message"
          placeholder="Mensaje"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="right-display">
        <div className="ml-auto button-submit">
          <button type="submit" disabled={state.submitting}>
            <span>Enviar</span>
          </button>
        </div>
      </div>
    </form>
  );
}
