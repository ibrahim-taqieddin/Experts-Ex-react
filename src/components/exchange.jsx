import React from "react";
import "./div.css";

const currency = [
    {
      symbol:  "jod",
      currencyy: "Jordanian dinar",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/2560px-Flag_of_Jordan.svg.png"
    },
{
  symbol:  "kwd",
  currencyy: "Kuwaiti dinar",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png"
},
{
  symbol:  "qtr",
  currencyy: "qatari rial",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1024px-Flag_of_Qatar_%283-2%29.svg.png"
},
{
  symbol:  "aed",
  currencyy: "United Arab Emirates Dirham",
  image: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/UAE-flag-history-A-06-08-1-1024x640.jpg"
},
{
  symbol:  "eur",
  currencyy: "Euro",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
},
{
  symbol:  "irr",
  currencyy: "Iranian rial",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/800px-Flag_of_Iran.svg.png"
},
{
  symbol:  "dzd",
  currencyy: "Algerian dinar",
  image: "https://static.vecteezy.com/system/resources/thumbnails/001/790/725/original/algeria-flag-loop-free-video.jpg"
},
{
  symbol:  "egp",
  currencyy: "Egyptian pound",
  image: "https://media.istockphoto.com/id/936894892/photo/flag-of-egypt-waving-background.jpg?s=612x612&w=0&k=20&c=fZSg8RmwIZUUMrB_kJGYQ0QI0a-FohLim_QKk1d91tQ="
},
{
  symbol:  "cny",
  currencyy: "Chinese Yuan",
  image: "https://img.freepik.com/premium-vector/china-flag-waving-chinese-national-flag-background-illustration_4974-118.jpg?w=2000"
},
{
  symbol:  "lyd",
  currencyy: "Libyan dinar",
  image: "https://www.flagsonline.it/uploads/2016-6-6/1200-0/libian-republic.jpg"
},
{
  symbol:  "omr",
  currencyy: "Omani rial",
  image: "https://www.flagsonline.it/uploads/2016-6-6/1200-0/oman.jpg"
},
{
  symbol:  "lkr",
  currencyy: "Sri Lankan rupee",
  image: "https://img.freepik.com/premium-photo/flag-sri-lanka-silk-close-up_406939-935.jpg?w=2000"
},
{
  symbol:  "lbp",
  currencyy: "Lebanese pound",
  image: "data:image/jpeg;base64,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"
},
{
  symbol:  "sar",
  currencyy: "Saudi riyal",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Saudi_Arabia_%281938_to_1973%29.svg/2560px-Flag_of_Saudi_Arabia_%281938_to_1973%29.svg.png"
},
{
  symbol:  "mad",
  currencyy: "Moroccan dirham",
  image: "https://touringinmorocco.com/wp-content/uploads/2022/04/morocco-flag-915x480.jpg"
},
{
  symbol:  "cad",
  currencyy: "Canadian dollar",
  image: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg"
},
{
  symbol:  "clp",
  currencyy: "Chilean peso",
  image: "https://static.vecteezy.com/system/resources/previews/002/431/835/original/illustration-of-the-chile-flag-free-vector.jpg"
},
{
  symbol:  "try",
  currencyy: "Turkish lira",
  image: "https://img.freepik.com/premium-photo/turkey-flag-blowing-wind-waving-colorful-turkish-flag_526955-291.jpg?w=2000"
},
{
  symbol:  "yer",
  currencyy: "Yemeni rial",
  image: "https://img.freepik.com/premium-vector/yemen-flag-with-waving-effect-official-proportion_292608-3360.jpg?w=2000"
},
{
  symbol:  "bhd",
  currencyy: "Bahraini dinar",
  image: "https://cdn.britannica.com/27/70827-050-8D001288/Bahraini-flag-2002.jpg"
},
{
  symbol:  "inr",
  currencyy: "indian rupee",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
},
{
  symbol:  "ird",
  currencyy: "Iraqi dinar",
  image: "https://cdn.britannica.com/40/115240-050-7551FC2D/flag-Iraq-2008.jpg"
},
{
  symbol:  "jpy",
  currencyy: "Japanese yen",
  image: "https://img.freepik.com/premium-vector/japan-flag-with-waving-effect-official-proportion_292608-2019.jpg?w=2000"
},
{
  symbol:  "tnd",
  currencyy: "Tunisian dinar",
  image: "https://img.freepik.com/premium-vector/tunisia-flag-design-waving-tunisian-flag-made-satin-silk-fabric-vector-illustration_191567-346.jpg?w=2000"
},
{
  symbol:  "myr",
  currencyy: "Malaysian ringgit",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2560px-Flag_of_Malaysia.svg.png"
},
{
  symbol:  "mxn",
  currencyy: "Mexican peso",
  image: "https://m.media-amazon.com/images/I/61YBZx+l3bL.jpg"
},
{
  symbol:  "ars",
  currencyy: "Argentine peso",
  image: "https://cdn.britannica.com/18/147118-050-7F820ED5/flag-Argentina-2010.jpg"
},
{
  symbol:  "gre",
  currencyy: "German euro",
  image: "https://img.freepik.com/premium-photo/flag-germany-3d-illustration-german-flag-waving_2227-1776.jpg?w=2000"
},
{
  symbol:  "usd",
  currencyy: "United States Dollar",
  image: "https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg?w=2000"
},
{
  symbol:  "spr",
  currencyy: "Spain euro",
  image: "https://img.freepik.com/premium-vector/spanish-flag-spain-country-national-identity_8071-1617.jpg?w=2000"
},
{
  symbol:  "ukh",
  currencyy: "Ukranian hryvnia",
  image: "https://www.elft.nhs.uk/sites/default/files/2022-03/Ukrainian%20Flag.jpg"
},
{
  symbol:  "rsr",
  currencyy: "Russia ruble",
  image: "data:image/jpeg;base64,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"
},


];


export default function Exchange() {
   
      const Username = JSON.parse (localStorage.getItem("user"))

    return (
        <>
        {/*  ? true : false */}
       {localStorage.getItem("Loggedin") ?
        <div className="text-center">
            <h3>Welcome: <span className="text-primary"> {Username.name}</span> </h3>
        </div> : ""}
      <div className="row justify-content-center ">

          <h1 className="py-5 text-center"> Most Traded Currencies </h1>
          {currency.map((i) => (
            <div className="card" style={{width: "18rem"}}>
              <img src={i.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{i.symbol}</h5>
                <h5 className="name">{i.currencyy}</h5>
              </div>
            </div>
          ))}
      
      </div>
      </>
    );
  }
  
