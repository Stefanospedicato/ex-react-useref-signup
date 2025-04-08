import { useState } from "react";

const App = () => {
  const initialFormData = {
    name: "",
    username: "",
    password: "",
    specializzazione: "",
    anni_esperienza: "",
    descrizione: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = (formData) => {
    if (
      formData.name.length > 0 &&
      formData.username.length > 0 &&
      formData.password.length > 0 &&
      formData.specializzazione.length > 0 &&
      parseInt(formData.anni_esperienza) > 0 &&
      formData.descrizione.length > 0
    ) {
      console.log("Il form è compilato correttamente:", formData);
    } else {
      console.log("Compila tutti i campi");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Nome Completo</h3>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleSubmit}
        />
      </form>
      <div>
        <h3>Username</h3>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleSubmit}
        />
      </div>
      <div>
        <h3>Password</h3>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleSubmit}
        />
      </div>
      <div>
        <h3>Specializzazioni</h3>
        <select
          name="specializzazione"
          value={formData.specializzazione}
          onChange={handleSubmit}
        >
          <option>Seleziona specializzazione...</option>
          <option>Full Stack</option>
          <option>Frontend</option>
          <option>Backend</option>
        </select>
      </div>
      <div>
        <h3>Anni di esperienza</h3>
        <input
          name="anni_esperienza"
          type="number"
          value={formData.anni_esperienza}
          onChange={handleSubmit}
          min={0}
        />
      </div>
      <div>
        <h3>Descriviti</h3>
        <textarea
          name="descrizione"
          type="text"
          value={formData.descrizione}
          onChange={handleSubmit}
        />
      </div>
      <button type="submit" onClick={() => isValid(formData)}>
        Invia
      </button>
    </>
  );
};

export default App;
