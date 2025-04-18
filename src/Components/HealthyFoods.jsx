import ErrorMsg from "../Micro-components/error";
import Heading from "../Micro-components/heading";
import FoodLists from "./FoodLists";
import { useState } from "react";

export default function HealthyFoods() {
  const [FoodItems, setFoodItems] = useState([
    "boiled egg",
    "dates",
    "nuts",
    "vegetables",
    "fruits",
    "salad",
    "green tea",
  ]);

  const [activeItems, setActiveItems] = useState([]);

  function handleOnKeyDown(evt) {
    if (evt.key === "Enter") {
      let newFoodItems = evt.target.value;

      setFoodItems([...FoodItems, newFoodItems]);
      evt.target.value = "";
    }
  }
  //   const FoodItems = [];

  const Handler = {
    Buy: function handleBuying(prop) {
      if (!activeItems.includes(prop)) {
        let newActiveItems = [...activeItems, prop];
        setActiveItems(newActiveItems);
        console.log("processing...");
      } else {
        console.log(`${prop} is already bought`);
      }
      console.log(activeItems);
    },
  };
  return (
    <>
      <div className="p-2 m-10">
        <Heading />
        <input
          onKeyDown={(evt) => {
            handleOnKeyDown(evt);
          }}
          type="text"
          className="border mb-4 h-10 outline-0 pl-3 w-55"
        />

        {FoodItems.length === 0 && <ErrorMsg />}
        <FoodLists
          FoodItems={FoodItems}
          Handler={Handler}
          activeItems={activeItems}
        />
      </div>
    </>
  );
}
