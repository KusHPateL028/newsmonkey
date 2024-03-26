import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "India v England: Fifth Test, day one - text updates",
          "description": "Follow live text updates from day one of the fifth Test between India and England in Dharamsala.",
          "url": "https://www.bbc.co.uk/sport/live/cricket/67781543",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2024-03-06T15:31:35Z",
          "content": "Dharamsala is this week's venue and judging from the England players' social media, it looks like an absolute stunner. \r\nI was lucky enough to visit Newlands in Cape Town last year and both are surel… [+419 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Allison Johnson",
          "title": "Motorola’s newest budget phones look surprisingly good",
          "description": "The 2024 Motorola Moto G Power 5G and Moto G 5G come with notable upgrades, like NFC chips for mobile payment and an attractive vegan leather finish.",
          "url": "https://www.theverge.com/2024/3/12/24097606/motorola-moto-g-5g-power-price-screen-battery",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/jMTK4F3ecT1etm7Y2u4sEMLOFe0=/0x0:2000x1500/1200x628/filters:focal(1000x750:1001x751)/cdn.vox-cdn.com/uploads/chorus_asset/file/25330753/moto_g_power_5G_2024_PDP.jpg",
          "publishedAt": "2024-03-12T13:00:00Z",
          "content": "Motorolas newest budget phones look surprisingly good\r\nMotorolas newest budget phones look surprisingly good\r\n / Two new Moto G phones get some significant upgrades.\r\nByAllison Johnson, a reviewer wi… [+2873 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Oldest surviving England player dies at 94",
          "description": "Ron Baynham turned out 434 times for Luton Town and carried on playing after breaking his skull.",
          "url": "https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-68602140",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5131/production/_132958702_1a02f51169f17e173d9b1ca4c2151b2f84adf65f823_856_4355_24511000x563.jpg",
          "publishedAt": "2024-03-18T20:50:51Z",
          "content": "Former Luton Town and England goalkeeper Ron Baynham has died at the age of 94.\r\nBaynham made 434 appearances for the Hatters, arriving in 1951 and playing his last game for them in 1965.\r\nHe earned … [+2360 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Lawrence Bonk",
          "title": "Motorola just announced two new budget phones, the Moto G Power and Moto 5 5G",
          "description": "Motorola just announced a couple of new budget-friendly smartphones, which are set to be released in the near future. These are refreshes of the popular Moto G Power and the Moto 5 5G phones. The upcoming handhelds don't reinvent the wheel, as they are iterat…",
          "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7b2ba8b3-2372-40b8-825f-0e0c22cc6dd9",
          "urlToImage": null,
          "publishedAt": "2024-03-12T13:00:07Z",
          "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "India train crash drivers 'distracted' by cricket match",
          "description": "The drivers of a deadly train crash in October were watching cricket on a phone, an Indian minister says.",
          "url": "https://www.bbc.co.uk/news/world-asia-68465668",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1845/production/_132831260_gettyimages-1753046559-594x594.jpg",
          "publishedAt": "2024-03-04T12:50:28Z",
          "content": "The drivers of a train that crashed in southern India in October, killing 14 people, were distracted watching a cricket match on a phone, India's railways minister said.\r\nDozens more were injured whe… [+2220 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Slashdot.org"
          },
          "author": "EditorDavid",
          "title": "AT&T Will Issue $5 Reimbursements For 12-Hour Outage",
          "description": "CNN reports:\n\nAT&T is reimbursing customers for the nearly 12-hour network outage on Thursday, the company announced in a news release. The mobile network will issue a $5 credit to \"potentially impacted\" AT&T Wireless customers, which it says is the \"average …",
          "url": "https://slashdot.org/story/24/02/25/1758242/att-will-issue-5-reimbursements-for-12-hour-outage",
          "urlToImage": "https://a.fsdn.com/sd/topics/att_64.png",
          "publishedAt": "2024-02-25T19:34:00Z",
          "content": "CNN reports:\r\nAT&amp;T is reimbursing customers for the nearly 12-hour network outage on Thursday, the company announced in a news release. The mobile network will issue a $5 credit to \"potentially i… [+1298 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "AT&T Giving $5 Credit to Customers Following Major Network Outage",
          "description": "AT&T has announced that it will be providing impacted customers with a $5 bill credit per account as compensation for the network's major network outage across the U.S. on Thursday. The credits will automatically be applied within two bill cycles, it said.\n\n\n…",
          "url": "https://www.macrumors.com/2024/02/25/att-crediting-customers-for-network-outage/",
          "urlToImage": "https://images.macrumors.com/t/Q28PlGgCpONG6X7kTprXn7vSrc8=/1600x/article-new/2024/02/ATT-Banner.jpeg",
          "publishedAt": "2024-02-25T19:02:21Z",
          "content": "AT&amp;T has announced that it will be providing impacted customers with a $5 bill credit per account as compensation for the network's major outage across the U.S. on Thursday. The credits will auto… [+2153 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Jennifer Ouellette",
          "title": "Tastes like chicken? Think again—edible ants have distinctive flavor profiles.",
          "description": "Go ahead, eat some ants. We triple dog dare you.",
          "url": "https://arstechnica.com/science/2024/03/tastes-like-chicken-think-again-edible-ants-have-distinctive-flavor-profiles/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/03/edible2-760x380.jpg",
          "publishedAt": "2024-03-19T14:29:54Z",
          "content": "Enlarge/ Chicatana ants have a nutty, fatty flavor. They are consumed in parts of Mexico to add texture and flavor to dishes.\r\n54\r\nEdible insects, like ants, are considered a delicacy in many culture… [+3136 chars]"
        },
        {
          "source": {
            "id": "time",
            "name": "Time"
          },
          "author": "Megan McCluskey",
          "title": "As Taylor Swift’s Eras Tour Hits One Year, Let’s Take a Look at Its Staggering Numbers",
          "description": "In honor of Eras Tour anniversary, we're taking a numerical look back at the biggest year of Taylor Swift's career to date.",
          "url": "https://time.com/6900208/taylor-swift-eras-tour-anniversary-stats/",
          "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/Taylor-Swift-Eras-Singapore.jpg?quality=85",
          "publishedAt": "2024-03-15T13:30:24Z",
          "content": "On March 17, it will officially have been one year since Taylor Swift's Eras Tour kicked off in Glendale, Ariz. In the 12 months since that fateful first show, Swift has broken untold records, made h… [+5495 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "'Exposed' England have 'thinking' to do - McCullum",
          "description": "England have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.",
          "url": "https://www.bbc.co.uk/sport/cricket/68528077",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15836/production/_132881188_brendonmccullum.jpg",
          "publishedAt": "2024-03-10T12:47:13Z",
          "content": "England have lost seven of their past 12 Tests\r\nEngland have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.\r\nThe tourists won the first Test but the… [+5395 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cracked.com"
          },
          "author": "Eli Yudin",
          "title": "In the Original Pinocchio Book, Pinocchio Was a Hammer-Wielding Killer",
          "description": "Are we so sure we want this guy becoming a real boy?",
          "url": "https://www.cracked.com/article_41490_in-the-original-pinocchio-book-pinocchio-was-a-hammer-wielding-killer.html",
          "urlToImage": "https://s3.crackedcdn.com/phpimages/article/7/2/3/1043723.jpg",
          "publishedAt": "2024-03-18T19:00:00Z",
          "content": "If your experience with Pinocchio starts and stops with the Disney film, you probably have a pretty positive idea of his friendship with Jiminy Cricket. Not to mention how delightful the little bug i… [+2520 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "HYPEBEAST"
          },
          "author": "info@hypebeast.com (Hypebeast)",
          "title": "Stepney Workers Club and Kartik Research Unveil a Cricket-Inspired Capsule",
          "description": "London footwear label Stepney Workers Club has united with Delhi-based menswear imprint Kartik Research to produce a capsule celebrating their shared love for cricket. The line, which includes ready-to-wear and footwear, is galvanized by the bat-and-ball spor…",
          "url": "https://hypebeast.com/2024/3/stepney-workers-club-kartik-research-cricket-capsule-collection-collaboration-release-info",
          "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F03%2Fstepney-workers-club-kartik-research-cricket-capsule-collection-collaboration-release-info-TW.jpg?w=1080&cbr=1&q=90&fit=max",
          "publishedAt": "2024-03-15T15:42:59Z",
          "content": "London footwear label Stepney Workers Club has united with Delhi-based menswear imprint Kartik Research to produce a capsule celebrating their shared love for cricket. The line, which includes ready-… [+1290 chars]"
        },
        {
          "source": {
            "id": "time",
            "name": "Time"
          },
          "author": "P R Sanjai / Bloomberg",
          "title": "Disney, Reliance Sign $8.5 Billion Deal to Merge India Media Operations",
          "description": "Disney and billionaire Mukesh Ambani’s conglomerate have signed a binding pact to merge their media operations in India, creating a sector behemoth valued at $8.5 billion.",
          "url": "https://time.com/6836167/disney-reliance-merger-deal/",
          "urlToImage": "https://api.time.com/wp-content/uploads/2024/02/GettyImages-1853383830.jpg?quality=85",
          "publishedAt": "2024-02-28T20:57:12Z",
          "content": "Walt Disney Co. and billionaire Mukesh Ambanis conglomerate have signed a binding pact to merge their media operations in India, creating a sector behemoth valued at $8.5 billion in one of the worlds… [+2648 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Wagner announces retirement from international cricket",
          "description": "New Zealand pace bowler Neil Wagner fights back tears as he announces his retirement from international cricket.",
          "url": "https://www.bbc.co.uk/sport/av/cricket/68411739",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/18096/production/_132745489_p0hf9ky7.jpg",
          "publishedAt": "2024-02-27T11:15:16Z",
          "content": "New Zealand's fifth-highest Test wicket-taker Neil Wagner said he had been on an emotional \"rollercoaster\" as he announced his retirement from international cricket. \r\nThe left-arm seamer, 37, made t… [+183 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "stevenshaw444@gmail.com (Steven Shaw)",
          "title": "Motorola's new Moto G Power 5G 2024 could be the affordable phone to beat",
          "description": "Motorola has announced two budget-friendly 5G handsets, the Moto G 5G and Moto G Power 5G.",
          "url": "https://www.androidcentral.com/phones/moto-g-power-5g-2024-launch",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/87kXBRiWLRVL7q7MYejdB9-1200-80.jpg",
          "publishedAt": "2024-03-12T19:23:00Z",
          "content": "\u003Cul\u003E\u003Cli\u003EMotorola has announced two new phones - the Moto G 5G and the Moto G Power 5G.\u003C/li\u003E\u003Cli\u003EThe Moto G is set to cost $199, while the Moto G Power costs $299.\u003C/li\u003E\u003Cli\u003EBoth devices will be on sale … [+3543 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera Staff",
          "title": "Australia slammed for Afghanistan cricket snub over ‘rights for women’",
          "description": "Cricket Australia says it has postponed the series as 'conditions for women and girls in Afghanistan are getting worse'.",
          "url": "https://www.aljazeera.com/sports/2024/3/19/cricket-australia-afghanistan-t20-series-called-off-taliban-women-girls-rights-world-cup",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2023-11-07T000000Z_2001452573_UP1EJB711AZ54_RTRMADP_3_CRICKET-WORLDCUP-AUS-AFG-1710849376.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-19T13:38:25Z",
          "content": "Cricket Australia (CA) has been slammed after it postponed a bilateral mens T20 cricket series against Afghanistan citing deteriorating human rights for women and girls in the country under Taliban r… [+4291 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Is Dharamsala the most beautiful setting in world cricket?",
          "description": "BBC Sport takes a look around Dharamsala before the fifth Test between India and England and asks whether or not it is the world's most beautiful place to play and watch cricket.",
          "url": "https://www.bbc.co.uk/sport/av/cricket/68484088",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/4550/production/_132844771_p0hgs73w.jpg",
          "publishedAt": "2024-03-05T16:29:31Z",
          "content": "Is Dharamsala the most beautiful setting in world cricket? Video, 00:04:15Is Dharamsala the most beautiful setting in world cricket?"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Ismail bowls fastest recorded delivery in women's cricket",
          "description": "Shabnim Ismail bowls the fastest delivery in women's cricket since speeds have been recorded.",
          "url": "https://www.bbc.co.uk/sport/cricket/68484085",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A306/production/_132843714_gettyimages-2053111384.jpg",
          "publishedAt": "2024-03-05T21:05:08Z",
          "content": "Shabnim Ismail took 317 wickets for South Africa before retiring from international cricket in 2023\r\nShabnim Ismail has bowled the fastest delivery in women's cricket since speeds have been recorded.… [+956 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "India’s Rishabh Pant set to resume cricket career at IPL 2024",
          "description": "Pant will play competitive cricket for the first time since sustaining multiple injuries in a car crash in 2022.",
          "url": "https://www.aljazeera.com/sports/2024/3/12/indias-rishabh-pant-set-to-resume-cricket-career-at-ipl-2024",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AP21244454143950-1710231172.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-12T08:21:39Z",
          "content": "Indias wicketkeeper-batter Rishabh Pant is fit to play in the Indian Premier League (IPL) starting this month after being seriously hurt in a car crash in 2022, the countrys cricket board has said.\r\n… [+1304 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Preview: Bangladesh vs Sri Lanka T20 cricket series",
          "description": "South Asian rivals meet in three-match T20 series after a string of hotly-contested encounters in recent past.",
          "url": "https://www.aljazeera.com/sports/2024/3/3/bangladesh-vs-sri-lanka-t20-cricket-match-series-nagin-dance-world-cup",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2023-11-06T000000Z_1281101141_UP1EJB613JX2J_RTRMADP_3_CRICKET-WORLDCUP-BGD-LKA-1709474266.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-03T20:56:44Z",
          "content": "Two South Asian nations are set to resume their heated cricket rivalry with a Twenty20 three-match series as they eye the upcoming ICC T20 World Cup 2024.\r\nBangladesh and Sri Lanka not India and Paki… [+4796 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera Staff",
          "title": "How ‘outstanding leader’ Rohit Sharma helped Ashwin in personal adversity",
          "description": "In an emotional video, Ashwin recalls events that led to his departure and return during a third Test cricket match.",
          "url": "https://www.aljazeera.com/sports/2024/3/13/ravi-ashwin-india-vs-england-test-series-rohit-sharma-rahul-dravid-emotional-die-for-him-on-the-field-cricket",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AP24056377568389-1710332968.jpg?resize=1920%2C1105",
          "publishedAt": "2024-03-13T14:06:30Z",
          "content": "Ravichandran Ashwin has hailed Indias cricket captain Rohit Sharma as a man with a heart of gold for his help and leadership during Indias third Test match against England last month, which Ashwin le… [+3120 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Can you name every England cricketer to play 100 Tests?",
          "description": "In men's Test cricket, 17 England players have won at least 100 caps - can you name them all?",
          "url": "https://www.bbc.co.uk/sport/cricket/68485336",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2FC1/production/_132852221_quiz-index-imagery-cant-show-face-sports--81b2a802-1125-4b16-a6cc-742d2a94fef3.png",
          "publishedAt": "2024-03-07T04:03:26Z",
          "content": "Jonny Bairstow made his Test debut against West Indies at Lord's in 2012\r\nJonny Bairstow has become the 17th England men's cricketer to play 100 Test matches.\r\nBairstow reached the mark in the ongoin… [+245 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Enock Muchinjo",
          "title": "Sikandar Raza: The Pakistan-born cricketer who rules Zimbabwean hearts",
          "description": "A delayed plunge into the game has not curbed Raza's enthusiasm to be one of Zimbabwe's greatest cricketers.",
          "url": "https://www.aljazeera.com/sports/2024/3/4/sikandar-raza-zimbabwe-pakistan-cricketer-icc-player-of-the-year-award-t20-world-cup",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AFP__20240104__349H6XL__v1__HighRes__CricketSriZimPractice-1709472902.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-04T09:09:21Z",
          "content": "Harare, Zimbabwe Sikandar Raza, Zimbabwes Pakistan-born cricketer, has been on a fairytale run since 2022.\r\nThe 37-year-old has been nominated twice in succession for the ICC Twenty20 International P… [+9674 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Australia withdraw from Afghanistan T20 series",
          "description": "Australia withdraw from their men's T20 series against Afghanistan in August because of continued restrictions on women and girls under the ruling Taliban in the country.",
          "url": "https://www.bbc.co.uk/sport/cricket/68603864",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/19CE/production/_132960660_gettyimages-1780005584.jpg",
          "publishedAt": "2024-03-19T07:45:37Z",
          "content": "Australia beat Afghanistan by three wickets when the sides met at the T20 Cricket World Cup in November 2023\r\nAustralia have withdrawn from their men's T20 series against Afghanistan in August becaus… [+2086 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Join the BBC Sport WhatsApp channels",
          "description": "We've launched three separate channels - BBC Sport, BBC Football and BBC Cricket - to give you another way to stay up to date.",
          "url": "https://www.bbc.co.uk/sport/68507395",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F6B7/production/_132895136_whatsapppromov2.jpg",
          "publishedAt": "2024-03-12T11:40:57Z",
          "content": "BBC Sport is on WhatsApp!\r\nWe've launched three separate channels - BBC Sport, BBC Football and BBC Cricket - to give you another way to stay up to date with our coverage of your favourite sports.\r\nH… [+474 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "'Inspire Inclusion' series - Four sportswomen share their important stories",
          "description": "",
          "url": "https://www.skysports.com/football/story-telling/11095/13089102/international-womens-day-inspire-inclusion-series-four-sportswomen-share-their-important-stories",
          "urlToImage": "https://e0.365dm.com/24/03/1600x900/skysports-eilish-mccolgan-bethany-england_6481549.jpg?20240307112659",
          "publishedAt": "2024-03-08T06:00:00Z",
          "content": "England all-rounder Sophia Dunkley discusses her journey into cricket, being the first Black woman to play Test cricket for England and increasing diversity"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Ireland lose first ODI against Afghanistan",
          "description": "Afghanistan beat Ireland by 35 runs in their opening one-day international at the Sharjah Cricket Stadium in the United Arab Emirates",
          "url": "https://www.bbc.co.uk/sport/cricket/68504003",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3B98/production/_132865251_gettyimages-1242559900.jpg",
          "publishedAt": "2024-03-07T20:28:22Z",
          "content": "Tector hit a century as Ireland fell short against Afghanistan\r\n\u003Ctable\u003E\r\n\u003Ctr\u003E\u003Ctd\u003EFirst one-day international, Sharjah\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAfghanistan 310-5 (50 overs): Gurbaz 121\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EIrelan… [+2081 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Loftie-Eaton hits fastest T20 international century",
          "description": "Namibia's Jan Nicol Loftie-Eaton breaks the record for the fastest century in T20 international cricket with a 33-ball hundred against Nepal.",
          "url": "https://www.bbc.co.uk/sport/cricket/68413224",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/851A/production/_132747043_jan_nicol_loftie_eaton_getty.jpg",
          "publishedAt": "2024-02-27T11:12:18Z",
          "content": "Coming in 62-3, Jan Nicol Loftie-Eaton helped Namibia post 206-4\r\n\u003Ctable\u003E\r\n\u003Ctr\u003E\u003Ctd\u003ETri-nations T20 series, Kirtipur\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003ENamibia 206-4 (20 overs): Loftie-Eaton 101 (36), Kruger 59* (48)\u003C/… [+942 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Tim Keeney",
          "title": "SC Freiburg vs Bayern live stream: Can you watch for free?",
          "description": "Bayern Munich take on SC Freiburg in Bundesliga action today. Here's how to watch a live stream of the match if you live in the US.",
          "url": "https://www.digitaltrends.com/movies/sc-freiburg-vs-bayern-live-stream-march-2024/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/02/PSG-vs-Bayern-Feature.jpeg?resize=1200%2C630&p=1",
          "publishedAt": "2024-03-01T14:00:34Z",
          "content": "After an important win over RB Leipzig last weekend, Bayern Munich look to keep pace atop the Bundesliga when they take on SC Freiburg at Europa-Park Stadion today. Bayern secured three points with a… [+2170 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Glamorgan report 'reasonable' £316k losses for 2023",
          "description": "The loss compares to a small profit for the previous 12 months but was regarded as better than expected.",
          "url": "https://www.bbc.co.uk/sport/cricket/68474513",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/88A8/production/_131648943_cdf_010423_glamorgan_v_cardiffucce_15.jpg",
          "publishedAt": "2024-03-04T22:08:40Z",
          "content": "Hosting England and Welsh Fire earned Glamorgan £1.83m in 2023\r\nGlamorgan reported losses of £316,000 for the calendar year to 31 December 2023.\r\nThat figure compares to a small operating profit of £… [+1602 chars]"
        },
        {
          "source": {
            "id": "cbc-news",
            "name": "CBC News"
          },
          "author": null,
          "title": "Is Italy ready for cricket-powder pizza?",
          "description": "Italy greenlit the sale of insect products late last year, but included strict regulations on supermarket placement and labelling. One chef is already using cricket powder in his pizza.",
          "url": "https://www.cbc.ca/news/world/cricket-powder-food-italy-1.7136422",
          "urlToImage": "https://i.cbc.ca/1.7135534.1709813194!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/cricket-pizza-italy.JPG",
          "publishedAt": "2024-03-08T09:00:00Z",
          "content": "At the seafront pizzeria La Rambla in Maccarese, Italy, a short drive from Rome, chef Carlo Del Buono stood at the kitchen counter, throwing a few fistfuls of cricket powder into a bowl of pizza doug… [+4339 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Malcolm Owen)",
          "title": "AT&T will pay a miserly $5 per account in outage compensation",
          "description": "AT&T will be providing bill credits to customers over the major February 22 outage, but the $5 credit will be paid on a per-account basis instead of per line.An AT&T logo on a buildingOn February 22, AT&T suffered from an outage that affected its cellular net…",
          "url": "https://appleinsider.com/articles/24/02/26/att-will-pay-a-miserly-5-per-account-in-outage-compensation",
          "urlToImage": "https://photos5.appleinsider.com/gallery/58725-119697-48236-94216-43901-85407-71DEDC23-59BD-4319-8304-3F09C50FA3C8-xl-xl-xl.jpg",
          "publishedAt": "2024-02-26T12:02:45Z",
          "content": "An AT&amp;T logo on a building\r\nAT&amp;T will be providing bill credits to customers over the major February 22 outage, but the $5 credit will be paid on a per-account basis instead of per line. \r\nOn… [+1632 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Patience pays off as Ireland make Test breakthrough",
          "description": "Ireland chalk up another landmark success as they overcome Afghanistan in Abu Dhabi to to secure a first Test victory.",
          "url": "https://www.bbc.co.uk/sport/cricket/68446583",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/76E6/production/_132783403_genericcele.jpg",
          "publishedAt": "2024-03-01T18:23:29Z",
          "content": "Lorcan Tucker celebrates as he runs through to seal Ireland's victory over Afghanistan at the Tolerance Oval,\r\nThe omens were not good as Ireland made their entrance to the Test arena on a spring day… [+3605 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Manasi Pathak",
          "title": "Sarfaraz Khan: A Mumbai maidan cricketer’s long journey to India Test cap",
          "description": "Once hailed as one of India's brightest prospects, Sarfaraz spent years waiting for a chance to play for his country.",
          "url": "https://www.aljazeera.com/sports/2024/3/13/sarfaraz-khan-child-prodigy-finally-given-the-chance-to-shine-for-india",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2024-02-15T105527Z_547925250_UP1EK2F0UCD4V_RTRMADP_3_CRICKET-TEST-IND-ENG-1710229706.jpg?resize=1200%2C630",
          "publishedAt": "2024-03-13T04:22:16Z",
          "content": "Mumbai, India Batting for nearly 10 hours at Mumbais Cross Maidan, Sarfaraz Khan first stole the limelight as a schoolboy in 2009 when he rewrote the history of the famed ground in the Indian metropo… [+8140 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Glamorgan sign Pakistan seam bowler Hamza",
          "description": "Glamorgan sign Pakistan international seam bowler Mir Hamza for the start of the 2024 season.",
          "url": "https://www.bbc.co.uk/sport/cricket/68444186",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A030/production/_132780014_gettyimages-1905948675.jpg",
          "publishedAt": "2024-03-01T10:00:08Z",
          "content": "Mir Hamza (R), pictured playing for Karachi Kings, took the prized wicket of Australia great Steve Smith in his most recent Test for Pakistan in January\r\nGlamorgan have signed Pakistan international … [+1811 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Brook withdraws from IPL after death of grandmother",
          "description": "England batter Harry Brook has made the \"difficult decision\" to withdraw from this year's Indian Premier League following the death of his grandmother.",
          "url": "https://www.bbc.co.uk/sport/cricket/68533187",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B4DA/production/_132889264_gettyimages-1873107239.jpg",
          "publishedAt": "2024-03-13T16:40:07Z",
          "content": "Harry Brook scored the first century of the 2023 IPL but otherwise struggled in his debut season\r\nEngland batter Harry Brook has made the \"difficult decision\" to withdraw from this year's Indian Prem… [+2492 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "HYPEBEAST"
          },
          "author": "info@hypebeast.com (Hypebeast)",
          "title": "Vulcain Unveils Green-Dialed Chronograph 1970s",
          "description": "Vulcain has launched its latest watch, an addition to the Chronograph 1970s collection, featuring a striking green dial. Embracing green, a color symbolizing balance, renewal, and progress, the Chronograph 1970s' dial presents a captivating hue that combines …",
          "url": "https://hypebeast.com/2024/3/vulcain-chronograph-1970s-british-racing-green-dial-release-info",
          "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F03%2Fvulcain-chronograph-1970s-british-racing-green-dial-release-info-tw.jpg?w=1080&cbr=1&q=90&fit=max",
          "publishedAt": "2024-03-17T04:09:23Z",
          "content": "Vulcain has launched its latest watch, an addition to the Chronograph 1970s collection, featuring a striking green dial. Embracing green, a color symbolizing balance, renewal, and progress, the Chron… [+1321 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Rolling Stone"
          },
          "author": "Oscar Hartzog",
          "title": "How to Watch Indian Premier League Online in the U.S.",
          "description": "Here’s how to watch Indian Premier League online in 2024, plus key details about the 2024 IPL season.",
          "url": "http://www.rollingstone.com/product-recommendations/lifestyle/how-to-watch-indian-premier-league-online-in-us-live-stream-cricket-1234992918/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/03/GettyImages-2097692920.jpg?w=1600&h=900&crop=1",
          "publishedAt": "2024-03-22T16:56:59Z",
          "content": "Quick Answer: The best way to get Indian Premier League livestreams in the U.S. is through Sling.\r\nThe Indian Premier League is back for its 2024 season, marking the 17th TATA IPL. The season, which … [+3100 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "ECB to display sign language messaging at all venues",
          "description": "The ECB will use British Sign Language to promote anti-discriminatory messaging at all first-class grounds this summer.",
          "url": "https://www.bbc.co.uk/sport/cricket/68628752",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E9BE/production/_132983895_englandmen'sdeafteamplayersjoelharris-leftandjakeoakes-rightduring2024contentdayatedgbaston-002.jpg",
          "publishedAt": "2024-03-22T10:08:32Z",
          "content": "Joel Harris (left) and Jake Oakes (right) from England's Deaf Team worked with more than 70 players from the men's and women's game to launch the ECB's anti-discriminatory messaging campaign\r\nThe Eng… [+1253 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Devendra Pandey",
          "title": "EXPLAINED: What does BCCI’s Test Cricket Incentive Scheme mean for players like Cheteshwar Pujara and Umesh Yadav?",
          "description": "What is the Test cricket incentive announced by BCCI on Saturday? Who stands to benefit from this? A quick guide for you",
          "url": "https://indianexpress.com/article/sports/cricket/what-bcci-test-cricket-incentive-mean-for-cheteshwar-pujara-and-umesh-yadav-9205353/",
          "urlToImage": "https://images.indianexpress.com/2024/03/pujara.jpg",
          "publishedAt": "2024-03-09T17:15:57Z",
          "content": "The Board of Control for Cricket in India (BCCI) introduced a new ‘Test cricket incentive scheme’ for its players. The reason for this move is to reward players who prioritise red-ball cricket. BCCI … [+2840 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "The Indian Premier League is back: What are the main talking points?",
          "description": "Can Kohli finally win an IPL crown, will Starc justify that max contract and what role will the Indian election play?",
          "url": "https://www.aljazeera.com/sports/2024/3/21/the-indian-premier-league-is-back-what-are-the-main-talking-points",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AP23107512997786-1711020582.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-21T13:06:35Z",
          "content": "The 17th edition of the Indian Premier League (IPL) world crickets largest T20 tournament begins on Friday, March 22, with the defending champion Chennai Super Kings hosting the Royal Challengers Ban… [+5367 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Scotland appoint South African Watson as coach",
          "description": "Doug Watson is named head coach of the Scotland men's team after a successful period in interim charge last summer.",
          "url": "https://www.bbc.co.uk/sport/cricket/68477356",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/BB15/production/_132839874_watson_index.jpg",
          "publishedAt": "2024-03-05T08:01:24Z",
          "content": "Watson has enjoyed success with Auckland in the T20 Super Smash competition\r\nSouth African Doug Watson has been named head coach of the Scotland men's team after a successful period in interim charge… [+2612 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Devendra Pandey",
          "title": "Mumbai Cricket Association announces courses in anti-corruption, umpiring and much more; here’s all you need to know",
          "description": "The Mumbai Cricket Association also informed that the candidates will be hired as interns during their summer vacation camps.",
          "url": "https://indianexpress.com/article/cities/mumbai/mumbai-cricket-association-announces-courses-anti-corruption-umpiring-9188307/",
          "urlToImage": "https://images.indianexpress.com/2024/02/Untitled-2024-02-29T170223.988.jpeg",
          "publishedAt": "2024-02-29T11:36:11Z",
          "content": "The Mumbai Cricket Association (MCA) will launch its new programme called the MCA Knowledge Centre to educate and train candidates for development of cricketing support staff in the city, officials s… [+1400 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
          "title": "Florida’s Broward County Stadium Expands Before Cricket T20 World Cup",
          "description": "Cricket is coming to America with the T20 World Cup. Florida's Broward County Stadium could turn into a Disneyland for fans as India, Pakistan and the U.S. play there.",
          "url": "https://www.forbes.com/sites/timellis/2024/03/13/floridas-broward-county-stadium-expands-before-cricket-t20-world-cup/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65f20b3ce1d374ebeeccab6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-13T21:47:42Z",
          "content": "Rain has stopped play of the 2nd T20i match between West Indies and India at Central Broward ... [+] Regional Park Stadium in Lauderhill, Florida, on August 4, 2019. (Photo by Randy Brooks / AFP) (Ph… [+5503 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Touch Arcade"
          },
          "author": "Shaun Musgrave",
          "title": "SwitchArcade Round-Up: ‘Ufouria 2: The Saga’, ‘Cricket Through the Ages’, Plus More Releases and Sales",
          "description": "Hello gentle readers, and welcome to the SwitchArcade Round-Up for March 1st, 2024. In today's article, we're looking at the remaining releases of the week. There are a few really good ones today, but the bin bunch certainly isn't going home hungry.",
          "url": "https://toucharcade.com/2024/03/01/ufouria-2-the-saga-sunsoft-download-switch-eshop-cricket-through-the-ages-apple-arcade-humble-bundle-game-sale-nintendo/",
          "urlToImage": null,
          "publishedAt": "2024-03-01T23:46:46Z",
          "content": "Hello gentle readers, and welcome to the SwitchArcade Round-Up for March 1st, 2024. In today’s article, we’re looking at the remaining releases of the week. There are a few really good ones today, bu… [+6073 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "Ireland vs Afghanistan in UAE: Series schedule, squads, venues, live streaming details",
          "description": "Ireland vs Afghanistan in 2024: Here is a look at the squads, live streaming info, schedule and all you need to ahead of the multi-format series between the teams in UAE.",
          "url": "https://indianexpress.com/article/sports/cricket/ireland-vs-afghanistan-uae-series-schedule-squads-venues-live-streaming-details-9183695/",
          "urlToImage": "https://images.indianexpress.com/2024/02/New-Project-15.jpg",
          "publishedAt": "2024-02-27T09:25:33Z",
          "content": "Ireland and Afghanistan will meet for a multi-format bilateral series in the United Arab Emirates starting with a one-off Test in Abu Dhabi on Wednesday. The solitary Test will be played at the Sheik… [+2117 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Lanning and Warner among stars in Hundred draft",
          "description": "Australian World Cup winners Meg Lanning and David Warner are among the star names entered in The Hundred draft for 2024.",
          "url": "https://www.bbc.co.uk/sport/cricket/68479218",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17772/production/_132841169_bbc-sport-index-imagery-2-split-images-gradient-adee519b-1f90-4e13-a22b-6855be0fc53a.png",
          "publishedAt": "2024-03-05T11:19:13Z",
          "content": "Oval Invincibles beat Manchester Originals to win The Hundred men's competition in 2023\r\nAustralia stars Meg Lanning and David Warner are among the international players in The Hundred draft for 2024… [+1733 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "Australia Remain The Only Cricket Country Opposed To Playing Afghanistan Amid Women’s Rights Issue",
          "description": "Australia continue to be the only cricket country firmly opposed to playing Afghanistan due to the human rights of women and girls in the Taliban-ruled country.",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/23/australia-remain-the-only-cricket-country-opposed-to-playing-afghanistan-amid-womens-rights-issue/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65fe3a9fe05df999c31797b7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-23T04:55:17Z",
          "content": "Australia and Afghanistan don't play bilaterals against each other (Photo by Robert Cianflone/Getty ... [+] Images)\r\nGetty Images\r\nAustralia continue to be the only cricket country firmly opposed to … [+3690 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Trends Desk",
          "title": "Virat Kohli’s new haircut ahead of IPL 2024 sets internet on fire. See here",
          "description": "As new daddy Virat Kohli is all set to return to the cricket pitch, the Indian cricketer treated fans with his new haircut on Tuesday.",
          "url": "https://indianexpress.com/article/trending/trending-in-india/virat-kohli-new-haircut-ahead-of-ipl-2024-sets-internet-on-fire-see-here-9222350/",
          "urlToImage": "https://images.indianexpress.com/2024/03/Source-28.jpg",
          "publishedAt": "2024-03-19T08:29:14Z",
          "content": "After spending a few months in London, Virat Kohli joined the Royal Challengers Bangalore (RCB) training on Monday ahead of the Indian Premier League (IPL) 2024. Amidst fans anticipating, Kohlis retu… [+1507 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "India’s Dominance Of World Cricket Foreshadowed In Triumph Over England",
          "description": "With a deep pool of talent and unlimited resources, fuelled by its fanatical following, India are poised to thoroughly dominate cricket",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/13/indias-dominance-of-world-cricket-foreshadowed-in-triumph-over-england/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65f1209430f109d2a899a8a1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-13T06:24:12Z",
          "content": "India dominated England to win the series 4-1. (Photo by Gareth Copley/Getty Images)\r\nGetty Images\r\nJay Shah, India's cricket chief who also rules the sport with an iron fist as its most dominant fig… [+3562 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "Lucrative Indian League Changing The Face Of Women’s Cricket",
          "description": "With serious money and talent, the Women's Premier League in India captured the imagination of cricket fans in its second edition.",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/20/lucrative-indian-league-changing-the-face-of-womens-cricket/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65faa5ba6ff2e43a56b20ad2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-20T13:51:28Z",
          "content": "The second edition of the Women's Premier League was a success (Photo by SAJJAD HUSSAIN/AFP via ... [+] Getty Images)\r\nAFP via Getty Images\r\nEven Ellyse Perry was left awestruck. That's no easy feat … [+3806 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "A Shot Clock Will Be Used To Speed Up Cricket Games",
          "description": "Cricket will speed up with the permanent introduction of a shot clock after results found that around 20 minutes per ODI match had been saved in time,",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/21/a-shot-clock-will-be-used-to-speed-up-cricket-games/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65fb96aa91bf3201c820ab11/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-21T12:38:40Z",
          "content": "Cricket is played over a long period of time (Photo by Paul Kane/Getty Images)\r\nGetty Images\r\nTalk to someone who is not au fait with cricket and the odds are that they'll remark on how slow the spor… [+3178 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "A Shot Clock Be Will Used In Cricket To Quicken Up Games",
          "description": "Cricket will speed up with the permanent introduction of a shot clock after results found that around 20 minutes per ODI match had been saved in time,",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/21/a-shot-clock-will-part-of-cricket-to-quicken-up-games/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65fb96aa91bf3201c820ab11/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-21T12:38:40Z",
          "content": "Cricket is played over a long period of time (Photo by Paul Kane/Getty Images)\r\nGetty Images\r\nTalk to someone who is not au fait with cricket and the odds are that they'll remark on how slow the spor… [+3178 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Lifestyle Desk",
          "title": "Get ready for cricket and fashion! SRK to Akshay Kumar dazzle the crowds at IPL 2024",
          "description": "Dive into the dazzling outfits sported by celebrities, from Akshay Kumar to Shah Rukh Khan, and even Preity Zinta at IPL 2024. See how Bollywood brings its style to the cricket field.",
          "url": "https://indianexpress.com/article/lifestyle/fashion/ipl-2024-shahrukh-khan-akshay-kumar-preity-zinta-celeb-opening-ceremony-9231359/",
          "urlToImage": "https://images.indianexpress.com/2024/03/srk-ipl-2024.jpg",
          "publishedAt": "2024-03-24T13:52:08Z",
          "content": "The Indian Premier League (IPL) is back again with its 17th edition, and so are our favorite celebrities with their matchday outfits. With some of the most popular teams playing tomorrowRoyal Challen… [+2223 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Yordan",
          "title": "Reliance and Disney join forces on $8.5 billion media giant",
          "description": "Reliance, India's top conglomerate, and The Walt Disney Company, one of the world's leading entertainment companies, announced a major partnership in India.\n\nThe deal will merge the Reliance and Disney streaming and media assets, creating an $8.5 billion ente…",
          "url": "https://www.gsmarena.com/reliance_disney_joint_venture_media_giant-news-61805.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/21/03/disney-plus-100m-subscribers/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2024-02-29T13:23:01Z",
          "content": "Reliance, India's top conglomerate, and The Walt Disney Company, one of the world's leading entertainment companies, announced a major partnership in India.\r\nThe deal will merge the Reliance and Disn… [+1583 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "Shabnim Ismail records fastest ball in women’s cricket in DC vs MI WPL 2024 match",
          "description": "Shabnim's fastest delivery at 132.1kph, the second of the third over in the match, hit Capitals skipper Meg Lanning on the front pad.",
          "url": "https://indianexpress.com/article/sports/cricket/shabnim-ismail-records-fastest-ball-132kph-womens-cricket-dc-vs-mi-wpl-2024-9198217/",
          "urlToImage": "https://images.indianexpress.com/2024/03/New-Project-31.jpg",
          "publishedAt": "2024-03-06T03:02:11Z",
          "content": "Mumbai Indians pacer Shabnim Ismail recorded the fastest ball in recorded women’s cricket, having breached the 130kph barrier during the Women’s Premier League (WPL 2024) match against Delhi Capitals… [+1716 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "Nobody still knows why Kishan has not turned up…: Sunil Gavaskar on Ishan and Shreyas Iyer losing BCCI central contracts",
          "description": "Gavaskar hinted that the punishment might have been too harsh on Shreyas Iyer, writing that the player hadn't refused to play Ranji.",
          "url": "https://indianexpress.com/article/sports/cricket/sunil-gavaskar-on-ishan-kishan-shreyas-iyer-lose-bcci-central-contracts-ranji-trophy-9193710/",
          "urlToImage": "https://images.indianexpress.com/2024/03/Gavaskar-Iyer-Kishan.jpg",
          "publishedAt": "2024-03-03T14:20:29Z",
          "content": "Sunil Gavaskar is of the opinion that he still does not understand that why Ishan Kishan did not turn up for his Ranji Trophy side Jharkhand. Both Kishan and Shreyas Iyer were on Wednesday stripped o… [+2051 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "New York Gears Up For Cricket T20 World Cup Amid Ground’s Construction",
          "description": "New York will host eight T20 World Cup matches in June and its 34,000-seat ground in Manhattan is being built in a three-month timeframe.",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/06/new-york-gears-up-for-cricket-t20-world-cup-amid-grounds-construction/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65e80fea8dd38dc99a349fff/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-06T13:43:05Z",
          "content": "A rendering of the Nassau County International Cricket Stadium in New York.\r\nSupplied\r\nSomething of a cricket fairy-tale, which had been mocked as a pipedream over the years, is coming true amid cran… [+3546 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Pakistan cricketer Imad Wasim comes out of retirement for ICC T20 World Cup",
          "description": "The all-rounder has made himself availble for Pakistan's squad for the 2024 ICC T20 World Cup in June.",
          "url": "https://www.aljazeera.com/sports/2024/3/24/imad-wasim-pakistan-retirement-t20-world-cup-psl-all-rounder",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AP23328576416863-1711259883.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-24T06:37:58Z",
          "content": "Pakistan all-rounder Imad Wasim has announced he would come out of retirement to play in this years Twenty20 World Cup, four months after ending his international career.\r\nThe 35-year-old left-handed… [+1706 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Irish secure first Test with with Afghanistan victory",
          "description": "Ireland earn a first men's Test victory at the eighth attempt after beating Afghanistan by six wickets in Abu Dhabi.",
          "url": "https://www.bbc.co.uk/sport/cricket/68446580",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
          "publishedAt": "2024-03-01T12:39:52Z",
          "content": "\u003Ctable\u003E\r\n\u003Ctr\u003E\u003Ctd\u003EOne-off Test, Tolerance Oval, Abu Dhabi, UAE (Day 3 of 5)\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAfghanistan 155 I Zadran 53; Adair 5-39 &amp; 218 Hashmatullah 55; Young 3-24\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EIreland 263 … [+632 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The New Yorker"
          },
          "author": "André Wheeler",
          "title": "For Sale: Busy Philipps’s Marriage Stuff. Yes, Used",
          "description": "The actor and her ex-husband, the filmmaker Marc Silverstein, host a “divorce sale” to sell their Le Creuset and her wedding veil, André Wheeler writes.",
          "url": "https://www.newyorker.com/magazine/2024/03/18/for-sale-busy-philippss-marriage-stuff-yes-used",
          "urlToImage": "https://media.newyorker.com/photos/65eb862a4618a91f892556b3/16:9/w_1280,c_limit/r43922illuweb-site.png",
          "publishedAt": "2024-03-11T10:00:00Z",
          "content": "Three years ago, the actor Busy Philipps and her husband, the filmmaker Marc Silverstein, decided to call it quits. The separation process involved ironing out a co-parenting agreement (they have two… [+3929 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "The Money-Spinning Indian Premier League Ready To Again Stop Cricket’s Calendar",
          "description": "The Indian Premier League lures the world's best players with big contracts and causes a pause annually in cricket's international calendar for two months.",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/25/the-money-spinning-indian-premier-league-ready-to-again-stop-crickets-calendar/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65da8d14d5c8896c2848095e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-02-25T12:44:21Z",
          "content": "Money-spinning Indian Premier League ready to again stop cricket's calendar (Photo by Pankaj ... [+] Nangia/Getty Images)\r\nGetty Images\r\nAs the calendar flips into March, cricket in Australia starts … [+3759 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "PTI",
          "title": "October 2023 Andhra train collision: Vaishnaw says driver, assistant were watching cricket on phone",
          "description": "The Rayagada Passenger train hit the Visakhapatnam Palasa train from behind at 7 pm that day on the Howrah-Chennai line in Kantakapalli in Vizianagaram district of Andhra Pradesh. Over 50 passengers were injured.",
          "url": "https://indianexpress.com/article/india/andhra-train-collision-vaishnaw-says-driver-assistant-were-watching-cricket-on-phone-9192779/",
          "urlToImage": "https://images.indianexpress.com/2023/10/Andhra-train-accident.jpeg",
          "publishedAt": "2024-03-03T02:39:30Z",
          "content": "The driver and the assistant driver of one of the two passenger trains that collided leading to death of 14 passengers on October 29, 2023 were watching a cricket match on phone, Railway Minister Ash… [+1284 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "Lack Of Matches Between Australia-New Zealand Underlines Test Cricket’s Problems",
          "description": "More effort is needed reviving Test cricket beyond the sport's power countries who can afford to play the expensive format while many others can't",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/29/lack-of-matches-between-australia-new-zealand-underlines-test-crickets-problems/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65dffd6e333543abad7eb2ff/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-02-29T10:20:20Z",
          "content": "New Zealand and Australia will play a rare Test match against each other (Photo by Hagen ... [+] Hopkins/Getty Images)\r\nGetty Images\r\nA flight from Sydney to Auckland is only three hours. That's cons… [+3697 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Rolling Stone"
          },
          "author": "Sage Anderson",
          "title": "How to Watch ‘Quiet on Set: The Dark Side of Kids TV’ Docuseries Online",
          "description": "The four-part Investigation Discovery docuseries dives into Nickelodeon‘s complicated legacy — here's where you can catch up without cable",
          "url": "http://www.rollingstone.com/product-recommendations/lifestyle/how-to-watch-quiet-on-set-the-dark-side-of-kids-tv-series-online-1234991651/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/03/Quiet-on-Set_Key-Art.webp?w=1000&h=563&crop=1",
          "publishedAt": "2024-03-21T15:15:34Z",
          "content": "If you purchase an independently reviewed product or service through a link on our website, Rolling Stone may receive an affiliate commission.\r\nQuick Answer: Watch new episodes of Quiet on Set: The D… [+4159 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Mike Sorrentino",
          "title": "Moto G 5G, Power 5G Bring Spec Bumps and a Price Cut - CNET",
          "description": "The phone also comes with 128GB of storage, a 5,000-mAh battery and 18-watt fast charging.",
          "url": "https://www.cnet.com/tech/mobile/moto-g-5g-power-5g-bring-spec-bumps-and-a-price-cut/",
          "urlToImage": "https://www.cnet.com/a/img/resize/dbe51c087eed1ba350a235d9a9a36f5c7cf30e58/hub/2024/03/11/e893234f-406c-4c0b-bca9-55c51b33a569/moto-g-5g-2024.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2024-03-12T13:00:28Z",
          "content": "Motorola is dropping the price of its value-focused Moto G phone line. The new Moto G 5G, revealed Tuesday, starts at $200 and gets a higher-refresh-rate display than its predecessor. It arrives alon… [+2973 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Lightroomkillertips.com"
          },
          "author": "Scott Kelby",
          "title": "The Mastery of the “Missing Transform Panel” in Camera Raw",
          "description": "I know a lot of you move back and forth between Lightroom and Photoshop in your workflow, and if you take an image over there and open Camera Raw, you might surprised (well, I was) to find that the Transform Panel (the panel with Upright and the manual transf…",
          "url": "https://lightroomkillertips.com/the-mastery-of-the-missing-transform-panel-in-camera-raw/",
          "urlToImage": "https://lightroomkillertips.com/wp-content/uploads/2024/03/hopefe-scaled.jpg",
          "publishedAt": "2024-03-04T08:16:00Z",
          "content": "I know a lot of you move back and forth between Lightroom and Photoshop in your workflow, and if you take an image over there and open Camera Raw, you might surprised (well, I was) to find that the T… [+1286 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Devendra Pandey",
          "title": "India vs England: Chef takes catches, Rajat’s rough ride, Stokes has a ball",
          "description": "It's the last week for the England team in India and they wanted everyone in the touring party to get a feel of cricket at the picturesque Dharamsala Stadium.",
          "url": "https://indianexpress.com/article/sports/cricket/india-vs-england-chef-takes-catches-rajats-rough-ride-stokes-has-ball-dharamsala-9199333/",
          "urlToImage": "https://images.indianexpress.com/2024/03/IND-ENG.jpg",
          "publishedAt": "2024-03-06T12:16:21Z",
          "content": "It’s the last week for the England team in India and they wanted everyone in the touring party to get a feel of cricket at the picturesque Dharamsala Stadium. Post their warm-up and slip- fielding se… [+3341 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Venkata Krishna B",
          "title": "How Hardik Pandya managed to get a Grade A BCCI central contract",
          "description": "Even as Shreyas Iyer and Ishan Kishan missed out, all-rounder says if not busy with India commitments, he will play Syed Mushtaq Ali T20s and Vijay Hazare Trophy.",
          "url": "https://indianexpress.com/article/sports/cricket/hardik-pandya-promises-to-play-domestic-white-ball-cricket-to-salvage-bcci-central-contract-9188775/",
          "urlToImage": "https://images.indianexpress.com/2024/02/Pandya-14.jpg",
          "publishedAt": "2024-02-29T14:28:45Z",
          "content": "Even as the decision to omit Shreyas Iyer and Ishan Kishan from the central contracts list for not turning up for domestic tournaments continues to receive mixed reactions, there was plenty of discus… [+3520 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Leonard Solms",
          "title": "UFC's du Plessis: Aims for May return, Adesanya",
          "description": "UFC middleweight champion Dricus du Plessis told ESPN he is expecting to be ready to fight by mid-2024 and reiterated his desire to face nemesis Israel Adesanya in South Africa.",
          "url": "https://www.espn.com/espn/story/_/id/39675320/dricus-du-plessis-aiming-ufc-return-wants-israel-adesanya-home-soil",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0307%2Fr1301415_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-07T18:01:26Z",
          "content": "PRETORIA, South Africa -- UFC middleweight champion Dricus du Plessis told ESPN he is expecting to be ready to fight by mid-2024, and reiterated his desire to face Nigeria-born New Zealander Israel A… [+5679 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Watford sack Ismael after Coventry defeat",
          "description": "Watford have sacked manager Valerien Ismael after Saturday's defeat to Coventry City.",
          "url": "https://www.skysports.com/football/news/11095/13091546/valerien-ismael-watford-sack-manager-and-install-tom-cleverly-as-interim-boss-after-defeat-to-coventry-city",
          "urlToImage": "https://e0.365dm.com/24/03/1600x900/skysports-ismael-watford_6485364.jpg?20240309221450",
          "publishedAt": "2024-03-09T22:11:00Z",
          "content": "Watford have sacked manager Valerien Ismael after Saturday's defeat to Coventry City.\r\nMore to follow....\r\nThis is a breaking news story that is being updated and more details will be published short… [+742 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Entertainment Desk",
          "title": "Kiran Rao would reach Lagaan set at 4 am, arrange toast for ‘gori mem’ actor Rachel Shelley: ‘It was a nightmare, I had a Masters from Jamia’",
          "description": "Kiran Rao recalled memories of working as an assistant director on Lagaan, and expressed dismay that she didn't get to watch most of the filmmaking because she was stuck ferrying actors from the makeup room to the set.",
          "url": "https://indianexpress.com/article/entertainment/bollywood/kiran-rao-would-reach-lagaan-set-at-4-am-arrange-toast-for-gori-mem-actor-rachel-shelley-9213380/",
          "urlToImage": "https://images.indianexpress.com/2024/01/aamir_71d28e.jpg",
          "publishedAt": "2024-03-15T02:32:04Z",
          "content": "Filmmaker Kiran Rao recalled memories of working as an assistant director on the modern classic Lagaan, directed by Ashutosh Gowariker and starring her former husband, Aamir Khan. Kiran said that she… [+2749 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "HYPEBEAST"
          },
          "author": "info@hypebeast.com (Hypebeast)",
          "title": "Everything Coming To Disney+ in March 2024",
          "description": "As we enter the final week of February, Disney+ unveiled its slate of new programming for March 2024.Next month's list is led by the premiere of X-Men '97, the revival of the '90s animated X-Men series. Also hitting the streamer next month is Taylor Swift's T…",
          "url": "https://hypebeast.com/2024/2/new-disney-plus-movies-films-tv-shows-march-2024",
          "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Fnew-disney-plus-movies-films-tv-shows-march-2024-tw.jpg?w=1080&cbr=1&q=90&fit=max",
          "publishedAt": "2024-02-26T07:32:43Z",
          "content": "As we enter the final week of February, Disney+ unveiled its slate of new programming for March 2024.Next month’s list is led by the premiere of X-Men ‘97, the revival of the ’90s animated X-Men seri… [+5090 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "CSK vs RCB Live Score, IPL 2024: Dhoni, Kohli in focus in season opener in Chennai",
          "description": "Chennai Super Kings vs Royal Challengers Bengaluru Live Score, IPL 2024: Follow the live updates of the CSK vs RCB match happening at the M. A. Chidambaram Stadium in Chennai on Friday.",
          "url": "https://indianexpress.com/article/sports/cricket/csk-vs-rcb-live-score-ipl-2024-match-01-chennai-super-kings-vs-royal-challengers-bengaluru-scorecard-updates-9228174/",
          "urlToImage": "https://images.indianexpress.com/2024/03/WhatsApp-Image-2024-03-22-at-08.18.42.jpeg",
          "publishedAt": "2024-03-22T11:48:15Z",
          "content": "How MS Dhoni broke the captaincy news? An early morning phone call, later a breakfast table talk\r\n Chennai Super Kings (CSK) captain Ruturaj Gaikwad with teammate MS Dhoni during a training session a… [+1163 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Pogba given four-year ban for doping offence",
          "description": "Juventus midfielder Paul Pogba has been given a four-year anti-doping ban after the World Cup winner tested positive for testosterone, reports Sky in Italy",
          "url": "https://www.skysports.com/football/news/11095/13083650/paul-pogba-juventus-midfielder-banned-for-four-years-after-world-cup-winner-tested-positive-for-testosterone",
          "urlToImage": "https://e0.365dm.com/23/09/1600x900/skysports-paul-pogba-juventus_6281590.jpg?20230912064112",
          "publishedAt": "2024-02-29T11:49:00Z",
          "content": "Juventus midfielder Paul Pogba has been given a four-year anti-doping ban after the World Cup winner tested positive for testosterone, reports Sky in Italy\r\nMore to follow....\r\nThis is a breaking new… [+812 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express News Service",
          "title": "After 9 years: ‘IPL matches in Ghaziabad soon’: BCCI V-P lays foundation stone of international cricket stadium",
          "description": "The BCCI V-P, however, did not share any details about the completion of the project.",
          "url": "https://indianexpress.com/article/cities/delhi/ipl-matches-ghaziabad-soon-delay-bcci-president-lays-foundation-stone-cricket-9206769/",
          "urlToImage": "https://images.indianexpress.com/2024/03/ipl.jpg",
          "publishedAt": "2024-03-10T16:02:45Z",
          "content": "An international cricket stadium is all set to come up in Ghaziabad soon nearly nine years after the project was conceptualised.Rajiv Shukla, BCCI (Board of Control for Cricket in India) vice preside… [+2709 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Rolling Stone"
          },
          "author": "Maya Georgi",
          "title": "Cardi B, Kacey Musgraves, Flo Milli and All the Songs You Need to Know This Week",
          "description": "Looking for the week's best new music? Check out our Songs You Need to Know playlist",
          "url": "http://www.rollingstone.com/music/music-features/cardi-b-kacey-musgraves-flo-milli-songs-you-need-to-know-1234988515/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/03/flo-milli-syntk.jpg?crop=0px%2C18px%2C1798px%2C1014px&resize=1600%2C900",
          "publishedAt": "2024-03-15T19:43:08Z",
          "content": "Welcome to our weekly rundown of the best new music — featuring big new singles, key tracks from our favorite albums, and more. This week, Cardi B gets “better and better-er” in a self-assured single… [+1907 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera Staff",
          "title": "Five key takeaways from cricket’s Pakistan Super League 2024",
          "description": "From Babar's and Rizwan's scoring sprees to smoking up the dressing room, here are some key storylines from PSL 9.",
          "url": "https://www.aljazeera.com/sports/2024/3/20/ten-key-takeaways-from-psl-9",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AFP__20240318__34LV7WE__v1__HighRes__CricketPakPslIslamabadMultan-1710794808.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-20T15:36:00Z",
          "content": "The Pakistan Super Leagues (PSLs) ninth season ended with Islamabad United winning a record third title, Multan Sultans losing their third final in a row and the result being decided on the last ball… [+4328 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Flintoff's side to have first pick in Hundred draft",
          "description": "The Northern Superchargers men's team, whose head coach is Andrew Flintoff, will have first pick in this year's draft of The Hundred.",
          "url": "https://www.bbc.co.uk/sport/cricket/68433990",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11E01/production/_132771237_gettyimages-1847546977.jpg",
          "publishedAt": "2024-02-29T10:43:44Z",
          "content": "Former captain Andrew Flintoff worked with England on an informal basis last year\r\nThe Northern Superchargers men's team, whose head coach is Andrew Flintoff, will have first pick in this year's draf… [+1000 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "derrek.lee@futurenet.com (Derrek Lee)",
          "title": "Moto G Power 5G 2024 review: Two steps forward, one step back",
          "description": "The new Moto G Power 5G 2024 brings a new design language while offering features well above its price point, like wireless charging.",
          "url": "https://www.androidcentral.com/phones/moto-g-power-5g-2024-review",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/QoCMwvELaG3t3xihhWivzK-1200-80.jpg",
          "publishedAt": "2024-03-21T13:00:00Z",
          "content": "The Moto G Power lineup has really stepped up its game ever since Motorola decided to include 5G chips in the phones, and the latest model is no different. The Moto G Power 5G 2024 is among the first… [+11782 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "India blast their way past Bazball to seal Test series win against England",
          "description": "India win the fifth and final Test in three days to take the series against England 3-1 as Bazball is questioned again.",
          "url": "https://www.aljazeera.com/sports/2024/3/9/india-blast-their-way-past-bazball-to-seal-test-series-win-against-england-cricket",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2024-03-09T121052Z_797947489_UP1EK390JIH2H_RTRMADP_3_CRICKET-TEST-IND-ENG-1710002610.jpg?resize=1920%2C1440",
          "publishedAt": "2024-03-09T17:09:39Z",
          "content": "India maintained their aura of invincibility at home after completing a 4-1 series triumph against England on Saturday.\r\nThe ease of their final win may well subject the visitors much-hyped Bazball a… [+3672 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sandeep Dwivedi",
          "title": "Yusuf Pathan’s new innings and how politics re-labels and brackets national stars",
          "description": "Sport made Yusuf Pathan an India icon; politics is reductive in parachuting him from west to east to cater to a Muslim dominant constituency .",
          "url": "https://indianexpress.com/article/sports/cricket/yusuf-pathans-new-innings-and-how-politics-re-labels-and-brackets-national-stars-9217132/",
          "urlToImage": "https://images.indianexpress.com/2024/03/Yusuf-Pathan-2.jpg",
          "publishedAt": "2024-03-16T03:01:22Z",
          "content": "This was early 2000 in Baroda. It was the time a middle-aged muezzin, connected to the city’s famous Jama Masjid, was living probably the busiest period of his life. The mosque was his place of work … [+6315 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Ireland face Afghanistan again after Test triumph",
          "description": "Heinrich Malan says his Ireland side are ready for the white-ball series with Afghanistan after celebrating their first Test win.",
          "url": "https://www.bbc.co.uk/sport/cricket/68484031",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/148FE/production/_131122248_mediaitem131122247.jpg",
          "publishedAt": "2024-03-06T08:03:54Z",
          "content": "Heinrich Malan admits his players enjoyed a \"few brews\" after Friday's historic Test win\r\n\u003Ctable\u003E\u003Ctr\u003E\u003Cth\u003EAfghanistan v Ireland - one-day international series\u003C/th\u003E\u003C/tr\u003E\r\n\u003Ctr\u003E\u003Ctd\u003EVenue: Sharjah Cricket… [+4258 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "The Hardest Task In All Of Sport Is Winning A Test Cricket Series In India",
          "description": "Having not lost since 2012, India are almost unbeatable at home in Tests as they showed with a gritty victory over England to underline the difficulty opponents face.",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/28/winning-test-cricket-in-india-is-the-hardest-task-in-all-of-sport/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65deae4aa027b3217474fc36/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-02-28T13:16:34Z",
          "content": "Shubman Gill (r) and Dhruv Jurel celebrate India's fourth Test victory (Photo by Gareth Copley/Getty ... [+] Images)\r\nGetty Images\r\nWith 20-year-old spinner Shoaib Bashir proving a mighty handful, co… [+4215 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Newcastle's Botman out for months with knee injury",
          "description": "Newcastle defender Sven Botman is set to have knee surgery and be out of action for up to nine months.",
          "url": "https://www.skysports.com/football/news/11095/13098760/sven-botman-newcastle-defender-faces-nine-months-out-following-knee-surgery-on-acl-injury",
          "urlToImage": "https://e0.365dm.com/24/03/1600x900/skysports-sven-botman-newcastle_6496126.jpg?20240320173116",
          "publishedAt": "2024-03-20T17:10:00Z",
          "content": "Newcastle defender Sven Botman is set to have knee surgery and be out of action for up to nine months.\r\nA scan revealed the centre-back, 24, suffered an anterior cruciate ligament (ACL) injury in New… [+1119 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Leicester Women manager Kirk stood down amid internal investigation",
          "description": "Leicester City Women's manager Willie Kirk will not take charge of the club's FA Cup match with Liverpool tomorrow due to an internal investigation.",
          "url": "https://www.skysports.com/football/news/11095/13090279/willie-kirk-leicester-women-open-investigation-into-manager-who-will-not-take-charge-of-fa-cup-quarter-final-tie",
          "urlToImage": "https://e0.365dm.com/23/09/1600x900/skysports-willie-kirk-leicester-women_6286042.jpg?20230915183259",
          "publishedAt": "2024-03-08T20:00:00Z",
          "content": "Leicester City Women's manager Willie Kirk will not take charge of the club's FA Cup match with Liverpool tomorrow due to an internal investigation.\r\nAssistant Jennifer Foster and first team coach St… [+1214 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Ederson a major doubt to face Arsenal in title showdown",
          "description": "Manchester City goalkeeper Ederson is facing up to four weeks out with the leg injury he sustained against Liverpool on Sunday.",
          "url": "https://www.skysports.com/football/news/11095/13092770/ederson-man-city-goalkeeper-a-major-doubt-to-face-arsenal-in-premier-league-title-showdown",
          "urlToImage": "https://e0.365dm.com/24/03/1600x900/skysports-ederson-man-city_6486095.jpg?20240310172823",
          "publishedAt": "2024-03-11T17:20:00Z",
          "content": "Manchester City goalkeeper Ederson is facing up to four weeks out with the leg injury he sustained against Liverpool on Sunday.\r\nThe Brazilian was forced off in the second half of the 1-1 draw shortl… [+1317 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "Australia's Green scores century to repel Kiwis",
          "description": "Australia all-rounder Cameron Green scores a century as he produces his side's main resistance on the opening day of the first Test in New Zealand.",
          "url": "https://www.bbc.co.uk/sport/cricket/68433022",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18A3/production/_132770360_gettyimages-2047134252.jpg",
          "publishedAt": "2024-02-29T09:38:39Z",
          "content": "Cameron Green's century at the Basin Reserve included 16 fours\r\n\u003Ctable\u003E\r\n\u003Ctr\u003E\u003Ctd\u003ETest Series, Basin Reserve, Wellington (day one):\u003C/td\u003E\u003C/tr\u003E\u003Ctr\u003E\u003Ctd\u003EAustralia 279-9: Green 103no; Henry 4-43\u003C/td\u003E\u003C/tr\u003E\u003C… [+1177 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Police"
          },
          "author": "Alan Bradley",
          "title": "How to port your telephone number to AT&T",
          "description": "AT&amp;T is the second largest carrier in the U.S. If you're thinking about transferring, this guide will teach you how to transfer your number to AT&amp;T.",
          "url": "https://www.androidpolice.com/transfer-telephone-number-to-att/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/03/screenshot-2024-03-21-at-2-52-20-pm.jpeg",
          "publishedAt": "2024-03-21T18:57:49Z",
          "content": "If you just grabbed one of the best AT&amp;T phones or are switching to AT&amp;T from another provider, you may not want to give up your phone number. You may also have an existing AT&amp;T account a… [+3503 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sriram Veera",
          "title": "Chin music maestro Neil Wagner retires, batsmen heave a sigh of relief",
          "description": "South Africa-born Wagner played 64 tests for New Zealand and will finish fifth on New Zealand’s list of all-time test wicket-takers with 260 at an average of 37.",
          "url": "https://indianexpress.com/article/sports/cricket/chin-music-maestro-neil-wagner-retires-batsmen-heave-a-sigh-of-relief-9183013/",
          "urlToImage": "https://images.indianexpress.com/2024/02/Neil-Wagner.jpg",
          "publishedAt": "2024-02-27T03:42:07Z",
          "content": "Neil Wagner will finally stop bowling his bouncers. Watching him spill his guts out, attempt to spill the batsmens guts out, was one of the most visceral cricket experiences in modern-day cricket. Th… [+5380 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express News Service",
          "title": "Kerala businessman extortion case: Gujarat ATS arrests associate of suspended cop",
          "description": "Rajendra Shah allegedly helped Taral Bhatt freeze over “600 bank accounts for gaining illegal financial benefits\", the police said.",
          "url": "https://indianexpress.com/article/cities/ahmedabad/kerala-businessman-extortion-case-gujarat-ats-arrests-associate-of-suspended-cop-9187587/",
          "urlToImage": "https://images.indianexpress.com/2024/02/taral-bhatt.jpg",
          "publishedAt": "2024-02-29T05:57:00Z",
          "content": "The accused was identified as Deep Rajendra Shah, who allegedly helped Bhatt freeze over 600 bank accounts for gaining illegal financial benefits, He also has a criminal history of various cases in A… [+1621 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Scientific American"
          },
          "author": "Robert Bartholomew",
          "title": "A ‘Havana Syndrome’ Investigation in Congress Rests on Politics, Not Science",
          "description": "Lawmakers should look in the mirror if they want answers to who hyped dubious reports of Havana syndrome. Instead they are investigating the spy agencies telling them the truth about the mystery",
          "url": "https://www.scientificamerican.com/article/a-havana-syndrome-investigation-in-congress-rests-on-politics-not-science/",
          "urlToImage": "https://static.scientificamerican.com/dam/m/223e166c078bed88/original/GettyImages-481824606.jpg?w=1200",
          "publishedAt": "2024-03-15T11:30:00Z",
          "content": "In February, the House Intelligence Committee announced an investigation into spy agency handling of “Havana syndrome”—an array of health complaints first reported by U.S. diplomats and covert agents… [+6334 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sky Sports"
          },
          "author": null,
          "title": "Rowett returns to Birmingham on interim basis",
          "description": "Former Birmingham City manager Gary Rowett has returned to the club on a short-term basis.",
          "url": "https://www.skysports.com/football/news/11095/13097972/gary-rowett-returns-to-birmingham-on-interim-basis-as-tony-mowbray-takes-medical-leave-of-absence",
          "urlToImage": "https://e0.365dm.com/23/10/1600x900/skysports-millwall-gary-rowett_6326208.jpg?20231018201320",
          "publishedAt": "2024-03-19T21:50:00Z",
          "content": "Former Birmingham City manager Gary Rowett has returned to the club on an interim basis.\r\nThe current boss, Tony Mowbray, has been away since mid-February while he receives medical treatment for an u… [+1105 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PetaPixel"
          },
          "author": "Jeremy Gray",
          "title": "The NFL May Finally Swap Its First-Down Chains for Cameras",
          "description": "Despite a combined valuation of its 32 teams nearing $150 billion, the National Football League (NFL) has long relied on a literal chain -- carried by a \"chain gang\" -- to measure first downs. This archaic measurement tool may finally be on its long-overdue w…",
          "url": "https://petapixel.com/2024/03/04/the-nfl-may-finally-swap-its-first-down-chains-for-cameras/",
          "urlToImage": "https://petapixel.com/assets/uploads/2024/03/nfl-chain-gang-to-be-replaced-by-cameras-featured-ver4.jpg",
          "publishedAt": "2024-03-04T19:41:21Z",
          "content": "Despite a combined valuation of its 32 teams nearing $150 billion, the National Football League (NFL) has long relied on a literal chain — carried by a “chain gang” — to measure first downs. This arc… [+2300 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          "title": "Mitchell Starc, The IPL’s Most Expensive Player, Will Be Under Scrutiny In Cricket’s Richest League",
          "description": "Mitchell Starc, the most expensive player in the IPL, will need to lean on his experience and temperament to overcome a rough start in his return to cricket's biggest league",
          "url": "https://www.forbes.com/sites/tristanlavalette/2024/03/25/mitchell-starc-the-ipls-most-expensive-player-will-be-under-scrutiny-in-crickets-richest-league/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6600f99cf4060a3e7e380441/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-25T05:21:21Z",
          "content": "Mitchell Starc had a tough start in the Indian Premier League (Photo by DIBYANGSHU SARKAR/AFP via ... [+] Getty Images)\r\nAFP via Getty Images\r\nMitchell Starc has not played in the money-spinning Indi… [+3457 chars]"
        },
        {
          "source": {
            "id": "time",
            "name": "Time"
          },
          "author": "Jeffrey Kluger",
          "title": "How Cities Around the U.S. Are Celebrating the Eclipse",
          "description": "The total eclipse will cross 15 states, and locals are making ready for it.",
          "url": "https://time.com/6958432/how-us-cities-celebrate-solar-eclipse/",
          "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/GettyImages-836776874.jpg?quality=85",
          "publishedAt": "2024-03-22T10:00:00Z",
          "content": "Ive never before heard the music of the Cleveland Orchestra. Ive certainly never heard them perform the fourth movement from Motzarts Symphony No. 41better known as Jupiter. But that will change on A… [+7842 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Skift"
          },
          "author": "Skift",
          "title": "Dubai Tourism CEO on the Power of Bollywood, Indian Visas and Cricket",
          "description": "India is one of Dubai's most important markets both culturally and touristically. Issam Kazim wants to bring the two closer in any way he can. -Josh Corder",
          "url": "http://skift.com/2024/03/20/dubai-tourism-ceo-on-the-power-of-bollywood-indian-visas-and-cricket/",
          "urlToImage": "https://skift.com/wp-content/uploads/2024/03/Dubaitourism.jpg",
          "publishedAt": "2024-03-20T06:25:08Z",
          "content": "Dubai Tourism CEO Issam Kazim joked that Dubai is an Indian city. \r\nSpeaking at Skift India Summit 2024 on Wednesday in Gurugram, India, Kazim had a point. Dubai and India are closely linked when it … [+2388 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Skift"
          },
          "author": "Skift",
          "title": "Dubai Tourism CEO on the Power of Bollywood, Indian Visas and Cricket",
          "description": "India is one of Dubai's most important markets both culturally and touristically. Issam Kazim wants to bring the two closer in any way he can. -Josh Corder",
          "url": "http://skift.com/2024/03/20/dubai-tourism-ceo-on-the-power-of-bollywood-indian-visas-and-cricket/",
          "urlToImage": "https://skift.com/wp-content/uploads/2024/03/Dubaitourism.jpg",
          "publishedAt": "2024-03-20T06:25:08Z",
          "content": "Dubai Tourism CEO Issam Kazim joked that Dubai is an Indian city. \r\nSpeaking at Skift India Summit 2024 on Wednesday in Gurugram, India, Kazim had a point. Dubai and India are closely linked when it … [+2388 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Quartz India"
          },
          "author": "Laura Bratton",
          "title": "AT&T is giving customers credits after a big service outage — but it won't cost the company much",
          "description": "AT&T said over the weekendthat it will give $5 back to its wireless customers impacted by the telecom’s widespread network outage last week.Read more...",
          "url": "https://qz.com/at-t-cell-outage-refunds-credits-cost-1851286263",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ed3a40d00471dfa9ffa76e159c8d68f1.jpg",
          "publishedAt": "2024-02-26T15:11:00Z",
          "content": "AT&amp;T said over the weekend that it will give $5 back to its wireless customers impacted by the telecoms widespread network outage last week.\r\nAbout 1.5 million customers of the countrys largest w… [+1481 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "‘Someone I can take bullet for’: Gautam Gambhir names Dutch cricketer as greatest team man he has ever played with",
          "description": "Gautam Gambhir reveals the line that KKR owner said to him that convinced him to come back to the Kolkata franchise, which he led to IPL titles in 2012 and 2014.",
          "url": "https://indianexpress.com/article/sports/ipl/can-take-bullet-gautam-gambhir-dutch-cricketer-greatest-team-man-9223983/",
          "urlToImage": "https://images.indianexpress.com/2024/03/KKR-GAUTAM-GAMBHIR-CROPPED.jpg",
          "publishedAt": "2024-03-20T07:19:37Z",
          "content": "Over the course of his illustrious career that has seen him be part of the heady 2011 Cricket World Cup-winning Indian cricket team, Gautam Gambhir has shared the dressing room with many legends and … [+2173 chars]"
        }
      ]
    constructor(){
        super();
        this.state={
            articles:this.articles
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem imageUrl="https://e0.365dm.com/24/03/1600x900/skysports-sven-botman-newcastle_6496126.jpg?20240320173116"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem imageUrl="https://e0.365dm.com/24/03/1600x900/skysports-sven-botman-newcastle_6496126.jpg?20240320173116"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem imageUrl="https://e0.365dm.com/24/03/1600x900/skysports-sven-botman-newcastle_6496126.jpg?20240320173116"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
