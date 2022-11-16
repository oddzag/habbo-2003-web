import { Route, Routes, Link } from "react-router-dom"

function Design() {
  return (
    <>
      <div id="design_one"></div>
      <h1>Designing your own room</h1>
      <p>
        <b>Getting your own room</b><br />
        Guest rooms are free and you can get one by visiting one of the Room-O-Matic
        kiosks. You can find these in the Hotel Navigator or in the Lobbies and
        Cafés (they look like yellow arcade games). You get to choose the name,
        description and shape of your room, and you can decide whether to lock it
        or let anyone come in.
      </p>

    <div class="sub_content_ruler"></div>
    <div id="design_two" style={{clear: 'left'}}></div>
      <p>
        <b>Decorating and furnishing your room</b><br />
        You can find everything you need to customise your room in the Hotel
        Catalogue, next to your Habbo Console. There's a huge selection of
        items, from humble doormats, plants and bathroom suites, to digital TVs,
        teleports and fully-stocked fridges. But first you'll need some Habbo Credits.
      </p>
    <div class="sub_content_ruler"></div>
      <p style={{paddingRight: '20px'}}>
        <b>Habbo Credits</b><br />
        Habbo Credits are the hotel's currency. They are kept in your Habbo Purse
        and can be bought in a variety of ways. To find out more 
        about Habbo Credits, look in your Habbo <Link to="/credits">Habbo Purse</Link>.
      </p>
      <div class="sub_content_ruler"></div>
      <p><Link to="/help/tour/games" style={{fontWeight: 'bold'}}>Playing games {">"}</Link></p>
    </>
  );
}

export default Design;