import * as postMocks from '../../mocks/api/mock-api-dogs';

describe('Posts Tests', () => {
    it('Post Sample Tests', () => {
      postMocks.getDog();

      //cy.visit('https://freetestapi.com/api/v1/dogs/1 ');
      cy.wait(postMocks.aliases.getDog)

    });
});
