import './App.css';

import rogerRabbitImg from './assets/who-framed-roger-rabbit.jpg';
import hookImg from './assets/hook.jpg';
import laLaLandImg from './assets/la-la-land.jpg';
import hiddenFiguresImg from './assets/hidden-figures.jpg';
import palmSpringsImg from './assets/palm-springs.jpg';
import barbieImg from './assets/barbie.jpg';

const movies = [
  {
    id: 1,
    title: 'Who Framed Roger Rabbit (1988)',
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
    image: rogerRabbitImg,
  },
  {
    id: 2,
    title: 'Hook (1991)',
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
    image: hookImg,
  },
  {
    id: 3,
    title: 'La La Land (2016)',
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
    image: laLaLandImg,
  },
  {
    id: 4,
    title: 'Hidden Figures (2016)',
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
    image: hiddenFiguresImg,
  },
  {
    id: 5,
    title: 'Palm Springs (2020)',
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
    image: palmSpringsImg,
  },
  {
    id: 6,
    title: 'Barbie (2023)',
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
    image: barbieImg,
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="brand-logo">watch.it</h1>
        <nav className="header-nav">
          <a href="#action" className="nav-link">Action</a>
          <a href="#comedy" className="nav-link">Comedy</a>
          <a href="#romance" className="nav-link">Romance</a>
          <a href="#drama" className="nav-link">Drama</a>
        </nav>
        <button className="search-button" type="button">SEARCH</button>
      </div>
    </header>
  );
}

function MovieCard({ movie, layoutClass = 'card-default' }) {
  return (
    <article className={`movie-card ${layoutClass}`}>
      <div className="card-image-wrap">
        <img src={movie.image} alt={movie.title} className="card-image" />
      </div>
      <div className="card-details">
        <div className="card-content">
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-description">{movie.description}</p>
        </div>
        <button className="action-button" type="button">WATCH NOW</button>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <MovieCard movie={movies[0]} layoutClass="card-banner" />

        <div className="desktop-row">
          <MovieCard movie={movies[1]} layoutClass="card-default" />
          <MovieCard movie={movies[2]} layoutClass="card-default" />
        </div>

        <MovieCard movie={movies[3]} layoutClass="card-horizontal" />
        <MovieCard movie={movies[4]} layoutClass="card-horizontal" />
        <MovieCard movie={movies[5]} layoutClass="card-horizontal" />
      </main>
    </div>
  );
}

export default App;