---
title: Appearance
page_title: Appearance - RadFloatingActionButton
description: Check our Web Forms article about RadFloatingActionButton Appearance.
slug: floatingactionbutton/functionality/appearance
published: True
position: 2
---

# Appearance

The RadFloatingActionButton exposes the `Shape`, `Size`,  and `ThemeColor` properties allowing various different predefined styling options for customizing the appearance of the control:

 - `Size` — configures the overall size of the component.
 - `Shape`— configures the shape of the component.
 - `ThemeColor`— configures what color will be applied to the component.

[Appearance Demo for the RadFloatingActionButton](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/appearance/defaultcs.aspx)

## Size

The `Size` property controls how big or small the rendered RadFloatingActionButton looks.

The following values are available for the size option:

 - "Large"
 - "Medium" (Default Value)
 - "Small"
 - "None"

## Shape

The `Shape` property controls if the RadFloatingActionButton has square, shape or pill.

The following values are available for the shape option:

 - "Square"
 - "Rectangle"
 - "Pill" (Default Value)

## ThemeColor

The `ThemeColor` property controls the color that will be applied to the rendered RadFloatingActionButton.

The following values are available for the themeColor option:

 - Primary (Default Value)
 - Secondary
 - Tertiary
 - Info
 - Success
 - Warning
 - Error
 - Dark
 - Light
 - Inverse
 - None

The following example demonstrates sample configuration of the `Shape`, `Size`,  and `ThemeColor` properties:

````ASPX
<telerik:RadFloatingActionButton runat="server" Icon="home" Align="BottomEnd" Text="My Profile" ThemeColor="Warning" Shape="Rectangle" Size="Large">
</telerik:RadFloatingActionButton>
````

# See Also

 * [Appearance Demo for the RadFloatingActionButton](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/appearance/defaultcs.aspx)

