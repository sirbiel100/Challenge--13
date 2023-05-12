import './App.css';
import Sedan from './images/icon-sedans.svg';
import SUVS from './images/icon-suvs.svg';
import LUXURY from './images/icon-luxury.svg';

function App() {
  return (
    <div>

      <section>
        <header>
          <img src={Sedan} alt='Sedan'/>
          <h1>SEDANS</h1>
        </header>
        <main>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
        </main>
        <footer>
          <button className='First'>Learn More</button>
        </footer>
      </section>

      <section>
        <header>
          <img src={SUVS} alt='SUV'/>
          <h1>SUVS</h1>
          </header>
        <main>
          <p>Take an SUV for its spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures.</p>
        </main>
        <footer>
          <button className='Second'>Learn More</button>
        </footer>
      </section>

      <section>
        <header>
        <img src={LUXURY} alt='Luxury'/>
        <h1>LUXURY</h1>
        </header>
        <main>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.</p>
        </main>
        <footer>
          <button className='Third'>Learn More</button>
        </footer>
      </section>

    </div>
  );
}

export default App;
