import './App.css';

import logo from './assets/logo.svg';
import profilePicture from './assets/profile_picture.jpg';
import heroImg from './assets/hero.png';
import articulationImg from './assets/articulation.jpg';
import allEncoresImg from './assets/all-encores.jpg';
import encores2Img from './assets/encores-2.jpg';
import eulogyImg from './assets/eulogy-for-evolution.jpg';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.svg';
import twitterIcon from './assets/twitter-icon.svg';

function Navigation({ className }) {
  return (
    <nav className={className}>
      <a href="#blog" className="nav-link">Our Blog</a>
      <a href="#artists" className="nav-link">Our Artists</a>
      <a href="#story" className="nav-link">Our Story</a>
    </nav>
  );
}

function SocialIcons({ direction = 'vertical' }) {
  const dirClass = direction === 'vertical' ? 'social-vertical' : 'social-horizontal';
  return (
    <div className={`social-links ${dirClass}`}>
      <a href="https://facebook.com" aria-label="Facebook">
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
      </a>
      <a href="https://instagram.com" aria-label="Instagram">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
      </a>
      <a href="https://twitter.com" aria-label="Twitter">
        <img src={twitterIcon} alt="Twitter" className="social-icon twitter-icon" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="page-container">
      <header className="site-header">
        <img src={logo} alt="Erased Tapes Logo" className="main-logo" />
        <Navigation className="nav-bar" />
      </header>

      <main className="main-content">
        <article className="article-body">
          <header className="article-header">
            <h1 className="post-title">
              <span className="title-main">Erased Tapes:</span>
              <span className="title-sub">Exploring the Sonic Frontier</span>
            </h1>
            <p className="lead-paragraph">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
            </p>
          </header>

          <section className="article-text-flow">
            <h2 className="section-heading">Heading</h2>
            <p>
              Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.
            </p>
            <p>
              Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.
            </p>
            <p>
              Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.
            </p>
            <p>
              Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.
            </p>

            <h2 className="section-heading">Heading</h2>
            <p>
              Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.
            </p>
            <p>
              Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.
            </p>
            <p>
              Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.
            </p>

            <h2 className="section-heading">Heading</h2>
            <p>
              Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.
            </p>
            <p>
              Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.
            </p>
          </section>
        </article>

        <section className="photo-gallery-grid">
          <div className="gallery-item gallery-large">
            <img src={heroImg} alt="Erased Tapes Hero" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={articulationImg} alt="Articulation" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={allEncoresImg} alt="All Encores" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={encores2Img} alt="Encores 2" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={eulogyImg} alt="Eulogy For Evolution" className="gallery-img" />
          </div>
        </section>

        <section className="author-section">
          <div className="author-info">
            <h2 className="author-title">The Author</h2>
            <p className="author-bio">
              Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
            </p>
          </div>
          <div className="author-media">
            <img src={profilePicture} alt="Author" className="author-avatar" />
            <SocialIcons direction="vertical" />
          </div>
        </section>

        <section className="comments-section">
          <h2 className="comments-title">Comments</h2>
          <div className="comment-list">
            <div className="comment-card">
              <span className="comment-author">soundseeker92</span>
              <p className="comment-text">
                This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?
              </p>
            </div>
            <div className="comment-card">
              <span className="comment-author">Ted Baker</span>
              <p className="comment-text">
                I've been following the label for years—so glad someone's finally writing about their impact.
              </p>
            </div>
            <div className="comment-card">
              <span className="comment-author">Queen_of_noise</span>
              <p className="comment-text">
                I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Navigation className="footer-nav" />
        <div className="footer-bottom">
          <p className="copyright-text">Copyright © 2023 Erased Disks Ltd.</p>
          <SocialIcons direction="horizontal" />
        </div>
      </footer>
    </div>
  );
}

export default App;