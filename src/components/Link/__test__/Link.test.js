import { render, screen } from "@testing-library/react";
import Link from "../Link";

import renderer from 'react-test-renderer';

describe( "link test describe", () => {
    it( "link test it", () => {
        const component = renderer.create( <Link title="this is title" /> )
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();




    } )
} )