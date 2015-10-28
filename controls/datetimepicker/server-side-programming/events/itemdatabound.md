---
title: ItemDataBound
page_title: ItemDataBound | RadDateTimePicker for ASP.NET AJAX Documentation
description: ItemDataBound
slug: datetimepicker/server-side-programming/events/itemdatabound
tags: itemdatabound
published: True
position: 1
---

# ItemDataBound



**RadDateTimePicker** provides the **ItemDataBound** server event, which occurs when an item in the embedded time view control is bound to its data. This event provides the last opportunity to access the data item before it is displayed on the client. After this event is raised, the data item is no longer available.

The **ItemDataBound** event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object, but can be cast to the appropriate type.

2. A **TimePickerEventArgs** object. This object has an **Item** property, which lets you access the **DataListItem** for the newly-created item.

You can use this event to customize the appearance of items in the time picker based on their value:



````C#
protected void RadDateTimePicker1_ItemDataBound(object sender, Telerik.Web.UI.Calendar.TimePickerEventArgs e)
{
    if ((e.Item.ItemType == ListItemType.Item)
        || (e.Item.ItemType == ListItemType.AlternatingItem))
    {
        DataRowView dataItem = (DataRowView)e.Item.DataItem;
        DateTime boundTime = (DateTime)dataItem.Row["Time"];
        if (boundTime.Hour == 9 && boundTime.Minute == 30)
        {
            e.Item.CssClass = "radTimeOverCss_Default";
        }
    }
}  			
````
````VB.NET
Protected Sub RadDateTimePicker1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.Calendar.TimePickerEventArgs) Handles RadDateTimePicker1.ItemDataBound
    If (e.Item.ItemType = ListItemType.Item) _
             OrElse (e.Item.ItemType = ListItemType.AlternatingItem) Then
        Dim dataItem As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
        Dim boundTime As DateTime = DirectCast(dataItem.Row("Time"), DateTime)
        If boundTime.Hour = 9 AndAlso boundTime.Minute = 30 Then
            e.Item.CssClass = "radTimeOverCss_Default"
        End If
    End If
End Sub
````


# See Also

 * [ItemCreated]({%slug datetimepicker/server-side-programming/events/itemcreated%})
 
 
