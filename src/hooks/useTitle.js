import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Cinema mate ${title}`;
  });

  return null;
};
