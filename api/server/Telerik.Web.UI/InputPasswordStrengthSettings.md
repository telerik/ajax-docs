---
title: Telerik.Web.UI.InputPasswordStrengthSettings
page_title: Telerik.Web.UI.InputPasswordStrengthSettings
description: Telerik.Web.UI.InputPasswordStrengthSettings
---

# Telerik.Web.UI.InputPasswordStrengthSettings

The settings determining the Telerik.Web.UI.RadInputControl password strenght.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.InputPasswordStrengthSettings

## Properties

###  ShowIndicator `Boolean`

Gets or sets a value indicating whether PasswordStrengthInticator will be shown

###  CalculationWeightings `String`

List of semi-colon separated numeric values used to determine the weighting of a strength characteristic. 
            There must be 4 values specified which must total 100. 
            The default weighting values are defined as 50;15;15;20. 
            This corresponds to password length is 50% of the strength calculation, Numeric criteria is 15% of strength calculation, casing criteria is 15% of calculation, and symbol criteria is 20% of calculation. 
            So the format is 'A;B;C;D' where A = length weighting, B = numeric weighting, C = casing weighting, D = symbol weighting.

###  PreferredPasswordLength `Int32`

Preferred length of the password.
            Default preffered length is 10

###  MinimumNumericCharacters `Int32`

Minimum number of numeric characters.
            Default number of minimum numeric characters is 2

###  RequiresUpperAndLowerCaseCharacters `Boolean`

Specifies whether mixed case characters are required.
            By default is true

###  MinimumLowerCaseCharacters `Int32`

Only in effect if RequiresUpperAndLowerCaseCharacters property is true. 
            Specifies the minimum number of lowercase characters required when requiring mixed case characters as part of your password strength considerations.
            By default MinimumLowerCaseCharacters is 2

###  MinimumUpperCaseCharacters `Int32`

Only in effect if RequiresUpperAndLowerCaseCharacters property is true. 
            Specifies the minimum number of uppercase characters required when requiring mixed case characters as part of your password strength considerations.
            By default MinimumUpperCaseCharacters is 2

###  MinimumSymbolCharacters `Int32`

Minimum number of symbol characters.
            By default is 2

###  OnClientPasswordStrengthCalculating `String`

Specify the client event handler that will be executed when calculating the password strength

###  TextStrengthDescriptions `String`

List of semi-colon separated descriptions that will be shown depending on the calculated password strength
            By default TextStrengthDescriptions is "Very Weak;Weak;Medium;Strong;Very Strong"

###  TextStrengthDescriptionStyles `String`

List of semi-colon separated names of CSS Styles that will be used to style the indicator element.
            By default TextStrengthDescriptionStyles = "riStrengthBarL0;riStrengthBarL1;riStrengthBarL2;riStrengthBarL3;riStrengthBarL4;riStrengthBarL5;"

###  IndicatorElementBaseStyle `String`

Set the CSS Style for the indicator element. This style will be set regardless of the calculated password strength.

###  IndicatorElementID `String`

Set ID of the element wtich to style and show the text. Leave this empty and such element will be created automatically.

###  IndicatorWidth `Unit`

Set Width of the indicator

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

