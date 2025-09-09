// hooks/useFormattedDate.js
import { useMemo } from "react";

export function useFormattedDate(dateString) {
  return useMemo(() => {
    if (!dateString) return "";

    const date = new Date(dateString);
    if (isNaN(date)) return "";

    const day = date.getDate();

    // Day suffix function
    const suffix = (d => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    })(day);

    // Format month + year
    const options = { month: "long", year: "numeric" };
    return `${day}${suffix} ${date.toLocaleDateString("en-US", options)}`;
  }, [dateString]);
}
