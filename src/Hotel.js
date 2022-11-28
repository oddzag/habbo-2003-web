function Hotel() {
     return (
     <div align='center'>
          <object classid='clsid:166B1BCA-3F9C-11CF-8075-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=10,8,5,1,0' id='habbo' width='720px' height='540px'>
               <param name='src' value='habbo.dcr' />
               <param name='swRemote' value='' />
               <param name='swStretchStyle' value='' />
               <param name='swText' value='' />
               <param name='bgColor' value='' />
               <param name='sw2' value='connection.info.host=15.204.199.8;connection.info.port=12321' />
               <param name='sw4' value='connection.mus.host=15.204.199.8;connection.mus.port=12322' />
               <param name='sw3' value='client.reload.url=/' />
               <param name='sw1' value='site.url=https://www.habbo.gs;url.prefix=https://www.habbo.gs' />
               <param name='sw5' value='external.variables.txt=external_variables.txt;external.texts.txt=external_texts.txt' />
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

export default Hotel;

