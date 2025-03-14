import { redirect, MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley" },
    { name: "Austin Hensley"},
  ];
};

export async function loader() {
  return redirect("/about-me");
}
