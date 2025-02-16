import { useState } from "react";

export default function ReactInput() {
  let [message, setMessage] = useState("hey");
  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <p>You typed: {message}</p>
    </div>
  );
}
