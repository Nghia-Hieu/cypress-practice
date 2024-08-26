
import path from "path";

describe("Import customer", ()=>{
    const customerInfo={
        Fullname: 'Dao Anh Minh',
        Email: 'dmanh@gmail.com',
        PhoneNumber: '839411301',
        Company: 'Hello Kitty',
        City: 'HoChiMinh',
        State: 'Noname',
        Zipcode: '70000',
        Website: 'https://ofoso.vn',
        Facebook: 'https://facebook.com/Dmanh135',
        LinkedIn: 'https://linkedin.com/41241213331',
        Instagram: 'https://instagram.com/990103031',
        XLink: 'https://x.com/19391401',
        Youtube: 'https://youtube.com/dm12124anh'
    };
    const userInfo = {email:'Iris119311@gmail.com', password:'Iris119311'};   
    const dirPath =  path.resolve(__dirname, '../../..');
    it("Test add new customer", ()=>{
        cy.visit(`https://ezycal-staging.goldenowl.asia//users/sign_in`);
        cy.get("#user_email").type(userInfo.email);
        cy.get("#user_password").type(`${userInfo.password}{Enter}`);
        cy.wait(1000);

        cy.url().should('include', '/calendar');
        cy.get('.drawer-button').click();
        cy.wait(1000);
        cy.get('a[href="/business/customers"]').click();
        cy.get('a[href="/business/customers/new"]').click();
        cy.wait(1000);

        cy.get("div > input[type='file']").selectFile("cypress/components/images/ava.jpg",{force: true})
        cy.wait(1000);

        cy.get('#customer_full_name').type(customerInfo.Fullname);
        cy.get('#customer_email').type(customerInfo.Email);
        cy.get('#customer_phone_number').type(customerInfo.PhoneNumber);
        cy.get('#customer_business').type(customerInfo.Company);
        cy.get('#customer_city').type(customerInfo.City);
        cy.get('#customer_state').type(customerInfo.State);
        cy.get('#customer_zip_code').type(customerInfo.Zipcode);
        cy.get('#customer_website').type(customerInfo.Website);
        cy.get('#customer_facebook').type(customerInfo.Facebook);
        cy.get('#customer_linkedin').type(customerInfo.LinkedIn);
        cy.get('#customer_instagram').type(customerInfo.Instagram);
        cy.get('#customer_twitter').type(customerInfo.XLink);
        cy.get('#customer_youtube').type(customerInfo.Youtube);

    })
})