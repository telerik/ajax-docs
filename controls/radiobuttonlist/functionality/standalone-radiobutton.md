---
title: Standalone RadioButton
page_title: Standalone RadioButton | RadRadioButtonList for ASP.NET AJAX Documentation
description: Standalone RadioButton
slug: radiobuttonlist/functionality/standalone-radiobutton
tags: radiobutton, standalone, single
published: True
position: 2
---

# Standalone Radio Button

In this help article you can learn how to use standalone radio buttons in your web application. 

There might be scenarios where you need radio buttons outside of **RadRadioButtonList**. In such cases, you can use the `RadRadioButton` class in order to add a single radio button on the page.

Here is a list with the sections in this article:

1. [Basic Usage](#basic-usage)
1. [Programming](#programming)
	1. [Client Side](#client-side)
	1. [Server Side](#server-side)
1. [Advanced Usage - Radio Button Behavior](#advanced-usage)


## Basic Usage

These steps illustrate how to include a single **RadRadioButton**, handle the client-side `OnClientClicking` event and the server-side `OnCheckedChanged` event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application, add a **RadRadioButton** control:
	
	**ASP.NET**

		<telerik:RadRadioButton runat="server" ID="RadioButton1" />

1. Set the `Text` and `Value` properties to some desired values:

	**ASP.NET**

		<telerik:RadRadioButton runat="server" ID="RadioButton1" Value="radio" Text="Radio Button" />

1. To handle the client-side `clicking` event, assign a JavaScript function to the `OnClientClicking` property:

	**ASP.NET**

		<telerik:RadRadioButton runat="server" ID="RadioButton1" Value="radio" Text="Radio Button" 
			OnClientClicking="OnClientClicking" />
		
		<script>
			function OnClientClicking(sender, args) {
				args.set_cancel(!confirm("Are you sure?"));
			}
		</script>

1. To handle the server-side `CheckedChange` event, assign a server-side function to the `OnCheckedChanged` property:

	**ASP.NET**

		<telerik:RadRadioButton runat="server" ID="RadioButton1" Value="radio" Text="Radio Button" 
			OnClientClicking="OnClientClicking"
			OnCheckedChanged="RadioButton1_CheckedChanged" />
		
		<script>
			function OnClientClicking(sender, args) {
				args.set_cancel(!confirm("Are you sure?"));
			}
		</script>

	**C#**

		protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
		{
			Response.Write("You selected this Radio Button");
		}

	**VB**

		Protected Sub RadioButton1_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
			Response.Write("You selected this Radio Button")
		End Sub

## Programming

### Client Side

**RadRadioButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

* Using the `$find` method:

		var radioButton = $find("<%= RadRadioButton1.ClientID %>");

* Using the `$telerik.findRadioButton` method:

		var radioButton = $telerik.findRadioButton("<%= RadRadioButton1.ClientID %>");

* Using the `$get` method to get the RadioButton's element and get the instance with the `control` property:

		var radioButton = $get("<%= RadRadioButton1.ClientID %>").control;


You can learn more about the available methods and events in the client-side API reference: [Telerik.Web.UI.ButtonBase.CheckableButton]({%slug Telerik.Web.UI.ButtonBase.CheckableButton%}).

### Server Side

The example below shows how you can add a single **RadRadioButton** from the code-behind and achieve the same result as shown in the [Basic Usage](#basic-usage) section.

>caption Example 1: Adding a RadRadioButton programmatically.

````ASP.NET
<telerik:RadScriptManager runat="server" ID="RadScriptManager1"></telerik:RadScriptManager>

<asp:Panel runat="server" ID="Panel1"></asp:Panel>

<script>
    function OnClientClicking(sender, args) {
        args.set_cancel(!confirm("Are you sure?"));
    }
</script>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadRadioButton radioButton = new RadRadioButton();
    radioButton.ID = "RadioButton1";
    radioButton.Value = "radio";
    radioButton.Text = "Radio Button";
    radioButton.OnClientClicking = "OnClientClicking";
    radioButton.CheckedChanged += RadioButton1_CheckedChanged;

    Panel1.Controls.Add(radioButton);
}

protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
{
    Response.Write("You selected this Radio Button");
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    Dim radioButton As New RadRadioButton()
    radioButton.ID = "RadioButton1"
    radioButton.Value = "radio"
    radioButton.Text = "Radio Button"
    radioButton.OnClientClicking = "OnClientClicking"
    AddHandler radioButton.CheckedChanged, AddressOf RadioButton1_CheckedChanged

    Panel1.Controls.Add(radioButton)
End Sub

Protected Sub RadioButton1_CheckedChanged(sender As Object, e As EventArgs)
    Response.Write("You selected this Radio Button")
End Sub
````

You can learn more about the available methods, properties and events in the server-side API reference: [Telerik.Web.UI.ButtonBase.CheckableButton](/api/server/Telerik.Web.UI.ButtonBase/CheckableButton).

## Advanced Usage

In the [Basic Usage](#basic-usage) section, you learned how to include a single radio button. In a real scenario, radio buttons should act as if they are in a group and prevent multiple options from being checked. In order to accomplish that, further client-side logic is required to toggle the checked state of the buttons.

There are several options to achieve that. For example:

* [Using the unique ID of the controls](#example-2);
* [Using a class name to define a group of **RadRadioButton** controls](#example-3).

>caption <a name="example-2"></a>Example 1: Toggling checked state by using RadRadioButton IDs. 

````ASP.NET
<telerik:RadRadioButton runat="server" ID="MaleRadioButton"
    AutoPostBack="false" Value="male" Text="Male"  OnClientClicked="toggleRadios">
</telerik:RadRadioButton>

<telerik:RadRadioButton runat="server" ID="FemaleRadioButton" 
    AutoPostBack="false" Value="female" Text="Female" OnClientClicked="toggleRadios">
</telerik:RadRadioButton>

<script>
    function toggleRadios(sender, args) {
        var buttonToUncheck = null;
        switch (sender.get_value()) {
            case "male":
                buttonToUncheck = $find("<%= FemaleRadioButton.ClientID %>");
                break;
            case "female":
                buttonToUncheck = $find("<%= MaleRadioButton.ClientID %>");
                break;
        }
        buttonToUncheck.set_checked(false);
    }
</script>
````

>caption <a name="example-3"></a>Example 2: Toggling checked state by using class name.

````ASP.NET
<telerik:RadRadioButton runat="server" ID="MaleRadioButton" CssClass="GenderRadioButton"
    AutoPostBack="false" Value="male" Text="Male"  OnClientClicked="toggleRadios">
</telerik:RadRadioButton>

<telerik:RadRadioButton runat="server" ID="FemaleRadioButton" CssClass="GenderRadioButton"
    AutoPostBack="false" Value="female" Text="Female" OnClientClicked="toggleRadios">
</telerik:RadRadioButton>

<script>
    function toggleRadios(sender, args) {
        var radioButtons = $telerik.$(".GenderRadioButton");

        radioButtons.each(function (index, element) {
			var radioButton = element.control;

            if (radioButton !== sender) {
                radioButton.set_checked(false);
            }
        });
    }
</script>
````

## See Also

 * [Client-side API]({%slug Telerik.Web.UI.ButtonBase.CheckableButton%})

 * [Server-Side API](api/server/Telerik.Web.UI.ButtonBase/CheckableButton)
