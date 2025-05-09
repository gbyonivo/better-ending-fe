import { format } from "date-fns";

export const formatDate = ({
  date,
  formatString = "yyyy-MM-dd HH:mm",
}: {
  date: number | Date;
  formatString?: string;
}) => {
  try {
    return format(date, formatString);
  } catch (error) {
    console.error(error);
    return "Invalid date";
  }
};
