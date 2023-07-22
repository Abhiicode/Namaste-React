import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Home from "./Components/Home";
import { restaurantList } from "./content";
import RestaurantCards from "./Components/RestaurantCards";
import Title from "./Components/Title";


const HeadingComponent = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      // Simulate fetching the data and updating the state
      setAllRestaurants(restaurantList);
    }, []);
  
    useEffect(() => {
      console.log(allRestaurants);
    }, [allRestaurants]); // Run the log whenever allRestaurants changes
    
    const filterData = (searchText, restaurants) => {
        console.log(searchText,restaurants);
        filteredData = restaurants?.data?.filter(currRestaurant,()=> {
            currRestaurant.name.toLowerCase().includes(searchText.toLowerCase());
        })
        return filteredData;
    } 

    return (
      <>
        <div className="header">
          <Title />
          <Home />
        </div>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." onChange={(e)=> {
                setSearchText(e.target.value)
            }} />
                <button className="search-button" onClick={()=>{
                    const filteredData = filterData(searchText,allRestaurants)
                    setAllRestaurants(filteredData);
                }}>Search</button>
        </div>
        <div className="restaurantsList">
          {allRestaurants?.map((restaurant) => {
            return (
              <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
