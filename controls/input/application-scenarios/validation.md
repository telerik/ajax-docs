---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: input/application-scenarios/validation
tags: validation
published: True
position: 1
---

# Validation



## Validating entered values

The __RadInput__ controls support ASP.NET validators (both client and server side). For example a __RequiredFieldValidator__ can be used to make sure the user does not skip mandatory fields. A __RangeValidator__ can be applied to ensure the entered value falls within some specified interval.

>note You can also use the __MaxDate__ and __MinDate__ properties on __RadDateInput__ or the __MaxValue__ and __MinValue__ properties on __RadNumericTextBox__ to restrict the input to a specified interval.
>


To use ASP.NET validators with __RadInput__ controls, simply set the ID of the __RadInput__ control as the value of the __ControlToValidate__ property of the validator.

Since Q2 2012 thre are some modifications for RadInput validation.The main idea is to render only the input element all the time, and remove the span element and the excessive inputs. To be achieved this the validation value is stored in [“expando”](http://msdn.microsoft.com/en-us/library/89t1khd2%28v=vs.94%29.aspx)property and we submit real value through the client state. Also, the [ValidatorGetValue](http://msdn.microsoft.com/en-us/library/aa338815%28v=vs.71%29.aspx)function of the [asp:Validators](http://msdn.microsoft.com/en-us/library/debza5t0.aspx)was overriden to look our expando property called “RadInputValidationValue”.

## Example![Validators](images/Validators.png)

The following declaration shows the use of a required field validator from the form above:

````ASPNET
	    <telerik:RadTextBox
	        id="RadTextBox1"
	        runat="server"
	        Skin="WebBlue">
	    </telerik:RadTextBox>
	    <asp:RequiredFieldValidator
	        ID="TextBoxRequiredFieldValidator"
	        Runat="server"
	        Display="Dynamic"
	        ControlToValidate="RadTextBox1"
	        ErrorMessage="The textbox can not be empty!" >
	    </asp:RequiredFieldValidator>
````



The following declaration shows the use of a range validator from the form above:

````ASPNET
	    <telerik:RadDateInput
	        ID="RadDateInput1"
	        style="font: 8pt monospace" runat="server"
	        DateFormat="d"
	        Skin="WebBlue"
	        MinDate="01/01/1990"
	        MaxDate="01/01/3000">
	    </telerik:RadDateInput>
	    <asp:RangeValidator
	        id="DateInputRangeValidator"
	        Runat="server"
	        ControlToValidate="RadDateInput1"
	        ErrorMessage="Choose a date between 5th of January 2005 and 1st of September 2005"
	        Display="Dynamic"
	        MaximumValue="2005-09-01-00-00-00"
	        MinimumValue="2005-01-05-00-00-00" >
	    </asp:RangeValidator>
````



For a live example of the form shown above, see the [Validation demo](http://demos.telerik.com/aspnet-ajax/input/examples/common/validation/defaultcs.aspx).

## Triggering validation

If the validators are set to use client-side validation (their __EnableClientScript__ property is __True__), the __RadInput__ controls automatically trigger the validator that checks their value when the user finishes editing. That is, when the user has changed the value in the control and it then loses focus, the validator checks the new value of the input control.

You can also use the RadInput controls to trigger the validation of other controls on the page. To make a __RadInput__ control trigger other validators when it causes a postback:

* Set the __AutoPostBack__ property to __True__. When __AutoPostBack__ is __True__, the input control causes a postback when the user changes its value and it then loses focus.

* Set the __CausesValidation__ property to __True__. This causes the postback that the __RadInput__ control initiates to trigger the validators on the Web page (not just the validator that is checking the value of the RadInput control.)

By default, all validators on the Web page must be successful before the postback that the input control initiates can occur. You can prevent some controls from being validated on the postback while requiring other controls on the Web page to be validated. This is accomplished by using __Validation Groups__.

The validator controls have a __ValidationGroup__ property. The __RadInput__ controls also have a __ValidationGroup__ property. When the input control causes a postback and triggers the validators on the page, itonly causes validation by those validators whose __ValidationGroup__ property matches the__ValidationGroup__ property of the input control. (The reason the default behavior is for all validators to executeon postback is because the default value of the __ValidationGroup__ property on both the input control and the validatorsis an empty string.)

## Display ErrorMessage inside RadInput

The following example demonstrates how you could display your ErrorMessage inside the input itself following an unsuccessful validation.

````JavaScript
	      <script type="text/javascript">
	      	if (ValidatorUpdateDisplay && typeof (ValidatorUpdateDisplayOriginal) === "undefined") {
	      		ValidatorUpdateDisplayOriginal = ValidatorUpdateDisplay;
	      		ValidatorUpdateDisplay = function (val) {
	      			var control = $find(val.controltovalidate);
	      			if ((!val.isvalid) && control && control.set_invalid) {
	      				control.set_invalid(true)
	      			}
	      			ValidatorUpdateDisplayOriginal(val);
	      		};
	      	}
	       </script>
````



````ASPNET
	        <telerik:RadTextBox ID="RadTextBox1" runat="server" EmptyMessage="Enter username">
	        </telerik:RadTextBox>
	        <telerik:RadTextBox ID="RadTextBox2" runat="server" EmptyMessage="Enter password">
	        </telerik:RadTextBox>
	        <asp:Button ID="Button1" runat="server" Text="PostBack" />
	        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" Text="username is required" ControlToValidate="RadTextBox1"
	            Style="display: none;"></asp:RequiredFieldValidator>
	        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" Text="password is required" ControlToValidate="RadTextBox2"
	            Style="display: none;"></asp:RequiredFieldValidator>
````



# See Also

 * [Limiting Allowable Values]({%slug input/radtextbox/limiting-allowable-values%})

 * [Postbacks]({%slug input/getting-started/postbacks%})
