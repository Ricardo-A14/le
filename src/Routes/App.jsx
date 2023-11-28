import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Introduction from "../Pages/Introduction";
import Rules from "../Pages/Rules";
import EnglishRules from "../Pages/EnglishRules";
import Layout from "../Containers/Layout";

import AppContext from "../Context";
import useInitialState from "../Hooks/useInitialState";


import "./App.css";

function App() {

  const initialState = useInitialState();

  return (
    <div className="app">
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/li" element={<Home />} />
              <Route path="/li/introduccion" element={<Introduction />} />
              <Route path="/li/reglas" element={<Rules />} />
              <Route path="/li/reglas-ingles" element={<EnglishRules />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>

    </div>
  );
}

export default App;
