---
title: RadRating with CustomValidator
page_title: RadRating with CustomValidator | RadRating for ASP.NET AJAX Documentation
description: RadRating with CustomValidator
slug: rating/how-to/radrating-with-customvalidator
tags: radrating,with,customvalidator
published: True
position: 0
---

# RadRating with CustomValidator

Sometimes you may need to check if a user has selected a value from a **RadRating** and to display a warning message in case he hasn’t. You can achieve such validation of **RadRating** with the [ASP CustomValidator Control](https://msdn.microsoft.com/en-us/library/9eee01cx%28v=vs.71%29.aspx). There are two options at your disposal - to implement your validation logic in server-side or client-side code. Both solutions are presented in the example below.

## Sever-side Validation

For the server-side validation, we have the following markup. On the ASPX page are added **RadRating**, CustomValidator that executes the validation and **RadButton** that submits the page:

````ASP.NET
<telerik:RadRating RenderMode="Lightweight" ID="RadRating1" runat="server">
</telerik:RadRating>
<asp:CustomValidator ID="CustomValidator1" runat="server" ErrorMessage="Please rate"
	ControlToValidate="RadRating1" OnServerValidate="CustomValidator1_ServerValidate"
	ForeColor="Red">
</asp:CustomValidator>
<br />
<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="RadButton">
</telerik:RadButton>
````

The validation is executed on the **OnServerValidate** event of the CustomValidator:

````C#
protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
{
	args.IsValid = (Int32.Parse(args.Value) > 0);
}
````
````VB
Protected Sub CustomValidator1_ServerValidate(source As Object, args As ServerValidateEventArgs)
	args.IsValid = (Int32.Parse(args.Value) > 0)
End Sub
````

## Client-side Validation

To implement client-side validation, a similar markup will be used. The difference is that the validation logic is defined by the client function, specified in the **ClientValidationFunction** property of the CustomValidator:

````ASP.NET
<script type="text/javascript">
		function ValidateRating(source, args) {
			args.IsValid = (args.Value > 0);
		}
</script>

<telerik:RadRating RenderMode="Lightweight" id="RadRating1" runat="server">
</telerik:RadRating>
<asp:CustomValidator ID="CustomValidator2" runat="server" ErrorMessage="Please rate"
		ControlToValidate="RadRating1" ForeColor="Red" ClientValidationFunction="ValidateRating">
</asp:CustomValidator>
<br />
<telerik:RadButton RenderMode="Lightweight" id="RadButton1" runat="server" text="RadButton">
</telerik:RadButton>
````


