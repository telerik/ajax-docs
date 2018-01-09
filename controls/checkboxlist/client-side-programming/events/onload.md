---
title: OnLoad
page_title: OnLoad | RadCheckBoxList for ASP.NET AJAX Documentation
description: OnLoad
slug: checkboxlist/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad

The load event occurs when the RadCheckBoxList client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadCheckBoxList control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadCheckBoxList OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadCheckBoxList Object Loaded');
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
	<ClientEvents OnLoad="OnLoad" />
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

* [OnItemLoad (itemLoad)]({%slug checkboxlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug checkboxlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})
