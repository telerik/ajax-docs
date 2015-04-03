---
title: OnClientPasswordStrengthCalculating
page_title: OnClientPasswordStrengthCalculating | UI for ASP.NET AJAX Documentation
description: OnClientPasswordStrengthCalculating
slug: input/client-side-programming/events/onclientpasswordstrengthcalculating
tags: onclientpasswordstrengthcalculating
published: True
position: 3
---

# OnClientPasswordStrengthCalculating



__OnClientPasswordStrengthCalculating__ is fired when using the password strength check feature and changing the text, before the indicator is updated.

>note The __OnClientPasswordStrengthCalculating__ event is supported by __RadTextBox__ with TextMode set to Password and for TextBoxSettings created with RadInputManager.
>


## 

Four properties are exposed through the event arguments:

* __get_passwordText__ - gets password entered by the user.

* __get_strengthScore__ - gets calculated password strength.

* __set_strengthScore__ - sets custom calculated password strength.

* __set_indicatorText__ - sets the text that will be used in the indicator element instead of the correspondading one from TextStrengthDescriptions.

````ASPNET
	    <telerik:RadTextBox runat="server" ID="RadTextBox1" Text="Enter Password" TextMode="Password">
	        <PasswordStrengthSettings ShowIndicator="true" OnClientPasswordStrengthCalculating="CalculatingStrength" />
	    </telerik:RadTextBox>    
````



````JavaScript
	    <script type="text/javascript">
	        function CalculatingStrength(sender, args) {
	            if (args.get_passwordText() == "Enter Password") {
	                //Manually set strength Score depending on the input text.
	                args.set_indicatorText("Custom text");
	                args.set_strengthScore(0);
	            }
	            else {
	                var calculatedScore = args.get_strengthScore();
	                //Changing the indicator text depending on the calculated score.
	                args.set_indicatorText("Score: (" + calculatedScore + "/100)");
	            }
	        }
	    </script>
````



# See Also

 * [Password Strength Checker]({%slug input/radtextbox/password-strength-checker%})
