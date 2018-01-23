class LocalSearch{
    createHotelsList(){
        return [
            {   
                Name: "Hyatt House Seattle",
                Address: "14615 NE 29th Place",
                City: "Bellevue",
                State: "WA"
            },
            {
                Name: "Silver Cloud Inn Redmond",
                Address: "2122 152nd Ave NE",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Extended State America",
                Address: "15808 NE 28th St",
                City: "Bellevue",
                State: "WA"
            },
            {
                Name: "Residence Inn by Marriot",
                Address: "14455 NE 29th Pl",
                City: "Bellevue",
                State: "WA"
            },
            {
                Name: "Fairfield Inn & Suites",
                Address: "14595 NE 29th Pl",
                City: "Bellevue",
                State: "WA"
            },
            {
                Name: "Hyatt House Seattle",
                Address: "15785 Bear Creek Pkwy",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Redmond Inn",
                Address: "17601 Redmond Way",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Element",
                Address: "15220 NE Shen St Suite 100",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Seattle Marriot Redmond",
                Address: "7401 164th Avenue NE",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Residence Inn by Marriot Seattle East/Redmond",
                Address: "7575 164th Avenue NE",
                City: "Redmond",
                State: "WA"
            },
            {
                Name: "Coast Bellevue Hotel",
                Address: "625 116th Avenue NE",
                City: "Bellevue",
                State: "WA"
            },
            {
                Name: "Aloft Seattle Redmond",
                Address: "15220 NE Shen Suite 150",
                City: "Redmond",
                State: "WA"
            }
        ];
    };

    createRestaurantsList(){
        return [
        {
            Name: "Ooba Tooba Mex Grill",
            Cuisine: "Mexican",
            Address: "15802 NE 83rd St",
            City: "Redmond",
            State: "WA" 
         },
         {
             Name: "Sages Restaurant",
             Cuisine: "Italian",
             Address: "15916 NE 83rd St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Oto Sushi",
             Cuisine: "Japanese",
             Address: "18105 161st Ave NE",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Three Lions Pub",
             Cuisine: "British",
             Address: "8115 161st Ave NE",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Sam's Tavern",
             Cuisine: "Burger",
             Address: "15740 Redmond Way",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "The Stone House",
             Cuisine: "Amercian",
             Address: "16244 Cleveland St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Woodblock Redmond",
             Cuisine: "Amercian",
             Address: "16175 Cleveland St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Bangkok Basil",
             Cuisine: "Thai",
             Address: "7297 W Lake Sammamish Pkwy NE",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Niko Teriyaki",
             Cuisine: "Japanese",
             Address: "15948 Redmond Way Ste 102",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "The Guilt Trip",
             Cuisine: "Indian",
             Address: "8440 160th Ave NE",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Villiage Square Cafe",
             Cuisine: "American",
             Address: "16150 85th St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Sip Thai Bistro",
             Cuisine: "Thai",
             Address: "15146 NE 87th St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Tipsy Cow Burger Bar",
             Cuisine: "Burger",
             Address: "16345 Cleveland St",
             City: "Redmond",
             State: "WA" 
          },
          {
             Name: "Hello Poke",
             Cuisine: "Burger",
             Address: "16175 Cleveland St",
             City: "Redmond",
             State: "WA" 
          }];
    };

    FindRestaurant(query) {
        if(this.Restaurants === undefined) {
            this.Restaurants = this.createRestaurantsList();
        }
        return this.Restaurants.filter(restaurant => restaurant.Name.includes(query) || restaurant.Cuisine.includes(query));
    }

    FindHotel(query) {
        if(this.Hotels === undefined) {
            this.Hotels = this.createHotelsList();
        }
        return this.Hotels.filter(hotel => hotel.Name.includes(query));
    }
}

export default LocalSearch;