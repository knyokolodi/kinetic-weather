import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Button } from '../../styled/Button';
import {
  WeatherDetailsContainer,
  WeatherIcon,
  WeatherLocation,
  WeatherTemparature,
  WeatherTitle,
  WeatherDescription,
  WeatherError,
} from '../../styled/WeatherDetails';

import getCoordinates from '../../utils/getCoordinates';

const WeatherDetails = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [newError, setNewError] = useState(null);

  useEffect(() => {
    getWeather();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getWeather = async () => {
    setLoading(true);

    try {
      const { lat, lng, error } = await getCoordinates();

      if (lat && lng) {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );

        const {
          main: { temp },
          weather: [details],
          name,
        } = data;

        const icon = `https://openweathermap.org/img/wn/${details.icon}@4x.png`;

        setCurrentWeather({
          temp,
          name,
          details,
          icon,
        });
      } else {
        setNewError(error);
        setLoading(false);
      }

      setLoading(false);
    } catch (err) {
      setNewError(err);
      setLoading(false);
    }
  };

  return (
    <>
      {newError && <WeatherError>{newError}</WeatherError>}
      {loading && <Loader type='TailSpin' color='red' height={60} width={60} />}

      {Object.keys(currentWeather).length > 0 && !loading && !newError && (
        <WeatherDetailsContainer>
          <WeatherTitle>Weather Details</WeatherTitle>
          <WeatherLocation>{currentWeather.name}</WeatherLocation>
          <WeatherIcon src={currentWeather.icon} />
          <WeatherTemparature>{currentWeather.temp}&#176;</WeatherTemparature>
          <WeatherDescription>{currentWeather?.details?.description}</WeatherDescription>
          <Button onClick={getWeather}>
            Refresh <FontAwesomeIcon icon={faRedo} color='white' />
          </Button>
        </WeatherDetailsContainer>
      )}
    </>
  );
};

export default WeatherDetails;
