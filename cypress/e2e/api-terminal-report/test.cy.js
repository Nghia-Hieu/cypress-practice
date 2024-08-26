describe('Test report', ()=>{
    it('Report', ()=>{
        // cy.intercept({
        //     method: 'GET',
        //     url: 'https://vnexpress.vn',
        //     hostname: 'localhost',
        //   }).as('hello')
          cy.request({
            method: 'GET',
            url: 'https://freetestapi.com/api/v1/weathers/1',
          }).then((rsp)=>{
            expect(rsp.body).to.have.property("id");
          })
    })
})