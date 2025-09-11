import './resources/App.css'

import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "./components/Home.jsx"),
  route("blog", "./components/Blog.jsx"),
  route("blog/posts/:post", "./components/Post.jsx"),
  route("*", "./components/PageNotFound.jsx"),
] satisfies RouteConfig;
