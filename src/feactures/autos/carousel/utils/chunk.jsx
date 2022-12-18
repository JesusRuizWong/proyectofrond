import { MOBILE_SLIDES_COUNT, DESKTOP_SLIDES_COUNT } from "../constants";

export const chunk = (arr, isMobile) => {
  const size = isMobile ? MOBILE_SLIDES_COUNT : DESKTOP_SLIDES_COUNT;

  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};
