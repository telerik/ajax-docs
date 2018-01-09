---
title: Overview
page_title: Overview | RadCheckBoxList for ASP.NET AJAX Documentation
description: Overview
slug: checkboxlist/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

**RadCheckBoxList** exposes several client-side events that allow easy and flexible use in a wide range of application scenarios:

* **[OnLoad (load)]({%slug checkboxlist/client-side-programming/events/onload%})** - raised when the control is initialized.

* **[OnItemLoad (itemLoad)]({%slug checkboxlist/client-side-programming/events/onitemload%})** - raised when item is loaded.

* **[OnItemClicking (itemClicking)]({%slug checkboxlist/client-side-programming/events/onitemclicking%})** - raised when the user clicks an item in the checkboxlist. The event can be canceled.

* **[OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})** - raised when an item in the checkboxlist is clicked. The event is subsequent to the **OnItemClicking** event.

* **[OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})** - raised after **OnItemClicking** if the item clicked is selected by the user. The event can be canceled.

* **[OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})** - raised when the clicked item is selected. The event is subsequent to the **OnSelectedIndexChanging** event.

* **[OnItemCheckedChanging (itemCheckedChanging)]({%slug checkboxlist/client-side-programming/events/onitemcheckedchanging%})** - raised after **OnItemCheckedChanging** if the item clicked is selected by the user. The event can be canceled.

* **[OnItemCheckedChanged (itemCheckedChanged)]({%slug checkboxlist/client-side-programming/events/onitemcheckedchanged%})** - raised when the clicked item is selected. The event is subsequent to the **OnItemCheckedChanged** event.

* **[OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})** - raised when the mouse hovers over an item in the checkboxlist.

* **[OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})** - raised when the mouse leaves an item in the checkboxlist.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to an anonymous JavaScript function. Here is an example:

>caption Example 1: Passing a named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function OnItemClicked(sender, args) {
		var selectedItem = args.get_item();
		alert(selectedItem.get_text());
	}
</script>

<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
    <ClientEvents OnItemClicked="OnItemClicked" />
    <Items>
        <telerik:ButtonListItem Text="English" Selected="true" />
        <telerik:ButtonListItem Text="German" />
        <telerik:ButtonListItem Text="French" />
    </Items>
</telerik:RadCheckBoxList>
````

````C#
RadCheckBoxList1.ClientEvents.OnItemClicked = "OnItemClicked";  //passing the name of the JS function
````
````VB
RadCheckBoxList1.ClientEvents.OnItemClicked = "OnItemClicked"  'passing the name of the JS function
````


>caption Example 2: Passing an anonymous JavaScript function.

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
    <ClientEvents OnItemClicked="function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}" />
    <Items>
        <telerik:ButtonListItem Text="English" Selected="true" />
        <telerik:ButtonListItem Text="German" />
        <telerik:ButtonListItem Text="French" />
    </Items>
</telerik:RadCheckBoxList>
````

````C#
RadCheckBoxList1.ClientEvents.OnClientClicked = "function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}"; //passing an anonymous JS function
````
````VB
RadCheckBoxList1.ClientEvents.OnClientClicked = "function(sender,args){var selectedItem = args.get_item(); alert(selectedItem.get_text());}"  'passing an anonymous JS function
````


## See Also

* [CheckBoxList Object]({%slug checkboxlist/client-side-programming/checkboxlist-object%})

* [OnLoad (load)]({%slug checkboxlist/client-side-programming/events/onload%})

* [OnItemLoad (itemLoad)]({%slug checkboxlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug checkboxlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug checkboxlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug checkboxlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug checkboxlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug checkboxlist/client-side-programming/events/onitemmouseout%})



