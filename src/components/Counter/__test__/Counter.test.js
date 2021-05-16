import { cleanup, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Counter from "../Counter";



let container = null;
beforeEach( () => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement( "div" );
    document.body.appendChild( container );
} );

afterEach( () => {
    // подчищаем после завершения
    unmountComponentAtNode( container );
    container.remove();
    container = null;
    cleanup()
} );


test( "Counter", () => {



    render( <Counter />, container )

    console.log( document.body.innerHTML );


    expect( true ).toBe( true )


} )