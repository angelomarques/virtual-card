import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  const buttonContent = "Click me!";

  it("renders the button", () => {
    const { getByText } = render(<Button>{buttonContent}</Button>);

    expect(getByText(buttonContent)).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>{buttonContent}</Button>
    );

    const button = getByText(buttonContent);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
