import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import axios from "axios";
import App from "../components/App";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renders as expected", () => {
    const rendered = renderer.create(<App />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert nasa-logo is present", () => {
    render(<App />);

    expect(screen.getByRole("img")).toHaveClass("nasa-logo");
  });

  test("Renders images once data has been fetched from API", async () => {
    const mAxiosResponse = {
      data: {
        collection: {
          items: [
            {
              data: [{ media_type: "image", title: "image-title1" }],
              links: [{ href: "image-href1" }],
            },
            {
              data: [{ media_type: "image", title: "image-title2" }],
              links: [{ href: "image-href2" }],
            },
            {
              data: [{ media_type: "image", title: "image-title3" }],
              links: [{ href: "image-href3" }],
            },
          ],
        },
      },
    };
    jest.spyOn(axios, "get").mockResolvedValue(mAxiosResponse);
    render(<App />);
    const textBox = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");
    fireEvent.change(textBox, { target: { value: "moon" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const newImgs = screen.getAllByRole("img");
      expect(newImgs).toHaveLength(4);
    });
  });
});
