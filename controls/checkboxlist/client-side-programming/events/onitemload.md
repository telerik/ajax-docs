---
title: OnItemLoad
page_title: OnItemLoad - RadCheckBoxList
description: Check our Web Forms article about OnItemLoad.
slug: checkboxlist/client-side-programming/events/onitemload
tags: onitemload
published: True
position: 3
---

# OnItemLoad

The `itemLoad` event occurs when item is loaded in **RadCheckBoxList**.

The event handler receives two parameters:

1. The instance of the loaded RadCheckBoxList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListEventArgs]({%slug Telerik.Web.UI.ButtonListEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) 

>caption Example 1: Handling RadCheckBoxList OnItemLoad event.

````ASP.NET
<script type="text/javascript">
	function OnItemLoad(sender, args) {
		alert(args.get_item().get_text() + " item loaded!");
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
	<ClientEvents OnItemLoad="OnItemLoad" />
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

* [OnItemClicking (itemClicking)]({%slug checkboxlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})
