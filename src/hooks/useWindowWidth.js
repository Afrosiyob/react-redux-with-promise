import { useEffect, useState } from "react";

export function useWindowWidth () {
    const [ state, setState ] = useState( {
        windowWidth: window.innerWidth
    } );

    useEffect( () => {


        window.addEventListener( "resize", () => {
            setState( prevState => ( { ...prevState, windowWidth: window.innerWidth } ) )
        } )

        return () => {
            window.removeEventListener( "resize", () => {
                setState( prevState => ( { ...prevState, windowWidth: window.innerWidth } ) )
            } )
        }
    } )


    return state.windowWidth


}