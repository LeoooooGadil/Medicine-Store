import { useState } from "react";

import SearchWindow from "./SearchWindow";
import ResultWindow from "./ResultWindow";

export default function SearchScreenWindow({ GoToCart }) {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);

  const ToggleSearchWindow = () => {
    setIsSearchWindowOpen(!isSearchWindowOpen);
  };

  return (
    <>
      {isSearchWindowOpen ? (
        <SearchWindow ToggleSearchWindow={ToggleSearchWindow} />
      ) : (
        <ResultWindow
          ToggleSearchWindow={ToggleSearchWindow}
          GoToCart={GoToCart}
        />
      )}
    </>
  );
}
