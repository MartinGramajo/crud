import React, { useState } from "react";
import FormLogin from "../components/FormLogin";

export default function Home() {
  const [user, setUser] = useState("");

  return (
    <div className="d-flex  height-centrado centrado bg-home">
      <FormLogin setUser={setUser} />
    </div>
  );
}
