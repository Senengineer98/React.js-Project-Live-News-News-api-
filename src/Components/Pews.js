import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Pews extends Component {

  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Elon Musk: Only blue tick users to vote in Twitter polls on policy",
      "description": "The billionaire says he will change the policy on Twitter votes after users say he should step down.",
      "url": "https://www.bbc.co.uk/news/business-64034892",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/165AF/production/_128076519_muskstayorgo.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:10:16Z",
      "content": "Elon Musk has said Twitter will only allow users with a blue tick to vote on changes to company policy after his followers voted for him to quit.\r\nMr Musk launched a Twitter poll asking his followers… [+3274 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Taiwan Nov export orders plunge, China's COVID surge clouds ... - Reuters.com",
      "description": "Taiwan's export orders contracted at the worst rate in more than a decade in November, hit by a plunge in China demand and generally weaker global consumer spending because of inflation and interest rate hikes.",
      "url": "https://www.reuters.com/markets/asia/taiwan-nov-export-orders-plunge-chinas-covid-surge-clouds-outlook-this.props.pageSize22-12-this.props.pageSize/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:49:00Z",
      "content": "TAIPEI, Dec this.props.pageSize (Reuters) - Taiwan's export orders contracted at the worst rate in more than a decade in November, hit by a plunge in China demand and generally weaker global consumer spending because… [+2198 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Johana Bhuiyan",
      "title": "Are your gadgets watching you? How to give the gift of privacy",
      "description": "Our guide to the data collected by popular smart devices, from sleep and fitness trackers to DNA kitsThe season of holiday gift buying is upon us, and it can be hard to resist the coolest new tech gadgets. But not all items are created equal when it comes to …",
      "url": "https://www.theguardian.com/world/this.props.pageSize22/dec/this.props.pageSize/privacy-holiday-gift-guide-tech-smart-devices",
      "urlToImage": "https://i.guim.co.uk/img/media/f859006479fb07008931ca0b79abc2b61dda56d0/0_0_1500_900/master/1500.jpg?width=1this.props.pageSize0&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=347f72eccfbca0013a214f793a31953e",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:00:10Z",
      "content": "The season of holiday gift buying is upon us, and it can be hard to resist the coolest new tech gadgets. But not all items are created equal when it comes to privacy, experts say.\r\nIn the US, there a… [+12379 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Alex Hern",
      "title": "Elon Musk’s poll own goal proves he can’t get out of his own way",
      "description": "Musk has a talent for trying to wiggle out of trouble on Twitter, only to land deeper in it – this time by asking users if he should quit as chief executive<ul><li>Don’t get TechScape delivered to your inbox? Sign up for the full article here</li></ul>Call it…",
      "url": "https://www.theguardian.com/technology/this.props.pageSize22/dec/this.props.pageSize/techscape-elon-musk-twitter-poll",
      "urlToImage": "https://i.guim.co.uk/img/media/cc403d298e7this.props.pageSize6fb3285774111a48b585f62cfbb/0_52_3500_2100/master/3500.jpg?width=1this.props.pageSize0&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c7d91ef64f88f7a175924c15711abd4f",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:56:45Z",
      "content": "Call it Chekhovs Jet: a Twitter account placed on the mantelpiece in act one must surely go off in act five.\r\nSeven days after buying the social network, Elon Musk tweeted that his commitment to free… [+7485 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Adrian Marlow",
      "title": "Grab the Apple Watch Ultra for $749 Right Now (Save $50) - CNET",
      "description": "This rugged smartwatch comes with LTE connectivity, an ultra bright screen, a bigger battery and more.",
      "url": "https://www.cnet.com/deals/grab-the-apple-watch-ultra-for-749-right-now-save-50/",
      "urlToImage": "https://www.cnet.com/a/img/resize/a8dc13dec4aec731b2this.props.pageSizec99221112e61cef4505a/hub/this.props.pageSize22/12/this.props.pageSize/f46ea63d-1dc5-43a4-897a-b6c19591ed33/product-background-green-stars-black-lines-5.jpg?auto=webp&fit=crop&height=630&width=1this.props.pageSize0",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:27:this.props.pageSizeZ",
      "content": "The Apple Watch Ultra was just released in September, but we've already seen some deals on this spectacular smartwatch. In fact, the Ultra impressed us so much that it scored a CNET Editors' Choice A… [+1342 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Reveals New AirTag Features Added in Latest Firmware Updates",
      "description": "Apple has released two firmware updates for its AirTag item trackers since November, but at the time the company didn't provide any information on what was changed. Earlier this week, Apple finally updated a support document explaining what's new.\n\n\n\n\n\nAccord…",
      "url": "https://www.macrumors.com/this.props.pageSize22/12/this.props.pageSize/new-airtag-features-lates-firmware-update/",
      "urlToImage": "https://images.macrumors.com/t/0BBI0XOI4zlJXSVGY0_yhjGMgAc=/1600x/article-new/this.props.pageSize22/12/AitTag-New-Firmware.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:51:23Z",
      "content": "Apple has released two firmware updates for its AirTag item trackers since November, but at the time the company didn't provide any information on what was changed. Earlier this week, Apple finally u… [+1440 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Foxconn to Begin Making MacBooks in Vietnam as Early as May this.props.pageSize23",
      "description": "Apple plans to begin producing MacBook models in Vietnam for the first time next year, according to a new report from Nikkei Asia.\n\n\n\n\n\nCiting sources briefed on the matter, the report says that Apple has tapped Foxconn to start making MacBooks in the country…",
      "url": "https://www.macrumors.com/this.props.pageSize22/12/this.props.pageSize/foxconn-macbook-production-vietnam-may-this.props.pageSize23/",
      "urlToImage": "https://images.macrumors.com/t/x7RxICB5_PfybpnRlchYlqteEhc=/1600x/article-new/this.props.pageSize22/05/macbook-pro-box-apple.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:47:31Z",
      "content": "Apple plans to begin producing MacBook models in Vietnam for the first time next year, according to a new report from Nikkei Asia.\r\nCiting sources briefed on the matter, the report says that Apple ha… [+874 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Apple Scales Back High-End Mac Pro Plans, Weighs Production Move To Asia",
      "description": "An anonymous reader quotes a report from Bloomberg, written by Mark Gurman: The new high-end Mac Pro with Apple silicon is behind schedule, and you can blame changes to the company's chip and manufacturing plans. When Apple announced plans in June this.props.pageSizethis.props.pageSize to tra…",
      "url": "https://hardware.slashdot.org/story/22/12/this.props.pageSize/0233247/apple-scales-back-high-end-mac-pro-plans-weighs-production-move-to-asia",
      "urlToImage": "https://a.fsdn.com/sd/topics/mac_64.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:00:00Z",
      "content": "The new high-end Mac Pro with Apple silicon is behind schedule, and you can blame changes to the company's chip and manufacturing plans. When Apple announced plans in June this.props.pageSizethis.props.pageSize to transition away fro… [+3315 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "Mark Cuban says last year's crypto boom was '99% noise' – and Sam Bankman-Fried's arrest could pop the bubble",
      "description": "Disgraced FTX founder Sam Bankman-Fried's arrest in the Bahamas will force the crypto world to get its act together, billionaire investor Mark Cuban has said.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-crash-mark-cuban-ftx-bankman-fried-arrest-bitcoin-bubble-this.props.pageSize22-12",
      "urlToImage": "https://i.insider.com/63a19336b5600000185b76fb?width=1this.props.pageSize0&format=jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:23:52Z",
      "content": "Billionaire investor Mark Cuban still believes there's some value in the crypto space, but says the asset class's stratospheric rise in this.props.pageSize21 now looks like it was almost all \"noise\".\r\nLast year's bul… [+2659 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hipertextual"
      },
      "author": "Gabriel Erard",
      "title": "Apple tiene todo listo para fabricar los MacBook fuera de China: será antes de lo esperado y te afecta más de lo que crees",
      "description": "Apple sigue firme en su plan de cortar su dependencia de China, y ya tiene definida la siguiente etapa. Según reporta Nikkei Asia, los de Cupertino comenzarán a fabricar los MacBook en Vietnam a partir de this.props.pageSize23. Un dato notorio, considerando que hasta ahora la…",
      "url": "http://hipertextual.com/this.props.pageSize22/12/apple-fabricar-macbook-fuera-de-china",
      "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/this.props.pageSize22/06/MacBook-Air-M2-Apple-Park-5.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:03:33Z",
      "content": "Apple sigue firme en su plan de cortar su dependencia de China, y ya tiene definida la siguiente etapa. Según reporta Nikkei Asia, los de Cupertino comenzarán a fabricar los MacBook en Vietnam a part… [+3212 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Boing Boing"
      },
      "author": "Boing Boing's Shop",
      "title": "You can buy a refurbished iPhone XR now for 70% off",
      "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nEverybody wants an iPhone, but the reality is not everyone wants to pay the price for an iPhone. — Read the rest",
      "url": "https://boingboing.net/this.props.pageSize22/12/19/you-can-buy-a-refurbished-iphone-xr-now-for-70-off.html",
      "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/this.props.pageSize22/12/sale_319535_article_image.jpeg?fit=1this.props.pageSize0%2C800&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT01:00:00Z",
      "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nEverybody wants an iPhone, but the reality is not everyone … [+1650 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Pastor",
      "title": "En China no despiden, \"optimizan el negocio\". Xiaomi lo hará echando al 10% de su plantilla",
      "description": "La situación económica no está dando tregua a las empresas, y varias de las grandes tecnológicas han anunciado despidos o al menos congelación de contrataciones. La última afectada no es Xiaomi, que tiene el ambicioso objetivo de lograr ser el mayor fabricant…",
      "url": "https://www.xataka.com/empresas-y-economia/china-no-despiden-optimizan-negocio-xiaomi-hara-echando-al-10-su-plantilla",
      "urlToImage": "https://i.blogs.es/98617d/captura-de-pantalla-this.props.pageSize22-12-this.props.pageSize-a-las-8.49.23/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT07:51:36Z",
      "content": "La situación económica no está dando tregua a las empresas, y varias de las grandes tecnológicas han anunciado despidos o al menos congelación de contrataciones. La última afectada no es Xiaomi, que … [+2264 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Jose García",
      "title": "Alexa suma soporte para Matter: 17 dispositivos Amazon Echo ya son compatibles con el nuevo estándar de domótica",
      "description": "Hace unas semanas, Amazon anunció su intención de hacer compatible sus Echo y demás dispositivos con Matter, el nuevo estándar de domótica y hogar conectado (al cual Google se sumó hace poco, por cierto). Ahora, finalmente, ha completado la primera fase del d…",
      "url": "https://www.xataka.com/domotica-1/alexa-suma-soporte-para-matter-17-dispositivos-amazon-echo-compatibles-nuevo-estandar-domotica",
      "urlToImage": "https://i.blogs.es/b3cd03/1366_this.props.pageSize00/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:30:46Z",
      "content": "Hace unas semanas, Amazon anunció su intención de hacer compatible sus Echo y demás dispositivos con Matter, el nuevo estándar de domótica y hogar conectado (al cual Google se sumó hace poco, por cie… [+2711 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Alex Blake",
      "title": "This critical macOS flaw may leave your Mac defenseless",
      "description": "Macs are known for their security, but Microsoft has discovered a serious flaw that could let hackers waltz past one of macOS’s strongest defensive tools.",
      "url": "https://www.digitaltrends.com/computing/macos-achilles-gatekeeper-security-flaw/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/this.props.pageSize22/06/macbook-closeup-neon-lights.jpg?resize=1this.props.pageSize0%2C630&p=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:54:50Z",
      "content": "Apples macOS operating system has such a strong reputation for security that many people mistakenly believe Macs simply arent affected by malware. Well, Microsoft has served up a reminder that thats … [+2307 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Prakhar Khanna",
      "title": "Forget AirPods — here’s why I use Samsung earbuds with my iPhone",
      "description": "I used the Galaxy Buds 2 Pro with an iPhone for over two months. They are a brilliant pair of earbuds, but should you buy them over the AirPods 2 Pro?",
      "url": "https://www.digitaltrends.com/mobile/using-samsung-galaxy-buds-2-pro-with-iphone-not-airpods/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/this.props.pageSize22/12/Galaxy-Buds-2-Pro-with-iPhone1219_182830.jpg?resize=1this.props.pageSize0%2C630&p=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:30:39Z",
      "content": "AirPods Pro 2 are the go-to flagship earbuds for an iPhone user; you get all the ecosystem benefits alongside brilliant sound quality and active noise cancellation (ANC). But what if you use your iPh… [+6055 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Atlantic"
      },
      "author": "Jerusalem Demsas",
      "title": "Against Homeownership",
      "description": "Real estate should be treated as consumption, not investment.",
      "url": "https://www.theatlantic.com/newsletters/archive/this.props.pageSize22/12/homeownership-real-estate-investment-renting/672511/?utm_source=feed",
      "urlToImage": null,
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:00:00Z",
      "content": "It is a truth universally acknowledged that an American in possession of a good fortune must be in want of a mortgage. I don’t know if you should buy a house. Nor am I inclined to give you personal f… [+18750 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.com"
      },
      "author": "microsoft",
      "title": "The Windows Subsystem for Android now runs Android 13 in beta",
      "description": "Today we are shipping an update for Windows Subsystem for Android™ on Windows 11 to members of the Windows Subsystem for Android™ Preview Program. This update (2211.40000.7.0) will update WSA to An...",
      "url": "https://github.com/microsoft/WSA/discussions/167",
      "urlToImage": "https://opengraph.githubassets.com/5939bthis.props.pageSized240d541c07cc6d48f2f18be4115d040db00197f135c89f2a1d788c8a/microsoft/WSA/discussions/167",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT01:08:02Z",
      "content": "The only reason why Google Play Games exists is because Google is unwilling to partner with MS to include Google Play on WSA. Otherwise what's the point of the Google Play Games program?\r\nGoogle hist… [+1135 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Billboard"
      },
      "author": "Elias Leight",
      "title": "Songs Are Getting Shorter",
      "description": "On TikTok and streaming services, fragmentary moments rule.",
      "url": "https://www.billboard.com/pro/songs-getting-shorter-tiktok-streaming/",
      "urlToImage": "https://www.billboard.com/wp-content/uploads/this.props.pageSize22/11/market-song-illustration-billboard-this.props.pageSize22-bb15-pete-ryan-pro-1260.jpg?w=1024",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT03:23:29Z",
      "content": "In early October, Lil Yachty uploaded the 83-second track “Poland” to SoundCloud along with a grumpy message: “STOP LEAKING MY SHIT.” “Poland” consists of two keening hooks and some slack rhymes; a v… [+5339 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Giuliomagnifico.blog"
      },
      "author": "Giulio Magnifico",
      "title": "Retrieve a scheduled report of your Grafana dashboards via mail",
      "description": "Requirements Installation Grafana image render Automating the report Tips Bonus: build PDF reports Conclusion",
      "url": "http://giuliomagnifico.blog/tips/this.props.pageSize22/12/19/grafana-reporting.html",
      "urlToImage": null,
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:55:37Z",
      "content": "This project consists in a way to receive the stats of my Grafana dashboards (home network, Netatmo Weather Station/Thermostat, home consumption/Homebridge, Pi-Hole, servers, etc) from my Grafana ser… [+22883 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Computerhistory.org"
      },
      "author": null,
      "title": "The APL Programming Language Source Code (this.props.pageSize12)",
      "description": "Thousands of programming languages were invented in the first 50 years of the age of computing. Many of them were similar, and many followed a traditional, evolutionary path from their predecessors. What eventually became APL was first a mathematical notation…",
      "url": "https://computerhistory.org/blog/the-apl-programming-language-source-code/",
      "urlToImage": "https://computerhistory.org/wp-content/uploads/this.props.pageSize12/10/APLSC_iverson_team.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:31:27Z",
      "content": "Software Gems: The Computer History Museum Historical Source Code Series\r\nKen Iverson at Harvard University\r\nThousands of programming languages were invented in the first 50 years of the age of compu… [+27718 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Defekte Butterfly-Tastatur: Apple beginnt mit Entschädigung",
      "description": "50 Millionen US-Dollar sollen US-Kunden erhalten, die Ärger mit Apples MacBook-Pro-Tastaturen hatten. Je nachdem sind mehrere 100 US-Dollar drin.",
      "url": "https://www.heise.de/news/Defekte-Butterfly-Tastatur-Apple-beginnt-mit-Entschaedigung-7403305.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1this.props.pageSize0x1this.props.pageSize0/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/6/7/0/2/9/apple-butterfly-f50c3b69950b788c-c176a360357af45f.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:00:00Z",
      "content": "Apple hat damit begonnen, Geldentschädigungen an Betroffene in den USA vorzubereiten, die Ärger mit der Butterfly-Tastatur ihres MacBook Pro hatten. Dies folgt auf einen über mehrere Jahre andauernde… [+2643 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "HomeKit und iOS 16.2: Probleme nach Umstieg auf neue Architektur",
      "description": "Apple verspricht für seinen Smart-Home-Standard eine beschleunigte interne Architektur. Doch nach dem Upgrade machen HomeKit-Geräte manchmal Ärger.",
      "url": "https://www.heise.de/news/HomeKit-und-iOS-16-2-Probleme-nach-Umstieg-auf-neue-Architektur-7408227.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1this.props.pageSize0x1this.props.pageSize0/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/6/7/1/5/9/HomeKit-iOS-16-8d5fd3bf97ba2f32.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:00:00Z",
      "content": "Besitzer von HomeKit-Geräten, die ihr gesamtes System auf iOS 16.2 &amp; Co. umgestellt haben, berichten über Schwierigkeiten bei der Gerätenutzung. Apple hatte zuvor die Etablierung einer \"neuen unt… [+2870 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Wolfgang Kreutz",
      "title": "heise+ | Leitfaden: Mac aus Backup richtig wiederherstellen",
      "description": "Ob per Migrationsassistent, Backup-Tool oder – nach Neuinstallation von macOS – manuell: Es gibt viele Wege, um einen Mac neu aufzusetzen oder umzuziehen.",
      "url": "https://www.heise.de/ratgeber/Leitfaden-Mac-aus-Backup-richtig-wiederherstellen-7412519.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1this.props.pageSize0x1this.props.pageSize0/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/6/7/2/9/1/mi_22_06_wre_migration_aufmacher-ff5fc4c28d33cbbe.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:30:00Z",
      "content": "Inhaltsverzeichnis\r\nAuch wenn Apple es gerne so darstellt der Umzug eines lang genutzten Macs ist nicht unbedingt trivial. Faktoren wie ein Architekturwechsel von Intel auf Apple Silicon oder auch ei… [+1157 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Martin Holland",
      "title": "TikTok in immer mehr US-Bundesstaaten verboten und auf vielen Geräten blockiert",
      "description": "In den USA gewinnt eine regelrechte Kampagne gegen die Video-App TikTok an Fahrt. Auf immer mehr Diensthandys von Staatsbediensteten ist sie verboten.",
      "url": "https://www.heise.de/news/TikTok-Immer-mehr-Verbote-in-US-Bundesstaaten-auf-mehr-Geraeten-blockiert-7432797.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1this.props.pageSize0x1this.props.pageSize0/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/6/7/7/1/4/shutterstock_1458410210-dde8c1dcccc878b3.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT06:11:00Z",
      "content": "Die beliebte chinesische Video-App TikTok ist jetzt in 19 der 50 US-Bundesstaaten auf Dienstgeräten mindestens in Teilen verboten, die meisten dieser Verbote wurden erst in den vergangenen zwei Woche… [+1921 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Bradley Chambers",
      "title": "Apple @ Work Podcast: Not waiting on Apple",
      "description": "Sponsored by Addigy: The ONLY real-time Apple device management platform that combines MDM with live agent capabilities to manage and secure your Apple ecosystem — regardless of your Mac-spertise. Visit addigy.com/9to5Mac for a free 14-day trial to see how Ad…",
      "url": "https://9to5mac.com/this.props.pageSize22/12/this.props.pageSize/not-waiting-on-apple/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/this.props.pageSize19/08/Apple-at-Work.png?resize=1this.props.pageSize0%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:33:30Z",
      "content": "Sponsored by Addigy: The ONLY real-time Apple device management platform that combines MDM with live agent capabilities to manage and secure your Apple ecosystem regardless of your Mac-spertise. Visi… [+493 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "Mac Gatekeeper bypass vulnerability fixed by Apple after discovery by Microsoft researchers",
      "description": "A serious Mac Gatekeeper bypass vulnerability has been fixed by Apple, after it was discovered and reported by security researchers at Microsoft. \nThe flaw allowed malware to bypass Gatekeeper checks. Notably, the vulnerability even affected Macs running in u…",
      "url": "https://9to5mac.com/this.props.pageSize22/12/this.props.pageSize/mac-gatekeeper-bypass/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/this.props.pageSize22/12/Mac-Gatekeeper-bypass.jpg?resize=1this.props.pageSize0%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:47:59Z",
      "content": "A serious Mac Gatekeeper bypass vulnerability has been fixed by Apple, after it was discovered and reported by security researchers at Microsoft. \r\nThe flaw allowed malware to bypass Gatekeeper check… [+2532 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Matter-enabled Amazon Echo devices to work with iOS soon as phase one rollout is now complete",
      "description": "With the official launch of the new Matter standard for smart home accessories in November, Amazon has announced its plans to add Matter support to its Echo devices. The company confirmed on Monday that the phase one rollout of Matter support is now complete,…",
      "url": "https://9to5mac.com/this.props.pageSize22/12/19/matter-enabled-amazon-echo-devices-to-work-with-ios-soon-as-phase-one-rollout-is-now-complete/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/this.props.pageSize22/12/Amazon-Echo-Dot.jpg?resize=1this.props.pageSize0%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT01:00:51Z",
      "content": "With the official launch of the new Matter standard for smart home accessories in November, Amazon has announced its plans to add Matter support to its Echo devices. The company confirmed on Monday t… [+2523 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "Sick iPhone workers expected to keep working, refrain from COVID-19 testing, claims report",
      "description": "A report claims that Foxconn is asking sick iPhone workers to turn up for their shifts in the Zhengzhou plant, with at least one report stating that workers are being advised not to take COVID-19 tests.\nFoxconn’s campus in Zhengzhou, China, is the largest iPh…",
      "url": "https://9to5mac.com/this.props.pageSize22/12/this.props.pageSize/sick-iphone-workers/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/this.props.pageSize22/12/Sick-iPhone-workers.jpg?resize=1this.props.pageSize0%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:17:55Z",
      "content": "A report claims that Foxconn is asking sick iPhone workers to turn up for their shifts in the Zhengzhou plant, with at least one report stating that workers are being advised not to take COVID-19 tes… [+3181 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "TikTok algorithm to be more transparent, after concerns about harmful recommendations [U]",
      "description": "Update: TikTok says it is today launching a new tool to provide greater transparency on how videos are added to a user’s feed. For any video, you can tap the Share panel then the question-mark icon called “Why this video?”. So far, it appears only very generi…",
      "url": "https://9to5mac.com/this.props.pageSize22/12/this.props.pageSize/how-tiktoks-algorithm-works/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/this.props.pageSize21/07/How-TikToks-algorithm-works.jpg?resize=1this.props.pageSize0%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:55:52Z",
      "content": "Update: TikTok says it is today launching a new tool to provide greater transparency on how videos are added to a user’s feed. For any video, you can tap the Share panel then the question-mark icon c… [+5528 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Amy Feldman, Forbes Staff, \n Amy Feldman, Forbes Staff\n https://www.forbes.com/sites/amyfeldman/",
      "title": "How A Former VC Built A Consumer Tech Company To $75 Million Revenue With No Investors",
      "description": "Digital photo frame startup Skylight hired Aviv Gilboa from Ring as president to keep growth going in a tough retail environment.",
      "url": "https://www.forbes.com/sites/amyfeldman/this.props.pageSize22/12/this.props.pageSize/how-a-former-vc-built-a-consumer-tech-company-to-75-million-revenue-with-no-investors/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6397af05e7b607ec5a365093/0x0.jpg?format=jpg&crop=2159,1214,x1,y264,safe&width=1this.props.pageSize0",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:30:00Z",
      "content": "Skylight founder and CEO Michael Segal (left) and new president Aviv Gilboa\r\nSkylight\r\nBack in this.props.pageSize18, Michael Segal was working at Bessemer Ventures and building his side business making digital pictu… [+5831 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Beth Pinsker",
      "title": "Beth Pinsker: No love for meme stocks — stock-trading kids are loading up on Apple and index funds",
      "description": "In joint accounts with parents, kids younger than 18 are learning to play the stock market, mostly for the better.",
      "url": "https://www.marketwatch.com/story/no-love-for-meme-stocks-stock-trading-kids-are-loading-up-on-apple-and-index-funds-11671547429",
      "urlToImage": "https://images.mktw.net/im-688881/social",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:43:00Z",
      "content": "Forget about teaching kids the value of compound interest by escorting them to a local bank and helping them deposit their birthday money. These days, youngsters are picking stocks as if theyre mini-… [+5392 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Jess Pingrey)",
      "title": "Daily Deals Dec. this.props.pageSize: Google Nest Hub for $49.98, 31% off Apple Pencil 2 & more",
      "description": "Tuesday's top deals include this.props.pageSize% off Apple AirPods Pro 2, $70 off an Apple TV 4K, 60% off the Flashpoint LED Ring Light and more.Save this.props.pageSize% on Apple AirPods ProEvery day, the AppleInsider team looks at online retailers to discover discounts and deals on the best…",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/daily-deals-dec-this.props.pageSize-google-nest-hub-for-4998-31-off-apple-pencil-2-more",
      "urlToImage": "https://photos5.appleinsider.com/gallery/5this.props.pageSize46-103421-daily-deals-dec-this.props.pageSize-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:43:34Z",
      "content": "Save this.props.pageSize% on Apple AirPods Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nTuesday's top deals include this.props.pageSize% off Apple AirPods Pro 2, $70 off an Apple TV… [+2813 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Lila Riesen)",
      "title": "Best Apple headphones & earbuds for working out",
      "description": "Whether you're a runner, CrossFitter, weightlifter, gymnast, or pro dog-walker, you're going to sweat at some point. Here are the best headsets that will survive your workouts.Lebron wearing Studio 3 Beats - Source - HeadphonestyThere's no point in working ou…",
      "url": "https://appleinsider.com/inside/accessories-and-io/best/best-apple-headphones-earbuds-for-working-out",
      "urlToImage": "https://photos5.appleinsider.com/gallery/51875-103262--xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:43:46Z",
      "content": "Lebron wearing Studio 3 Beats - Source - Headphonesty\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nWhether you're a runner, CrossFitter, weightlifter, … [+10862 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "Apple plans to make MacBooks in Vietnam from mid-this.props.pageSize23",
      "description": "Following production tests at Foxconn's Vietnam facility, Apple will reportedly move some MacBook Pro manufacturing to the country for the first time.Foxconn plantAs part of plans to reduce its reliance on China, Apple has previously been exploring making the…",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/apple-plans-to-make-macbooks-in-vietnam-from-mid-this.props.pageSize23",
      "urlToImage": "https://photos5.appleinsider.com/gallery/50002-98085-Foxconn-Header-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:30:08Z",
      "content": "Foxconn plant\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nFollowing production tests at Foxconn's Vietnam facility, Apple will reportedly move some Ma… [+1307 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "macOS had a vulnerability that Lockdown Mode wouldn't defeat",
      "description": "Following Apple's patching of the issue, Microsoft has revealed it discovered a way to bypass Gatekeeper in macOS, and even Lockdown Mode to run malware.Lockdown Mode enhances iPhone security well beyond what regular users needThe vulnerability, called \"Achil…",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/macos-had-a-vulnerability-that-lockdown-mode-wouldnt-defeat",
      "urlToImage": "https://photos5.appleinsider.com/gallery/49333-96385-Lockdown-mode-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:15:53Z",
      "content": "Lockdown Mode enhances iPhone security well beyond what regular users need\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nFollowing Apple's patching of t… [+2437 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Andrew O'Hara)",
      "title": "this.props.pageSize21 16-inch MacBook Pro review: One year later, still worth buying",
      "description": "Apple's 14-inch and 16-inch MacBook Pro powered by M1 Pro and M1 Max Apple Silicon launched more than a year ago. As we await new M2 versions, we revisit how well these machines have held up under our daily workload.The this.props.pageSize21 16-inch MacBook ProIn October of 2…",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/this.props.pageSize21-16-inch-macbook-pro-review-one-year-later-still-worth-buying",
      "urlToImage": "https://photos5.appleinsider.com/gallery/5this.props.pageSize40-103412-The-new-MacBook-Pro-16-inch-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:54:42Z",
      "content": "The this.props.pageSize21 16-inch MacBook Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple's 14-inch and 16-inch MacBook Pro powered by M1 Pro and M1 Max Apple Si… [+9295 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "Apple working on tech to make haptic feedback in AR feel real",
      "description": "Apple is researching how to add gyroscopes to Apple AR headsets, giving continuous haptic feedback that will feel immersive.Virtual reality can show you anything it likes, but if you're not also feeling anything, there's a limit to how immersive the experienc…",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/apple-working-on-tech-to-make-haptic-feedback-in-ar-feel-real",
      "urlToImage": "https://photos5.appleinsider.com/gallery/5this.props.pageSize52-103434-000-lead-Apple-AR-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:42:55Z",
      "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple is researching how to add gyroscopes to Apple AR headsets, giving continuous haptic feedback that wil… [+3496 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Malcolm Owen)",
      "title": "JP Morgan cuts AAPL target price over iPhone 14 Pro shipment issues",
      "description": "Apple's China problems has prompted JP Morgan to moderate its December quarter expectations, trimming its price target due to long iPhone 14 Pro lead times.iPhone 14 ProSince the release of the this.props.pageSize22 iPhone, JP Morgan has issued its Apple Product Availability …",
      "url": "https://appleinsider.com/articles/22/12/this.props.pageSize/jp-morgan-cuts-aapl-target-price-over-iphone-14-pro-shipment-issues",
      "urlToImage": "https://photos5.appleinsider.com/gallery/5this.props.pageSize49-103432-51892-102925-51122-100970-50745-100064-50601-996this.props.pageSize-iPhone-14-Pro-Max-always-on-xl-xl-xl-xl-xl.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:12:18Z",
      "content": "iPhone 14 Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple's China problems has prompted JP Morgan to moderate its December quarter expectations,… [+2707 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macworld"
      },
      "author": "Michael Simon",
      "title": "Apple finally lets us know what was in those AirTag firmware updates",
      "description": "Over the past couple of months, Apple has released two firmware updates for the AirTag that had no release notes. Now Apple has finally told us what actually happened when our trackers updated.\r\n\n\n\n\nIn a support document, Apple detailed the changes in the two…",
      "url": "https://www.macworld.com/article/1440221/airtag-firmware-updates-release-notes.html",
      "urlToImage": "https://www.macworld.com/wp-content/uploads/this.props.pageSize22/12/airtag_review_3-1.jpg?quality=50&strip=all&w=1024",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:51:38Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nOver the past couple… [+1384 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elespanol.com"
      },
      "author": "Jacinto Araque",
      "title": "Más de 30 dispositivos Amazon Echo y eero ya son compatibles con Matter",
      "description": "Amazon acaba de anunciar su primer paso en la integración del estándar Matter en sus dispositivos inteligentes.",
      "url": "https://www.elespanol.com/elandroidelibre/otros-dispositivos/otros/this.props.pageSize2212this.props.pageSize/dispositivos-amazon-echo-eero-compatibles-matter/727427297_0.html",
      "urlToImage": "https://s1.eestatic.com/this.props.pageSize22/11/03/actualidad/715688998_229635439_600x315.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:44:26Z",
      "content": "Hace unos meses la industria de productos inteligentes, con Amazon, Google y Apple a la cabeza, se unió para crear Matter, un protocolo que permitirá unificar los controles de los productos inteligen… [+this.props.pageSize31 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "ヤマダユウス型",
      "title": "癒やし度高いわぁ…｡焚き火のようなゆらめきが心地良い加湿器「GeeFire」",
      "description": "乾燥が気になる季節になると、頼りたくなるのが加湿器。加湿器って照明やデザイン性といった加湿以外の機能も侮れないので、わりと楽しめるガジェットなんですよね。ギズ屋台で取り扱い中の加湿器「GeeFire」も、なかなか攻めたデザインしてますよ。",
      "url": "https://www.gizmodo.jp/this.props.pageSize22/12/giz-yatai-geefire.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/this.props.pageSize22/12/18/221218geefire_01.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:00:00Z",
      "content": "GeeFire\r\nApple Pay, Google Pay, LINE Pay, , Paidy, Smartpay, \r\nUSBPC\r\nLED2\r\nApple Pay, Google Pay, LINE Pay, , Paidy, Smartpay, \r\nGeeFireGeeFire31%9,790\r\nApple Pay, Google Pay, LINE Pay, , Paidy, Sma… [+72 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yanko Design"
      },
      "author": "JC Torres",
      "title": "Lenovo IdeaCentre Mini Gen 8 is a mini PC that will look fabulous on your desk",
      "description": "Lenovo IdeaCentre Mini Gen 8 is a mini PC that will look fabulous on your deskNot everyone needs a portable computer like a laptop, but not everyone might want a hulking tower on or below their desk. The Apple Mac...",
      "url": "https://www.yankodesign.com/this.props.pageSize22/12/this.props.pageSize/lenovo-ideacentre-mini-gen-8-is-a-mini-pc-that-will-look-fabulous-on-your-desk/",
      "urlToImage": "https://www.yankodesign.com/images/design_news/this.props.pageSize22/12/lenovo-ideacentre-mini-gen-8-is-a-mini-pc-that-will-look-fabulous-on-your-desk/IdeaCentre-Mini-Gen8-Intel_Still-life_01.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:00:34Z",
      "content": "Not everyone needs a portable computer like a laptop, but not everyone might want a hulking tower on or below their desk. The Apple Mac Mini has long proven that there is a very lucrative market for … [+2660 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Tristan",
      "title": "La justice française condamne Apple et le monopole de l’App Store",
      "description": "Apple vient d'être condamné vis-à-vis du monopole de l'App Store. Le premier jugement d'une longue série en Europe ? \nLa justice française condamne Apple et le monopole de l’App Store",
      "url": "https://www.journaldugeek.com/this.props.pageSize22/12/this.props.pageSize/la-justice-francaise-condamne-apple-et-le-monopole-de-lapp-store/",
      "urlToImage": "https://www.journaldugeek.com/content/uploads/this.props.pageSize21/10/template-jdg-48-1.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:00:15Z",
      "content": "Apple vient d'être condamné vis-à-vis du monopole de l'App Store. Le premier jugement d'une longue série en Europe ?L’étau se resserre de jour en jour autour de la firme de Cupertino. Apple vient d’ê… [+2482 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Thomas Estimbre",
      "title": "Smartphones reconditionnés : Que se passe-t-il avec la redevance sur la copie privée ?",
      "description": "Le Conseil d’État, la plus haute juridiction administrative, annule la redevance sur la copie privée pour les produits reconditionnés. Pourtant, cette décision ne devrait pas faire date et on vous explique pourquoi.\nSmartphones reconditionnés : Que se passe-t…",
      "url": "https://www.journaldugeek.com/this.props.pageSize22/12/this.props.pageSize/smartphones-reconditionnes-que-se-passe-t-il-avec-la-redevance-sur-la-copie-privee/",
      "urlToImage": "https://www.journaldugeek.com/content/uploads/this.props.pageSize22/03/regarder-smartphone.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:00:51Z",
      "content": "Le Conseil dÉtat, la plus haute juridiction administrative, annule la redevance sur la copie privée pour les produits reconditionnés. Pourtant, cette décision ne devrait pas faire date et on vous exp… [+3015 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Jesús Quesada",
      "title": "El nuevo Apple Watch SE tiene su mayor rebaja hasta la fecha y entrega antes de Navidad: registra tu actividad física y más",
      "description": "La Navidad está cada vez más cerca y ya va siendo más complicado comprar regalos y que lleguen a tiempo, pero el nuevo Apple Watch SE de 2ª generación sí que puede estar en la puerta de casa antes del 24 de diciembre. Además, está de oferta de Amazon a su pre…",
      "url": "https://www.applesfera.com/seleccion/nuevo-apple-watch-se-tiene-su-mayor-rebaja-fecha-entrega-antes-navidad-registra-tu-actividad-fisica",
      "urlToImage": "https://i.blogs.es/b15497/apple-watch-se-2-oferta/840_560.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:04:34Z",
      "content": "La Navidad está cada vez más cerca y ya va siendo más complicado comprar regalos y que lleguen a tiempo, pero el nuevo Apple Watch SE de 2ª generación sí que puede estar en la puerta de casa antes de… [+1832 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Miguel López",
      "title": "Algunos accesorios de HomeKit ya se están integrando a Matter: estas son las ventajas que ganamos con ello",
      "description": "El futuro de la domótica ya está entrando en el ecosistema de Apple. Los fabricantes de accesorios para HomeKit ya están empezando a lanzar actualizaciones de firmware que adaptan los dispositivos a Matter, el nuevo estándar que busca estandarizar las comunic…",
      "url": "https://www.applesfera.com/accesorios/algunos-accesorios-homekit-se-estan-integrando-a-matter-estas-ventajas-que-ganamos-ello",
      "urlToImage": "https://i.blogs.es/87d0ed/captura-de-pantalla-this.props.pageSize22-12-this.props.pageSize-a-las-10.24.49/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:40:46Z",
      "content": "El futuro de la domótica ya está entrando en el ecosistema de Apple. Los fabricantes de accesorios para HomeKit ya están empezando a lanzar actualizaciones de firmware que adaptan los dispositivos a … [+2647 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "David Bernal Raspall",
      "title": "La forma más rápida de crear un PDF en nuestro Mac es con un atajo de teclado. Así podemos configurarlo",
      "description": "El formato PDF (Portable Document Format) es un tipo de archivo que se utiliza para presentar documentos de manera independiente al software, hardware o sistema operativo utilizado. Esto significa que un documento en PDF se verá y se podrá leer de la misma ma…",
      "url": "https://www.applesfera.com/tutoriales/forma-rapida-crear-pdf-nuestro-mac-atajo-teclado-asi-podemos-configurarlo",
      "urlToImage": "https://i.blogs.es/7d96bc/hero/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:32:53Z",
      "content": "El formato PDF (Portable Document Format) es un tipo de archivo que se utiliza para presentar documentos de manera independiente al software, hardware o sistema operativo utilizado. Esto significa qu… [+2454 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "David Bernal Raspall",
      "title": "Al hacer fotos con el iPhone hay un consejo que destaca por encima de todos los demás. Es este",
      "description": "La capacidad de llevar una cámara de fotos con nosotros en todo momento abre muchas posibilidades. La cantidad de fotografías que hacemos hoy en día es enorme, y gran parte de ello se lo debemos a la facilidad que tiene simplemente sacar el iPhone y pulsar un…",
      "url": "https://www.applesfera.com/iphone/al-hacer-fotos-iphone-hay-consejo-que-destaca-encima-todos-demas-este",
      "urlToImage": "https://i.blogs.es/d33d1c/hero/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT07:36:06Z",
      "content": "La capacidad de llevar una cámara de fotos con nosotros en todo momento abre muchas posibilidades. La cantidad de fotografías que hacemos hoy en día es enorme, y gran parte de ello se lo debemos a la… [+2943 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "David Bernal Raspall",
      "title": "La barra de menú de macOS en cualquier parte de la pantalla es posible con esta aplicación",
      "description": "La barra de menús es un elemento fundamental en el sistema operativo de los Mac y una seña de identidad desde antes de NeXTSTEP. Se encuentra en la parte superior de la pantalla y proporciona acceso a todas las opciones y herramientas disponibles en el sistem…",
      "url": "https://www.applesfera.com/aplicaciones-os-x-1/barra-menu-macos-cualquier-parte-pantalla-posible-esta-aplicacion",
      "urlToImage": "https://i.blogs.es/7e819f/hero/840_560.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:22:39Z",
      "content": "La barra de menús es un elemento fundamental en el sistema operativo de los Mac y una seña de identidad desde antes de NeXTSTEP. Se encuentra en la parte superior de la pantalla y proporciona acceso … [+2503 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Jowi Morales",
      "title": "7 iOS Features We Want to Get in this.props.pageSize23",
      "description": "While iOS 16 is already great, there are some features we wish Apple would add in the next iteration of iOS. Here, we'll discuss all of them.",
      "url": "https://www.makeuseof.com/ios-features-we-want-this.props.pageSize23/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/this.props.pageSize22/12/ios-home-screen-on-an-iphone.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:30:15Z",
      "content": "Apple's iOS is a smooth and easy-to-use smartphone operating system—one that many are familiar with, especially in the US, where Apple has about half of the market share.\r\nHowever, even if many users… [+6402 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Lucus Newman",
      "title": "Apple’s Dynamic Island: Form Over Function?",
      "description": "Now that we're past the honeymoon phase, does the iPhone's Dynamic Island offer something valuable? Or, was it Apple's clever trick to hide the notch?",
      "url": "https://www.makeuseof.com/apple-dynamic-island-form-over-function/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/this.props.pageSize22/11/dynamic-island-hero.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:00:15Z",
      "content": "When Apple debuted the iPhone 14 Pro in this.props.pageSize22, one big thing stuck out during its presentation: Dynamic Island. After years of the notch, Apple moved the front camera and Face ID module into a large p… [+7085 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Dan Robinson",
      "title": "British Airways flights grounded due to glitch in flight planning app",
      "description": "Flight computers down for 2 hours worldwide 'and no BA plane can file a flight plan? Seems not ideal'\nBritish Airways flights have been grounded into Tuesday morning due to issues with flight planning software that caused aircraft to be held on the tarmac ins…",
      "url": "https://www.theregister.com/this.props.pageSize22/12/this.props.pageSize/ba_flights_delayed/",
      "urlToImage": "https://regmedia.co.uk/this.props.pageSize21/04/this.props.pageSize/baboeing787shutterstock.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:57:06Z",
      "content": "British Airways flights have been grounded into Tuesday morning due to issues with flight planning software that caused aircraft to be held on the tarmac instead of being able to take off as schedule… [+2210 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid - News for Android"
      },
      "author": "Tyler Lee",
      "title": "The EU proposes new law that will make your phone’s batteries easier to replace",
      "description": "The EU has put forward a new law that would make it potentially easier for the batteries in your phone to be replaced.\nThe post The EU proposes new law that will make your phone’s batteries easier to replace first appeared on Phandroid.",
      "url": "https://phandroid.com/this.props.pageSize22/12/this.props.pageSize/the-eu-proposes-new-law-that-will-make-your-phones-batteries-easier-to-replace/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/this.props.pageSizethis.props.pageSize/08/note-this.props.pageSize-ultra-battery-640x360.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:09:03Z",
      "content": "A lot of our modern day gadgets, like our smartphones, use lithium ion batteries. Unlike the good old days of the feature phone where you could pop out the battery and replace it in seconds, some man… [+12this.props.pageSize chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Search Engine Journal"
      },
      "author": "Brooke Osmundson",
      "title": "10 Biggest & Best PPC Features Of The Year via @sejournal, @brookeosmundson",
      "description": "Here are our top 10 picks of new PPC features and developments this year. What does all this mean for the future of PPC? \nThe post 10 Biggest & Best PPC Features Of The Year appeared first on Search Engine Journal.",
      "url": "https://www.searchenginejournal.com/best-ppc-features-of-the-year/473607/",
      "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/this.props.pageSize22/12/ppc-features-639af37f7494d-sej.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:45:37Z",
      "content": "Can you believe the end of the year is already upon us? With so many changes to the advertising ecosystem, it’s easy for time to fly by.\r\nThe year this.props.pageSize22 will be remembered for welcome (and unwelcome) … [+9902 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GameSpot"
      },
      "author": "GameSpot Staff",
      "title": "GameSpot's 10 Best TV Shows Of this.props.pageSize22",
      "description": "Over the past two decades, television has evolved greatly. HBO changed the landscape with series like Sopranos, Oz, and The Wire, and very quickly, other networks followed suit. TV became more than sitcoms filmed before a studio audience that dominated the '8…",
      "url": "https://www.gamespot.com/gallery/gamespots-10-best-tv-shows-of-this.props.pageSize22/2900-4550/",
      "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1562/15626911/4078584-gb-boty-this.props.pageSize22tvtop10.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:00:00Z",
      "content": "The products discussed here were independently chosen by our editors.\r\n GameSpot may get a share of the revenue if you buy anything featured on our site."
    },
    {
      "source": {
        "id": null,
        "name": "XDA Developers"
      },
      "author": "Timi Cantisano",
      "title": "Apple is reportedly abandoning plans for a high-end \"Extreme\" Mac Pro",
      "description": "Apple is reportedly abandoning plans to create a top-end Mac Pro with an M2 &quot;Extreme&quot; processor due to cost and complexity concerns.",
      "url": "https://www.xda-developers.com/mac-pro-m2-extreme-abandoned/",
      "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/this.props.pageSize22/10/XDA-4K.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT01:07:50Z",
      "content": "The rumors and reports have been swirling for quite some time regarding Apple's upcoming computing products. While we got a report about its upcoming monitors, we also have an update on its upcoming … [+1750 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Golem.de"
      },
      "author": "Tobias Költzsch",
      "title": "Apple: Airtags bekommen neue Anti-Stalking-Funktionen",
      "description": "Die Neuerungen der jüngsten Airtag-Updates sind jetzt bekannt: Apple hat seinen Tracking-Geräten neue Funktionen gegen Stalking verpasst. (Airtag, Apple)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapple-airtags-bekommen-neue-anti-stalking-funktionen-2212-170624.html&referer=https%3A%2F%2Ft.co%2F7baac4062f",
      "urlToImage": null,
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:32:01Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Golem.de"
      },
      "author": "Sebastian Grüner",
      "title": "Google, Mozilla, Apple: Browserhersteller wollen Benchmarks mit echte Szenarien",
      "description": "Die drei großen Browser-Hersteller wollen gemeinsam einen neuen Benchmark für Webseiten erstellen. Das soll Nutzern dienen. (Open Source, Firefox)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgoogle-mozilla-apple-browserhersteller-wollen-benchmarks-mit-echte-szenarien-2212-170629.html&referer=https%3A%2F%2Ft.co%2F27e817b09c",
      "urlToImage": null,
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:00:02Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Golem.de"
      },
      "author": "Peter Steinlechner",
      "title": "Kaufberatung: Ausdauernde, ausgeschlafene und smarte Sportuhren",
      "description": "Apple, Garmin und Polar: Golem.de stellt aktuelle Sportuhren in allen Preis- und Leistungsklassen vor. Ein Ratgebertext von Peter Steinlechner (Sportuhr, Google)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkaufberatung-ausdauernde-ausgeschlafene-und-smarte-sportuhren-2212-170609.html&referer=https%3A%2F%2Ft.co%2F37a99002f1",
      "urlToImage": null,
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:30:02Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Presse-citron"
      },
      "author": "Setra",
      "title": "Xiaomi réduit son personnel, la crise est passée par là",
      "description": "Alors que les ventes de smartphones s’effondrent (sauf chez Apple), Xiaomi va réduire son personnel.",
      "url": "https://www.presse-citron.net/xiaomi-reduit-son-personnel-la-crise-est-passee-par-la/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/this.props.pageSize22/11/test-xiaomi-12t-pro-appareil-photo.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:30:54Z",
      "content": "En this.props.pageSize22, nombreuses sont les sociétés qui ont dû réduire leurs coûts ou même licencier. Parmi celles-ci, il y a Meta. Confronté au contexte macroéconomique, à la concurrence de TikTok et à la réducti… [+3this.props.pageSize5 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Presse-citron"
      },
      "author": "Presse-citron",
      "title": "Coupe du monde this.props.pageSize22 : les retombées économiques se font déjà sentir en France",
      "description": "Les consommateurs ont peut-être dépensé plus que de raison pour soutenir leur équipe favorite.",
      "url": "https://www.presse-citron.net/coupe-monde-this.props.pageSize22-retombees-economiques/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/this.props.pageSize22/12/ballon-foot.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:30:16Z",
      "content": "L’équipe de France de football vient de terminer deuxième de la Coupe du monde de la FIFA. Mais les supporters n’ont apparemment pas attendu le résultat final pour se préparer aux matches, comme le m… [+2332 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "HYPEBEAST"
      },
      "author": "info@hypebeast.com (Hypebeast)",
      "title": "Chief Keef Celebrates 10 Years of 'Finally Rich' With Seven Previously Unreleased Tracks",
      "description": "Chief Keef is commemorating the 10th anniversary of his influential debut album Finally Rich with a Complete Edition.Clocking in at an hour and this.props.pageSize minutes, the new version features all 12 original tracks, the three bonus tracks and seven previously unreleased…",
      "url": "https://hypebeast.com/this.props.pageSize22/12/chief-keef-finally-rich-complete-edition-album-stream-10th-anniversary",
      "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2Fthis.props.pageSize22%2F12%2Fchief-keef-finally-rich-complete-edition-album-stream-10th-anniversary-tw.jpg?w=960&cbr=1&q=90&fit=max",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT02:35:09Z",
      "content": "Chief Keef is commemorating the 10th anniversary of his influential debut album Finally Rich with a Complete Edition.\r\nClocking in at an hour and this.props.pageSize minutes, the new version features all 12 original … [+827 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BGR"
      },
      "author": "Chris Smith",
      "title": "Google Maps just got a new competitor from Linux, Amazon, Meta, Microsoft, and TomTom",
      "description": "There’s no question that Google Maps is the most popular navigation app on mobile devices. Google Maps has two big rivals: Waze, which Google owns, …\nThe post Google Maps just got a new competitor from Linux, Amazon, Meta, Microsoft, and TomTom appeared first…",
      "url": "https://bgr.com/tech/google-maps-just-got-a-new-competitor-from-linux-amazon-meta-microsoft-and-tomtom/",
      "urlToImage": "https://bgr.com/wp-content/uploads/this.props.pageSize21/12/google-maps-navigation.jpg?quality=82&strip=all",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:50:00Z",
      "content": "There’s no question that Google Maps is the most popular navigation app on mobile devices. Google Maps has two big rivals: Waze, which Google owns, and Apple Maps, available only on iPhone. But if so… [+4211 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BGR"
      },
      "author": "Maren Estrada",
      "title": "Today’s deals: $89 AirPods, Apple gift cards, Peloton Bike, $174 Roomba, $299 Pixel 6a, more",
      "description": "Online retailers are pulling out all the stops now that Christmas is less than a week away. So many Black Friday deals are back, as …\nThe post Today’s deals: $89 AirPods, Apple gift cards, Peloton Bike, $174 Roomba, $299 Pixel 6a, more appeared first on BGR.",
      "url": "https://bgr.com/deals/todays-deals-89-airpods-apple-gift-cards-peloton-bike-174-roomba-299-pixel-6a-more/",
      "urlToImage": "https://bgr.com/wp-content/uploads/this.props.pageSize22/05/bgr-deals-of-the-day-this.props.pageSize22-tuesday-new.jpg?quality=82&strip=all",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:11:00Z",
      "content": "If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Learn more.\r\nOnline retailers are pulling out all the stops now tha… [+5832 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BGR"
      },
      "author": "José Adorno",
      "title": "Matter-enabled Amazon Echo devices to work with iOS as soon as this.props.pageSize23",
      "description": "The future of smart homes is already here. With the Matter standard already available, companies are running to introduce this technology to their devices. Amazon, …\nThe post Matter-enabled Amazon Echo devices to work with iOS as soon as this.props.pageSize23 appeared first o…",
      "url": "https://bgr.com/tech/matter-enabled-amazon-echo-devices-to-work-with-ios-as-soon-as-this.props.pageSize23/",
      "urlToImage": "https://bgr.com/wp-content/uploads/this.props.pageSize22/10/amazon-echo-dot-3.jpg?quality=82&strip=all",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:55:00Z",
      "content": "The future of smart homes is already here. With the Matter standard already available, companies are running to introduce this technology to their devices. Amazon, for example, announced that the pha… [+1693 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Faz.net"
      },
      "author": "Marco Dettweiler",
      "title": "Kopfhörer Bowers & Wilkins Px8 im Test",
      "description": "Der Px8 von Bowers & Wilkins ist einer der teuersten Kopfhörer dieser Gattung. Mit einem Preis von 700 Euro überholt er preislich sogar den Airpods Max von Apple. Ist der Kopfhörer sein Geld wert?",
      "url": "https://www.faz.net/aktuell/technik-motor/digital/kopfhoerer-bowers-wilkins-px8-im-test-nahe-am-maximum-18544326.html",
      "urlToImage": "https://media0.faz.net/ppmedia/aktuell/1012963349/1.8544318/facebook_teaser_fplus/edel-und-schick-px8-von-bowers.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:24:14Z",
      "content": "Eigentlich ist es nicht unsere Art, über Geld zu reden. Aber Bowers &amp; Wilkins fordert dazu auf. Der neue Kopfhörer Px8 kostet 700 Euro. Solche Over-Ear-Modelle, die also die Ohren umschließen, we… [+468 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "Stephen Warwick",
      "title": "Apple's new this.props.pageSize23 MacBooks could be made in Vietnam",
      "description": "A new report says Apple plans to move some MacBook production to Vietnam by mid-this.props.pageSize23.",
      "url": "https://www.imore.com/mac/apples-new-this.props.pageSize23-macbooks-could-be-made-in-vietnam",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/qhFo2ifPT4hj5eVa9J9ZY5-1this.props.pageSize0-80.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:34:50Z",
      "content": "A new report says Apple is planning to move some of its MacBook production to Vietnam in this.props.pageSize23.\r\nIt comes as Apple continues to move production away from China following massive COVID disruption in it… [+1713 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "Stephen Warwick",
      "title": "Apple slapped with French fine over this iPhone rule, but won't be forced to change it (yet)...",
      "description": "Apple has been fined just over 1 million euros for forcing developers in France to sign up to abusive commercial clauses.",
      "url": "https://www.imore.com/apps/apple-slapped-with-french-fine-over-this-iphone-rule-but-wont-be-forced-to-change-it-yet",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/huxQmaaqVsTBXkUWYFND2j-1this.props.pageSize0-80.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:53:09Z",
      "content": "Apple has been fined over a million dollars by a Paris court because of rules in its App Store the court deemed abusive to developers. \r\nReuters reports that the Paris Commercial Court handed down th… [+1731 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "Tammy Rogers",
      "title": "iPad Pro 11-inch sees its lowest price ever, with Prime shipping just in time for Christmas",
      "description": "The iPad Pro falls to its lowest price ever, although you'll have to be quick if you want to put one under the tree.",
      "url": "https://www.imore.com/ipad/ipad-pro-11-inch-sees-its-lowest-price-ever-with-prime-shipping-just-in-time-for-christmas",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/89rVEJX74W9KEJgZz8XVCP-1this.props.pageSize0-80.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:00:35Z",
      "content": "The iPad Pro 11-inch is, undoubtedly, one of the most requested Christmas gifts this year. Is it any surprise? It has a large screen, a new super-powerful M2 chip, and a stunning design. There is tha… [+1095 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple TV App Rumored to Launch on Android",
      "description": "Apple plans to make its TV app available for Android smartphones, according to Twitter user ShrimpApplePro, who accurately leaked the iPhone 14 Pro's Dynamic Island hardware design and the box for the device. The leaker claims Apple is testing the app interna…",
      "url": "https://www.macrumors.com/this.props.pageSize22/12/this.props.pageSize/apple-tv-app-android-rumor/",
      "urlToImage": "https://images.macrumors.com/t/wgnYFFg4Da96xeD8UhGCEM-WoeE=/1600x/article-new/this.props.pageSize22/12/Apple-TV-app-Android.jpeg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:02:41Z",
      "content": "Apple plans to make its TV app available for Android smartphones, according to Twitter user ShrimpApplePro, who accurately leaked the iPhone 14 Pro's Dynamic Island hardware design and the box for th… [+940 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xatakamovil.com"
      },
      "author": "Samuel Fernández",
      "title": "Amazon se sube al tren de Matter y 17 de sus Amazon Echo ya soportan el nuevo estándar domótico co-creado por Google y Apple",
      "description": "Matter va a ser un estándar importante en materia de domótica, y sus primeros pasos están siendo de bastante calibre. Ya lo hemos visto aterrizar en el ecosistema de Google Home y Google Nest, está ya medio integrado en el ecosistema de Apple gracias a iOS 16…",
      "url": "https://www.xatakamovil.com/otras/amazon-se-sube-al-tren-matter-17-sus-amazon-echo-soportan-nuevo-estandar-domotico-co-creado-google-apple",
      "urlToImage": "https://i.blogs.es/a4c4d6/matter/840_560.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:30:45Z",
      "content": "Matter va a ser un estándar importante en materia de domótica, y sus primeros pasos están siendo de bastante calibre. Ya lo hemos visto aterrizar en el ecosistema de Google Home y Google Nest, está y… [+2606 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Playpcesor.com"
      },
      "author": "Esor Huang",
      "title": "Notion AI 筆記實測：自動用中文寫報告大綱、會議待辦、行銷文案",
      "description": "最近 AI 的應用從圖像設計，開始跨入了文字寫作的領域。前一陣子 Open AI 的 ChatGPT 讓許多人玩得不亦樂乎，無論是問問題，還是請她幫你寫出文件、程式碼內容，即使答案常常會出錯，不過 AI 「寫出來」的內容確實看起來就像是人的表達方式，降低了許多人工智慧只是機器的感覺。",
      "url": "https://www.playpcesor.com/this.props.pageSize22/12/notion-ai.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8zwnfwUfmVJCxqVObtdiRfYSEXZJ9HoH2oL15-Eanh6JPa59QVHwBOuTyfZ0Rw2DaAMFKsaMV-0Iby8emmgxXigywXbtzlBVw-egGdo5myZydiEmssd7rVNZcfKY-itukQsKltVM-6UJde6P0aZPTVFYkEMwhonYbTvsONEx_8BKLYAXMicM/w1this.props.pageSize0-h630-p-k-no-nu/image-01.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT05:01:00Z",
      "content": "最近 AI 的應用從圖像設計，開始跨入了文字寫作的領域。前一陣子 Open AI 的 ChatGPT 讓許多人玩得不亦樂乎，無論是問問題，還是請她幫你寫出文件、程式碼內容，即使答案常常會出錯，不過 AI 「寫出來」的內容確實看起來就像是人的表達方式，降低了許多人工智慧只是機器的感覺。\r\n而 Notion 前一陣子也宣布推出「 Notion AI 」新功能，正在陸續開放測試中，有興趣的朋友可以加入… [+3865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "Olli",
      "title": "Apple gibt Details zu Firmware-Updates von AirTags bekannt",
      "description": "Apple hat sich in der Vergangenheit sehr bedeckt gehalten, wenn es darum ging, welche Änderungen man unter anderem mit einer neuen Firmware für die kleinen AirTags umgesetzt hat. Eben jenes Geheimnis lüftet man nun auf einer separaten Support-Seite. Das Unter…",
      "url": "https://stadt-bremerhaven.de/apple-gibt-details-zu-firmware-updates-von-airtags-bekannt/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/this.props.pageSize22/07/airtags_.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:00:59Z",
      "content": "Apple hat sich in der Vergangenheit sehr bedeckt gehalten, wenn es darum ging, welche Änderungen man unter anderem mit einer neuen Firmware für die kleinen AirTags umgesetzt hat. Eben jenes Geheimnis… [+852 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "caschy",
      "title": "Spotica: Apple Music oder Spotify über die Menüleiste steuern",
      "description": "Ich habe in den letzten Jahren über einige Mediaplayer und deren Helferlein berichtet. Für viele sind die Streaming-Clients derzeit das einzige in Benutzung, wiederum andere setzen weiterhin auf VLC, AIMP, Winamp, foobar und andere. Wer Spotify und / oder App…",
      "url": "https://stadt-bremerhaven.de/spotica-apple-music-oder-spotify-ueber-die-menueleiste-steuern/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/this.props.pageSize22/12/spotica-klf_.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:00:58Z",
      "content": "Ich habe in den letzten Jahren über einige Mediaplayer und deren Helferlein berichtet. Für viele sind die Streaming-Clients derzeit das einzige in Benutzung, wiederum andere setzen weiterhin auf VLC,… [+1114 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Arielle Lovasoa",
      "title": "iPad 9 (this.props.pageSize21) : la tablette abordable d’Apple est encore moins chère avec ce code promo",
      "description": "Apple compte trois gammes de tablette tactile, dont l'iPad est la plus abordable de toutes. Elle en est actuellement à sa dixième mouture, mais l'itération de this.props.pageSize21 reste performante. L'iPad 9 (Wi-Fi, 64 Go) est actuellement en promotion : son prix de départ d…",
      "url": "https://www.frandroid.com/bons-plans/1569195_ipad-9-this.props.pageSize21-la-tablette-abordable-dapple-est-encore-moins-chere-avec-ce-code-promo",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/this.props.pageSize22/02/p1000843-scaled.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:45:35Z",
      "content": "Apple compte trois gammes de tablette tactile, dont l'iPad est la plus abordable de toutes. Elle en est actuellement à sa dixième mouture, mais l'itération de this.props.pageSize21 reste performante. L'iPad 9 (Wi-Fi,… [+3455 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.ru"
      },
      "author": "Михаил Вольных",
      "title": "Подкаст «Время есть»: с чем сочетаются устрицы, из чего делают крабовые палочки и что новичку приготовить из креветок",
      "description": "Говорим о морепродуктах и готовим интересное блюдо вместе с Павлом Тарасовым — шеф-поваром ресторана 1870 Abrau-Durso Wine & Food.",
      "url": "https://lifehacker.ru/podkast-vremya-est-12/",
      "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/this.props.pageSize22/10/LX-sajt-LX_1664878016-1280x640.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:30:25Z",
      "content": ", . : ? ? ? ? ? , 1870 AbrauDurso Wine &amp; Food.\r\n, « » , .\r\n00:53 .\r\n04:03 , , .\r\n07:21 .\r\n08:43 .\r\n10:17 , .\r\n12:27 .\r\n15:11 .\r\n17:49 .\r\n19:23 , , .\r\nthis.props.pageSize:48 « »: . .\r\n « » , : Apple Podcasts, Goog… [+48 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Srad.jp"
      },
      "author": "nagazou",
      "title": "ピンポン玉サイズの超小型衛星を飛ばし、スマホとの直接通信を目指す日本企業",
      "description": "今年はStarlinkが大きな話題になったが、こうした人工衛星とスマートフォンとの直接通信に関して日本でも実現を目指す企業が出てきているという。北海道大樹町と東京に拠点を構えるOur Starsがそれで、インターステラテクノロジズ（IST）の子会社としてthis.props.pageSize21年1月に設立されたそうだ（CNET）。 \n\nOur Starsは、ISTの衛星開発部門として活動を行う。Our Starsも他社と同様に低軌道に巨大アンテナを構築する方針だが、この巨大アンテナを、ピンポン玉ほどの無数の超小型衛星のフォーメーションフライトで…",
      "url": "https://mobile.srad.jp/story/22/12/19/1331258/",
      "urlToImage": "https://srad.jp/static/topics/business_64.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT05:31:00Z",
      "content": "StarlinkOur StarsISTthis.props.pageSize211CNETOur StarsISTOur Stars100011100Mbps\r\n100"
    },
    {
      "source": {
        "id": null,
        "name": "Ifanr.com"
      },
      "author": "杜沅傧",
      "title": "库克去了趟索尼工厂，iPhone 15 的拍照大升级可能不远了",
      "description": "苹果将会继续与索尼一同深耕传感器。#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1527706",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/this.props.pageSize22/12/Snipaste_this.props.pageSize22-12-19_16-27-01.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT02:38:35Z",
      "content": "iPhone\r\niFixit\r\niPhone \r\niPhone \r\nthis.props.pageSize22 \r\niPad 10 Apple Pencil Gen1\r\niPad iPadOS \r\nM2 M1 M2 ProM2 Ultra \r\niPhone 14 \r\n MacBook Pro Tim Cook \r\nTim Cook iPhone \r\n iPhone \r\niFixit iPhone iPhone 6 \r\n iPho… [+311 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ifanr.com"
      },
      "author": "何, 嘉昕",
      "title": "早报 | 微信键盘正式上线/小米回应年底裁员/马斯克或卸任 Twitter CEO",
      "description": "苹果 M2 Extreme 芯片可能被取消\n《奥本海默》首支预告公开#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1527768",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/this.props.pageSize22/12/12-13.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT00:this.props.pageSize:10Z",
      "content": "<ul><li></li><li> Twitter CEO</li><li></li><li>Arm </li><li></li><li>a16z </li><li></li><li> M2 Extreme </li><li> 10 MIUI 14</li><li> 13 Pro </li><li> Mate 50</li><li>inD 1 </li><li>FBIF </li><li> Ap… [+1624 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "01net.com"
      },
      "author": "Florian Bayard",
      "title": "Réalité augmentée : pourquoi Meta est déjà en retard sur Apple",
      "description": "Meta et Apple s'apprêtent à rivaliser sur le terrain du métavers et de la réalité augmentée. Malheureusement pour Meta, son concurrent a déjà un coup d'avance. Explications.",
      "url": "https://www.01net.com/actualites/realite-augmentee-pourquoi-meta-est-deja-en-retard-sur-apple.html",
      "urlToImage": "https://www.01net.com/app/uploads/this.props.pageSize22/06/meta-lunettes-connectees.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:30:30Z",
      "content": "Meta et Apple s’apprêtent à rivaliser sur le terrain du métavers et de la réalité augmentée. Malheureusement pour Meta, son concurrent a déjà un coup d’avance. Explications. Sous l’impulsion de Mark … [+5823 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "01net.com"
      },
      "author": "Chris Klippel",
      "title": "L’enceinte Apple HomePod mini en réduction avec un code promo chez Rakuten",
      "description": "L'enceinte connectée HomePod mini d'Apple est en promotion sur le site de Rakuten grâce à un code promotionnel.",
      "url": "https://www.01net.com/bons-plans/lenceinte-apple-homepod-mini-en-reduction-avec-un-code-promo-chez-rakuten.html",
      "urlToImage": "https://www.01net.com/app/uploads/this.props.pageSize22/12/apple-homepod-mini-rakuten.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:47:29Z",
      "content": "L’enceinte connectée HomePod mini d’Apple est en promotion sur le site de Rakuten grâce à un code promotionnel. À lapproche de Noël, voici peut-être le cadeau de dernière minute qui pourra rendre heu… [+3784 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Elon Musk at Twitter: Who could replace him as chief executive?",
      "description": "We look at the runner and riders to take over as the social media firm's chief executive.",
      "url": "https://www.bbc.co.uk/news/technology-64026268",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B035/production/_124290154_elon-twitter.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:28:55Z",
      "content": "Elon Musk is considering his next steps after a Twitter poll asking if he should step down as chief executive.\r\nMore than 17 million people had their say - with 57.5% voting yes - leaving the next ob… [+10312 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Touchlab.jp"
      },
      "author": "Nakimo",
      "title": "【15%OFF】Amazonで「Anker Portable Magnetic Charger for Apple Watch」がタイムセール中",
      "description": "Amazonのタイムセールで、「Anker Portable Magnetic Charger for Apple Watch」が15%OFFで販売されています。 【追記】 このセールは終了しました。また、当サイトのTw […]\nThe post 【15%OFF】Amazonで「Anker Portable Magnetic Charger for Apple Watch」がタイムセール中 first appeared on Touch Lab - タッチ ラボ.©this.props.pageSize19 \"Touch Lab - タッチ ラボ…",
      "url": "https://touchlab.jp/this.props.pageSize22/12/amazon_timesalefes_this.props.pageSize21aug_anker_portable_charger_for_aw_this.props.pageSize22decthis.props.pageSize/",
      "urlToImage": "https://touchlab.jp/wp-content/uploads/this.props.pageSize22/12/anker_portrable_magnetic_charger_for_aw_usba_15.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:07:41Z",
      "content": "Amazonのタイムセールで、「Anker Portable Magnetic Charger for Apple Watch」が15%OFFで販売されています。\n【追記】 このセールは終了しました。また、当サイトのTwitterをフォロー、またはFacebookの「いいね！」すると、次回のセール情報をタイムリーに受け取れます。現在開催中のセールはこちらをどうぞ。\nこの充電器の主な特徴は次のとお… [+714 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Touchlab.jp"
      },
      "author": "Nakimo",
      "title": "【15%OFF】Amazonで「Anker Portable Magnetic Charger for Apple Watch」がタイムセール中",
      "description": "Amazonのタイムセールで、「Anker Portable Magnetic Charger for Apple Watch」が15%OFFで販売されています。 この充電器の主な特徴は次のとおり： コードレス設計 US […]\nThe post 【15%OFF】Amazonで「Anker Portable Magnetic Charger for Apple Watch」がタイムセール中 first appeared on Touch Lab - タッチ ラボ.©this.props.pageSize19 \"Touch Lab - タッチ ラボ…",
      "url": "http://touchlab.jp/this.props.pageSize22/12/amazon_timesalefes_this.props.pageSize21aug_anker_portable_charger_for_aw_this.props.pageSize22decthis.props.pageSize/",
      "urlToImage": "http://touchlab.jp/wp-content/uploads/this.props.pageSize22/12/anker_portrable_magnetic_charger_for_aw_usba_15.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT00:29:29Z",
      "content": "Amazonのタイムセールで、「Anker Portable Magnetic Charger for Apple Watch」が15%OFFで販売されています。\nこの充電器の主な特徴は次のとおり：\n<ul>\n<li>コードレス設計</li>\n<li>USB-A端子</li>\n<li>Made for Apple  Watch認証取得</li>\n<li>アルミ製筐体</li>\n<li>最大24ヶ… [+612 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Touchlab.jp"
      },
      "author": "Nakimo",
      "title": "【21%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中",
      "description": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が実質21%OFFで販売されています(クーポンとポイント還元の合計)。 この充電器の主な特徴は次のとおり： USB-C x […]\nThe post 【21%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中 first appeared on Touch Lab - タッチ ラボ.©this.props.pageSize19 \"Touch Lab - タッチ ラボ\".",
      "url": "https://touchlab.jp/this.props.pageSize22/12/anker_powerportiii_3port65wpod_this.props.pageSize22decthis.props.pageSize/",
      "urlToImage": "https://touchlab.jp/wp-content/uploads/this.props.pageSize22/12/anker_powerportiii_3port65wpod_21.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT02:25:44Z",
      "content": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が実質21%OFFで販売されています(クーポンとポイント還元の合計)。\nこの充電器の主な特徴は次のとおり：\n<ul>\n<li>USB-C x 2/ USB-A x 1</li>\n<li>USB-C PD 最大65W</li>\n<li>3台同時充電</li>\n<li>折り畳み式プラグ</li>\n<li… [+686 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Touchlab.jp"
      },
      "author": "Nakimo",
      "title": "【最大30%OFF】楽天大感謝祭で「Ankerの72製品」がセール中",
      "description": "楽天の大感謝祭で、対象のAnker製品が最大30%OFF+ポイントで販売されています。 【リンク】楽天大感謝祭 – Anker クーポン利用で最大30%OFF 今回のセールでは、Ankerのモバイル関連から家 […]\nThe post 【最大30%OFF】楽天大感謝祭で「Ankerの72製品」がセール中 first appeared on Touch Lab - タッチ ラボ.©this.props.pageSize19 \"Touch Lab - タッチ ラボ\".",
      "url": "http://touchlab.jp/this.props.pageSize22/12/rakuten_kanshasai_this.props.pageSize22dec/",
      "urlToImage": "http://touchlab.jp/wp-content/uploads/this.props.pageSize22/12/rakuten_anker_kansha_this.props.pageSize22dec_0.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:34:22Z",
      "content": "楽天の大感謝祭で、対象のAnker製品が最大30%OFF+ポイントで販売されています。\n【リンク】楽天大感謝祭 – Anker クーポン利用で最大30%OFF\n今回のセールでは、Ankerのモバイル関連から家電まで72製品が対象となっています。\n一見するとアマゾン等で開催されるセールより割引率が低いようにみえますが、\n<ul>\n<li>楽天ポイントが付与</li>\n<li>ショップ買い回りでポイ… [+5326 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "China’s smartphone giant Xiaomi slashes workforce: reports",
      "description": "Chinese smartphone maker says it has implemented routine \"personnel optimisation and organisational streamlining\".",
      "url": "https://www.aljazeera.com/economy/this.props.pageSize22/12/this.props.pageSize/chinas-smartphone-giant-xiaomi-slashes-workforce-reports",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/this.props.pageSize22/12/this.props.pageSize21-11-09T231636Z_1496199164_RC2ELQ9S72I7_RTRMADP_3_XIAOMI-SMARTPHONES.jpg?resize=19this.props.pageSize%2C1440",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT04:01:25Z",
      "content": "Xiaomi Corp, one of Chinas biggest smartphone makers, has begun mass layoffs, slashing up to 15 percent of its workforce, a Hong Kong-based newspaper has reported, citing social media posts and Chine… [+1971 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Sharon Beriro",
      "title": "Hedge Funds Are Questioning Crypto's Future (Podcast)",
      "description": "In the aftermath of FTX’s collapse, lingering concerns around crypto investing are only amplified.",
      "url": "https://www.bloomberg.com/news/articles/this.props.pageSize22-12-this.props.pageSize/hedge-funds-are-questioning-crypto-s-future-after-ftx-collapse-podcast",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3PcORlVcelY/v1/1this.props.pageSize0x754.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:00:14Z",
      "content": "Listen to Bloomberg Crypto on the iHeartRadio App, Apple Podcasts or Spotify.\r\nIn the aftermath of the FTX collapse  one of the most significant crypto exchanges in the industry  investors and hedge … [+992 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Stephanie Bodoni",
      "title": "Amazon Agrees to EU Antitrust Truce in Marketplace Data Probe",
      "description": "Amazon.com Inc. settled European Union antitrust investigations over how the U.S. ecommerce giant uses rivals’ sales data and whether it unfairly favors its own products.",
      "url": "https://www.bloomberg.com/news/articles/this.props.pageSize22-12-this.props.pageSize/amazon-agrees-to-eu-antitrust-truce-in-marketplace-data-probe",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irOYtd9oSqeA/v0/1this.props.pageSize0x800.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:05:this.props.pageSizeZ",
      "content": "Amazon.com Inc. settled \r\nEuropean Union antitrust investigations over how the U.S. ecommerce giant uses rivals sales data and whether it unfairly favors its own products. \r\nThe \r\nEuropean Commission… [+1865 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Austin Carr",
      "title": "Elon Musk's Successor at Twitter Should Prioritize Civil Discourse",
      "description": "I tried to enjoy Elon Musk’s Twitter until my social connections began quiet quitting. But first…",
      "url": "https://www.bloomberg.com/news/newsletters/this.props.pageSize22-12-this.props.pageSize/twitter-ceo-after-elon-musk-should-focus-on-civil-discourse",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izAfDkJfrY7E/v1/1this.props.pageSize0x799.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:45:14Z",
      "content": "You're Reading Tech Daily.You're Reading Tech Daily.You're Reading Tech Daily.Exclusive coverage from Bloomberg reporters around the world.Exclusive coverage from Bloomberg reporters around the world… [+4522 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Noupe.com"
      },
      "author": "Drew Stevens",
      "title": "Essential Platforms for any Ecommerce Business",
      "description": "For all eCommerce businesses, time is money, and every minute you spend unwisely is an opportunity cost. Because if your hands are full trying to stay afloat, you will miss out on market trends and product innovation opportunities that could leave your compet…",
      "url": "https://www.noupe.com/business-online/essential-platforms-for-any-ecommerce-business.html",
      "urlToImage": "https://www.noupe.com/wp-content/uploads/this.props.pageSize22/12/Frame-1-1.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT08:38:48Z",
      "content": "For all eCommerce businesses, time is money, and every minute you spend unwisely is an opportunity cost. Because if your hands are full trying to stay afloat, you will miss out on market trends and p… [+25993 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Stratechery.com"
      },
      "author": "Ben Thompson",
      "title": "The this.props.pageSize22 Stratechery Year in Review",
      "description": "The most popular and most important posts on Stratechery in this.props.pageSize22.",
      "url": "https://stratechery.com/this.props.pageSize22/the-this.props.pageSize22-stratechery-year-in-review/",
      "urlToImage": "https://149384716.v2.pressablecdn.com/wp-content/uploads/this.props.pageSize22/12/yirthis.props.pageSize22-1.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT13:51:01Z",
      "content": "It was only a year ago that I opened the this.props.pageSize21 Year in Review by noting that the news felt like a bit of a drag; the contrast to this.props.pageSize22 has been stark. The biggest story in tech not just this year but, … [+15638 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hongkiat.com"
      },
      "author": "Hongkiat Lim",
      "title": "Fixing iPhone 12 Stuck on Apple Logo Screen (5 Ways)",
      "description": "Has your iPhone 12 got stuck on the Apple logo screen when you turn it on or off? Or your iPhone often freezes when you use it or after a software update? Well, you’re not alone in this because the problem of the iPhone getting stuck on the Apple logo screen …",
      "url": "https://www.hongkiat.com/blog/iphone-apple-logo-stuck/",
      "urlToImage": "https://assets.hongkiat.com/uploads/iphone-apple-logo-stuck/force-restart-iphone.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:01:31Z",
      "content": "Has your iPhone 12 got stuck on the Apple logo screen when you turn it on or off? Or your iPhone often freezes when you use it or after a software update?\r\nWell, youre not alone in this because the p… [+4125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Itmedia.co.jp"
      },
      "author": "ITmedia",
      "title": "Amazon Echoシリーズ、Matter対応開始（ただしWi-Fiのみ）",
      "description": "Apple、Googleに続きAmazomもEchoデバイスでの「Matter」対応を発表。Wi-Fi接続のスマートホーム製品のコントロールにEchoを利用できる。既存の多くのEchoシリーズが対応する。",
      "url": "https://www.itmedia.co.jp/news/articles/2212/this.props.pageSize/news138.html",
      "urlToImage": "https://image.itmedia.co.jp/news/articles/2212/this.props.pageSize/cover_news138.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT05:13:00Z",
      "content": "Amazon.com121911EchoMatter17EchoWi-FiMatterThread\r\nAndroidiOSThread\r\nMatterthis.props.pageSize1912111.0GoogleAppleAmazon280\r\nAppleiOS 16.1Wi-FiGoogle15NestAndroidThread\r\nMatter\r\nMatter17\r\n<ul><li>Echo Dot5th Gen</li>… [+459 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Alan Wen",
      "title": "Games of this.props.pageSize22: Hindsight was the best for invoking the brilliance of Terence Malick and Wong Kar Wai",
      "description": "In a year of innovative games that didn't quite stick the landing or super polished blockbusters that left me cold, when it comes to considering game of the year contenders, I've found it ever more important to prioritise my heart picks. In this.props.pageSize22, Hindsight wa…",
      "url": "https://www.eurogamer.net/games-of-this.props.pageSize22-hindsight-was-the-best-for-invoking-the-brilliance-of-terence-malick-and-wong-kar-wai",
      "urlToImage": "https://assets.reedpopcdn.com/hindsight_5.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hindsight_5.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:00:00Z",
      "content": "In a year of innovative games that didn't quite stick the landing or super polished blockbusters that left me cold, when it comes to considering game of the year contenders, I've found it ever more i… [+3367 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Ed Nightingale",
      "title": "What The Bat is the casual hit VR has been waiting for",
      "description": "My parents aren't big on this little thing called video games. They've never quite understood my fascination with it, which is part of the reason I've always been more of a solo player.\n\nThat changed last Christmas. Intrigued by new technology, they asked for…",
      "url": "https://www.eurogamer.net/what-the-bat-is-the-casual-hit-vr-has-been-waiting-for",
      "urlToImage": "https://assets.reedpopcdn.com/Cover_Landscape_KeyArt2.png/BROK/thumbnail/1600x900/format/jpg/quality/80/Cover_Landscape_KeyArt2.png",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT12:00:00Z",
      "content": "My parents aren't big on this little thing called video games. They've never quite understood my fascination with it, which is part of the reason I've always been more of a solo player.\r\nThat changed… [+3723 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minimalistbaker.com"
      },
      "author": "Dana @ Minimalist Baker",
      "title": "Creamy Vegan Caramelized Onion Dip",
      "description": "Creamy, dreamy, 10-ingredient vegan caramelized onion dip that’s FULL of flavor?! It’s here! One taste and we were blown away by this super savory, naturally sweet dip!\nMade with silken tofu, it’s creamy and protein-packed, but even tofu skeptics will be goin…",
      "url": "https://minimalistbaker.com/creamy-vegan-caramelized-onion-dip/",
      "urlToImage": "https://minimalistbaker.com/wp-content/uploads/this.props.pageSize22/10/Creamy-Vegan-Caramelized-Onion-Dip-6.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT09:00:00Z",
      "content": "Creamy, dreamy, 10-ingredient vegan caramelized onion dip that’s FULL of flavor?! It’s here! One taste and we were blown away by this super savory, naturally sweet dip!\r\nMade with silken tofu, it’s c… [+4this.props.pageSize1 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Daniel Sparks)",
      "title": "1 Top Stock to Buy for this.props.pageSize23 and Beyond",
      "description": "Now is a great time to buy shares of this high-quality cash cow, down more than 12% over the past month.",
      "url": "https://www.fool.com/investing/this.props.pageSize22/12/this.props.pageSize/1-top-stock-to-buy-for-this.props.pageSize23-and-beyond/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/713578/apple-stock.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT14:01:00Z",
      "content": "With Apple(AAPL -1.59%) shares pulling back more than 12% over the past 30 days as of this writing, now is a good time to take a closer look at the stock. Many investors are probably wondering: Is th… [+3077 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Keith Noonan)",
      "title": "Got $1,000? 5 Buffett Stocks to Buy and Hold Forever",
      "description": "These Buffett-backed stocks can help take your portfolio to the next level.",
      "url": "https://www.fool.com/investing/this.props.pageSize22/12/this.props.pageSize/got-1000-5-buffett-stocks-to-buy-and-hold-forever/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/707530/warren-buffett-in-a-crowd-smiling.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT10:this.props.pageSize:00Z",
      "content": "When Warren Buffett purchased Berkshire Hathaway(BRK.A 0.14%) (BRK.B 0.01%) and became its CEO in 1965, he paid approximately $18 per share in the buyout. At the time, Berkshire was actually a strugg… [+6757 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Neil Patel)",
      "title": "PayPal Stock: Buy, Sell, or Hold Before this.props.pageSize23?",
      "description": "The electronic payments trailblazer is facing slower growth and fierce competition.",
      "url": "https://www.fool.com/investing/this.props.pageSize22/12/this.props.pageSize/paypal-stock-buy-sell-or-hold-before-this.props.pageSize23/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/713325/stock-chart-on-phone.jpg",
      "publishedAt": "this.props.pageSize22-12-this.props.pageSizeT11:59:00Z",
      "content": "Since being spun off from eBay in July this.props.pageSize15, PayPal(PYPL -0.45%) has seen its stock price rise 89%, despite falling 78% from its peak. A pioneer in the digital payments industry, PayPal has quickly e… [+4129 chars]"
    }
  ]

   constructor(){
    super();
    console.log('Hello I am a Constructor')
    // How to set state in React Constructor ?
    //React class based Component.
    this.state={
         articles:this.articles,
         loading:false,
         page:1
    }
   }
    // component Did Mount life cycle
    // fetch
    async componentDidMount(){
      console.log("cmd")
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4b368e64ed475683a28c1ec7be1266&page=1&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parscedata=await data.json();
      console.log(parscedata)
      this.setState({articles:parscedata.articles,totalResults:parscedata.totalResults})
    }

    handelnextclick=async()=>{
      console.log("NEXT")
      if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      }
       else{
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4b368e64ed475683a28c1ec7be1266&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parscedata=await data.json();
      console.log(parscedata)
      this.setState({articles:parscedata.articles})

      this.setState({
       page:this.state.page+1,
       articles:parscedata.articles
      })}

    }
    handelprevclick=async()=>{
      console.log("PREV")
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4b368e64ed475683a28c1ec7be1266&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parscedata=await data.json();
      console.log(parscedata)
      this.setState({articles:parscedata.articles})

      this.setState({
       page:this.state.page-1,
       articles:parscedata.articles
      })

    }

  render() {
    return (
      <div>
         <div className="container my-3">
             
          <div className="container text-center my-4"><h2>Top Head Line</h2></div>
            <div className="row">
               {this.state.articles.map((element)=>{
                   
                  return <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,65).concat('....'):""} imgurl={element.urlToImage} newsurl={element.url}/>
                </div>

               })}
             
             
             
            </div>
         </div>
         <div className="container d-flex justify-content-around">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handelprevclick}>&laquo;  Prev</button>
         <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark"onClick={this.handelnextclick}>Next  &raquo;</button>


         </div>
      </div>
    )
  }
}
