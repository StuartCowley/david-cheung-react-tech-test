import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(<App />);

    expect(rendered).toMatchSnapshot();
  });

  test("renders learn react link", () => {
    render(<App />);

    expect(screen.getByText(/React Tech Test/i)).toBeInTheDocument();
  });
});
