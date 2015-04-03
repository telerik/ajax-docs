---
title: Adding Buttons
page_title: Adding Buttons | UI for ASP.NET AJAX Documentation
description: Adding Buttons
slug: input/getting-started/adding-buttons
tags: adding,buttons
published: True
position: 4
---

# Adding Buttons



## Adding a generic button

You can easily add a button to any of the __RadInput__ controls by setting the __ShowButton__ property to __True__. When you set __ShowButton__ to __True__, a button appears on the right side of the input control. The button appears as a small bent arrow:![Show Button](images/ShowButton.png)

The appearance of the arrow varies, depending on the [Skin]({%slug input/appearance-and-styling/skins%}) of the input control. To change the image of the button to something other than a bent arrow, use the __ButtonCssClass__ property:

1. Define a CSS class that provides an image for the button. You can link in your own CSS file, or define the CSS class by adding a <style> section to the <head> element of your Web page:

````ASPNET
	    <head runat="server">
	        <title>Untitled Page</title>
	        <style>
	            .MyButton
	            {
	                background: url('~/App_Data/CustomButton.gif') 0 0 no-repeat !important;
	            }
	        </style>
	    </head>
````



1. Set the __ButtonCssClass__ property:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server" ShowButton="True" Skin="WebBlue"
	        ButtonCssClass="MyButton">
	        <ClientEvents OnButtonClick="HandleButtonClick" />
	    </telerik:RadTextBox>
````



## Adding a Spin button

In addition to a generic button, you can add spin buttons to the the __RadNumericTextBox__ control. To add a set of spin buttons, set the __ShowSpinButtons__ property to __True__. The spin buttons appear as two arrows:![Spin Buttons](images/spinButtons.png)

As with generic buttons, the appearance of the spin buttons varies, depending on the __Skin__ property. You can further customize the appearance of the spin buttons using the __SpinUpCssClass__ and __SpinDownCssClass__ properties.

## Specifying the button position

By default, the buttons you add appear on the right of the input control. If you have added both a generic button and a set of spin buttons, the generic button appears to the left of the spin buttons:![Both Types of Buttons](images/BothTypesOfButtons.png)

To move the buttons to the left of the input control, change the __ButtonsPosition__ property to "Left":![Buttons Position](images/ButtonsPosition.png)

If the input control has a label, setting __ButtonsPosition__ to "Left" positions the button after the label:![Left Button with Label](images/LeftButtonWithLabel.png)

## Implementing the button behavior

Spin buttons have built-in behavior: when the user clicks the up arrow, the value in the text box increases by the amount of the __IncrementSettings.Step__ property; when the user clicks the down arrow, the value decreases by the same amount.

Generic buttons have no such built-in behavior. To implement the behavior of a generic button, write a JavaScript function that is called when the user clicks the button, and assign it as the value of the __[OnButtonClick]({%slug input/client-side-programming/events/onbuttonclick%})__ client-side event:

````ASPNET
	    <script type="text/javascript">
	        function ShowSelectionForm(sender, eventArgs)
	        {
	            window.radopen("SelectionForm.aspx", "Specify a Value");
	        }
	    </script>
	    <telerik:RadTextBox ID="RadTextBox1" runat="server" ShowButton="True">
	        <ClientEvents OnButtonClick="ShowSelectionForm" />
	    </telerik:RadTextBox>
````



# See Also

 * [OnButtonClick]({%slug input/client-side-programming/events/onbuttonclick%})

 * [Structure]({%slug input/getting-started/structure%})
