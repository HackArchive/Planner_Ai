type AppEvent = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  city: string;
  location: string;
  description: string;
  type: "virtual" | "physical" | "hybrid";
};
