//Imports
//Third-Party Imports

//Custom Imports
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

//Style Imports
import styles from "./CountryList.module.css";

//CityList Component
function CountriesList() {
  const { cities, isLoading } = useCities();
  //Case 1 Return JSX
  if (isLoading) return <Spinner />;

  //Case 2 Return JSX
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  //Case 3 Return JSX with Helper Function Above on that
  //Helper Function
  const countries = cities.reduce((arr, city) => {
    console.log(arr);
    console.log(city);
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

//Exports
export default CountriesList;
