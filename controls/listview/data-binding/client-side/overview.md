---
title: Overview
page_title: Client-side Overview | RadListView for ASP.NET AJAX Documentation
description: Overview
slug: listview/data-binding/client-side/overview
tags: overview
published: True
position: 0
---

# Client-side Overview



From Q1 2012 on **RadListView** supports client-side databinding with the help of a new javascript templating engine. The HTML templates are defined through the markup similar to the server templates, only the former get sent to the browser as settings of the client-side RadListView component. The client component then uses the HTML strings to render the listview items.

This article will explain the following specifics of the client-side binding in RadListView:

* **Client-side binding modes
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section0_self**

* **Binding the RadListView
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section1_self**

* **Rebinding a single item
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section2_self**

* **Appending data and infinite scroll
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section3_self**

* **Prepending data
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section8_self**

* **Client-side initialization with no server control
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section4_self**

* **Disposing RadListView on the client-side
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section5_self**

* **Selecting items
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section6_self**

* **Data caching
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-specifics.html#Section7_self**

>note RadListView relies on jQuery to manipulate the DOM. As a result, jQuery is now a constant dependency for RadListView and gets loaded automatically into the page.
>




## Client-side binding modes

RadListView supports two modes of client-side databinding, depending on which *LayoutTemplate* is used to hold the client-bound items:

## Server-side LayoutTemplate as a container of client-bound items

The standard **RadListView.LayoutTemplate** property is defined. **RadListView.ClientSettings.DataBinding.ItemPlaceHolderID** points to the ID of an HTML element inside the server-side LayoutTemplate. This scenario allows RadListView to be server-bound initially and then rebound on the client-side and rendered in the same LayoutTemplate.

## Client-side LayoutTemplate as a container of client-bound items

In this scenario the client-side **RadListView.ClientSettings.DataBinding.LayoutTemplate** is defined. **RadListView.ClientSettings.DataBinding.ItemPlaceHolderID** points to the ID of an HTML element inside the client-side LayoutTemplate. The server-side LayoutTemplate is omitted. This approach is recommended for scenarios where no server-side databinding is required and RadListView does not have to render content from the server on initial page load.

## Binding the RadListView

RadListView offers both declarative binding to web services and programmatic binding by setting the datasource manually.

* **Declarative (automatic) binding** Declarative binding is setup through the **RadListView.ClientSettings.DataBinding.DataService** section where you can use a number of properties exposed to setup the way the data is going to be retrieved from the service. You can find a list of all related properties along with description of their purpose and values in this article:[API]({%slug listview/data-binding/client-side/api%})

* **Programmatic binding** RadListView also offers client-side API for setting the datasource and binding it manually. Using the properties exposed for accessing the page size and index, the current filter and sorting expressions, you can easily implement a way for rich data visualization in a client-side populated control. The API needed for implementing programmatic client-side binding is also listed at the address provided above.

You can see examples for binding the RadListView control to different datasources here: [Various Data Sources]({%slug listview/data-binding/client-side/various-data-sources%})

## Rebinding a single item

RadListView uses the public **rebindItem()** method for rebinding a single item. This method accepts the numeric index of the item in the data source array. If an item exists under this index in the data source, rebindItem() clears the HTML rendered for this specific item and then reruns the respective client template to recreate the HTML. The client-side templateCreated and templateDataBound events are properly fired for items rebinding using this method. rebindItem() can be used in any scenario that requires a specific item to be created only, instead of rebinding the entire RadListView.

>note  *rebindItem() is a client-side only API* and works only in client-side databinding scenarios. No equivalent server-side action exists in RadListView.
>


## Appending data and infinite scroll

RadListView supports appending data items. The **appendData()** method accepts a javascript array of additional data items that get appended to the end of the current RadListView data source. If no previous data is available, the appended data becomes the data source. Appending data causes RadListView to create and databind new listview items for every data item. The previous data and items are not modified.

