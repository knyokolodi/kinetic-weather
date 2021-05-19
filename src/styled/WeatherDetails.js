import styled from 'styled-components';

export const WeatherDetailsContainer = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 21px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const WeatherIcon = styled.img`
  align-self: center;
  width: 100px;
  height: auto;
`;

export const WeatherTitle = styled.h3`
  font-weight: 600;
  margin: 0;
`;

export const WeatherTemparature = styled.h2`
  color: #fa324f;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const WeatherLocation = styled.p`
  color: #fa324f;
  font-weight: 600;
`;

export const WeatherDescription = styled.p`
  font-weight: 600;
`;

export const WeatherError = styled.h3`
  color: red;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
