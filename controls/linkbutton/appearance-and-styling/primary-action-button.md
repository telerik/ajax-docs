---
title: Primary Action Button
page_title: Primary Action Button | RadLinkButton for ASP.NET AJAX Documentation
description: Primary Action Button
slug: linkbutton/appearance-and-styling/primary-action-button
tags: primary,and,secondary,action,buttons,state
published: True
position: 2
---

# Primary Action Button

**RadLinkButton** can be a Primary Action Button (**Figure 1**).

The primary action button on the form has bright and saturated colors to pop up more and catch attention easily. You should use a primary action button to make the default/preferred/main/safe operation on the form stand out. At this point the rest of the buttons with their default appearance become Secondary Action buttons and do not draw as much attention.

>caption Figure 1: Primary RadLinkButton next to a default RadLinkButton.

![Primary action button overview](images/primary-action-button.png)

To switch to a primary action button, set the `Primary` property of the **RadLinkButton** control to `true` (**Example 1**). The property defaults to `false` to result in the regular (secondary) button appearance for most cases.

>caption Example 1: Configure a RadLinkButton to be a primary action button.

````
<telerik:RadLinkButton runat="server" ID="RadLinkButton1" Primary="true" Text="Primary Button" NavigateUrl="http://www.telerik.com/"></telerik:RadLinkButton>
<telerik:RadLinkButton runat="server" ID="RadLinkButton2" Text="Default Button" NavigateUrl="http://www.telerik.com/"></telerik:RadLinkButton>
````

## See Also

 * [Skins]({%slug linkbutton/appearance-and-styling/skins%})

 * [Create a Custom Skin]({%slug linkbutton/appearance-and-styling/create-a-custom-skin%})
