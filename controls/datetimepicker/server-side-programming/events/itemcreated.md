---
title: ItemCreated
page_title: ItemCreated - RadDateTimePicker
description: Check our Web Forms article about RadDateTimePicker ItemCreated.
slug: datetimepicker/server-side-programming/events/itemcreated
tags: itemcreated
published: True
position: 1
---

# ItemCreated



**RadDateTimePicker** provides the **ItemCreated** server event, which is invoked after an item in the embedded time view control is created. This event occurs both when the control is created after a postback, and at the time data is bound to the control.

The **ItemCreated** event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object, but can be cast to the appropriate type.

2. A **TimePickerEventArgs** object. This object has an **Item** property, which lets you access the **DataListItem** for the newly-created item.

You can use this event to customize the content or appearance of items in
the time picker:



````C#
protected void RadDateTimePicker1_ItemCreated(object sender, TimePickerEventArgs e)
 {
    if (e.Item.ItemType == ListItemType.Item)
    {
      if (e.Item.ItemIndex < 3)
        e.Item.CssClass = "FirstTimeRowCss";
    }
   if (e.Item.ItemType == ListItemType.AlternatingItem)
    {
      if (e.Item.ItemIndex < 3)
        e.Item.CssClass = "FirstAlternatingTimeRowCss";
    }
 }
````
````VB.NET
Protected Sub RadDateTimePicker1_ItemCreated(ByVal sender As Object, ByVal e As TimePickerEventArgs) Handles RadDateTimePicker1.ItemCreated
   If e.Item.ItemType = ListItemType.Item Then
     If e.Item.ItemIndex < 3 Then
       e.Item.CssClass = "FirstTimeRowCss"
     End If
   End If
  If e.Item.ItemType = ListItemType.AlternatingItem Then
     If e.Item.ItemIndex < 3 Then
       e.Item.CssClass = "FirstAlternatingTimeRowCss"
     End If
   End If
End Sub
````


# See Also

 * [ChildrenCreated]({%slug datetimepicker/server-side-programming/events/childrencreated%})

 * [ItemDataBound]({%slug datetimepicker/server-side-programming/events/itemdatabound%})


