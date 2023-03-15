import { Button } from "../Button";
import { TextInput } from "../TextInput";

export const Form = () => {
  return (
    <form className="space-y-8 mt-8">
      <TextInput label="Name" placeholder="Type your name" />
      <TextInput label="Linkedin URL" placeholder="Type the URL" />
      <TextInput label="Github URL" placeholder="Type the URL" />
      <Button className="w-96">
        Generate Image
      </Button>
    </form>
  );
};
