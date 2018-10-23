class Header {
    getSignInLink() {
        return cy.get('#btnLoginCadastrar', {timeout: 10000});
    }

    getCartLink(){
        return cy.get('.padding-0 > .btn');
    }

    getSearchBar(){
        return cy.get('.input-search-header');
    }
  }
  
  export default Header;