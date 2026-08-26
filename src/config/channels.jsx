import zeeCinema from "../assets/channel_logo/Zee_Cinema.webp";
import jalwa from "../assets/channel_logo/9x_jalwa.png";
import aajtak  from "../assets/channel_logo/Aaj_tak.webp"
import xmRed from "../assets/channel_logo/9xm_red.webp";
import Aastha from "../assets/channel_logo/Aastha.webp";
import Aastha2 from "../assets/channel_logo/Aastha_Bhajan.webp";
import abpGanga from "../assets/channel_logo/ABP_Ganga.webp";
import abpNews from "../assets/channel_logo/ABPNews_2016.webp";
import B4u_bhojpuri from "../assets/channel_logo/B4u_bhojpuri.webp";
import B4U_Kadak from "../assets/channel_logo/B4U_Kadak.webp";
import B4U_MOVIES_2014 from "../assets/channel_logo/B4U_MOVIES_2014.webp";
import B4U_Music_logo_2014 from "../assets/channel_logo/B4U_Music_logo_2014.webp";
import Bhojpuri_cinema from "../assets/channel_logo/Bhojpuri_cinema.webp";
import cnbc_awaaz from "../assets/channel_logo/cnbc_awaaz.png";
import colors from "../assets/channel_logo/colors.jpg";
import color_rishey from "../assets/channel_logo/Rishtey_Asia.webp";
import Dangal_2 from "../assets/channel_logo/Dangal_2.webp";
import dangal from "../assets/channel_logo/Dangal_TV.webp";
import epic_bhojpuri from "../assets/channel_logo/epic_bhojpuri.jpg";
import epic_music from "../assets/channel_logo/epic_music.jpg";
import ETNOW from "../assets/channel_logo/ETNOW.webp";
import Goldmines_Logo from "../assets/channel_logo/Goldmines_Logo.webp";
import Goldmines_Bollywood from "../assets/channel_logo/Goldmines_Bollywood.webp";
import Good_News_Today_29 from "../assets/channel_logo/Good_News_Today_29.webp";
import History_TV18_2022 from "../assets/channel_logo/History_TV18_2022.webp";
import India_Today_Group_Logo from "../assets/channel_logo/India_Today_Group_Logo.webp";
import India_TV from "../assets/channel_logo/India_TV-0.webp";
import Manoranjan_Grand from "../assets/channel_logo/Manoranjan_Grand.webp";
import MirrorNowLogo from "../assets/channel_logo/MirrorNowLogo.webp";
import MTV from "../assets/channel_logo/mtv.png";
import NDTV_India from "../assets/channel_logo/NDTV_India.webp";
import Oscar_movies_bhojpuri from "../assets/channel_logo/Oscar_movies_bhojpuri.webp";
import Nazara from "../assets/channel_logo/Nazara.webp";
import rbhaart from "../assets/channel_logo/R.Bharat.webp";
import Sansad_TV from "../assets/channel_logo/Sansad_TV.webp";
import Shemaroo_2018 from "../assets/channel_logo/Shemaroo_2018.webp";
import Station_19 from "../assets/channel_logo/Station_19_29.webp";
import SS2_Hindi_HD from "../assets/channel_logo/SS2_Hindi_HD.webp";
import zeeClassic from "../assets/channel_logo/Zeeclassic.webp";
import zNews from "../assets/channel_logo/zee_news.jpg";
import zoom from "../assets/channel_logo/zoom.webp";
import manoranjan from "../assets/channel_logo/manoranjan.jpg";
import music_india from "../assets/channel_logo/music_india.jpg";
import epic_kids from "../assets/channel_logo/epic_kids.jpg";
import sangeet_bhojpuri from "../assets/channel_logo/sangeet_bhojpuri.jpg";
import dd_sport from "../assets/channel_logo/dd_sport.jpg";
import sonyKal from "../assets/channel_logo/sonyKal.jpg";
import starBhart from "../assets/channel_logo/starBhart.jpg";
import eros from "../assets/channel_logo/eros.jpg";
import action from "../assets/channel_logo/action.png";
import mahua from "../assets/channel_logo/mahua.jpg";
import pogo from "../assets/channel_logo/pogo.jpg";
import sony from "../assets/channel_logo/sony.jpg";
import dd_national from "../assets/channel_logo/dd_national.png";
import pksports from "../assets/channel_logo/pksports.png";
import flimax  from "../assets/channel_logo/flimax.png";
const channels = [
  {
    id: 1,
    name: "Zee Cinema ",
    category: "movies",
    country: "India",
    logo:zeeCinema,
    stream:
      "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/NGCHD/default/NGCHD.m3u8",
    description:
      "Watch Zee Cinema live and enjoy the latest Bollywood movies.",
  },
  {
    id: 2,
    name: "9X Jalwa",
    category: "Music",
    country: "India",
    logo:jalwa,
    stream: "https://mumt03.tangotv.in/Dsly5z3H9XJALWA/index.m3u8",
    description:
      "Watch 9x jalwa music and enjoy the latest hindi song.",
  },
  {
    id: 3,
    name: "9XM",
    category: "Music",
    country: "India",
    logo:xmRed,
    stream: "https://9xjio.wiseplayout.com/9XM/master.m3u8",
    description:
      "Watch 9xm music and enjoy the latest hindi song",
  },
  {
    id: 4,
    name: "Aaj Tak",
    category: "News",
    country: "India",
    logo: aajtak,
    stream:"https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_404p/chunks.m3u8",
    description:
      "Get the latest Indian and international news with Aaj Tak.",
  },
  {
    id: 5,
    name: "ABP Ganga ",
    category: "News",
    country: "India",
    logo: abpGanga,
    stream: "https://d2l4ar6y3mrs4k.cloudfront.net/live-streaming/ganga-livetv/master.m3u8",
    description:
      "Watch ABP Ganga live for the latest news and current affairs.",
  },
   {
    id: 6,
    name: "ABP News ",
    category: "News",
    country: "India",
    logo: abpNews,
    stream: "https://d2l4ar6y3mrs4k.cloudfront.net/live-streaming/abpnews-livetv/master.m3u8",
    description:
      "Watch ABP News live for the latest news and current affairs.",
  },
  {
    id: 7,
    name: "Aastha",
    category: "bakti",
    country: "India",
    logo:Aastha,
    stream: "https://aasthaott.akamaized.net/110923/smil:aasthatv.smil/index.m3u8",
    description:
      "Watch Aastha live for bhajan",
  },
  {
    id: 8,
    name: "Aastha Bhajan",
    category: "bakti",
    country: "India",
    logo:Aastha2,
    stream: "https://mumt05.tangotv.in/87NeALx2AASTHABHAJAN/index.m3u8",
    description:
      "Watch Aastha Bhajan live for bhajan ",
  },
  {
    id: 9,
    name: "B4U Bhojpuri",
    category: "bhojpuri",
    country: "India",
    logo:B4u_bhojpuri,
    stream: "https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8",
    description:
      "Watch B4U Bhojpuri live for enjoy the old Bollywood movies.",
  },
  {
    id: 10,
    name: "B4U Kadak",
    category: "movies",
    country: "India",
    logo:B4U_Kadak,
    stream: "https://cdn-2.pishow.tv/live/227/master.m3u8",
    description:
      "Watch Kadak live for enjoy the old Bollywood movies.",
  },
  {
    id: 11,
    name: "B4U Movies",
    category: "movies",
    country: "India",
    logo:B4U_MOVIES_2014,
    stream: "https://cdn-2.pishow.tv/live/419/master.m3u8",
    description:
      "Watch B4U Movies for enjoy the old Bollywood movies.",
  },
  {
    id: 12,
    name: "B4U Music ",
    category: "Music",
    country: "India",
    logo:B4U_Music_logo_2014,
    stream: "https://cdn-2.pishow.tv/live/415/master.m3u8",
    description:
      "Watch B4U Music for enjoy the old Bollywood movies.",
  },
  {
    id: 13,
    name: "Bhojpuri Cinema ",
    category: "movies",
    country: "India",
    logo:Bhojpuri_cinema,
    stream: "https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8",
    description:
      "Watch Bhojpuri Cinema for enjoy the bhojpuri movies.",
  },
  {
    id: 14,
    name: "CNBC Awaaz ",
    category: "News",
    country: "India",
    logo:cnbc_awaaz,
    stream: "https://n18syndication.akamaized.net/bpk-tv/CNBC_Awaaz_NW18_MOB/output01/master.m3u8",
    description:
      "Watch CNBC Awaaz for share market news",
  },
  {
    id: 15,
    name: "Colors ",
    category: "serial",
    country: "India",
    logo:colors,
    stream: "https://da86m1sqpm3o0.cloudfront.net/28072023/smil:colorsme.smil/playlist.m3u8",
    description:
      "Watch Colors tv for serials",
  },
  {
    id: 16,
    name: "Colors Rishtey ",
    category: "serial",
    country: "India",
    logo:color_rishey,
    stream: "https://manatv.akamaized.net/090823/smil:ristheyamerica.smil/playlist.m3u8",
    description:
      "Watch  Colors Rishtey tv for serials",
  },
  {
    id: 17,
    name: "Dangal 2",
    category: "serial",
    country: "India",
    logo:Dangal_2,
    stream: "https://live-dangal2.akamaized.net/liveabr/playlist.m3u8",
    description:
      "Watch  Dangal 2 tv for serials",
  },
  {
    id: 18,
    name: "Dangal TV",
    category: "serial",
    country: "India",
    logo:dangal,
    stream: "https://live-dangal.akamaized.net/liveabr/playlist.m3u8",
    description:
      "Watch  Dangal  tv for serials",
  },
  {
    id: 19,
    name: "Epic Bhojpuri",
    category: "movies",
    country: "India",
    logo:epic_bhojpuri,
    stream: "https://mumt01.tangotv.in/O5aw8Zn3EPICBHOJPURI/index.m3u8",
    description:
      "Watch  Epic Bhojpuri for bhojpuri movies",
  },
  {
    id: 20,
    name: "Epic Music",
    category: "music",
    country: "India",
    logo:epic_music,
    stream: "https://mumt04.tangotv.in/m18aqlK4EPICMUSIC/index.m3u8",
    description:
      "Watch  Epic music for old songs",
  },
  {
    id: 21,
    name: "Epic TV",
    category: "serial",
    country: "India",
    logo:epic_music,
    stream: "https://cc-czbq30x55knit.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-czbq30x55knit/DIYC/PMSL/IN10/Epic_TV_IN_B/Epic_TV_IN_B.m3u8",
    description:
      "Watch  Epic tv for history",
  },
  {
    id: 22,
    name: "ET Now",
    category: "News",
    country: "India",
    logo:ETNOW,
    stream: "https://dztlhgid9me95.cloudfront.net/live-tv/Vidgyor/etnow/etnow_master.m3u8",
    description:
      "Watch  ET Now ",
  },
  {
    id: 23,
    name: "Goldmines",
    category: "movies",
    country: "India",
    logo:Goldmines_Logo,
    stream: "https://cdn-2.pishow.tv/live/1460/master.m3u8",
    description:
      "Watch  south movies in hindi voice ",
  },
  {
    id: 24,
    name: "Goldmines Bollywood",
    category: "movies",
    country: "India",
    logo:Goldmines_Bollywood,
    stream: "https://mumt03.tangotv.in/Dsly5z3HGOLDMINESBOLLYWOOD/index.m3u8",
    description:
      "Watch  boliwood movies ",
  },
  {
    id: 25,
    name: "Good News Today",
    category: "news",
    country: "India",
    logo:Good_News_Today_29,
    stream: "https://cc-89m9zu7a2upfe.akamaized.net/hls/live/2016145/gnt/gntlive/playlist.m3u8",
    description:
      "Watch  Good News Today",
  },
  {
    id: 26,
    name: "History TV18",
    category: "history",
    country: "India",
    logo:History_TV18_2022,
    stream: "https://amg01448-amg01448c16-samsung-in-3495.playouts.now.amagi.tv/playlist/amg01448-samsungindia-historychannelenglish-samsungin/playlist.m3u8",
    description:
      "Watch  History",
  },
  {
    id: 27,
    name: "India Today",
    category: "News",
    country: "India",
    logo:India_Today_Group_Logo,
    stream: "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8",
    description:
      "Watch  India Today",
  },
  {
    id: 28,
    name: "India Tv",
    category: "News",
    country: "India",
    logo:India_TV,
    stream: "https://cdn-2.pishow.tv/live/1043/master.m3u8",
    description:
      "Watch  India tv",
  },
  {
    id: 29,
    name: "Manoranjan Grand",
    category: "comedy",
    country: "India",
    logo:Manoranjan_Grand,
    stream: "https://cdn-4.pishow.tv/live/1474/master.m3u8",
    description:
      "Watch  India tv",
  },
  {
    id: 30,
    name: "Mirror Now",
    category: "News",
    country: "India",
    logo:MirrorNowLogo,
    stream: "https://dai.google.com/linear/hls/event/ClPOullTQky5vGPf7fMZ8g/master.m3u8",
    description:
      "Watch  India tv",
  },
  {
    id: 31,
    name: "MTV",
    category: "music",
    country: "India",
    logo:MTV,
    stream: "https://da86m1sqpm3o0.cloudfront.net/28072023/smil:mtvindia.smil/playlist.m3u8",
    description:
      "Watch  India tv",
  },
  {
    id: 32,
    name: "NDTV India",
    category: "news",
    country: "India",
    logo:NDTV_India,
    stream: "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8",
    description:
      "Watch  NDTV India",
  },
  {
    id: 33,
    name: "Oscar Movies Bhojpuri",
    category: "movies",
    country: "India",
    logo:Oscar_movies_bhojpuri,
    stream: "https://mumt05.tangotv.in/87NeALx2OSCARMOVIESBHOJPURI/index.m3u8",
    description:
      "Oscar Movies Bhojpuri watch bhojpuri movies and serials",
  },
  {
    id: 34,
    name: "Pasand TV",
    category: "seiral",
    country: "India",
    logo:Nazara,
    stream: "https://d1msejlow1t3l4.cloudfront.net/fta/pasand/playlist.m3u8",
    description:
      "Oscar Movies Bhojpuri watch bhojpuri movies and serials",
  },
  {
    id: 35,
    name: "Republic Bharat",
    category: "News",
    country: "India",
    logo:rbhaart,
    stream: "https://cdn-2.pishow.tv/live/1053/master.m3u8",
    description:
      "news",
  },
  {
    id: 36,
    name: "Sansad TV 1",
    category: "News",
    country: "India",
    logo:Sansad_TV,
    stream: "https://playhls.media.nic.in/hls/live/lstv/lstv.m3u8",
    description:
      "news",
  },
  {
    id: 37,
    name: "Sansad TV 2",
    category: "News",
    country: "India",
    logo:Sansad_TV,
    stream: "https://cdn-2.pishow.tv/live/39/master.m3u8",
    description:
      "news",
  },
  {
    id: 38,
    name: "Shemaroo TV",
    category: "movies",
    country: "India",
    logo:Shemaroo_2018,
    stream: "https://airtelapp.shemaroo.com/shemarootv/smil:shemarootvadp.smil/playlist.m3u8",
    description:
      "news",
  },
  {
    id: 39,
    name: "Shemaroo Josh",
    category: "movies",
    country: "India",
    logo:Shemaroo_2018,
    stream: "https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8",
    description:
      "news",
  },
  {
    id: 40,
    name: "Shemaroo Umang ",
    category: "movies",
    country: "India",
    logo:Shemaroo_2018,
    stream: "https://airtelapp.shemaroo.com/shemarooumang/smil:shemarooumangadp.smil/playlist.m3u8",
    description:
      "news",
  },
   {
    id: 41,
    name: "South Station",
    category: "movies",
    country: "India",
    logo:Station_19,
    stream: "https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8",
    description:
      "news",
  },
    {
    id: 42,
    name: "Star Sports 2",
    category: "sport",
    country: "India",
    logo:SS2_Hindi_HD,
    stream: "https://tvsen5.aynaott.com/cXPB2LKkErN9/index.m3u8",
    description:
      "news",
  },
    {
    id: 43,
    name: "Zee Cine Classic",
    category: "sports",
    country: "India",
    logo:zeeClassic,
    stream: "https://amg00862-amg00862c8-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c8-amgplt0173/playlist.m3u8",
    description:
      "news",
  },
    {
    id: 44,
    name: "Zee News",
    category: "News",
    country: "India",
    logo:zNews,
    stream: "https://dt3lrqnyx3dks.cloudfront.net/index.m3u8",
    description:
      "news",
  },
    {
    id: 45,
    name: "Zoom",
    category: "music",
    country: "India",
    logo:zoom,
    stream: "https://d2esfk1pb9cdob.cloudfront.net/master.m3u8",
    description:
      "music",
  },
    {
    id: 46,
    name: "Manoranjan TV ",
    category: "serial",
    country: "India",
    logo:manoranjan,
    stream: "https://streams.tangotv.in/MANORANJANTV/ORIGIN/index.m3u8",
    description:
      "news",
  },
    {
    id: 47,
    name: "Manoranjan Movies ",
    category: "serial",
    country: "India",
    logo:manoranjan,
    stream: "https://mumt04.tangotv.in/m18aqlK4MANORANJANMOVIES/index.m3u8",
    description:
      "news",
  },
    {
    id: 48,
    name: "Music India ",
    category: "serial",
    country: "India",
    logo:music_india,
    stream: "https://streams.tangotv.in/MUSICINDIA/ORIGIN/index.m3u8",
    description:
      "news",
  },
    {
    id: 49,
    name: "Epic Kids ",
    category: "serial",
    country: "India",
    logo:epic_kids,
    stream: "https://cc-t8lqe1o99pszu.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-t8lqe1o99pszu/playlist.m3u8",
    description:
      "news",
  },
    {
    id: 50,
    name: "Sangeet Bhojpuri",
    category: "music",
    country: "India",
    logo:sangeet_bhojpuri,
    stream: "https://cdn-4.pishow.tv/live/1293/master.m3u8",
    description:
      "news",
  },
    {
    id: 51,
    name: "DD Sports",
    category: "sport",
    country: "India",
    logo:dd_sport,
    stream: "https://cdn-6.pishow.tv/live/13/master.m3u8",
    description:
      "news",
  },
    {
    id: 52,
    name: "Sony Kal",
    category: "serial",
    country: "India",
    logo:sonyKal,
    stream: "https://wurlsonypicturestv.global.transmit.live/hls/68deeb1c0238cda82df543dd/v1/spt_sonykal_1/lg_us/latest/main/hls/playlist.m3u8",
    description:
      "news",
  },
    {
    id: 53,
    name: "Star Bharat",
    category: "serial",
    country: "India",
    logo:starBhart,
    stream: "https://d1taaads3ztvmu.cloudfront.net/120723/smil:lifeokuk.smil/chunklist_b896000.m3u8",
    description:
      "news",
  },
    {
    id: 54,
    name: "Star Bharat",
    category: "serial",
    country: "India",
    logo:eros,
    stream: "https://eros-blywdcnm.cdn.runn.tv/eros/stream/blywcm/manifest/1.m3u8",
    description:
      "news",
  },
    {
    id: 55,
    name: "Action TV",
    category: "hollywood",
    country: "India",
    logo:action,
    stream: "https://runact.cdn.runn.tv/runntv/stream/p_runact/manifest/1.m3u8",
    description:
      "news",
  },
    {
    id: 56,
    name: "Mahua Tv",
    category: "bhojpuri",
    country: "India",
    logo:mahua,
    stream: "https://mahua-play.cdn.runn.tv/mahuaplayjio/tracks-v1a1/mono.m3u8",
    description:
      "news",
  },
    {
    id: 57,
    name: "Pogo Tv",
    category: "coortoon",
    country: "India",
    logo:pogo,
    stream: "https://runntv-grngld.cdn.runn.tv/greengold/stream/grngld/manifest/2.m3u8",
    description:
      "news",
  },
    {
    id: 58,
    name: "Sony Tv",
    category: "movies",
    country: "India",
    logo:sony,
    stream: "http://38.96.178.205/SONYHD/index.m3u8",
    description:
      "news",
  },
    {
    id: 59,
    name: "DD National",
    category: "serial",
    country: "India",
    logo:dd_national,
    stream: "https://cdn-1.pishow.tv/live/11/master.m3u8",
    description:
      "news",
  },
    {
    id: 60,
    name: "Filmax",
    category: "movies",
    country: "India",
    logo:flimax,
    stream: "https://s3.ideationtec.live/Filmax/Filmax.m3u8",
    description:
      "movies",
  },
    {
    id: 61,
    name: "PK Sport",
    category: "sport",
    country: "India",
    logo:pksports,
    stream: "https://lbgo.bozztv.com/ssh101/ssh101/pksportshd/playlist.m3u8",
    description:
      "sport",
  },
    
];
export default  channels;