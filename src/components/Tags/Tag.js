import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/Filter/FilterSlice";

export default function Tag({ tag }) {
  const { title } = tag;
  const dispatch = useDispatch();
  const { tags } = useSelector(state => state.filter);

  const isSelected = tags.includes(title) ? true : false;

  const handleSelected = () => {
    if (isSelected) {
      dispatch(tagRemoved(title))
    } else {
      dispatch(tagSelected(title))
    }
  }

  const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

  return (
      <div onClick={handleSelected} className={style}>
        {title}
      </div>
  );
}
