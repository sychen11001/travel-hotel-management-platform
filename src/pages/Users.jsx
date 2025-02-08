import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">创建新员工账号</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
