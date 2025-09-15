import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("language", "routes/language.tsx"),
  route("standards", "routes/standards.tsx"),
  route("subjects", "routes/subjects.tsx"),
] satisfies RouteConfig;
