import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: "Park bench",
    category: "landscape",
    description: "lorem ispsum dolor sit amet.",
    index: 1
};

afterEach(cleanup);

describe("Modal component", () => {
    it("renders", () => {
        // baseline
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
    });
    // snapshot test
    it("matches snapshot DOM nod structure", () => {
        const {asFragment} = render(<Modal onclose={mockToggleModal} currentPhoto={currentPhoto}/>)

        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
      // Arrange: Render Modal
    const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>);
    // Act: Simulate click event
    fireEvent.click(getByText('Close this modal'));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})  