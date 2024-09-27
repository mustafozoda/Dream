export default function EachItem({ el }) {
  return (
    <div>
      <img src={el.image} alt="img" />
      <h1>{el.title}</h1>
    </div>
  );
}
