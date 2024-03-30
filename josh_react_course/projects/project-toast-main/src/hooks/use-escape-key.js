import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function runCallback(event) {
      if (event.key === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", runCallback);

    return () => {
      window.removeEventListener("keydown", runCallback);
    };
  }, [callback]);
}

export default useEscapeKey;
