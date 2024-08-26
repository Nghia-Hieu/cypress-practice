export const mock = (response, status, url, alias, method = 'GET') => {
    if (typeof (response) === 'string' && response.substring(response.length - 5) === '.json') {
      cy.intercept({
        method: method,
        url: url,
        }, {
        statusCode: parseInt(status),
        fixture: response
      }).as(alias.replace('@', ''));
    } else {
      cy.intercept({
        method: method,
        path: url,
        }, {
        statusCode: parseInt(status),
        body: response
      }).as(alias.replace('@', ''));
    }
  }
  