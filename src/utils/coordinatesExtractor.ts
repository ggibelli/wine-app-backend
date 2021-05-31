import axios from 'axios';
import { Address } from '../generated/graphql';
import { Coordinates } from '../models/user';
import { GEOAPI } from './config';
import { loggerError } from './logger';

interface ResultGeo {
  latitude: number;
  longitude: number;
}

interface ErrorGeo {
  code: string;
  message: string;
  context: {
    query: [Record<string, string>];
  };
}

interface GeoResponse {
  data?: ResultGeo[];
  error?: ErrorGeo;
}

export const getCoordinatesFromAddress = async (
  address: Address
): Promise<Coordinates | null> => {
  const params = {
    access_key: GEOAPI,
    query: `${address.comune}, Italy`,
  };
  try {
    const { data }: { data: GeoResponse } = await axios.get(
      'http://api.positionstack.com/v1/forward',
      {
        params,
      }
    );
    if (data.data?.length) {
      return {
        latitude: data.data[0].latitude,
        longitude: data.data[0].longitude,
      };
    }
  } catch (e) {
    loggerError(e);
  }
  return null;
};
