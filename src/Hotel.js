import  './css/style.css';
import './css/img.css';

function Loader() {
     return (
     <div align='center'>
          <object classid='clsid:166B1BCA-3F9C-11CF-8075-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=10,8,5,1,0' id='habbo' width='720px' height='540px'>
               <embed src='./hotel/habbo.dcr' bgColor='#000000' width='720' height='540' swRemote='' swSaveEnabled='true' 
                    swVolume='true' swRestart='false' swPausePlay='false' swFastForward='false' swTitle='Habbo Hotel' 
                    swContextMenu='true' swStretchStyle='none' swText='' type='application/x-director' 
                    pluginspage='http://www.macromedia.com/shockwave/download/'
                    sw2='connection.info.host=15.204.199.8;connection.info.port=12321'
                    sw4='connection.mus.host=15.204.199.8;connection.mus.port=12322'
                    sw3='client.reload.url=https://habbo.gs/'
                    sw1='site.url=https://www.habbo.gs;url.prefix=https://www.habbo.gs'
                    sw5='external.variables.txt=./external_variables.txt;external.texts.txt=./external_texts.txt'>
               </embed>
          </object>
      </div>
     )
}

function NoShockwave () {
     return (
          <>
               <div id="main_top"></div>
               <div id="main_mid">
                    <div id="no_shockwave">
                         <h1>Shockwave is required</h1>
                         <div id="shockwave_maintenance"></div>
                         <p>
                              Hello and welcome to Habbo Hotel! In order to enter the hotel, you must have Adobe Shockwave installed
                              and enabled. You <b>cannot</b> use Shockwave on modern browsers (Chrome, Mozilla, etc), at least
                              not without extensive workarounds.
                              <br /><br />
                              The simplest solution is use Basilisk Browser which you can download <a href="/Basilisk.zip">here</a>.
                              Read more information on this browser (which is a fork of Mozilla) by 
                              clicking <a href="https://forum.ragezone.com/f353/portable-browser-with-flash-shockwave-1192727/" target="_blank" rel="noreferrer">here</a>.
                              <br /><br />
                              Basilisk Browser will download as a .zip file. Copy the contents from within into a separate folder and then click '<b>Browser.bat</b>'. And 
                              then you can enter the hotel!
                         </p>     
                    </div>
               </div>
               <div id="main_footer"></div>
          </>
     )
}

function Hotel() {
          if(navigator.userAgent.match(/basilisk/i))
               return (<Loader />)
          else
               return(<NoShockwave />)
}

export default Hotel;

