interface IEvent {
  id: string;
  title: string;
  descriptionText: string;
  descriptionHTML: string;
  endDate: string;
  url: string;
  startDate: string;
  logoUrl: string;
  category: string;
}

interface IEventConnection {
  items: IEvent[];
  nextToken: string | null;
}
