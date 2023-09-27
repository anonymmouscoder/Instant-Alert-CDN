/*
  ___         _            _       _   _         _    __   ______
 |_ _|_ _  __| |_ __ _ _ _| |_    /_\ | |___ _ _| |_  \ \ / /__ /
  | || ' \(_-<  _/ _` | ' \  _|  / _ \| / -_) '_|  _|  \ V / |_ \
 |___|_||_/__/\__\__,_|_||_\__| /_/ \_\_\___|_|  \__|   \_/ |___/

 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⠋⠉⠉⠉⠉⠉⠙⠒⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⠀⣀⣀⣠⠤⠤⠤⠤⠤⣄⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡥⠴⠒⠊⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⡀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣷⣤⣀⠈⡆⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣸⣿⣿⣶⣤⡀⠀⣴⣿⡟⢉⠀⠀⠀⠉⠀⢸⡀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⢀⣩⡛⢿⠉⡍⠛⣷⣾⣿⣷⢤⠴⠷⢄⣇⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡧⢰⣿⣿⣿⠇⠀⣷⠀⠉⠉⠉⠉⠀⠀⠀⠸⢿⠥⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⢀⠀⢹⣦⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⢀⡀⢠⡀⢛⣁⣬⠆⠉⠉⣱⡿⡍⠀⢸⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⢺⣧⣀⣈⣿⣿⣿⣷⣤⣴⣶⡿⣻⠁⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡎⢿⠛⠛⠛⣿⣾⣏⣩⠍⠀⡸⠃⠀⣰⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⡳⡌⠉⠻⣿⡿⠀⠀⠼⠁⢠⠞⡟⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⢄⠀⠀⣿⣿⠀⠀⢀⡜⠁⠚⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⠈⠻⣗⠦⠽⠿⠤⠞⠁⠀⠀⠀⠀⣿⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠁⣇⠀⠀⠈⠳⢄⡀⠀⠀⠀⠀⠀⠀⢀⡟⢸⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣀⡠⠤⠖⠒⠋⠉⡇⠀⠀⢹⡀⠀⠀⠀⠀⠙⠲⢤⡀⠀⢀⡴⠋⠀⢀⡇⠉⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⠤⠒⠋⠉⠀⠀⠀⠀⠀⠀⢰⣧⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⡹⠓⠋⠲⡄⠀⠈⣧⠀⠀⠸⡍⠙⠲⠤⣄⣀⠀⠀⠀⠀⠀
⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠀⠀⠀⢻⡳⣄⠀⠀⠀⣠⠞⠀⠀⠀⠀⠘⣆⠀⣾⡄⠀⠀⠹⡄⠀⠀⠀⠈⠉⠒⢤⡀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡇⠀⠀⠀⠈⣇⠈⢣⡀⣰⢳⡀⠀⠀⠀⢀⡞⠉⠶⠁⢧⠀⠀⠀⢱⡀⠀⠀⠀⠀⠀⠀⢧⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⢸⡀⠀⠙⠇⠀⢹⠒⠒⠒⢯⠀⠀⠀⠀⢸⡀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠘⣆
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠂⠀⠀⠸⠇⠀⠀⠀⠀⠟⠀⠀⠀⠈⠧⠀⠀⠀⠘⠇⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠻
⠀⠀⠀⠁⠁⠀⠁⠀⠀⠀⠀⠈⠀⠀⠀⠈⠉⠉⠋⠉⠉⠉⠉⠁⠉⠉⠀⠉⠈⠁⠉⠉⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠀⠈⠀⠀                                                                 
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                         Instant Alert version 3.0 - Création 17 mars 2023 ||
||                                                                           ||
||                                  Auteur : Aliou Dev                       ||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

[............... Fonctionnalités Instant Alert V3 ...............]
█▒ Derniére release: 27/9/23 - 12:07
█▒ Une interface utilisateur plus conviviale
█▒ Des alertes en temps réel pour vous tenir au courant
█▒ Gratuit et efficace
█▒ Une sécurité renforcée pour protéger vos données
[..................................................................]
*/
function _0x21d0(){const _0x31f9ed=['currency_name','getBattery','location','🔥Site\x20web:\x20','catch','3eEAljM','asn','\x20\x20\x20∟\x20*État\x20de\x20la\x20batterie*:\x20','error','city','\x20\x20\x20∟\x20*IP*:\x20','*#visiteur\x20-\x20','org','postal','%cÉchec\x20de\x20l\x27envoi\x20des\x20données.','35YIgPFP','length','continent_code','\x20\x20\x20∟\x20*Version\x20du\x20navigateur*:\x20','color:\x20red;\x20font-size:\x2016px;','*\x0a\x0a','level','Inconnu','\x20\x20\x20∟\x20*Longitude*:\x20','region','application/json','userAgent','charging','log','22286StynZy','\x20\x20\x20∟\x20*ASN*:\x20','then','href','\x20\x20\x20∟\x20*Pays*:\x20','toLocaleString','\x20\x20\x20∟\x20*Appareil*:\x20','\x20\x20\x20∟\x20*Date*:\x20','trim','910424AXaBEW','\x20\x20\x20∟\x20*Fuseau\x20horaire*:\x20','\x20\x20\x20∟\x20*Batterie\x20en\x20charge*:\x20','\x20-\x20','🖥\x20Information\x0a','Non','color:\x20green;\x20font-size:\x2016px;','🌐\x20Localisation\x0a','3050zeWfEs','\x20\x20\x20∟\x20*Langue\x20du\x20navigateur*:\x20','5022EyNWVg','longitude','\x20\x20\x20∟\x20*Continent*:\x20','\x20\x20\x20∟\x20*Code\x20postal*:\x20','957872ZQogse','country_calling_code','match','timezone','https://codingalertbot.vercel.app/','4416930tWrhAI','https://ipapi.co/json','POST','\x20\x20\x20∟\x20*Latitude*:\x20','toFixed','130731MnHktR','605026EIUrXz','970aOiGrX','Non\x20supporté'];_0x21d0=function(){return _0x31f9ed;};return _0x21d0();}const _0x422e45=_0x4147;(function(_0x3fe666,_0x3e2fd3){const _0x31af26=_0x4147,_0x5bb493=_0x3fe666();while(!![]){try{const _0x2fcc21=-parseInt(_0x31af26(0x1cb))/0x1+parseInt(_0x31af26(0x1cc))/0x2*(parseInt(_0x31af26(0x1d4))/0x3)+-parseInt(_0x31af26(0x1c1))/0x4+parseInt(_0x31af26(0x1bb))/0x5*(-parseInt(_0x31af26(0x1bd))/0x6)+-parseInt(_0x31af26(0x1de))/0x7*(-parseInt(_0x31af26(0x1b3))/0x8)+parseInt(_0x31af26(0x1c6))/0x9+parseInt(_0x31af26(0x1cd))/0xa*(-parseInt(_0x31af26(0x1aa))/0xb);if(_0x2fcc21===_0x3e2fd3)break;else _0x5bb493['push'](_0x5bb493['shift']());}catch(_0xb361b0){_0x5bb493['push'](_0x5bb493['shift']());}}}(_0x21d0,0x4594f));const telegramId=instantalert_token,endpointUrl=_0x422e45(0x1c5),parseUserAgent=_0x4d725e=>{const _0x259467=_0x422e45,_0x2bfdfa=_0x4d725e[_0x259467(0x1c3)](/\(([^)]+)\)/),_0x5db050=_0x4d725e[_0x259467(0x1c3)](/(Firefox|Chrome|Safari|Edge|IE|Opera)\/(\S+)/);let _0x463227=_0x259467(0x1a3),_0x49f9d9='Inconnu',_0x20fa4d=_0x259467(0x1a3),_0xeeddcb=_0x259467(0x1a3),_0x845750='Inconnu';if(_0x2bfdfa&&_0x2bfdfa[0x1]){const _0x3af970=_0x2bfdfa[0x1]['split'](';');_0x3af970[_0x259467(0x1df)]>=0x3&&(_0x463227=_0x3af970[0x0][_0x259467(0x1b2)]()??'Inconnu',_0x49f9d9=_0x3af970[0x1]['trim']()??_0x259467(0x1a3),_0x20fa4d=_0x3af970[0x2][_0x259467(0x1b2)]()??_0x259467(0x1a3));}return _0x5db050&&_0x5db050[0x1]&&_0x5db050[0x2]&&(_0xeeddcb=_0x5db050[0x1][_0x259467(0x1b2)]()??_0x259467(0x1a3),_0x845750=_0x5db050[0x2]['trim']()??'Inconnu'),{'deviceType':_0x463227,'deviceBrand':_0x49f9d9,'deviceVersion':_0x20fa4d,'browserType':_0xeeddcb,'browserVersion':_0x845750};},getMessage=async()=>{const _0x539a0c=_0x422e45,_0x22888b=navigator[_0x539a0c(0x1a7)],{deviceType:_0x230299,deviceBrand:_0x58c8fe,deviceVersion:_0x37c967,browserType:_0x3ebcee,browserVersion:_0x624310}=parseUserAgent(_0x22888b),_0x27d52f=window[_0x539a0c(0x1d1)][_0x539a0c(0x1ad)];let _0x3ac8ca=_0x539a0c(0x1ce);if(_0x539a0c(0x1d0)in navigator){const _0x36685c=await navigator[_0x539a0c(0x1d0)]();_0x3ac8ca=(_0x36685c[_0x539a0c(0x1a2)]*0x64)[_0x539a0c(0x1ca)](0x2)+'%';}if('getBattery'in navigator){const _0x4a366f=await navigator['getBattery']();_0x4a366f[_0x539a0c(0x1a8)]?batteryCharge='Oui':batteryCharge=_0x539a0c(0x1b8);}const _0x2a4816=navigator['language']??_0x539a0c(0x1a3),_0x264cc2=await fetch(_0x539a0c(0x1c7))[_0x539a0c(0x1ac)](_0x5e1fef=>{if(!_0x5e1fef['ok'])throw new Error('Échec\x20de\x20la\x20récupération\x20des\x20données\x20de\x20localisation.');return _0x5e1fef['json']();}),_0x3141ac=_0x8330ba=>_0x8330ba??'Inconnu',_0xcb6f62=_0x539a0c(0x1da)+document['title']+_0x539a0c(0x1e3)+_0x539a0c(0x1b7)+(_0x539a0c(0x1b1)+new Date()[_0x539a0c(0x1af)]()+'\x0a')+(_0x539a0c(0x1d9)+_0x3141ac(_0x264cc2['ip'])+'\x0a\x0a')+_0x539a0c(0x1ba)+(_0x539a0c(0x1a4)+_0x3141ac(_0x264cc2[_0x539a0c(0x1be)])+'\x0a')+(_0x539a0c(0x1c9)+_0x3141ac(_0x264cc2['latitude'])+'\x0a')+(_0x539a0c(0x1c0)+_0x3141ac(_0x264cc2[_0x539a0c(0x1dc)])+'\x0a')+(_0x539a0c(0x1ae)+_0x3141ac(_0x264cc2['country_name'])+_0x539a0c(0x1b6)+_0x3141ac(_0x264cc2[_0x539a0c(0x1a5)])+_0x539a0c(0x1b6)+_0x3141ac(_0x264cc2[_0x539a0c(0x1d8)])+'\x0a')+(_0x539a0c(0x1bf)+_0x3141ac(_0x264cc2[_0x539a0c(0x1e0)])+'\x0a\x0a')+'📂\x20Données\x20tierces\x0a'+('\x20\x20\x20∟\x20*Téléphone*:\x20'+_0x3141ac(_0x264cc2[_0x539a0c(0x1c2)])+'\x0a')+('\x20\x20\x20∟\x20*Réseau*:\x20'+_0x3141ac(_0x264cc2[_0x539a0c(0x1db)])+'\x0a')+(_0x539a0c(0x1b4)+_0x3141ac(_0x264cc2[_0x539a0c(0x1c4)])+'\x0a')+(_0x539a0c(0x1ab)+_0x3141ac(_0x264cc2[_0x539a0c(0x1d5)])+'\x0a')+('\x20\x20\x20∟\x20*Monnaie*:\x20'+_0x3141ac(_0x264cc2[_0x539a0c(0x1cf)])+'\x0a')+(_0x539a0c(0x1b0)+_0x230299+'\x20-\x20'+_0x58c8fe+_0x539a0c(0x1b6)+_0x37c967+'\x0a')+(_0x539a0c(0x1d6)+_0x3141ac(_0x3ac8ca)+'\x0a')+(_0x539a0c(0x1b5)+batteryCharge+'\x0a')+(_0x539a0c(0x1bc)+_0x2a4816+'\x0a')+('\x20\x20\x20∟\x20*Type\x20de\x20navigateur*:\x20'+_0x3ebcee+'\x0a')+(_0x539a0c(0x1e1)+_0x624310+'\x0a\x0a')+(_0x539a0c(0x1d2)+_0x27d52f);return _0xcb6f62;},sendDataToTelegram=_0x3f04e2=>{const _0x1c747e=_0x422e45,_0x43969f={'telegramId':telegramId,'message':_0x3f04e2};fetch(endpointUrl,{'method':_0x1c747e(0x1c8),'headers':{'Content-Type':_0x1c747e(0x1a6)},'body':JSON['stringify'](_0x43969f)})[_0x1c747e(0x1ac)](_0x3fe8a2=>{const _0x1c7442=_0x1c747e;_0x3fe8a2['ok']?console[_0x1c7442(0x1a9)]('%cDonnées\x20envoyées,\x20merci\x20d\x27avoir\x20utilisé\x20Instant\x20Alert!',_0x1c7442(0x1b9)):console[_0x1c7442(0x1d7)](_0x1c7442(0x1dd),'color:\x20red;\x20font-size:\x2016px;');})[_0x1c747e(0x1d3)](_0x4cdf36=>{const _0x2e658d=_0x1c747e;console[_0x2e658d(0x1d7)]('%cErreur\x20lors\x20de\x20la\x20requête\x20:\x20'+_0x4cdf36['message'],_0x2e658d(0x1e2));});};function _0x4147(_0x1f28b9,_0x2e64ba){const _0x21d0d1=_0x21d0();return _0x4147=function(_0x41472a,_0x1a4699){_0x41472a=_0x41472a-0x1a2;let _0xa2331=_0x21d0d1[_0x41472a];return _0xa2331;},_0x4147(_0x1f28b9,_0x2e64ba);}getMessage()['then'](_0x42ab48=>sendDataToTelegram(_0x42ab48));
