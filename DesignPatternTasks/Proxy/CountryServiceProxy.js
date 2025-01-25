class CountryService {
    fetchCountries() {
        
        console.log("Fetching countries from API");
        return ["USA", "Canada", "Mexico", "Germany", "France"];
    }
}

export class CountryServiceProxy {
    constructor() {
        this.countryService = new CountryService();
        this.cache = null;
    }

    getCountries() {
        if (this.cache) {
            console.log("Returning cached countries");
            return this.cache;
        } else {
            console.log("No cache found. Fetching countries");
            this.cache = this.countryService.fetchCountries();
            return this.cache;
        }
    }
}
