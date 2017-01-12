---
title: ASP.NET Validators Support
page_title: ASP.NET Validators Support | RadRadioButtonList for ASP.NET AJAX Documentation
description: ASP.NET Validators Support
slug: radiobuttonlist/functionality/aspnet-validators-support
tags: radiobutton, aspnet,validators,support, validate, validation, native
published: True
position: 3
---

# ASP.NET Validators Support

In this article, you will learn how to integrate the native ASP.NET validation control with **RadRadioButtonList**.

As of the **R1 2017** release, there is built-in support for the **RequiredFieldValidator** control. Older versions can be integrated with the **CustomValidator** control as an alternative solution (see **Example 2**).

## Using RequiredFieldValidator

To use the **RequiredFieldValidator**, you just need to set the `ControlToValidate` property to the RadioButtonList's ID. This will trigger validation when the user submits and the validation control will validate against the `SelectedItem` property and return the appropriate validation result.

>caption Example 1: Configuring RequiredFieldValidator control with RadioButtonList.

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" AutoPostBack="false">
	<Items>
		<telerik:ButtonListItem Text="Option 1" Value="0" />
		<telerik:ButtonListItem Text="Option 2" Value="1" />
		<telerik:ButtonListItem Text="Option 3" Value="2" />
	</Items>
</telerik:RadRadioButtonList>

<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
    ControlToValidate="RadRadioButtonList1"
    ErrorMessage="Please choose at least one of the options displayed" />
````

## Using CustomValidator

As an alternative to the **RequiredFieldValidator**, you can use **CustomValidator** and have your own logic that validates the RadioButtonList.

>caption Example 2: Configuring CustomValidator control with RadioButtonList.

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" AutoPostBack="false">
	<Items>
		<telerik:ButtonListItem Text="Option 1" Value="0" />
		<telerik:ButtonListItem Text="Option 2" Value="1" />
		<telerik:ButtonListItem Text="Option 3" Value="2" />
	</Items>
</telerik:RadRadioButtonList>

<asp:CustomValidator ID="CustomButtonListValidator" runat="server" 
    ErrorMessage="Please choose at least one of the options displayed"
    OnServerValidate="CustomButtonListValidator_ServerValidate" />
````
````C#
protected void CustomButtonListValidator_ServerValidate(object source, ServerValidateEventArgs args)
{
    args.IsValid = (RadRadioButtonList1.SelectedIndex > -1);
}
````
````VB
Protected Sub CustomButtonListValidator_ServerValidate(source As Object, args As ServerValidateEventArgs)
	args.IsValid = (RadRadioButtonList1.SelectedIndex > -1)
End Sub
````

## See Also

* [Overview]({%slug radiobuttonlist/overview%})

* [Getting Started]({%slug radiobuttonlist/getting-started%})
