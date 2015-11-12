---
title: Primary State
page_title: Primary State | RadLinkButton for ASP.NET AJAX Documentation
description: Primary State
slug: button/appearance-and-styling/primary-and-secondary-action-buttons
tags: primary,and,secondary,action,buttons,state
published: True
position: 2
---

# Primary State

**RadLinkButton** offers an additional "primary" state (**Figure 1**) that uses bright and saturated colors to have the button pop up more and catch attention easily.

>caption Figure 1: RadLinkButton in its regular and primary state.

![Regular and primary button state](images/primary-state-link-button-silk.png)

To switch to the primary state, set the `Primary` property of the **RadLinkButton** control to `true` (**Example 1**). The property defaults to `false` result in the regular button appearance for most cases.

>caption Example 1: Configure the primary state of a RadLinkButton instance.

````ASP.NET
<telerik:RadLinkButton runat="server" ID="RadPushButton1" Text="Regular Button" NavigateUrl="http://www.telerik.com/" Skin="Silk"></telerik:RadLinkButton>
<telerik:RadLinkButton runat="server" ID="RadPushButton2" Primary="true" Text="Primary Button" NavigateUrl="http://www.telerik.com/" Skin="Silk"></telerik:RadLinkButton>
````

## See Also

 * [Skins]({%slug linkbutton/appearance-and-styling/skins%})

 * [Create a Custom Skin]({%slug linkbutton/appearance-and-styling/create-a-custom-skin%})
