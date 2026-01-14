"use client";
import React from "react";

const DataTableSearch = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="dataTableSearchWrap">
      <input
        type="text"
        className="dataTableSearch"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DataTableSearch;
