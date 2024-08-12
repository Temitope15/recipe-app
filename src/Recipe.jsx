/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Recipe = ({ image, title, cuisine, dish, ingredients }) => {
  return (
    <>
      <section className="bg-white">
          <div className="bg-white">
            <article>
              <figure>
                <img src={image} alt="food" />
              </figure>
              <div>
                <h2>{title}</h2>
                <p>Cuisine type: {cuisine}</p>
                <p>Dish Type: { dish}</p>
                <div>
                  <p>Ingredients:</p>
                  <ol>
                    {ingredients.map((ingredient) => (
                      <li>{ingredient.text}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          </div>
      </section>
    </>
  );
};

export default Recipe;