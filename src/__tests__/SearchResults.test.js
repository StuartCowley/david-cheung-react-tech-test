import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    fetchData: [
      { href: "image-href1", title: "image-title1" },
      { href: "image-href2", title: "image-title2" },
      { href: "image-href3", title: "image-title3" },
    ],
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <SearchResults fetchData={validProps.fetchData} />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert 3 images are present", () => {
    render(<SearchResults fetchData={validProps.fetchData} />);
    const imgs = screen.getAllByRole("img");

    expect(imgs).toHaveLength(3);
  });
});
