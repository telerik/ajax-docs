---
title: Overview
page_title: Overview - RadRadioButtonList
description: Check our Web Forms article about Overview.
slug: radiobuttonlist/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

**RadRadioButtonList** exposes several client-side events that allow easy and flexible use in a wide range of application scenarios:

* **[OnLoad (load)]({%slug radiobuttonlist/client-side-programming/events/onload%})** - raised when the control is initialized.

* **[OnItemLoad (itemLoad)]({%slug radiobuttonlist/client-side-programming/events/onitemload%})** - raised when item is loaded.

* **[OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})** - raised when the user clicks an item in the RadioButtonList. The event can be canceled.

* **[OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})** - raised when an item in the RadioButtonList is clicked. The event is subsequent to the **OnItemClicking** event.

* **[OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})** - raised after **OnItemClicking** if the item clicked is selected by the user. The event can be canceled.

* **[OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})** - raised when the clicked item is selected. The event is subsequent to the **OnSelectedIndexChanging** event.

* **[OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})** - raised when the mouse hovers over an item in the RadioButtonList.

* **[OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})** - raised when the mouse leaves an item in the RadioButtonList.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to an anonymous JavaScript function. Here is an example:

>caption Example 1: Passing a named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function OnItemClicked(sender, args) {
		var selectedItem = args.get_item();
		alert(selectedItem.get_text());
	}
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
    <ClientEvents OnItemClicked="OnItemClicked" />
    <Items>
        <telerik:RadioButtonListItem Text="English" Selected="true" />
        <telerik:RadioButtonListItem Text="German" />
        <telerik:RadioButtonListItem Text="French" />
    </Items>
</telerik:RadRadioButtonList>
````

````C#
RadRadioButtonList1.ClientEvents.OnItemClicked = "OnItemClicked";  //passing the name of the JS function
````
````VB
RadRadioButtonList1.ClientEvents.OnItemClicked = "OnItemClicked"  'passing the name of the JS function
````


>caption Example 2: Passing an anonymous JavaScript function.

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
    <ClientEvents OnItemClicked="function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}" />
    <Items>
        <telerik:RadioButtonListItem Text="English" Selected="true" />
        <telerik:RadioButtonListItem Text="German" />
        <telerik:RadioButtonListItem Text="French" />
    </Items>
</telerik:RadRadioButtonList>
````

````C#
RadRadioButtonList1.ClientEvents.OnClientClicked = "function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}"; //passing an anonymous JS function
````
````VB
RadRadioButtonList1.ClientEvents.OnClientClicked = "function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}"  'passing an anonymous JS function
````


## See Also

* [RadioButtonList Object]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%})

* [OnLoad (load)]({%slug radiobuttonlist/client-side-programming/events/onload%})

* [OnItemLoad (itemLoad)]({%slug radiobuttonlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})



