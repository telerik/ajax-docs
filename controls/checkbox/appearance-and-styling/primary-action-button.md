---
title: Primary Action Button
page_title: Primary Action Button | RadCheckBox for ASP.NET AJAX Documentation
description: Primary Action Button
slug: checkbox/appearance-and-styling/primary-action-button
tags: primary,and,secondary,action,buttons,state
published: True
position: 2
---

# Primary Action Button

**RadCheckBox** can be a Primary Action Button (**Figure 1**).

The primary action button on the form has bright and saturated colors to pop up more and catch attention easily. You should use a primary action button to make the default/preferred/main/safe operation on the form stand out. At this point the rest of the buttons with their default appearance become Secondary Action buttons and do not draw as much attention.

>caption Figure 1: Primary RadCheckBox next to a default RadCheckBox.

![Primary action button overview](images/primary-action-button-toggle-button.png)

To switch to a primary action button, set the `Primary` property of the **RadCheckBox** control to `true` (**Example 1**). The property defaults to `false` to result in the regular (secondary) button appearance for most cases.

>caption Example 1: Configure a RadCheckBox to be a primary action button.

````ASP.NET
<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Primary="true">
	<ToggleStates>
		<telerik:ButtonToggleState Text="First Primary state">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="Second Primary State">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadCheckBox>

<telerik:RadCheckBox runat="server" ID="RadCheckBox2">
	<ToggleStates>
		<telerik:ButtonToggleState Text="First Default state">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="Second Default State">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadCheckBox>
````

>note The **Primary Action Button** appearance applies only to the text and background of the push button state. If you add an image to a toggle state, **RadCheckBox** is no longer considered a button but a custom image. Thus, the borders and default backgrounds will be lost and the appearance of the control will change.


## See Also

 * [Skins]({%slug pushbutton/appearance-and-styling/skins%})

 * [Create a Custom Skin]({%slug pushbutton/appearance-and-styling/create-a-custom-skin%})
