import React from 'react';

const Dropdown = ({ options }) => {
  const rednerOptions = options.map((option) => {
    return (
      <div>
        <div key={option.value}>{option.label}</div>
      </div>
    );
  });

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">
          {rednerOptions}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
