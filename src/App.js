import { useState } from "react";

export default function SignupForm() {
  const [value, setValue] = useState("");
  const [mail, setMail] = useState("");

  const display = (e) => {
    e.preventDefault();
    setValue("");
    setMail("");
    console.log(value, mail);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          value={value}
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          value={mail}
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
