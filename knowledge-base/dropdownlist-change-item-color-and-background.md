---
title: Change DropDownList Item Color and Background
description: Change DropDownList Item Color and Background. Check it now!
type: how-to
page_title: Change DropDownList Item Color and Background
slug: dropdownlist-change-item-color-and-background
res_type: kb
---


## Problem

Cannot change color of DropDownList items. Setting the ForeColor and BackColor properties does not work.

Sample snippet that does not work:

````ASPX
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" SelectedText="DropDownListItem1">
    <Items>
        <telerik:DropDownListItem runat="server" BackColor="#FFFF80" ForeColor="Red" Selected="True" Text="DropDownListItem1" />
        <telerik:DropDownListItem runat="server" BackColor="#FFFF80" ForeColor="Red" Text="DropDownListItem2" />
    </Items>
</telerik:RadDropDownList>
````

## Description

The way to alter colors and backgrounds is, generally, with CSS so you can provide selectors that are specific enough for the HTML structure you are targetting.

The simple ASP.NET properties above may not always work for our controls (documentation reference [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/overview%})).

## Solution

Use the **CssClass** property and a suitable selector to alter the appearance of the items.

For example, the following will alter just a specific item:

````ASPX
<style>
    .rddlPopup .rddlItem.redItem {
        color: red;
        background: #FFFF80;
    }
</style>
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" SelectedText="DropDownListItem1">
    <Items>
        <telerik:DropDownListItem runat="server" CssClass="redItem" Selected="True" Text="DropDownListItem1" />
        <telerik:DropDownListItem runat="server" Text="DropDownListItem2" />
    </Items>
</telerik:RadDropDownList>
````

If you want to affect all items, here's a sample rule that simply does not cascade through a class you have to set on every item:

````ASPX
<style>
    .rddlPopup .rddlItem {
        color: red;
        background: #FFFF80;
    }
</style>
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" SelectedText="DropDownListItem1">
    <Items>
        <telerik:DropDownListItem runat="server" Selected="True" Text="DropDownListItem1" />
        <telerik:DropDownListItem runat="server" Text="DropDownListItem2" />
    </Items>
</telerik:RadDropDownList>
````

These two rules would affect all RadDropDownList instances on the rendered page, however, so you may want to make them more specific and target only certain instances. To to that, add a class to the dropdown element with JavaScript:

````ASPX
<style>
    .rddlSlide.specificDropdownClass .rddlItem {
        color: red;
        background: #FFFF80;
    }
</style>
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" SelectedText="DropDownListItem1" OnClientLoad="setDropDownClass">
    <Items>
        <telerik:DropDownListItem runat="server" Selected="True" Text="DropDownListItem1" />
        <telerik:DropDownListItem runat="server" Text="DropDownListItem2" />
    </Items>
</telerik:RadDropDownList>
<telerik:RadDropDownList ID="RadDropDownList2" runat="server" SelectedText="DropDownListItem1" RenderMode="Classic">
    <Items>
        <telerik:DropDownListItem runat="server" Selected="True" Text="DropDownListItem1" />
        <telerik:DropDownListItem runat="server" Text="DropDownListItem2" />
    </Items>
</telerik:RadDropDownList>
<script>
    function setDropDownClass(sender, args) {
        $telerik.$(sender.get_dropDownElement()).addClass("specificDropdownClass");
    }
</script>
````


 