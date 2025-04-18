import RenderLists from "./RenderLists";
export default function FoodLists({ FoodItems, Handler, activeItems }) {
  return (
    <>
      <ul className="list-group w-3/4">
        {FoodItems.map((item) => {
          return (
            <RenderLists
              key={item}
              item={item}
              Handler={Handler}
              bought={activeItems.includes(item)}
            />
          );
        })}
      </ul>
    </>
  );
}
