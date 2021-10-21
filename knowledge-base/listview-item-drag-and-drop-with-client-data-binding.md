---
title: Item drag and drop with client data binding
description: Item drag and drop with client data binding. Check it now!
type: how-to
page_title: Item drag and drop with client data binding
slug: listview-item-drag-and-drop-with-client-data-binding
res_type: kb
---


### PROBLEM

The [get_clientDataKeyValue() method]({%slug listview/client-side-programming/radlistview/properties/get_clientdatakeyvalue%}) of the listview returns nothing (undefined) when [drag-and-drop]({%slug listview/items/drag-and-drop%}) is used with [client-side data binding]({%slug listview/data-binding/client-side/overview%}).

### DESCRIPTION

The drag-and-drop feature is supported with the server-side binding only, and so is the `get_clientDataKeyValue()` method.

### SOLUTION

You can use `data-\*` attributes on the items to store the data item, and you can implement a [custom drag handle]({%slug listview/items/drag-and-drop%}#custom-drag-handle) for the items to allow dragging. Note that you must also implement methods that provide the custom handle with the listview `ClientID` and with the item index.

```CSS
<style>
    /*dummy styles for the custom drag handle*/
    .rlvDrag {
        width: 30px;
        height: 30px;
        background: blue;
        cursor: move;
    }

    /*dummy styles for the items*/
    .item {
        border: 1px solid black;
    }
</style>
```

```ASP.NET
<script>
    function getListViewID() {
        return "<%=RadListView1.ClientID%>";
    }

    //replace class name and ID with your actual item class and item placeholder ID
    //this example uses #items and .item
    function getItemIndex(dragHandle) {
        return $telerik.$("#items .item").index($telerik.$(dragHandle).parents(".item").first());
    }
    function OnItemDragStarted(sender, args) {
        getDataFromItem(args.get_itemIndex());
    }

    function OnItemDropping(sender, args) {
        getDataFromItem(args.get_itemIndex());

        console.log(args.get_destinationElement().getAttribute("id"));
        console.log("===");

        args.set_cancel(true);//prevent the postback on drop
    }

    //this function shows how you can use data-attributes to get data from the client-bound items
    function getDataFromItem(itemIndex) {
        var item = $telerik.$($telerik.$("#items .item")[itemIndex]);
        console.log(item.data("contactname"))
        console.log(item.data("companyname"))
        console.log("---");
    }
</script>
<div id="dropZone" style="width: 300px; height: 50px; background: green; color: white;">DUMMY DROP ZONE</div>
<telerik:RadListView ID="RadListView1" runat="server" RenderMode="Lightweight">
    <LayoutTemplate>
        <div id="listView">

            <%--The ID of the container is needed in the scripts for the example traversal--%>
            <div id="items">
            </div>
        </div>
    </LayoutTemplate>
    <ClientSettings AllowItemsDragDrop="true">
        <DataBinding ItemPlaceHolderID="items">
            <ItemTemplate>

                <%--the data-attributes on the item are used to fetch data in the events of the control--%>
                <div class="item rlvI" data-ContactName="#=ContactName#" data-CompanyName="#=CompanyName#">

                    <%--this element allows dragging. You can find example implementations of the needed functions above--%>
                    <div class="rlvDrag" onmousedown="Telerik.Web.UI.RadListView.HandleDrag(event, getListViewID(), getItemIndex(this))">
                    </div>

                    <%--some sample item template--%>
                    <div>
                        <span class="name">#= ContactName #</span>
                        <span class="company">#= CompanyName #</span>
                    </div>
               </div>
            </ItemTemplate>
        </DataBinding>
        <ClientEvents OnItemDragStarted="OnItemDragStarted" OnItemDropping="OnItemDropping"></ClientEvents>
    </ClientSettings>
</telerik:RadListView>
<script>
    function dataBindListView() {
        var data = [{
            ContactName: "name 1",
            CompanyName: "company 1"
        }, {
            ContactName: "name 2",
            CompanyName: "company 2"
        }, {
            ContactName: "name 3",
            CompanyName: "company 3"
        }, {
            ContactName: "name 4",
            CompanyName: "company 4"
        }, ];
        //this is only a dummy data source to showcase drag-and-drop
        //for an actual implementation of data binding, paging, sorting, filtering and so on
        //see the following demo: https://demos.telerik.com/aspnet-ajax/listview/examples/client/webservicedatabinding/defaultcs.aspx
        var listView = $find(getListViewID());
        listView.set_dataSource(data);
        listView.dataBind();
    }
    Sys.Application.add_load(dataBindListView);
</script>
```



