import React from 'react';
import '../../styles/Christmas.scss';

const Christmas = () => {
  return (
    <main className="main">
      <section className="christmas section" id="home">
        <div className="christmas__title">Merry Christmas</div>
        <img src="/assets/img/events/christmas/home-moon.png" className="christmas__moon"></img>

        <img
          src="assets/img/events/christmas/home-mountain-3.png"
          className="christmas__mountain-3"
        ></img>
        <img
          src="assets/img/events/christmas/home-mountain-2.png"
          className="christmas__mountain-2"
        ></img>
        <img src="assets/img/events/christmas/home-pine-tree.png" className="christmas__pine"></img>
        <img
          src="assets/img/events/christmas/home-village.png"
          className="christmas__village"
        ></img>
        <img src="assets/img/events/christmas/home-snow.png" className="christmas__snow"></img>
        <img
          src="assets/img/events/christmas/home-mountain-1.png"
          className="christmas__mountain-1"
        ></img>
        <img
          src="assets/img/events/christmas/home-trineo-santa.png"
          className="christmas__trineo"
        ></img>
      </section>
    </main>
  );
};

export default Christmas;
