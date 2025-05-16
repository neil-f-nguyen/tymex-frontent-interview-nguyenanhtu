export const formatNumber = (
  number: number,
  maximumFractionDigits = 2,
  minimumFractionDigits = 0
) => {
  return number?.toLocaleString("en-US", {
    maximumFractionDigits,
    minimumFractionDigits,
  });
};
