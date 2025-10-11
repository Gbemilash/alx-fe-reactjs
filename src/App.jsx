import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      {/* Controlled component version */}
      <RegistrationForm />

      <hr />

      {/* Formik version */}
      <FormikForm />
    </div>
  );
}

export default App;
