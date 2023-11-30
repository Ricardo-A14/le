
import { useState } from "react";

const useInitialState = () => {

    const [notesState, setNotesState] = useState(false);
    const [wordCounter, setWordCounter] = useState(0);
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);


    // FUNCTIONS.
    const ActiveNote = () => {
        setNotesState(!notesState);
    }
    const HandlerMobileMenu = () => {
        setActiveMobileMenu(!activeMobileMenu);
    }



    return {
        notesState,
        ActiveNote,
        wordCounter, setWordCounter,
        activeMobileMenu,
        HandlerMobileMenu
    };
}

export default useInitialState;

