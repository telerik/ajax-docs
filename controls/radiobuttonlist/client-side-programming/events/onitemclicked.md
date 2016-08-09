---
title: OnItemClicked
page_title: OnItemClicked | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnItemClicked
slug: radiobuttonlist/client-side-programming/events/onitemclicked
tags: onitemclicked
published: True
position: 5
---

# OnItemClicked

The `itemClicked` event occurs when item in **RadRadioButtonList** is clicked. The event is subsequent to [itemClicking event]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%}) and is fired after the client-side validation.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListEventArgs]({%slug Telerik.Web.UI.ButtonListEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.RadioButtonListItem]({%slug Telerik.Web.UI.RadioButtonListItem%}) 

>caption Example 1: Handling RadRadioButtonList OnItemClicking event.

````ASP.NET
<script type="text/javascript">
	function OnItemClicking(sender, args) {
		var selectedLanguage = args.get_item().get_text();
		alert("You clicked on " + selectedLanguage + " language!");
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
	<ClientEvents OnItemClicking="OnItemClicking" />
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

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
