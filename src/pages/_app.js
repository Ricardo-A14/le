
import { useContext } from "react";
import AppContext from "../Context";

import Header from '../Components/Header';

import Notes from '../Components/Notes';
import MobileMenu from '../Components/MobileMenu';


import useInitialState from '../Hooks/useInitialState';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>

      <Header />

      {initialState.activeMobileMenu ? <MobileMenu /> : null}
      {initialState.notesState ? <Notes /> : null}

      <Component {...pageProps} />

    </AppContext.Provider>
  );

}

export default MyApp
