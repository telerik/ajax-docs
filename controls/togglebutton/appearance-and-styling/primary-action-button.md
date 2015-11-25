---
title: Primary Action Button
page_title: Primary Action Button | RadToggleButton for ASP.NET AJAX Documentation
description: Primary Action Button
slug: togglebutton/appearance-and-styling/primary-action-button
tags: primary,and,secondary,action,buttons,state
published: True
position: 2
---

# Primary Action Button

**RadToggleButton** can be a Primary Action Button (**Figure 1**).

The primary action button on the form has bright and saturated colors to pop up more and catch attention easily. You should use a primary action button to make the default/preferred/main/safe operation on the form stand out. At this point the rest of the buttons with their default appearance become Secondary Action buttons and do not draw as much attention.

>caption Figure 1: Primary RadToggleButton next to a default RadToggleButton.

![Primary action button overview](images/primary-action-button-toggle-button.png)

To switch to a primary action button, set the `Primary` property of the **RadToggleButton** control to `true` (**Example 1**). The property defaults to `false` to result in the regular (secondary) button appearance for most cases.

>caption Example 1: Configure a RadToggleButton to be a primary action button.

````ASP.NET
<telerik:RadToggleButton runat="server" ID="RadToggleButton1" Primary="true">
	<ToggleStates>
		<telerik:ButtonToggleState Text="First Primary state">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="Second Primary State">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>

<telerik:RadToggleButton runat="server" ID="RadToggleButton2">
	<ToggleStates>
		<telerik:ButtonToggleState Text="First Default state">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="Second Default State">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>
````

>note The **Primary Action Button** appearance applies only to the text and background of the push button state. If you add an image to a toggle state, **RadToggleButton** is no longer considered a button but a custom image. Thus, the borders and default backgrounds will be lost and the appearance of the control will change.


## See Also

 * [Skins]({%slug pushbutton/appearance-and-styling/skins%})

 * [Create a Custom Skin]({%slug pushbutton/appearance-and-styling/create-a-custom-skin%})
