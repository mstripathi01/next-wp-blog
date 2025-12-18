"use client";

import { useDispatch } from "react-redux";
import { setCategory } from "@/app/redux/categorySlice";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option value="">All Categories</option>
      <option value="tech">Tech</option>
      <option value="news">News</option>
    </select>
  );
}
