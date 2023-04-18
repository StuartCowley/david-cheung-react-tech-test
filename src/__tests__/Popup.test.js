import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Popup from "../components/Popup";

describe("Popup", () => {
  const validProps = {
    setButtonPopup: jest.fn(),
    src: { href: "test-src", title: "test-title" },
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Popup setButtonPopup={validProps.setButtonPopup} src={validProps.src} />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert one close button is present", () => {
    render(
      <Popup setButtonPopup={validProps.setButtonPopup} src={validProps.src} />
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("X");
  });

  test("Assert one img is present", () => {
    render(
      <Popup setButtonPopup={validProps.setButtonPopup} src={validProps.src} />
    );
    const imgs = screen.getAllByRole("img");

    expect(imgs).toHaveLength(1);
    expect(imgs[0]).toHaveAttribute("src", "test-src");
  });

  test("Assert one text element is present", () => {
    render(
      <Popup setButtonPopup={validProps.setButtonPopup} src={validProps.src} />
    );

    expect(screen.getByText("test-title")).toBeTruthy();
    expect(screen.getByText("test-title")).toBeInstanceOf(HTMLParagraphElement);
  });
});
