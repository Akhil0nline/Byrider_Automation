Feature: Login as QA user in Discover pro 

  @LOGINQA
  Scenario Outline: Verify the validation for without enter username and password for QA login
    Given navigate to Discover pro QA and click on QA login
    When click on login without enter username and password
    Then validation message for username and passsword displayed
    Then click on cancel button
  
  @LOGINQA
  Scenario Outline: Verify the validation for invalid username and password for QA login
    Given navigate to Discover pro QA and click on QA login
    When enter invalid username and password for QA login
    Then click on login button
    Then validation message for invalid credentials displayed
    Then click on cancel button
    

  