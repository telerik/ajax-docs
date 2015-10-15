---
title: Password Strength Checker
page_title: Password Strength Checker | RadInput for ASP.NET AJAX Documentation
description: Password Strength Checker
slug: input/radtextbox/password-strength-checker
tags: password,strength,checker
published: True
position: 4
---

# Password Strength Checker



From Q2 2011 on the RadTextBox control offers a password strength checking feature. The same can be used inside a TextBoxSetting created with a RadInputManager.

The feature allows you to specify your custom criteria for password strength and visualize an indicator to inform the user how strong is the typed password according to this criteria.

## Enabling and configuring the feature

You can easily turn on the password strength check functionality by setting **PasswordStrengthSettings.ShowIndicator="true"**. This way the indicator will show and it will use its default values for password strength until you specify your own.

````ASPNET
<telerik:RadTextBox ID="RadTextBox1" runat="server" TextMode="Password">
	<PasswordStrengthSettings ShowIndicator="true" />
</telerik:RadTextBox>
````



Then you can specify your preferred options for the password which will be used for calculating its strength. The available properties are:

* **ShowIndicator** - enables/disables the indication. By default ShowIndicator is set to *false*. In order to show the indication set the property to *true*.

* **PreferredPasswordLength** - preferred length of the password.

* **MinimumNumericCharacters** - the number of minimum numeric characters that the user has to enter in order for his password to be considered as a strong one.

* **MinimumUpperCaseCharacters** - the number of minimum upper case characters expected.

* **MinimumLowerCaseCharacters** - the number of minimum lower case characters expected.

* **MinimumSymbolCharacters** - the number of minimum symbol characters expected.

* **CalculationWeightings** - a list of 4 semi-colon separated numeric values used to determine the weighting of a strength characteristic. The total of the 4 values should be 100. By default they are defined as 50;15;15;20. This means that **password length** will determine 50% of the strength calculation, **numeric criteria** is 15% of strength calculation, **casing criteria** is 15% of calculation, and **symbol criteria** is 20% of calculation. So the format is *"A;B;C;D"* where *A = length weighting, B = numeric weighting, C = casing weighting, D = symbol weighting*.

* **RequiresUpperAndLowerCaseCharacters** - specifies whether upper and lower case characters are required. By default the property is set to "true". When it is "false", the MinimumLowerCaseCharacters and MinimumUpperCaseCharacters properties do not affect the calculation of the password.

* **IndicatorElementID** - sets a div or span element to which the indication will be applied. If this property is not set, such element will be created automatically.

* **IndicatorElementBaseStyle** - the name of the CSS class that will be used for styling the indicator element.

* **TextStrengthDescriptions** - a list of five semi-colon separated strings which will used as descriptions for the password strength. By default TextStrengthDescriptions is set to "Very Weak;Weak;Medium;Strong;Very Strong".

* **TextStrengthDescriptionStyles** - a list of six semi-colon separated CSS classes that will be applied depending on the calculated password strength. By default the property is *"riStrengthBarL0;riStrengthBarL1;riStrengthBarL2;riStrengthBarL3;riStrengthBarL4;riStrengthBarL5;"*

* **IndicatorWidth** - specifies the width of the indicator element. By default the property value is 100px.

## Client-side specifics

The event **OnClientPasswordStrengthCalculating** is fired when using the feature and changing the text, before the indicator is updated. It can be used to modify the result of the calculations. The following properties are exposed:

* **get_passwordText** - gets password entered by the user.

* **get_strengthScore** - gets calculated password strength.

* **set_strengthScore** - sets custom calculated password strength.

* **set_indicatorText** - sets the text that will be used in the indicator element instead of the correspondading one from TextStrengthDescriptions.

Here follows a code sample on using this event:



````ASPNET
<telerik:RadTextBox runat="server" ID="RadTextBox2" Text="Enter Password">
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

 * [Password Strength Checker live demo](http://demos.telerik.com/aspnet-ajax/input/examples/common/passwordstrengthchecker/defaultcs.aspx)
