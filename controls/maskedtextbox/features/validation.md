---
title: Validation
page_title: Validation | RadMaskedTextBox for ASP.NET AJAX Documentation
description: Validation
slug: radmaskedtextbox/features/validation
tags: validation
published: True
position: 1
---

# Validation



## Validating entered values

The **RadInput** controls support ASP.NET validators (both client and server side). For example a **RequiredFieldValidator** can be used to make sure the user does not skip mandatory fields. A **RangeValidator** can be applied to ensure the entered value falls within some specified interval.



To use ASP.NET validators with **RadInput** controls, simply set the ID of the **RadInput** control as the value of the **ControlToValidate** property of the validator.




For a live example of the form shown above, see the [Validation demo](http://demos.telerik.com/aspnet-ajax/input/examples/common/validation/defaultcs.aspx).

## Triggering validation

If the validators are set to use client-side validation (their **EnableClientScript** property is **True**), the **RadInput** controls automatically trigger the validator that checks their value when the user finishes editing. That is, when the user has changed the value in the control and it then loses focus, the validator checks the new value of the input control.

You can also use the RadInput controls to trigger the validation of other controls on the page. To make a **RadInput** control trigger other validators when it causes a postback:

* Set the **AutoPostBack** property to **True**. When **AutoPostBack** is **True**, the input control causes a postback when the user changes its value and it then loses focus.

* Set the **CausesValidation** property to **True**. This causes the postback that the **RadInput** control initiates to trigger the validators on the Web page (not just the validator that is checking the value of the RadInput control.)

By default, all validators on the Web page must be successful before the postback that the input control initiates can occur. You can prevent some controls from being validated on the postback while requiring other controls on the Web page to be validated. This is accomplished by using **Validation Groups**.

The validator controls have a **ValidationGroup** property. The **RadInput** controls also have a **ValidationGroup** property. When the input control causes a postback and triggers the validators on the page, itonly causes validation by those validators whose **ValidationGroup** property matches the **ValidationGroup** property of the input control. (The reason the default behavior is for all validators to executeon postback is because the default value of the **ValidationGroup** property on both the input control and the validatorsis an empty string.)

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
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox1" runat="server" EmptyMessage="Enter username">
</telerik:RadMaskedTextBox>
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox2" runat="server" EmptyMessage="Enter password">
</telerik:RadMaskedTextBox>
<asp:Button ID="Button1" runat="server" Text="PostBack" />
<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" Text="username is required" ControlToValidate="RadMaskedTextBox1"
	Style="display: none;"></asp:RequiredFieldValidator>
<asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" Text="password is required" ControlToValidate="RadMaskedTextBox2"
	Style="display: none;"></asp:RequiredFieldValidator>
````

