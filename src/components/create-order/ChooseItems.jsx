import React, { useEffect, useRef } from "react";
import style from "./Order.module.css";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cartSlice";
import { defaultTemplate } from "../../redux/template/templateThunk";
import Loading from "../loader/Loading";

const ChooseItems = () => {
  const dispatch = useDispatch();
  const childContainer = useRef();
  const [search, setSearch] = useState("");
  const itemDetails = useSelector((state) => state.cart.items);
  const ifItemExists = (id) => {
    return itemDetails.find((item) => item.id === id);
  };
  const [category, setCategory] = useState(1);
  const handleCategoryChange = (id) => {
    setCategory(id);
  };
  useEffect(() => {
    dispatch(defaultTemplate());
  }, []);
  const {
    response: itemCats,
    isLoading,
    error,
  } = useSelector((state) => state.template.defaultTemplate);
  const selectedStep = itemCats.find((step) => step.id === category);

  const searchText = search.trim().toLowerCase();

  const stepDetails = searchText
    ? itemCats.flatMap((step) =>
        step.sections
          .map((section) => ({
            ...section,
            categoryName: step.name,
            items: section.items.filter((item) =>
              item.item_name.toLowerCase().includes(searchText),
            ),
          }))
          .filter((section) => section.items.length > 0),
      )
    : (selectedStep?.sections ?? []);

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
            }}
          />
        </div>
      </div>
      <div className={style.itemDetailsContainer}>
        {search.trim() === "" ? (
          <div className={style.categoryHeaders}>
            {itemCats.map((item) => {
              return (
                <div
                  className={`${style.itemCategoryHeader} ${category === item?.id ? style.activeCategoryHeader : ""}`}
                  key={item?.id}
                  onClick={() => handleCategoryChange(item?.id)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <div className={style.categoryItems}>
            {stepDetails?.length > 0 ? (
              stepDetails?.map((section) => {
                return (
                  <div
                    className={style.categoryDetailContainer}
                    key={section?.id}
                  >
                    <div className={style.categoryDetailName}>
                      {section?.name}
                    </div>
                    <div className={style.itemContainer}>
                      {section.items.map((item) => {
                        return (
                          <div
                            className={style.detailsParentContainer}
                            key={item.id}
                          >
                            <div className={style.detailsContainer}>
                              <div>{item.item_name}</div>
                              <div className={style.priceTag}>
                                {item.item_price} / {item.item_unit}
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
                                        service_name: section?.name,
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
                                        service_name: section?.name,
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
                                      service_name: section?.name,
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
              })
            ) : (
              <div className={style.noItemsFound}>No Items Found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseItems;
