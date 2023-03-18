import { Button } from "@/components/Button";
import { getUser } from "@/services/firebase";
import { UserType } from "@/types/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function UserPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { name, githubUrl, linkedinUrl } = user;

  return (
    <section className="container p-4 mx-auto">
      <p>Hello, my name is {name}</p>

      <h1 className="text-3xl font-bold mt-8">My history</h1>

      <p className="mt-6">Lorem ipsum dolor sit amet, consectetur.</p>

      <div className="flex items-center gap-3 mt-6">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button>Github</Button>
        </a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Button>Linkedin</Button>
        </a>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    user: UserType;
  },
  { slug: string }
> = async (context) => {
  const user = await getUser(context.params?.slug || "");

  if (user) {
    return {
      props: {
        user,
      },
    };
  }

  return {
    notFound: true,
  };
};
