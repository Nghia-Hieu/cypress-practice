describe("Export", ()=>{
    it("Export response", ()=>{
        cy.request("https://freetestapi.com/api/v1/students/1").then((response)=>{
            cy.writeFile('cypress/fixtures/responseStudent.json', response.body);
        });

    })
})