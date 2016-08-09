---
title: OnItemLoad
page_title: OnItemLoad | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnItemLoad
slug: radiobuttonlist/client-side-programming/events/onitemload
tags: onitemload
published: True
position: 3
---

# OnItemLoad

The `itemLoad` event occurs when item is loaded in **RadRadioButtonList**.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListEventArgs]({%slug Telerik.Web.UI.ButtonListEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.RadioButtonListItem]({%slug Telerik.Web.UI.RadioButtonListItem%}) 

>caption Example 1: Handling RadRadioButtonList OnItemLoad event.

````ASP.NET
<script type="text/javascript">
	function OnItemLoad(sender, args) {
		alert(args.get_item().get_text() + " item loaded!");
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
	<ClientEvents OnItemLoad="OnItemLoad" />
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

* [OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
