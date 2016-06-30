---
title: OnItemClicking
page_title: OnItemClicking | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnItemClicking
slug: radiobuttonlist/client-side-programming/events/onitemclicking
tags: onitemclicking
published: True
position: 4
---

# OnItemClicking

The `itemClicking` event occurs when item in **RadRadioButtonList** is clicked, immediately after the mouse button is released. The event is fired after the client-side validation, and can be canceled.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.RadioButtonListCancelEventArgs]({%slug Telerik.Web.UI.RadioButtonListCancelEventArgs%}), containing the following properties and methods:
	* get_radioButton() - returns an instance of type [Telerik.Web.UI.RadioButtonListItem]({%slug Telerik.Web.UI.RadioButtonListItem%}) (the clicked item). 
	* get_cancel() - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.
	* set_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

>caption Example 1: Handling RadRadioButtonList OnItemClicking event.

````ASP.NET
<script type="text/javascript">
	function OnItemClicking(sender, args) {
		var selectedLanguage = args.get_radioButton().get_text();
		var toChange = !confirm("You clicked on " + selectedLanguage + " language!");
		args.set_cancel(toChange);
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

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
