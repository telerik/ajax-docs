---
title: How to select item with Load On Demand enabled in a RadComboBox 
description: How to select item with Load On Demand enabled in a RadComboBox. Check it now!
type: how-to
page_title: How to select item with Load On Demand enabled in a RadComboBox
slug: combobox-how-to-select-item-with-load-on-demand-enabled
res_type: kb
---

## How to

Select programmatically an item in a RadComboBox with load-on-demand enabled.

## Description

In a standard data binding scenario or when you have declarative/programmatically created items, you have both the client-side and the server-side Items collections, so you can easily select an item.

With [load-on-demand]({%slug combobox/load-on-demand/overview%}), however, the Items collections are empty when the page loads, because the goal of the feature is to defer item creation until the point they are needed.

## Solution

The solution is to select or highlight the desired item when the items come back from the service request by using the [OnClientItemsRequested event]({%slug combobox/client-side-programming/events/onclientitemrequested%}). You can use their text, value or a custom attribute flag from the server. Here is an example:

````ASPX
<telerik:RadComboBox runat="server" ID="rcb1" OnClientItemsRequested="OnClientItemsRequested" OnItemsRequested="rcb1_ItemsRequested" EnableLoadOnDemand="true"></telerik:RadComboBox>
<script>
    function OnClientItemsRequested(sender, args) {
        var items = sender.get_items();
        for (var i = 0; i < items.get_count(); i++) {
            if (items.getItem(i).get_attributes().getAttribute("toSelect")) {
                items.getItem(i).select(); //or just .highlight() to show it to the user without selecting
            }
        }
    }
</script>
````

and a simple code-behind handler to populate the custom attribute used above

````C#
protected void rcb1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    for (int i = 0; i < 10; i++)
    {
        RadComboBoxItem itm = new RadComboBoxItem("item " + i);
        if (i == 3)
        {
            itm.Attributes["toSelect"] = "yes";
        }
        (sender as RadComboBox).Items.Add(itm);
        itm.DataBind();//so the attributes are bound to the item
    }
}
````

 