Appending data items to RadListView is useful when loading additional data, as well as in so-called infinite scroll scenarios. For a databound control, loading additional data usually means rebinding and recreating the entire control. To avoid the performance degradation resulting from excessive binding, **appendData()** binds only the new items that need to appear. This makes for a very efficient databound control when large chunks of data do not change.

RadListView still fires its **dataBinding** and **dataBound** events, as well as the **templateCreated** and **templateDataBound** events for the newly created items. When appending data, the **dataBinding** event arguments object's **get_isAppendingData()** property is set to true, indicating data is appended, instead of rebinding the entire control.

A code sample for infinite scrolling is shown in the example in the below section.

## Prepending data

RadListView also supports prepending data. It is similar to the append data functionality with the difference that the data accepted as a parameter by the **prependData()** method is added to the beginning of the current	RadListView data source. The equivalent of the **get_isAppendingData()** in the **dataBinding**	event is **get_isPrependingData()**, which indicates that data is being prepended.

## Client-side initialization with no server control

The RadListView client-side component supports initialization entirely on the client-side, without being associated with a server-side ASP.NET control. Due to the lack of its own rendering, RadListView is not constrained to a server-side control. Any HTML element can be the container element, in which case RadListView will render its HTML inside this element. The developer needs to register the scripts required by RadListView on the page. This can be done through the **ScriptManager**:


          <asp:ScriptManager ID="ScriptManager1" runat="server">
              <Scripts>
                  <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Detection.Detection.js" />
                  <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                  <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
                  <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.ListView.RadListView.js" />
              </Scripts>
          </asp:ScriptManager>




