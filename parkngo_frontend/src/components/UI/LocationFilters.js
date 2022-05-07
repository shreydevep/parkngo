import React, { useState } from "react";
import "./LocationFilters.css";
const filtersData = [
  { id: 0, label: "Nearest Locations", extraDetail: false },
  { id: 1, label: "Radius Range", extraDetail: true, type: "range" },
  { id: 2, label: "Min Price", extraDetail: true, type: "number" },
  { id: 3, label: "Max Price", extraDetail: true, type: "number" },
];
const LocationFilters = () => {
  const [radiusRange, setRadiusRange] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filters, setFilters] = useState(filtersData);
  const handleItemClick = (id) => {
    selectedFilter == id ? setSelectedFilter(null) : setSelectedFilter(id);
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedFilter
            ? filters.find((filter) => filter.id == selectedFilter).label
            : "Select Location Filter"}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {filters.map((filter) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={filter.id}
            >
              <span
                className={`dropdown-item-dot ${
                  filter.id == selectedFilter && "selected"
                }`}
              >
                •{" "}
              </span>
              {filter.label}
              {filter.type === "range" && (
                <div>
                  <input
                    className={"extradetail-" + `${filter.type}`.toString()}
                    type={filter.type}
                    min={0}
                    max={1000}
                    step={10}
                    value={radiusRange}
                    onChange={(e) => {
                      setRadiusRange(e.target.value);
                    }}
                  />
                  <span>
                    <p>{radiusRange} Kilometers</p>
                  </span>
                </div>
              )}
              {filter.extraDetail && filter.type !== "range" && (
                <div>
                  <input
                    className={"extradetail-" + `${filter.type}`.toString()}
                    type={filter.type}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationFilters;
