import { NavLink } from "react-router-dom";

function HHW_Latest() {
    return (
      <>
        <div id="main_top" class="active"></div>
          <div id="subnav_one">
              <NavLink to="/community/newsletter" end>Habbo Hotel Happenings</NavLink>
              <NavLink to="/community/hhw_latest">HabboHood Watch</NavLink>
              <NavLink to="/community/funkyfriday">Funky Friday</NavLink><br />
              <NavLink to="/community/wobblesquable">Wobble Squable</NavLink>
          </div>

          <div id="navi_ruler"></div>

          <div id="main_mid">
            <div id="content_sub">habbowoodwatch</div>
          </div>
        <div id="main_footer"></div>
      </>
    );
  }
  
  export default HHW_Latest;