import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm.jsx";

// Component for creating a new user
function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
