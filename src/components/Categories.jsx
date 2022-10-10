import React from "react";

function Categories({ value, voidCategoryId }) {
  const categoryList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className='categories'>
      <ul>
        {categoryList.map((item, index) => {
          return (
            <li
              key={index}
              className={value === index ? "active" : ""}
              onClick={() => voidCategoryId(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
