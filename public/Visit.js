import React from "react";
function Visit() {
  return (
    <div>
      <h1>Hello Form User</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="username"
        value={name}
      />
      <br></br>
      <input
        type="text"
        onChange={(e) => setage(e.target.value)}
        name="age"
        value={age}
      />
      <br></br>
      <input
        type="text"
        onChange={(e) => setaddress(e.target.value)}
        name="address"
        value={address}
      />
      <br></br>
      <button onClick={makeuser}>Create User</button>
    </div>
  );
}
export default Visit;
