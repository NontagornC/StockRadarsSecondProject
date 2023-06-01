import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [ref, setRef] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://example_endpoint/action_page.php?ref=${encodeURIComponent(
      ref
    )}&email=${encodeURIComponent(email)}`;
    window.location.href = url;
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        action="action_page.php"
        method="get"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md"
      >
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="input-field mb-4"
        />
        <input
          type="text"
          value={surname}
          placeholder="Surname"
          onChange={(e) => setSurName(e.target.value)}
          className="input-field mb-4"
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
          className="input-field mb-4"
        />
        <input
          type="text"
          value={ref}
          placeholder="Ref"
          onChange={(e) => setRef(e.target.value)}
          className="input-field mb-4"
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field mb-4"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Click
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
