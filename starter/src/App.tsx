import Banner from "./banner";
import "./css/main.scss";
import Details from "./details-block";
import Footer from "./footer";
import PlacesContainer from "./places-conatainer";



const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <Details link="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY" title="Stories of Adventure"/>
      <PlacesContainer/>
      <Details link="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4" title="Popular Adventures"/>
      <Footer/>

      
    </div>
  );
};

export default App;
