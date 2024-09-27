import EachItem from "./EachItem";

export default function FoodList({ food }) {
  return (
    <div>
      {food.map((el) => (
        <EachItem key={el.id} el={el} />
      ))}
    </div>
  );
}
