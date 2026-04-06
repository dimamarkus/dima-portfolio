export const formatDate = (
  value: string,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
) => {
  return new Date(value).toLocaleDateString("en-US", options);
};
