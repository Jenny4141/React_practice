import { useEffect } from "react";

function useTitle(pageTitle) {
  useEffect(() => {
    document.title = `${pageTitle} - React作品集`;
  }, [pageTitle]);
}

export default useTitle;