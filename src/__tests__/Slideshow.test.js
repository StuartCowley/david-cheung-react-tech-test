import React from "react";
import renderer from "react-test-renderer";
import Slideshow from "../components/Slideshow";

describe("Slideshow", () => {
  const validProps = {
    fetchData: [
      { href: "image-href1", title: "image-title1" },
      { href: "image-href2", title: "image-title2" },
      { href: "image-href3", title: "image-title3" },
    ],
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Slideshow fetchData={validProps.fetchData} />
    );

    expect(rendered).toMatchSnapshot();
  });
});
