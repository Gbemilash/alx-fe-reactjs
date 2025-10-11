import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>User Registration (Controlled Components)</h1>
      <RegistrationForm />

      <hr style={{ margin: "20px 0" }} />

      <h1>User Registration (Formik)</h1>
      <FormikForm />
    </div>
  );
}

export default App;
