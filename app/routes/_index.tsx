import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley" },
    { name: "Austin Hensley"},
  ];
};

export async function loader() {
  return redirect("/about-me");
}
