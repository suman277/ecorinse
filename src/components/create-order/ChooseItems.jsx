import React, { useEffect, useRef } from "react";
import style from "./Order.module.css";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemCategories } from "../../utils/UtilsData";
import { addItem, removeItem } from "../../redux/cart/cartSlice";

const ChooseItems = () => {
  const dispatch = useDispatch();
  const childContainer = useRef();
  const [search, setSearch] = useState("");
  const itemDetails = useSelector((state) => state.cart.items);
  const ifItemExists = (id) => {
    return itemDetails.find((item) => item.id === id);
  };
  const [searchResults, setSearchResults] = useState(itemCategories);
  const resultItems = (search) => {
    const searchText = search.trim().toLowerCase();
    if (searchText === "") {
      setSearchResults(itemCategories);
      return;
    }
    const results = {};
    Object.entries(itemCategories).forEach(([key, value]) => {
      const categoryDetails = value.categoryDetail
        .map((category) => {
          const filteredItems = category.items.filter((item) =>
            item.name.toLowerCase().includes(searchText),
          );

          if (filteredItems.length > 0) {
            return {
              ...category,
              items: filteredItems,
            };
          }
          return null;
        })
        .filter(Boolean);
      if (categoryDetails.length > 0) {
        results[key] = {
          ...value,
          categoryDetail: categoryDetails,
        };
      }
    });

    setSearchResults(results);
  };
  const [category, setCategory] = useState(1);
  const handleCategoryChange = (Key) => {
    setCategory(Number(Key));
  };
  useEffect(() => {
    const elem = childContainer.current;
    if (!elem) return;
    elem.classList.remove(style.detailsAnimation);
    void elem.offsetWidth;
    elem.classList.add(style.detailsAnimation);
  }, [category]);
  return (
    <div className={style.chooseMainContainer}>
      <div>
        <div className={style.headerChooseContainer}>Choose Your Items</div>
        <span className={style.headerSubText}>
          Add exact items for a precise quote — or skip and order directly.
        </span>
      </div>
      <div className={style.searchContainer}>
        <div className={style.searchDiv}>
          <Search />
        </div>
        <div className={style.inputContainer}>
          <input
            type="text"
            placeholder="Search Item across all services..."
            className={style.inputType}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resultItems(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={style.itemDetailsContainer}>
        {search.trim() === "" ? (
          <div className={style.categoryHeaders}>
            {Object.entries(itemCategories).map(([Key, value]) => {
              const itemValue = value.categoryName;
              return (
                <div
                  className={`${style.itemCategoryHeader} ${category === Number(Key) ? style.activeCategoryHeader : ""}`}
                  key={Key}
                  onClick={() => handleCategoryChange(Key)}
                >
                  {value.categoryName}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className={style.categoryItems}>
          {searchResults[category]?.categoryDetail?.map((category) => {
            return (
              <div
                className={style.categoryDetailContainer}
                key={category.categoryDetailName}
              >
                <div className={style.categoryDetailName}>
                  {category.categoryDetailName}
                </div>
                <div className={style.itemContainer}>
                  {category.items.map((item) => {
                    return (
                      <div
                        className={style.detailsParentContainer}
                        key={item.id}
                      >
                        <div className={style.detailsContainer}>
                          <div>{item.item_name}</div>
                          <div className={style.priceTag}>
                            {item.unit_price} / {item.unit}
                          </div>
                        </div>
                        {ifItemExists(item.id) ? (
                          <div className={style.itemOps}>
                            <div
                              className={style.removeBtn}
                              onClick={() =>
                                dispatch(
                                  removeItem({
                                    ...item,
                                    service_name: category.categoryDetailName,
                                  }),
                                )
                              }
                            >
                              -
                            </div>
                            <div>{ifItemExists(item.id)?.quantity}</div>
                            <div
                              className={style.addBtn}
                              onClick={() =>
                                dispatch(
                                  addItem({
                                    ...item,
                                    service_name: category.categoryDetailName,
                                  }),
                                )
                              }
                            >
                              +
                            </div>
                          </div>
                        ) : (
                          <div
                            className={style.itemBtn}
                            onClick={() => {
                              dispatch(
                                addItem({
                                  ...item,
                                  service_name: category.categoryDetailName,
                                }),
                              );
                            }}
                          >
                            ADD
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseItems;