After the scripts have been registered, RadListView can be initialized using the [Telerik.Web.UI.RadListView.create() ](http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources#Section4) function. This is essentially a convenience function that uses $create to initialize a client-side RadListView component. Using this function, a RadListView instance is created on the client:


          var listView = Telerik.Web.UI.RadListView.create("RadListView1", "container", true);
          listView.get_clientSettings().DataBinding.ItemTemplate = $get("itemTemplate").innerHTML;




>note All client-side APIs are compatible with the client-side only initialization of RadListView. However, as there is no associated server control, RadListView cannot postback using the fireCommand method, or any other public API that fires a command. This method is still used for firing client-side commands.
>


## Example

Here follows an example of a RadListView initialized on the client, *using infinite scrolling*:



````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Detection.Detection.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.ListView.RadListView.js" />
    </Scripts>
    <Services>
        <asp:ServiceReference Path="~/Services/GridWcfService.svc" />
    </Services>
</asp:ScriptManager>
<div id="wrapper">
    <div id="RadListView1">
        <div id="container" class="container">
        </div>
    </div>
</div>

<script id="itemTemplate" type="text/html">
    <div class="item #= isSelected ? 'selected' : '' #" data-index="#= index #">
        <img src='../Images/Customers/#= CustomerID #.jpg' alt='#= ContactName #' />
        <div class="mask">
        </div>
        <div class="details">
            <span class="name">#: ContactName #</span>
            <span class="company">${ CompanyName }</span>
        </div>
    </div>
</script>
````
````JavaScript
var listView = Telerik.Web.UI.RadListView.create("RadListView1", "container", true);
listView.get_clientSettings().DataBinding.ItemTemplate = $get("itemTemplate").innerHTML;

function pageLoad() {
    attachContainerScroll();
    bindListView(20);
}

function attachContainerScroll() {
    (function($){
        listView.add_dataBound(function() {
            $("#container").off("scroll").on("scroll", function(e) {
                if ($(this).isScrolledToBottom() &&
                    listView.get_dataSource().length < listView.get_virtualItemCount() &&
                    !listView.get_isDataBinding()) {
                    bindListView(10);
                }
            });
        });
    })($telerik.$);
}

function bindListView(itemCount) {
    listView._isDataBinding = true;
    var startRowIndex = listView.get_dataSource() ? listView.get_dataSource().length  : 0;

    GridWcfService.GetCustomers(startRowIndex, itemCount,
        function(result) {
            listView.set_virtualItemCount(result.Count);
            listView.appendData(result.Data);
        },
        function(error) {
            alert(error.get_message());
    });
}

(function($) {
    $.fn.isScrolledToBottom = function() {
        if (this.length) {
            return this[0].scrollTop >= this[0].scrollHeight - this[0].offsetHeight;
        }
        return false;
    }

    $(function() {
        $(".item").live("click", function(e) {
            listView.toggleSelection(+this.getAttribute("data-index"));
        });
    });
})($telerik.$);
````


## Disposing RadListView on the client-side

RadListView properly disposes of the HTML it created during client-side databinding. jQuery is used to clear the data and DOM event handlers attached to HTML elements in its templates. To prevent memory leaks, following are a few developer guidelines for properly disposing of HTML elements during rebind, postback and AJAX scenarios:

* Any event handlers RadListView attaches internally are disposed when the client-side **dispose()** method is called on the control. This happens during postback, AJAX or navigation away from the page. The developer does not need to take action for disposing RadListView-attached elements and event handlers.

* Any custom event handlers and data inside the RadListView client templates, attached through the **$telerik.$** jQuery object, are automatically disposed. Developers using the Telerik jQuery object (**$telerik.$**) do not need to explicitly clear event handlers and data attached to HTML elements rendered by RadListView.

* Any event handlers, expands and custom data attached to DOM elements by other jQuery objects or other means, need to be explicitly cleared before RadListView rebinds or disposes. For performing clean-up before rebinding, the **dataBinding** event can be used, while for cleaning up before disposal, developers can use the **disposing** RadListView event.

* When RadListView is initialized entirely on the client-side (**using Telerik.Web.UI.RadListView.create()**), the control does not attach event handlers to the container HTML element. Developers only need to clean-up the child nodes of the container element (when not using **$telerik.$** to attach data and/or events, as mentioned in the previous bullet point).

## Item selection

RadListView supports client-side selection when databound on the client. The **selectItem()**, **deselectItem()** and **toggleSelection()** methods are used to change the selected state of an item. They all accept a single numeric parameter indicating the index of the item to change the selection of. If no client-side databinding has been configured in RadListView, these methods fire the **OnCommand** client event with the respective Select or Deselect command names.

When multiple items need to be selected or deselected, the **selectAllItems()** and **clearSelectedItems()** methods can be used, respectively. Note that, contrary to the above described methods that select or deselect a single item, these two methods work with client-side databinding only. They are not compatible with server-side databinding.

When client-side databinding is used, RadListView updates the client-side selected indexes and rebinds the modified items only. Thus, only items that have their selected state changed get rebound by having their templates recreated. The remaining RadListView items are not rebound, thus avoiding unnecessary databinding. If RadListView does not have a client-side data source assigned, changing the selection will cause the entire control to rebind. Once a data source has been obtained, successive selection actions will rebind only the required items.

## Data caching

RadListView supports data caching when using automatic databinding to web services. Setting the **RadListView.ClientSettings.DataBinding.DataService.EnableCaching** property to true allows RadListView to cache the result of a web service call and use the cached result the next time databinding occurs with the same binding parameters.

To identify the cached data, RadListView uses a combination of the following binding parameters:

* page size

* current page index

* sort expression

* filter expression

Every unique combination of the above parameters identify a cached result set RadListView can reuse. This means that the cached data varies by any of the above parameters. If RadListView identifies the existence of data cached after the last databind with the same page size, index, sort and filter expression, it prevents the web service request and uses the cached data instead.

To invalidate the cache, the client-side **RadListView.clearCache(forCurrentState)** method is provided. It accepts an optional boolean parameter indicating whether only the cache for the current state is to be invalidated. If **true**, RadListView will clear the cached data only for the current combination of page size, index, sort and filter expression. The value of the **forCurrentState** parameter is **false** by default, indicating all the cached data will be cleared when this method is called.

>note Data caching does not work for programmatic binding using **set_dataSource()** . Only automatic databinding to web services through the **RadListView.ClientSettings.DataBinding.DataService.Location** property is supported.
>
