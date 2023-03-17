import { Form } from "@/components/Form";
import { FormData } from "@/types/data";

export default function Home() {
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="container p-4">
      <h1 className="text-2xl font-medium ml-20">QR Code Image Generator</h1>

      <Form onSubmit={handleFormSubmit} />
    </section>
  );
}
