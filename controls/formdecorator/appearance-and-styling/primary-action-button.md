---
title: Primary Action Button
page_title: Primary Action Button - RadFormDecorator
description: Check our Web Forms article about Primary Action Button.
slug: formdecorator/appearance-and-styling/primary-action-button
tags: primary,action,button
published: True
position: 0
---

# Primary Action Button

@[template](/_templates/common/primary-action-button.md#intro-base-release "value1: A button decorated by **RadFormDecorator**")

@[template](/_templates/common/primary-action-button.md#intro-main "control: decorated button")

To switch to a primary action button, add the `rfdPrimaryButton` class to the decorated button and set the **RadFormDecorator**'s **[RenderMode]({%slug formdecorator/mobile-support/render-modes%})** property to `Lightweight` (**Example 1**).

>caption Example 1: Configure a decorated button to be a primary action button.

````ASP.NET
<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" RenderMode="Lightweight" />
<asp:Button ID="Button1" Text="Primary Button" runat="server" CssClass="rfdPrimaryButton" />
<asp:Button ID="Button2" Text="Default Button" runat="server" />
````

@[template](/_templates/common/primary-action-button.md#intro-test "val1: A button decorated by **RadFormDecorator**, val2: decorated button")


## See Also

 * [Create a Custom Skin]({%slug formdecorator/appearance-and-styling/tutorial-creating-custom-lightweight-skin%})
