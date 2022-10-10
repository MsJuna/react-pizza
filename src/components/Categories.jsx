import React from "react";

function Categories() {
  const [category, setCategory] = React.useState(0);

  const categoryList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className='categories'>
      <ul>
        {categoryList.map((item, index) => {
          return (
            <li key={index} className={category === index ? "active" : ""} onClick={() => setCategory(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;