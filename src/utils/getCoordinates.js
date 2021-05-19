const getCurrentPosition = () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  } else {
    return new Promise((resolve) => resolve({}));
  }
};

const getCoordinates = async () => {
  let location = {
    lng: '',
    lat: '',
    error: '',
  };

  try {
    const { coords } = await getCurrentPosition();

    if (coords) {
      location = {
        ...location,
        lng: coords.longitude,
        lat: coords.latitude,
      };
    } else {
      location = {
        ...location,
        error: 'Geolocation is not supported by this browser.',
      };
    }
  } catch (error) {
    const { code } = error;

    switch (code) {
      case error.PERMISSION_DENIED:
        location = {
          ...location,
          error: 'User denied the request for Geolocation.',
        };
        break;
      case error.POSITION_UNAVAILABLE:
        location = {
          ...location,
          error: 'Location information is unavailable.',
        };
        break;
      case error.TIMEOUT:
        location = {
          ...location,
          error: 'The request to get user location timed out.',
        };
        break;
      case error.UNKNOWN_ERROR:
        location = {
          ...location,
          error: 'An unknown error occurred.',
        };
        break;
      default:
        break;
    }
  }
  return location;
};

export default getCoordinates;
