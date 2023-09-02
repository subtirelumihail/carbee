import { notifications } from "@mantine/notifications";
import axios from "axios";
import { format } from "date-fns";

export const getAvailability = async (date: Date | null) => {
  if (date) {
    try {
      const formattedDate = format(date, "yyyy-MM-dd");
      const res = await axios.get(`/api/availability/${formattedDate}`);

      return res.data;
    } catch (err) {
      console.error(err);
      notifications.show({
        color: "red",
        title: "Error fetching availability",
        message:
          "Hey there, there has been an error fetching availability. Please try again  🤥",
      });
      return null;
    }
  }

  return null;
};
