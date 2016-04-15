---
title: Localization
page_title: Localization | RadDropDownTree for ASP.NET AJAX Documentation
description: Localization
slug: dropdowntree/accessibility-and-internationalization/localization
tags: localization
published: True
position: 1
---

# Localization





## Localization

The **Localization** property specifies the strings that appear in the runtime user interface of RadDropDownTree control. By changing the values of each named sub-property, you change the appearance of the string in the RadDropDownTree.

Currently you can change the string for the **Clear** button as well as the string for the **CheckAll** property as exemplified below.

````ASPNET
<telerik:RadDropDownTree RenderMode="Lightweight" ID="RadDropDownTree1" runat="server" Width="250px" 
    DefaultMessage="Please select" CheckBoxes="SingleCheck"
    DataSourceID="ObjectDataSource1" DataFieldID="ID" DataFieldParentID="ParentID"
    DataTextField="Text">
    <ButtonSettings showcheckall="true" showclear="true" />
    <Localization clear="Clear All" checkall="Check All" />
</telerik:RadDropDownTree>
````


