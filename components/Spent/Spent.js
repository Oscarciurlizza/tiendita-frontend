export default function Spent({ spent }) {
  const { name, quantity, article } = spent.attributes;
  console.log(article);
  return (
    <section className="sm:grid grid-cols-2 grid-flow-col">
      <div className="bg-red-500">
        <p>{name}</p>
        <p>{quantity}</p>
        <p>{article}</p>
      </div>
    </section>
  );
}
