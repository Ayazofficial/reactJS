import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function Contact() {
  // const [name, setName] = useState("Shah Rukh");
  // const [Myself, setmame] = useState("Mera Jism Meri Marzi");
  // useEffect(() => {
  //   console.log("I am Hook");
  // });

  let anb = "contact us let data";
  return (
    <div>
      <>
        <Button variant="primary">ABOUT</Button>{" "}
        <Button variant="secondary">SERVICES</Button>{" "}
        <Button variant="success">CONTACT US</Button>{" "}
        <Button variant="warning">SIGN UP</Button>{" "}
      </>
    </div>
  );
}
export default Contact;
