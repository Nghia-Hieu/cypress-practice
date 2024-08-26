import * as mockRoute from '../api-helpers'

export const aliases = {
    getDog: "@getDog"
}

export const getDog = (
  response = [],
  status = '200',
  url = 'https://freetestapi.com/api/v1/dogs/1 ',
  alias = aliases.getDog) => {
  mockRoute.mock(response, status, url, alias);
};
