import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Offer from './components/offer';

function App() {
  let offers = [
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 1050",
        "new_price": "Rs 950",
        "title": "BUY Vital Tea Zip Pack 950 Gm GET Vital Cardamom Green Tea Bags Box 30 Pcs FREE"
    },
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 1060",
        "new_price": "Rs 861",
        "title": "BUY 4 Nestle Cerelac 3 Fruits Baby Food 175 Gm GET Nestle Cerelac Bowl FREE"
    },
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 1005",
        "new_price": "Rs 729",
        "title": "BUY Menu Burger Patties 1075 Gm GET Menu Chicken Nuggets 270 Gm FREE"
    },
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 360",
        "new_price": "Rs 330",
        "title": "BUY Nestle Pure Life Water 1.5 Ltr X 6 Pcs GET 3 Nestle Everyday Sachet 15 Gm FREEE"
    },
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 335",
        "new_price": "Rs 315",
        "title": "BUY Nescafe Classic Coffee 50 Gm GET 2 Nestle Everyday Sachet 15 Gm FREE"
    }
];

  return (
    <div className="App">
      <Header/>
      <h1>...</h1>
      {
        offers.map((offer, index)=>{
          return <Offer key={index} obj={offer}/>
        })
          
      }
    


      <Footer />
    </div>
  );
}

export default App;
