import React from "react";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/PizzaSkeleton";

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(2);
  const [sort, setSort] = React.useState({
    name: "популярности (по возрастанию)",
    sortProperty: "rating",
    order: "asc",
  });

  React.useEffect(() => {
    console.log(sort);
    setLoading(true);
    fetch(
      `https://6342898eba4478d4783d508c.mockapi.io/items?
      ${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sort.sortProperty}&order=${
        sort.order
      }`,
    )
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} voidCategoryId={(id) => setCategoryId(id)} />
        <Sort value={sort} voidSort={(obj) => setSort(obj)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {loading
          ? [...new Array(9)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
}
