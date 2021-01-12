import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.scss";
import { GrFacebookOption, GrInstagram, GrYoutube } from "react-icons/gr";
import { FaBandcamp } from "react-icons/fa";
import Nav from "./components/Nav";
import Header from "./layouts/Header";
import AlbumSection from "./layouts/AlbumSection";
import BandSection from "./layouts/BandSection";
import MusicSection from "./layouts/MusicSection";
import SingleAlbum from "./layouts/SingleAlbum";
import SocialMediaSection from "./layouts/SocialMediaSection";
import { ALBUMS_MUSIC_SECTION } from "./layouts/MusicSection";
import ALBUMS_SONG_LIST from "./json/albums_song_list.json";
import ContactSection from "./layouts/ContactSection";
import Footer from "./layouts/Footer";
import ScrollToTop from './components/ScrollToTop';
import Fade from "react-reveal/Fade";

const FULL_ALBUMS_DATE = ALBUMS_SONG_LIST.map((x, index) => {
  return Object.assign({}, x, ALBUMS_MUSIC_SECTION[index]);
});


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Route path="/" exact>
          <Header>
            <Fade left>
              <h1 className="band-name">haunted cenotaph</h1>
            </Fade>
            <div className="social-links">
              <ul>
                <a
                  href="https://www.facebook.com/Haunted-Cenotaph-150906512232754"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <GrFacebookOption />
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/haunted_cenotaph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <GrInstagram />
                  </li>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCEVEkQzQHpQ_WwsG4MuMZUA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <GrYoutube />
                  </li>
                </a>
                <a href="https://hauntedcenotaph.bandcamp.com/" target="_blank" rel="noreferrer">
                  <li>
                    <FaBandcamp />
                  </li>
                </a>
              </ul>
            </div>
          </Header>
        </Route>
        <Nav />

        <main>
          <Route path="/" exact>
            <AlbumSection />
            <SocialMediaSection />
          </Route>
          <Route path="/band" exact>
            <BandSection />
          </Route>
          <Route path="/music" exact>
            <MusicSection />
          </Route>
          <Route path="/music/abbysal-menace" exact>
            <SingleAlbum albumDate={FULL_ALBUMS_DATE[0]} />
          </Route>
          <Route path="/music/haunted-cenopath" exact>
            <SingleAlbum albumDate={FULL_ALBUMS_DATE[1]} />
          </Route>
          <Route path="/music/nightmares-from-beyond" exact>
            <SingleAlbum albumDate={FULL_ALBUMS_DATE[2]} />
          </Route>
          <Route path="/contact" exact>
            <ContactSection />
          </Route>
        </main>
        <Switch>
          <Route path="/" exact>
            <Footer />
          </Route>
          <Route path="/">
            <Footer className={"with-out-background"} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
