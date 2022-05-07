import React, { useState } from "react";
function Visit() {
  const [name, newName] = useState("");

  function Update() {
    const newabc = { name };
    alert("Your Name is ", newabc);
    console.warn("Hello", newabc);
  }
  return (
    <div>
      <h5 class="mt-5">Fill The Form</h5>

      <p>Enter your name:</p>
      <input
        type="text"
        onChange={(e) => newName(e.target.value)}
        name="username"
        value={name}
      />
      <button onClick={Update}>Submit</button>
    </div>
  );
}
export default Visit;
