---
title: OnItemClicking
page_title: OnItemClicking - RadCheckBoxList
description: Check our Web Forms article about OnItemClicking.
slug: checkboxlist/client-side-programming/events/onitemclicking
tags: onitemclicking
published: True
position: 4
---

# OnItemClicking

The `itemClicking` event occurs when item in **RadCheckBoxList** is clicked, immediately after the mouse button is released. The event is fired after the client-side validation, and can be canceled.

The event handler receives two parameters:

1. The instance of the loaded RadCheckBoxList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListCancelEventArgs]({%slug Telerik.Web.UI.ButtonListCancelEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) (the clicked item). 
	* get_cancel() - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.
	* set_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

>caption Example 1: Handling RadCheckBoxList OnItemClicking event.

````ASP.NET
<script type="text/javascript">
	function OnItemClicking(sender, args) {
		var selectedLanguage = args.get_item().get_text();
		var toChange = !confirm("You clicked on " + selectedLanguage + " language!");
		args.set_cancel(toChange);
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
	<ClientEvents OnItemClicking="OnItemClicking" />
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

* [OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})
