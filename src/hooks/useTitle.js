import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `CineFriend ${title}`;
  });

  return null;
};
