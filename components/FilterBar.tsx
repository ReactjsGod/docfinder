'use client'
import React from "react";
import { FilterBarProps } from "@/types/doctor";

type FilterBar = React.FC<FilterBarProps>;
const FilterBar: FilterBar = ({ specialties, filters, onFilter }) => {
  return (
    <div
      className="flex gap-4 my-4"
      role="form"
      aria-label="Filter doctors"
    >
      <select
        value={filters.specialty}
        onChange={(e) => onFilter('specialty', e.target.value)}
        aria-label="Filter by specialty"
      >
        <option >All</option>
        {specialties.map((s) => (
          <option className="text-black" key={s}>{s}</option>
        ))}
      </select>

      <label className="flex items-center">
        <input
          type="checkbox"
          checked={filters.availableOnly}
          onChange={(e) => onFilter('availableOnly', e.target.checked)}
        />
        <span className="ml-2">Only Available</span>
      </label>
    </div>
  );
};
export default FilterBar;