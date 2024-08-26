import GetUserData from "../../services/getData";

describe("Login try", () => {
  const dataInfo = GetUserData();
  const getID = ()=> Cypress._.random(10000,99999)
  const userID = getID();
  const cUsername = `${Cypress.env('cUsername')}${userID}`
  const cPassword =0;
  it(`account`, () => {
    cy.clearAllCookies();
    cy.visit(`${Cypress.env('host')}/users/sign_up`);
    cy.get('#user_full_name').type(cUsername);
    cy.get('#user_email').type(`${cUsername}@gmail.com`);
    cy.get('#user_password').type("12345",{log: false});
    cy.get('#user_password_confirmation').type("12345", {log: false});
    cy.get('.sign-up-btn').click();

    

    cy.url().should('include', '/onboarding');

    //cy.login(dataInfo.username, dataInfo.password);

    //Step 1
    cy.get("#company_name").type("Hello");
    cy.get(".select2-selection__rendered").eq(0).click();
    
    //Get direct country
    //cy.get(".select2-results__options").contains("li", "+62").click();
    
    //Search country name
    cy.get(".select2-search__field").type("us");
    cy.get(".select2-results__options > li").eq(0).click();

    // cy.get(".select2-results__options > li").each(($li, index, $lis)=>{
    //     cy.wrap($li).trigger('mouseover');     
    // });


    cy.get(".company_phone_number").type("999129391");
    cy.get(".btn-onboarding").eq(0).click();

    cy.get(".btn-industry").eq(3).click();
    cy.get(".btn-onboarding").eq(0).click();

    cy.get(".company_timezone").eq(0).click();
    cy.get(".select2-results__options").contains("li","Africa/Bissau").click(); 
    cy.get(".company_currency").click();
    cy.get(".select2-results__options").contains("li","HTG").click(); 
    cy.get(".btn-onboarding").eq(0).trigger('click');

    //cy.get('input.sync-google-calendar').invoke('prop', 'checked', true).trigger('change', { force: true });  // Trigger the change event with force
  
    //cy.get('input.sync-google-calendar').check({ force: true }).debug();
    //cy.get('div.skip a[href="/calendar"]').click();
    //cy.contains('b', 'Done').click();


  });
});
