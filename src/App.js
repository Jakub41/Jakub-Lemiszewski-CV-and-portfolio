import React, { useState, useEffect } from "react";
import Pages from "./pages";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
