import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(<App />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert nasa-logo is present", () => {
    render(<App />);

    expect(screen.getByRole("img")).toHaveClass("nasa-logo");
  });
});
