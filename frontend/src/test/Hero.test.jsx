import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
  });
});
