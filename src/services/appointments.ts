import { notifications } from "@mantine/notifications";
import axios from "axios";

export type EdgesType = {
  node: Record<string, string>;
  cursor: string;
};

export type Paginate = {
  after?: string;
  before?: string;
};

export const getAppointments = async (paginate: Paginate) => {
  const paginateQuery = Object.keys(paginate)
    .map((type) => `&${type}=${paginate[type as keyof typeof paginate]}`)
    .join("");
  try {
    const res = await axios.get(`/api/appointments?size=12${paginateQuery}`);
    const appointments = res.data?.edges.map((edge: EdgesType) => edge.node);
    return {
      appointments,
      pageInfo: res?.data?.pageInfo,
    };
  } catch (err) {
    console.error(err);
    notifications.show({
      color: "red",
      title: "Error fetching appointments",
      message:
        "Hey there, there has been an error fetching appointments. Please try again  🤥",
    });
    return null;
  }
};
