---
title: Creating a Floating Save Button with RadFloatingActionButton for ASP.NET AJAX
description: Learn how to create a floating save button that moves with the user as they scroll using RadFloatingActionButton in Telerik UI for ASP.NET AJAX.
type: how-to
page_title: Create a Floating Save Button with RadFloatingActionButton
slug: floatingactionbutton-create-floating-save-button
tags: radfloatingactionbutton, floating save button, example, trial, ASP.NET AJAX
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadFloatingActionButton for ASP.NET AJAX |
| Version | all |

## Description

To implement a floating save button on your page using Telerik UI for ASP.NET AJAX, you can use either the RadButton or the RadFloatingActionButton. Each control has its own features and styling options.

## Solution with RadButton

Add the RadButton control to your page and configure it with custom CSS to make the button float and follow the user as they scroll.

```html
<style>
    .floating-save-btn {
        position: fixed;
        bottom: 25px;
        right: 80px;
        z-index: 1000;
    }
</style>

<telerik:RadButton ID="RadButtonSave" runat="server" Text="Save" CssClass="floating-save-btn"></telerik:RadButton>
```

To show a save icon, add the `<Icon>` inner tag to the RadButton control.

```html
<telerik:RadButton ID="RadButtonSave" runat="server" Text="Save" CssClass="floating-save-btn">
    <Icon PrimaryIconCssClass="rbSave"></Icon>
</telerik:RadButton>
```

## Solution with RadFloatingActionButton

Add the RadFloatingActionButton control to your page and set the `PositionMode` property to "Fixed" so that it scrolls with the user. Additionally, set the `Icon` property to "save" to load a Save icon.

```html
<telerik:RadFloatingActionButton runat="server" ID="FabSpeedDial" Icon="save" PositionMode="Fixed">
</telerik:RadFloatingActionButton>
```

