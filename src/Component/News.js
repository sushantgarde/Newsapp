import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "news24",
        "name": "News24"
      },
      "author": "Athenkosi Tsotsi",
      "title": "Quota blunder sees Warriors dumped out of 1-Day Cup",
      "description": "Cricket South Africa's head of domestic cricket, Eddie Khoza, confirmed that the Warriors' failure to communicate their inability to meet their transformation targets was the reason for them missing out on the 1-Day Cup playoffs.",
      "url": "https://www.news24.com/sport/cricket/warriors-dumped-out-of-one-day-cup-over-quotablunder-20250310",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/12781/c2e5fac545224357ba35d8f647d30e8f.jpg",
      "publishedAt": "2025-03-10T17:07:30",
      "content": "Cricket South Africa's head of domestic cricket, Eddie Khoza, confirmed that the Warriors' failure to communicate their inability to meet their transformation targets was the reason for them missing … [+29 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Lalit Modi: Vanuatu PM cancels passport of former IPL cricket chief",
      "description": "Lalit Modi is wanted by Indian authorities in connection with corruption allegations, which he denies.",
      "url": "http://www.bbc.co.uk/news/articles/ckg813zy096o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2e50/live/56129d80-fd7b-11ef-9dc6-c9538916185a.jpg",
      "publishedAt": "2025-03-10T11:52:18.7943367Z",
      "content": "India has made several unsuccessful attempts to extradite him.\r\nOn Friday, India's foreign ministry spokesperson Randhir Jaiswal told reporters that Mr Modi had applied to surrender his Indian passpo… [+2341 chars]"
    },
    {
      "source": {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
      },
      "author": "Sam Buckingham-Jones",
      "title": "SWM ASX AFL, Cricket deals at risk for Seven West Media as ADH TV buys regional TV network",
      "description": "Australian Digital Holdings, the conservative network founded with Alan Jones as a host, controls the future of Seven’s signal in Tasmania and South Australia.",
      "url": "http://www.afr.com/companies/media-and-marketing/the-6m-media-deal-threatening-seven-s-afl-and-cricket-coverage-20250310-p5lie3",
      "urlToImage": "https://static.ffx.io/images/$zoom_0.3153%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_476%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/5927fa5b5b83772b07b13f4a945e977137e248da",
      "publishedAt": "2025-03-10T06:43:48Z",
      "content": "Seven West Medias blockbuster deals to broadcast the AFL and cricket are at risk if it cant strike a deal with a conservative media company that bought a network of TV stations in Tasmania, Spencer G… [+270 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Chris De Silva",
      "title": "Champions Trophy win cements India's status as cricket's best team, an achievement that is sadly tainted",
      "description": "India's triumph at the 2025 Champions Trophy is the crowning moment for the world's best white ball team. Sadly, many won't see it that way, through no fault of the players themselves.",
      "url": "https://www.abc.net.au/news/2025-03-10/cricket-india-2025-champions-trophy-win-tainted-icc-scheduling/105031592",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/b11eab1d1b2f0c13d52259632e472c94?impolicy=wcms_watermark_news&cropH=1686&cropW=2998&xPos=0&yPos=55&width=862&height=485&imformat=generic",
      "publishedAt": "2025-03-10T03:43:51Z",
      "content": "When India recorded a comprehensive seven-wicket win over arch-rivals Pakistan at the 2023 ICC World Cup, then-Pakistan team director Mickey Arthur's comments afterwards were telling.\r\nPakistan had s… [+6937 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Champions Trophy 2025: Impressive India win but tournament shows cricket at risk of apathy",
      "description": "The Champions Trophy had its moments but familiar issues leave apathy as the biggest threat to international cricket's future, writes BBC Sport's Matthew Henry.",
      "url": "http://www.bbc.co.uk/sport/cricket/articles/cly2l3j6ev2o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/3386/live/35faa9b0-fd22-11ef-8c03-7dfdbeeb2526.jpg",
      "publishedAt": "2025-03-09T23:22:22.2318431Z",
      "content": "Of course, none of this is the fault of India's players.\r\nRohit, who caused a stir by sending vice-captain Shubman Gill to the pre-final captains' interview this week, and Virat Kohli are two 50-over… [+2467 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    console.log("Hello I'm a constructor from news component");
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div className='container my-3'>

        <h2>NewsApp top heading</h2>

        <div className="row">
            <div className="col-md-4">
                <Newsitem title ="mytitle" description = "mydesc" imageurl="https://cdn.24.co.za/files/Cms/General/d/12781/c2e5fac545224357ba35d8f647d30e8f.jpg" />
            </div>
            <div className="col-md-4">
                <Newsitem title ="mytitle" description = "mydesc"/>
            </div>
            <div className="col-md-4">
                <Newsitem title ="mytitle" description = "mydesc"/>
            </div>
        </div>
{/*         
        <Newsitem title ="mytitle" description = "mydesc"/>
        <Newsitem title ="mytitle" description = "mydesc"/>
        <Newsitem title ="mytitle" description = "mydesc"/> */}
      </div>
    )
  }
}

export default News