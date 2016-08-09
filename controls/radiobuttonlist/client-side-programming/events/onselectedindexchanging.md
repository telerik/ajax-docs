---
title: OnSelectedIndexChanging
page_title: OnSelectedIndexChanging | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnSelectedIndexChanging
slug: radiobuttonlist/client-side-programming/events/onselectedindexchanging
tags: onselectedindexchanging
published: True
position: 6
---

# OnSelectedIndexChanging

The `selectedIndexChanging` event occurs when users changes the selected item in **RadRadioButtonList**. This event can be canceled. 

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.ButtonListCancelEventArgs]({%slug Telerik.Web.UI.ButtonListCancelEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.RadioButtonListItem]({%slug Telerik.Web.UI.RadioButtonListItem%}) (the clicked item). 
	* get_cancel() - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.
	* set_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

>caption Example 1: Handling RadRadioButtonList OnSelectedIndexChanging event.

````ASP.NET
<script type="text/javascript">
	function OnSelectedIndexChanging(sender, args) {
		var selectedLanguage = args.get_item().get_text();
		var toChange = !confirm("You are about to change to " + selectedLanguage + " language!");
		args.set_cancel(toChange);
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
	<ClientEvents OnSelectedIndexChanging="OnSelectedIndexChanging" />
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

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
 

