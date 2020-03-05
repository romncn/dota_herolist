import React from 'react';

const Filter = (props) => {
  
    return (
      <div>
        <div class="dropdown ml-1 mr-1">
          <button class="btn filter-btn title-color dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {props.filter}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            {props.types.map((type, i) => {
              return <button onClick={() => props.filterFunc(type)} class="dropdown-item" type="button">{type}</button>
            })}
          </div>
        </div>
      </div>
    )
  }
  export default Filter;
