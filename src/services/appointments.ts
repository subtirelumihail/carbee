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

// [BUG]: There is a issue with the pagination:
// - When we try to go the next page based on the after cursor, the first appointment
// on the next page is the same with the last one from the pervious page
// - Before the last page get an array with a size smaller than the queried size
// [SOLUTION]: We remove the first appointment if the cursor is on page >= 2 and increase
// the requested page size to 13 so we can always have 12 elements displayed.
// We also force the hasNextPage to be false if the appointments array is smaller than the
// selected size

// TODO: Persist pagination in the URL query

export const getAppointments = async (paginate: Paginate) => {
  const paginateQuery = Object.keys(paginate)
    .map((type) => `&${type}=${paginate[type as keyof typeof paginate]}`)
    .join("");

  const size = paginate.after ? 13 : 12;

  try {
    const res = await axios.get(
      `/api/appointments?size=${size}${paginateQuery}`
    );
    const appointments = res.data?.edges.map((edge: EdgesType) => edge.node);

    if (appointments.length < size && res?.data?.pageInfo) {
      res.data.pageInfo.hasNextPage = false;
    }

    if (paginate.after) {
      appointments.shift();
    }

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
