import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <p>{JSON.stringify(form)}</p> */}
        <div className="flex flex-col items-center justify-center">
          <span>Username</span>
          <input
            name="username"
            className="rounded-2xl"
            type="text"
            onChange={handleForm}
          />
          <span>Password</span>
          <input
            name="password"
            className="rounded-2xl"
            type="text"
            f
            onChange={handleForm}
          />
          <input className="mt-10 " type="submit" />
        </div>
      </form>
    </>
  );
}

export default App;
