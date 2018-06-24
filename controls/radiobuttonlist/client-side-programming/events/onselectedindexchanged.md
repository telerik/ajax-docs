---
title: OnSelectedIndexChanged
page_title: OnSelectedIndexChanged | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnSelectedIndexChanged
slug: radiobuttonlist/client-side-programming/events/onselectedindexchanged
tags: onselectedindexchanged
published: True
position: 7
---

# OnSelectedIndexChanged

The `selectedIndexChanged` event occurs when user changes the selected item in **RadRadioButtonList**.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.RadioButtonListSelectedIndexChangedEventArgs]({%slug Telerik.Web.UI.RadioButtonListSelectedIndexChangedEventArgs%}), containing the following properties and methods:
	* get_oldSelectedIndex() - returns the index of the previously selected item. 
	* get_newSelectedIndex() - returns the index of the currently selected item.

>caption Example 1: Handling RadRadioButtonList OnSelectedIndexChanged event.

````ASP.NET
<script type="text/javascript">
	function OnSelectedIndexChanged(sender, args) {
		var oldItem = sender.get_items()[args.get_oldSelectedIndex()];
		var newItem = sender.get_items()[args.get_newSelectedIndex()];
		alert("You changed from " + oldItem.get_text() + " to " + newItem.get_text() + " language.");
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
	<ClientEvents OnSelectedIndexChanged="OnSelectedIndexChanged" />
	<Items>
		<telerik:RadioButtonListItem Text="English" Selected="true" />
		<telerik:RadioButtonListItem Text="German" />
		<telerik:RadioButtonListItem Text="French" />
	</Items>
</telerik:RadRadioButtonList>
````


## See Also

 * [RadioButtonList Object]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%})
 
* [Events Overview]({%slug radiobuttonlist/client-side-programming/events/overview%})

* [OnLoad (load)]({%slug radiobuttonlist/client-side-programming/events/onload%})

* [OnItemLoad (itemLoad)]({%slug radiobuttonlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
