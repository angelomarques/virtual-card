import { fireEvent, render, waitFor } from "@testing-library/react";
import { Form } from ".";

describe("Form", () => {
  const nameInputLabel = "Name";
  const linkedinInputLabel = "Linkedin URL";
  const githubInputLabel = "Github URL";
  const submitButtonContent = "Generate Image";

  const nameInputError = "Name is required";
  const urlInputError = "Invalid URL";

  it("renders the inputs", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText } = render(<Form onSubmit={handleSubmit} />);

    expect(getByLabelText(nameInputLabel)).toBeInTheDocument();
    expect(getByLabelText(linkedinInputLabel)).toBeInTheDocument();
    expect(getByLabelText(githubInputLabel)).toBeInTheDocument();
  });

  it("should handle input errors", async () => {
    const handleSubmit = jest.fn();
    const { getByText, queryAllByText } = render(
      <Form onSubmit={handleSubmit} />
    );

    const submitButton = getByText(submitButtonContent);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText(nameInputError)).toBeInTheDocument();
      expect(queryAllByText(urlInputError).length).toBe(2);
      expect(handleSubmit).not.toBeCalled();
    });
  });

  it("should be submitted successfuly", async () => {
    const handleSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <Form onSubmit={handleSubmit} />
    );

    const nameInput = getByLabelText(nameInputLabel) as HTMLInputElement;
    const nameValue = "Mark";
    const githubUrlInput = getByLabelText(githubInputLabel) as HTMLInputElement;
    const githubUrlValue = "https://google.com";
    const linkedinUrlInput = getByLabelText(
      linkedinInputLabel
    ) as HTMLInputElement;
    const linkedinUrlValue = "https://google.com";

    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(githubUrlInput, { target: { value: githubUrlValue } });
    fireEvent.change(linkedinUrlInput, { target: { value: linkedinUrlValue } });

    const submitButton = getByText(submitButtonContent);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toBeCalled();
      expect(handleSubmit.mock.calls[0][0]).toEqual({
        name: nameValue,
        linkedinUrl: linkedinUrlValue,
        githubUrl: githubUrlValue,
      })
    });
  });
});
