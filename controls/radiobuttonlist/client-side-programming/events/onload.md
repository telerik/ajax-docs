---
title: OnLoad
page_title: OnLoad | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnLoad
slug: radiobuttonlist/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad

The load event occurs when the RadRadioButtonList client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadRadioButtonList OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadRadioButtonList Object Loaded');
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
	<ClientEvents OnLoad="OnLoad" />
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

* [OnItemLoad (itemLoad)]({%slug radiobuttonlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
