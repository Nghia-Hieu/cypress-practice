describe("Import", () => {
  it("Import file", () => {
    cy.readFile("cypress/fixtures/responseStudent.json").then((data) => {
      let name = data.name;
      name = name.replace(" ", "%20");
      cy.request(`https://freetestapi.com/api/v1/students?search=${name}`).then(
        (response) => {
          cy.log(response.body);
          expect(response.body[0].id).to.equal(data.id);
        }
      );
    });
  });
});
