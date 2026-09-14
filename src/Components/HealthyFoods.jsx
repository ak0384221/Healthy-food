import ErrorMsg from "../Micro-components/error";
import Heading from "../Micro-components/heading";
import EnvBanner from "./EnvBanner";
import FoodLists from "./FoodLists";
import { useState } from "react";

export default function HealthyFoods() {
  const [FoodItems, setFoodItems] = useState(["boiled egg"]);

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
        <EnvBanner />
        <Heading />
        <input
          onKeyDown={(evt) => {
            handleOnKeyDown(evt);
          }}
          type="text"
          placeholder="what do you want ?"
          className="border text-white mb-4 h-10 outline-0 pl-3 w-55 rounded-2xl"
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
