---
title: OnClientItemSelected
page_title: ClientItemSelected event of the SearchContext - RadSearchBox
description: The OnClientItemSelected is a Client-Side event that is triggered when an item from the SearchBox dropdown (SearchContext) is clicked.
slug: searchbox/search-context/events/onclientitemselected
tags: onclientitemselected
published: True
---

# OnClientItemSelected

The **OnClientItemSelected** is a Client-Side event that is triggered when an item from the SearchBox dropdown (SearchContext) is clicked.

The event handler receives two parameters:

1. The instance of (`Telerik.Web.UI.SearchContext`) firing the event, the [SearchContext object]({%slug searchbox/client-side-programming/searchcontext-object%}).

2. The event arguments that contains the following methods:

   - `(Telerik.Web.UI.SearchContextItem)` **get_item()** - returns the [SearchContextItem object]({%slug searchbox/client-side-programming/searchcontextitem-object%}).
   - `(bool)` **get_isDefaultItem()** - returns `true` if the [Default ("All")]({%slug searchbox/search-context/overview%}#summary-of-features-supported-by-radsearchboxs-search-context) item was selected
   - `(string)` **get_text()** - returns the selected SearchContext Item's Text
   - `(string/int)` **get_key()** - returns the selected SearchContext Item's Key (commonly known as the value)


````ASP.NET
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox1"
    DataTextField="Desc" DataValueField="Id">
    <SearchContext DataTextField="Desc" DataKeyField="Id" OnClientItemSelected="OnClientItemSelected">
    </SearchContext>
</telerik:RadSearchBox>
````

````JavaScript
function OnClientItemSelected(sender, args) {
    var searchContext = sender; // Telerik.Web.UI.SearchContext
    var searchContextItem = args.get_item(); // Telerik.Web.UI.SearchContextItem
    var isDefaultItem = args.get_isDefaultItem(); // bool
    var text = args.get_text(); // SearchContext Item's Text
    var key = args.get_key(); // SearchContext Item's Key (value)
}
````

 
