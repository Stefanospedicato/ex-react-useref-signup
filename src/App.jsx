import { useState, useRef } from "react";

const App = () => {
  const initialFormData = {
    username: "",
    password: "",
    descrizione: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const nameRef = useRef();
  const specRef = useRef();
  const anniRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const specializzazione = specRef.current.value;
    const anni_esperienza = anniRef.current.value;

    const completeFormData = {
      ...formData,
      name,
      specializzazione,
      anni_esperienza,
    };

    isValid(completeFormData);
  };

  const isValid = (data) => {
    if (
      data.name.length > 0 &&
      data.username.length > 0 &&
      data.password.length > 0 &&
      data.specializzazione.length > 0 &&
      parseInt(data.anni_esperienza) > 0 &&
      data.descrizione.length > 100
    ) {
      console.log("Il form è compilato correttamente:", data);
    } else {
      console.log("Compila tutti i campi");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Nome Completo</h3>
        <input name="name" type="text" ref={nameRef} />
      </div>
      <div>
        <h3>Username</h3>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Password</h3>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Specializzazioni</h3>
        <select name="specializzazione" ref={specRef}>
          <option value="">Seleziona specializzazione...</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </div>
      <div>
        <h3>Anni di esperienza</h3>
        <input name="anni_esperienza" type="number" ref={anniRef} min={0} />
      </div>
      <div>
        <h3>Descriviti</h3>
        <textarea
          name="descrizione"
          value={formData.descrizione}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Invia</button>
    </form>
  );
};

export default App;
