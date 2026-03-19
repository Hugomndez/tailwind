export type Route = {
  title: string;
  path: string;
  subRoutes?: Route[];
};
