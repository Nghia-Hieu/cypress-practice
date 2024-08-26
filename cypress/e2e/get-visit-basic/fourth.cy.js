describe('Mocking API Response', () => {
    it('should mock the response of a POST request', () => {
      cy.intercept('GET', 'https://freetestapi.com/api/v1/students/1', {
        statusCode: 200,
        body: { success: true, data: { id: 123, name: 'Test Item' } },
      }).as('postResource');
  
      cy.visit('https://example.com');
  
      // Thực hiện hành động sẽ gửi yêu cầu POST đến '/api/resource'
      //cy.get('a[href="https://www.iana.org/domains/example"]').click();
  
      cy.wait('@postResource').then((interception) => {
        // Kiểm tra rằng phản hồi giả lập được trả về đúng
        expect(interception.response.body).to.have.property('success', true);
      });
    });
  });