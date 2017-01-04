---
title: ASP.NET Validators Support
page_title: ASP.NET Validators Support | RadCheckBoxList for ASP.NET AJAX Documentation
description: ASP.NET Validators Support
slug: checkboxlist/functionality/aspnet-validators-support
tags: checkboxlist, checkbox, aspnet,validators,support, validate, validation, native
published: True
position: 2
---

# ASP.NET Validators Support

In this article you can see how to integrate native ASP.NET validation control with **RadCheckBoxList**.

As of **R1 2017** version there is built-in support for **RequiredFieldValidator** control. Older versions can be integrated with the **CustomValidator** control as alternative solution (see **Example 2**).

## Using RequiredFieldValidator

To use the **RequiredFieldValidator** you just need to set the `ControlToValidate` property to the CheckBoxList's ID. This will trigger validation when user submits and the validation control will validate against the `SelectedItem` property and return the appropriate validation result.

>caption Example 1: Configuring RequiredFieldValidator control with CheckBoxList.

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1" AutoPostBack="false">
	<Items>
		<telerik:ButtonListItem Text="Option 1" Value="0" />
		<telerik:ButtonListItem Text="Option 2" Value="1" />
		<telerik:ButtonListItem Text="Option 3" Value="2" />
	</Items>
</telerik:RadCheckBoxList>

<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
    ControlToValidate="RadCheckBoxList1"
    ErrorMessage="Please choose at least one of the options displayed" />
````

## Using CustomValidator

As an alternative to the **RequiredFieldValidator** you can use **CustomValidator** and have your own logic that validates the CheckBoxList.

>caption Example 2: Configuring CustomValidator control with CheckBoxList.

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1" AutoPostBack="false">
	<Items>
		<telerik:ButtonListItem Text="Option 1" Value="0" />
		<telerik:ButtonListItem Text="Option 2" Value="1" />
		<telerik:ButtonListItem Text="Option 3" Value="2" />
	</Items>
</telerik:RadCheckBoxList>

<asp:CustomValidator ID="CustomButtonListValidator" runat="server" 
    ErrorMessage="Please choose at least one of the options displayed"
    OnServerValidate="CustomButtonListValidator_ServerValidate" />
````
````C#
protected void CustomButtonListValidator_ServerValidate(object source, ServerValidateEventArgs args)
{
    args.IsValid = (RadCheckBoxList1.SelectedIndex > -1);
}
````
````VB
Protected Sub CustomButtonListValidator_ServerValidate(source As Object, args As ServerValidateEventArgs)
	args.IsValid = (RadCheckBoxList1.SelectedIndex > -1)
End Sub
````

## See Also

* [Overview]({%slug checkboxlist/overview%})

* [Getting Started]({%slug checkboxlist/getting-started%})
