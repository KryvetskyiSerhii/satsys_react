import { useState } from "react";
import { AppContainer, GlobalStyles } from "./App.styled";
import { InputForm } from "./components/InputForm";
import { Result } from "./components/Result";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <InputForm
          setSearchResult={setSearchResult}
          setIsLoading={setIsLoading}
        />
        <Result searchResult={searchResult} isLoading={isLoading} />
      </AppContainer>
      ;
    </>
  );
}

export default App;
