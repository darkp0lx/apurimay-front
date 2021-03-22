import hero from "../assets/hero.jpg";
import "./Home.css";
import libro1 from "../assets/libro1.jpg";
import libro2 from "../assets/libro2.jpg";
import libro3 from "../assets/libro3.jpg";
import libro4 from "../assets/libro4.jpg";
import libro5 from "../assets/libro5.jpg";
import libro6 from "../assets/libro6.jpg";
import libro7 from "../assets/libro7.jpg";

import Product from "./Product";
const Home = () => {
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  return (
    <div>
      <div className="home__container">
        <img className="home__image" src={hero} alt="" />
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Doctor Seuss's Beginner Book"
            image={libro1}
            price={16.99}
            rating={4.6}
          />
          <Product
            id={uuidv4()}
            title="The Code Breaker"
            image={libro2}
            price={16.99}
            rating={4.6}
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Dog Man: Mothering Heights"
            image={libro3}
            price={16.99}
            rating={4.6}
          />
          <Product
            id={uuidv4()}
            title="How to Do the Work"
            image={libro4}
            price={16.99}
            rating={4.6}
          />
          <Product
            id={uuidv4()}
            title="Random House el gato en el sombrero"
            image={libro5}
            price={16.99}
            rating={4.6}
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Green Eggs and Ham"
            image={libro6}
            price={16.99}
            rating={4.6}
          />
          <Product
            id={uuidv4()}
            title="It's Not Easy Being a Bunny"
            image={libro7}
            price={16.99}
            rating={4.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
