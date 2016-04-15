---
title: Overview
page_title: Client-side Programming Overview | RadTextBox for ASP.NET AJAX Documentation
description: Overview
slug: radtextbox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadInput** controls provide a flexible client-side API. You can easily interact with the controls in the browser using their client-side objects. In addition to a variety of client-side events, the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the client-side object

All the API methods are accessible via the registered JavaScript objects for each control.A global variable with the same name as the ClientID of the control is available for each control:

````JavaScript
<script type="text/javascript">
	function pageLoad() {
		var textBox = $find("<%= RadTextBox1.ClientID %>");
	}
</script>
````



Another approach for getting the client-side object is to handle any client-side event of the control - the *sender* argument references the desired client object:

````JavaScript
<script type="text/javascript">
	var textBox = null;
	function Load(sender, args) {
		textBox = sender;
	}
</script>
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
	<ClientEvents OnLoad="Load" />
</telerik:RadTextBox>
````



## Getting a reference to the input area DOM element

The input area of a **RadInput** control is an HTML \<input\> element with a client id that is derived from the client id of the entire control. The following example shows how to get a reference to its DOM element:

The following example demonstrates how to access RadInput client object after Q2 2012:

````ASPNET
<telerik:RadTextBox RenderMode="Lightweight" id="RadTextBox1" runat="server" ClientEvents-OnLoad="loadHandler" />
````



````JavaScript
function loadHandler(sender, args) {
	//In this event handler "sender" is actually the client side object.

	//Accessing objects and elements:
	var clientSideObject = $find("<%=RadTextBox1.ClientID %>");
	var visibleInputElement = $get("<%=RadTextBox1.ClientID %>");

	//Accessing the visible value:
	var formattedDisplayValue1 = clientSideObject.get_displayValue();
	var formattedDisplayValue2 = visibleInputElement.value; //if the input is blurred

	//Accessing the validation value:
	var validationValue1 = clientSideObject.get_validationText();
	var validationValue2 = visibleInputElement.RadInputValidationValue;

	//Accessing the edit value:
	var editValue1 = clientSideObject.get_editValue();
	var editValue2 = visibleInputElement.value; //if the input is focused

	//Get the control's value:
	var value1 = clientSideObject.get_value();

	//Find the client object if you have its textbox element:
	var object = $find(visibleInputElement.id);

	//Get the HTML element if you have reference to the client object:
	var element1 = $get(clientSideObject.get_id()); //suggested approach
	var element2 = clientSideObject._textBoxElement; //hacky but will work with the old rendering as well
}
````



## Getting the value of the input control

Each client-side object exposes properties for getting the value of the control:


>caption  

| Property | Return Type | Description |
| ------ | ------ | ------ |
|get_value(), set_value()| **RadNumericTextBox** : numberAll other input controls: string|Gets or sets the value of the input control.|
|get_textBoxValue(), set_textBoxValue()|string|Gets or sets the value the user input text. It is not assigned as the value of the input control if it contains an error.|
|get_editValue(), set_editValue()|string|Gets or sets the value of the input control as it is formatted when the control has focus.|
|get_displayValue(), set_displayValue()|string|Gets or sets the value of the input control as it is formatted when the control does not have focus.|



## Setting the invalid state of RadInput

Since Q2 2013 RadInput has Invalid property which is used to put the input in invalid state. The property has a getter and setter method. The type of the property is bool and when set to true it applies the ".riError" class to the input. The client-side property value is not persisted on the server.

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



## Changing the appearance style of RadInput controls on the client

Because the **RadInput** controls have their own style mechanism, you can change some of the appearance styles so that they are preserved when the control state is changed (i.e. when it is focused, hovered etc.). Below is a sample of how to change the **EnabledStyle** of a **RadTextBox** instance using the **OnLoad** client-side event hander.

````ASPNET
<script type="text/javascript">
	function Load(sender)
	{
		sender.get_styles().EnabledStyle[0] += "background-color: lemonchiffon;";
		sender.updateCssClass();
	}
</script>
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
	<ClientEvents OnLoad="Load" />
</telerik:RadTextBox>
````



# See Also

 * [RadTextBox Client Object]({%slug radtextbox/client-side-programming/radtextbox-client-object%})

