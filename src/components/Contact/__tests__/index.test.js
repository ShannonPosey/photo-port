import React from "react";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe('Contact component render', () => {
    // baseline
    it('renders', () => {
        render(<Contact/>)
    });
    // snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render', () => {
        // Arrange
        const {getByTestId} = render(<Contact/>);
        
        //assert
        expect(getByTestId('contact me')).toHaveTextContent('Contact me');
    });

    it('render', () => {
        // Arrange
        const {getByTestId} = render(<Contact/>);
        
        //assert
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
    
});