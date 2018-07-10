---
title: OnSelectedIndexChanged
page_title: OnSelectedIndexChanged | RadCheckBoxList for ASP.NET AJAX Documentation
description: OnSelectedIndexChanged
slug: checkboxlist/client-side-programming/events/onselectedindexchanged
tags: onselectedindexchanged
published: True
position: 7
---

# OnSelectedIndexChanged

The `selectedIndexChanged` event occurs when user changes the checked stated of an item in **RadCheckBoxList**.

The event handler receives two parameters:

1. The instance of the loaded RadCheckBoxList control.

1. An eventArgs parameter of type [Telerik.Web.UI.CheckBoxListSelectedIndexChangedEventArgs]({%slug Telerik.Web.UI.CheckBoxListSelectedIndexChangedEventArgs%}), containing the following properties and methods:
	* get_newSelectedIndex() - returns the index of the currently selected item.

>caption Example 1: Handling RadCheckBoxList OnSelectedIndexChanged event.

````ASP.NET
<script type="text/javascript">
	function OnSelectedIndexChanged(sender, args) {
		var selectedItem = sender.get_items()[args.get_newSelectedIndex()];
		alert("Checked state changed for " + newItem.get_text() + " language.");
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
	<ClientEvents OnSelectedIndexChanged="OnSelectedIndexChanged" />
	<Items>
		<telerik:ButtonListItem Text="English" Selected="true" />
		<telerik:ButtonListItem Text="German" />
		<telerik:ButtonListItem Text="French" />
	</Items>
</telerik:RadCheckBoxList>
````


## See Also

 * [CheckBoxList Object]({%slug checkboxlist/client-side-programming/checkboxlist-object%})
 
* [Events Overview]({%slug checkboxlist/client-side-programming/events/overview%})

* [OnLoad (load)]({%slug checkboxlist/client-side-programming/events/onload%})

* [OnItemLoad (itemLoad)]({%slug checkboxlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug checkboxlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})
