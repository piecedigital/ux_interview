import * as Data from "./Data";

class LocalSearch{
    FindRestaurant(query) {
        return Data.Restaurants.Restaurants.filter(restaurant => restaurant.Name.includes(query) || restaurant.Cuisine.includes(query));
    }

    FindHotel(query) {
        return Data.Hotels.filter(hotel => hotel.Name.includes(query));
    }
}

export default LocalSearch;