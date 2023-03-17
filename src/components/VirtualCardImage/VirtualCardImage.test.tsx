import { render } from "@testing-library/react";
import { VirtualCardImage } from ".";

describe("VirtualCardImage", () => {
  const name = "Mark";

  it("renders the virtual card", () => {
    const { getByText } = render(
      <VirtualCardImage name={name} url="https://google.com" />
    );

    expect(getByText(name)).toBeInTheDocument();
  });
});
