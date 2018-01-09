---
title: OnItemClicked
page_title: OnItemClicked | RadCheckBoxList for ASP.NET AJAX Documentation
description: OnItemClicked
slug: checkboxlist/client-side-programming/events/onitemclicked
tags: onitemclicked
published: True
position: 5
---

# OnItemClicked

The `itemClicked` event occurs when item in **RadCheckBoxList** is clicked. The event is subsequent to [itemClicking event]({%slug checkboxlist/client-side-programming/events/onitemclicking%}) and is fired after the client-side validation.

The event handler receives two parameters:

1. The instance of the loaded RadCheckBoxList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListEventArgs]({%slug Telerik.Web.UI.ButtonListEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) 

>caption Example 1: Handling RadCheckBoxList OnItemClicking event.

````ASP.NET
<script type="text/javascript">
	function OnItemClicked(sender, args) {
		var selectedLanguage = args.get_item().get_text();
		alert("You clicked on " + selectedLanguage + " language!");
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
	<ClientEvents OnItemClicking="OnItemClicked" />
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

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})
