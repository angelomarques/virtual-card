import { fireEvent, render } from "@testing-library/react";
import { TextInput } from ".";

describe("TextInput", () => {
  const inputName = "input_name";

  it("renders label and input", () => {
    const { getByLabelText } = render(<TextInput label={inputName} />);
    
    expect(getByLabelText(inputName)).toBeInTheDocument();
  });

  it("handles input changes", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TextInput label={inputName} onChange={handleChange} />
    );

    const input = getByLabelText(inputName) as HTMLInputElement;
    const inputValue = "Mark";

    fireEvent.change(input, { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalled();
    expect(input.value).toBe(inputValue);
  });
});
