---
title: OnItemClicked
page_title: OnItemClicked - RadRadioButtonList
description: Check our Web Forms article about OnItemClicked.
slug: radiobuttonlist/client-side-programming/events/onitemclicked
tags: onitemclicked
published: True
position: 5
---

# OnItemClicked

The `itemClicked` event occurs when an item in **RadRadioButtonList** is clicked. The event is subsequent to [itemClicking event]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%}) and is fired after the client-side validation.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control of type `Telerik.Web.UI.RadRadioButtonList`

1. The arguments of type [Telerik.Web.UI.ButtonListEventArgs]({%slug Telerik.Web.UI.ButtonListEventArgs%}), containing the following properties and methods:
	* get_item() - returns an instance of type [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) 

>caption Example handling RadRadioButtonList `OnItemClicked` event.

````ASP.NET
<script type="text/javascript">
    function OnItemClicked(sender, args) {
        var radioButtonList = sender; // Telerik.Web.UI.RadRadioButtonList
        var clickedItem = args.get_item(); // Telerik.Web.UI.RadRadioButton
        var selectedLanguage = clickedItem.get_text(); // string

        alert("You clicked on " + selectedLanguage + " language!");
    }
</script>

<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
    <ClientEvents OnItemClicked="OnItemClicked" />
    <Items>
        <telerik:ButtonListItem  Text="English" Selected="true"/>
        <telerik:ButtonListItem  Text="German" />
        <telerik:ButtonListItem  Text="French" />
    </Items>
</telerik:RadRadioButtonList>
````


## See Also

- [RadioButtonList Object]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%})
- [Client-Side Events Overview]({%slug radiobuttonlist/client-side-programming/events/overview%})
- [OnLoad event]({%slug radiobuttonlist/client-side-programming/events/onload%})
- [OnItemLoad event]({%slug radiobuttonlist/client-side-programming/events/onitemload%})
- [OnItemClicking event]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})
- [OnSelectedIndexChanging event]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})
- [OnSelectedIndexChanged event]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})
- [OnItemMouseOver event]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})
- [OnItemMouseOut event]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})
