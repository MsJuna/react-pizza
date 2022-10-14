import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/PizzaSkeleton";
import Pagination from "../../components/Pagination";

import { setCategoryId, setSort } from "../../redux/slices/filterSlice";


export default function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);
  const { searchValue } = useSelector((state) => state.searchSlice);
  const [items, setItems] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const category = categoryId > 0 ? `&category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  const sortAndOrder = `&sortBy=${sort.sortProperty}&order=${sort.order}`;
  const pageAndlimit = `page=${page}&limit=4`;

  React.useEffect(() => {
    setLoading(true);
    axios(
      `https://6342898eba4478d4783d508c.mockapi.io/items?${pageAndlimit}${category}${sortAndOrder}${search}`,
    )
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, searchValue, page]);
  

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} voidCategoryId={(id) => dispatch(setCategoryId(id))} />
        <Sort value={sort} voidSort={(obj) => dispatch(setSort(obj))} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {loading
          ? [...new Array(4)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
}
