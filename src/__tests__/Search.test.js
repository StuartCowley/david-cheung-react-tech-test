import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Search from "../components/Search";
import { fn } from "sequelize";

describe("Search", () => {
  const validProps = {
    setFetchData: jest.fn(),
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Search setFetchData={validProps.setFetchData} />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert search-input is present", () => {
    render(<Search setFetchData={validProps.setFetchData} />);

    expect(screen.getByRole("textbox")).toHaveClass("search-input");
  });

  test("Assert one button is present", () => {
    render(<Search setFetchData={validProps.setFetchData} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Go!");
  });
});
