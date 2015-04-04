---
title: ItemCreated
page_title: ItemCreated | UI for ASP.NET AJAX Documentation
description: ItemCreated
slug: calendar/server-side-programming/server-side-events/itemcreated
tags: itemcreated
published: True
position: 7
---

# ItemCreated



## 

__RadTimePicker__ and __RadDateTimePicker__
provide the __ItemCreated__ server event, which occurs when an
item in the embedded time view control is created. This event occurs both when
the control is created after a postback, and at the time data is bound to the
control.

The __ItemCreated__ event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object, but can be cast to the appropriate type.

1. A __TimePickerEventArgs__ object. This object has an __Item__ property, which lets you access the __DataListItem__ for the newly-created item.

You can use this event to customize the content or appearance of items in
the time picker:

>tabbedCode

````C#
	     
	
	        protected void RadDateTimePicker1_ItemCreated(object sender,
	        TimePickerEventArgs e)
	         {
	            if (e.Item.ItemType == ListItemType.Item)
	            {
	              if (e.Item.ItemIndex < 3)
	                e.Item.CssClass =
	        FirstTimeRowCss;
	            }
	           if (e.Item.ItemType ==
	        ListItemType.AlternatingItem)
	            {
	              if (e.Item.ItemIndex < 3)
	                e.Item.CssClass =
	        "FirstAlternatingTimeRowCss";
	            }
	         }
	
				
````
````VB.NET
	     
	
	        Protected Sub RadDateTimePicker1_ItemCreated(ByVal sender As Object,
	        _
	
	        ByVal e As TimePickerEventArgs) _
	                                          Handles
	        RadDateTimePicker1.ItemCreated
	           If e.Item.ItemType = ListItemType.Item Then
	             If e.Item.ItemIndex < 3 Then
	               e.Item.CssClass = FirstTimeRowCss
	             End If
	           End If
	          If e.Item.ItemType = ListItemType.AlternatingItem Then
	             If e.Item.ItemIndex < 3 Then
	               e.Item.CssClass =
	        "FirstAlternatingTimeRowCss"
	             End If
	           End If
	        End Sub
	
				
````
>end

# See Also

 * [ChildrenCreated]({%slug calendar/server-side-programming/server-side-events/childrencreated%})

 * [ItemDataBound]({%slug calendar/server-side-programming/server-side-events/itemdatabound%})
