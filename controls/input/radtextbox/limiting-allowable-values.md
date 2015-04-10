---
title: Limiting Allowable Values
page_title: Limiting Allowable Values | UI for ASP.NET AJAX Documentation
description: Limiting Allowable Values
slug: input/radtextbox/limiting-allowable-values
tags: limiting,allowable,values
published: True
position: 2
---

# Limiting Allowable Values



## 

__RadTextBox__can be used with __RegularExpressionValidator__to validate the input for a specific format.

The following example shows how to use this approach to use __RadTextBox__for entering Email addresses:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        </telerik:RadTextBox>
	        <asp:RegularExpressionValidator
	        id="emailValidator"
	        runat="server"
	        Display="Dynamic"
	        ErrorMessage="Please, enter valid e-mail address."
	        ValidationExpression="^[\w\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]{1,})*(\.[a-zA-Z]{2,3}){1,2}$"
	        ControlToValidate="RadTextBox1">
	    </asp:RegularExpressionValidator>
	    <br/>
	    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" />
````



When the user clicks the Submit button, the text box is validated and the error message is displayed if the entered text does not match the email format.

# See Also

 * [Validation]({%slug input/how-to/validation%})
