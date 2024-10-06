///<reference types= "cypress" />

describe('To test the gift certificate', () => {

  it('test the all methods', () => {

      // Visit the website
      cy.visit('https://tutorialsninja.com/demo/');

      // Register a new user account
      cy.get('.dropdown-toggle').contains('My Account').click({ force: true });
      cy.get('a').contains('Register').click();

      cy.get('[name="firstname"]').type('Sanika');
      cy.get('[name="lastname"]').type('Hole');
      cy.get('[name="email"]').type('sanikahole2234@gmail.com');
      cy.get('[name="telephone"]').type('8809399012');
      cy.get('[name="password"]').type('sanika234');
      cy.get('[name="confirm"]').type('sanika234');
      cy.get('[name="agree"]').check();
      cy.get('[type="submit"]').click();

      // Assert for registration success
      cy.url().should('include', 'account');



      // Enter the existing product name into the search text box fiels.
      cy.get('[placeholder="Search"]').type('HP LP3065');
      //click on the button having search icon
      cy.get('.btn.btn-default.btn-lg').click();
      //click on "Add to Cart" button on the search reasult
      cy.get('.product-layout .product-thumb').first().contains('Add to Cart').click();
      //Click on the "shopping cart!" link in the displayed success message"
      cy.get('#button-cart').click();

      //Assert for search product
      cy.get('.alert.alert-success').contains('Success: You have added').should('be.visible');

      

      // Click on "Checkout" button in the "Shopping Cart" page

      // Checkout option
      cy.get('.pull-right').contains('Checkout').click();
      cy.get('[name="email"]').type('sanikahole@gmail.com');// Enter the email
      cy.get('[name="password"]').type('sanika21');// Enter the password
      cy.get('[value="Login"]').click();// Click on login

      // Billing Details

      // Fill in shipping information
      cy.get('[placeholder="First Name"]').type('Sanika', { force: true });// Type the First name
      cy.get('[placeholder="Last Name"]').type('Hole', { force: true });// Type the Last name 
      cy.get('[placeholder="Address 1"]').type('Amravati', { force: true });// Type the  Address 1
      cy.get('[placeholder="City"]').type('Amravati', { force: true });// Type your city
      cy.get('[placeholder="Post Code"]').type('787964', { force: true }); // Type your post code
      cy.get('select[name="country_id"]').select('India', { force: true });// Select the country
      cy.get('select[name="zone_id"]').select('South Ayrshire', { force: true }); // Select the state

      // click on "Continue button"
      cy.get('[id="button-payment-address"]').click();

      // Shipping address 
      cy.get('[id="button-shipping-address"]').click();
      
      // Click on "Continue button"
      cy.get('.accordion-toggle').click({ multiple: true });
      cy.get('[name="comment"]').type('Hello, I am happy with this order', { force: true });

      // Click on "Continue button"
      cy.get('[id="button-shipping-method"]').click({force: true});

      // Select the "Terms & Conditions" Checkbox field
      cy.get('[name="agree"]').check();

      // Click on continue button
      cy.get('[id="button-shipping-method"]').click({ force: true });

      // Click on "confirm orde" button
      cy.get('[id="collapse-checkout-confirm"]').click({ force: true });
      
      // Click on "My Account page link in the displayed "Order success"page
      cy.get('[title="My Account"]').click();
      // Click on "My Account" dropmenu
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account');

      // Click on "Gift Certificates" footer option
      cy.get('a').contains('Gift Certificates').click();

      // Enter the details field 
      cy.get('[name="to_name"]').type('Sejal Devikar'); // Recipient's Name
      cy.get('[name="to_email"]').type('sejaldevikar@gmail.com'); // Recipient's Email
      cy.get('[value="7"]').click(); // Your name all ready reagister 
      // Type the message 
      cy.get('[name="message"]').type('Wish you a happy birthday my best friend. May you have lost of happy filled moments on your birthday and all the year through');
      cy.get('[name="amount"]').click(); // Gift certificate Theme and Amount
      cy.get('[name="agree"]').check(); // Select the Terms & conditions
      cy.get('[type="submit"]').click(); // Click on submit the form
      
      
      // Select I understand that gift certificates are non-refundable checkbox option
      cy.get('.pull-right').contains('Continue').click();
      cy.get('.pull-right').contains('Checkout').click();
      cy.get('[id="button-payment-address"]').click(); 
      cy.get('[id="button-shipping-address"]').click(); 
      cy.get('[id="button-shipping-method"]').click(); 
      cy.get('[name="agree"]').check(); 
      cy.get('[id="button-payment-method"]').click(); 
      cy.get('[id="button-confirm"]').click(); 
      
      // click the continue button
      cy.get('.pull-right').contains('Continue').click();

      // LogOut the page
      cy.get('[title="My Account"]').click();
      cy.visit('https://tutorialsninja.com/demo/index.php?route=account/logout');
      cy.get('.pull-right').contains('Continue').click();

  });
});

    
    


   
  



      

     

    

    


  
  