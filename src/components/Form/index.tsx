import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormData } from "@/types/data";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  linkedinUrl: z
    .string()
    .url("Invalid URL")
    .nonempty("Linkedin URL is required"),
  githubUrl: z.string().url("Invalid URL").nonempty("Github URL is required"),
});

interface Props {
  onSubmit: (data: FormData) => void;
}

export const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form className="space-y-8 mt-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <TextInput
          label="Name"
          placeholder="Type your name"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <TextInput
          label="Linkedin URL"
          placeholder="Type the URL"
          {...register("linkedinUrl")}
        />
        {errors.linkedinUrl && (
          <p className="text-red-500">{errors.linkedinUrl.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <TextInput
          label="Github URL"
          placeholder="Type the URL"
          {...register("githubUrl")}
        />
        {errors.githubUrl && (
          <p className="text-red-500">{errors.githubUrl.message}</p>
        )}
      </div>
      
      <Button className="w-96" type="submit">
        Generate Image
      </Button>
    </form>
  );
};
