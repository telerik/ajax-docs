---
title: OnClientItemCreated
page_title: OnClientItemCreated | RadTreeMap for ASP.NET AJAX Documentation
description: OnClientItemCreated
slug: treemap/client-side-programming/events/onclientitemcreated
tags: onclientitemcreated
published: True
position: 1
---

# OnClientItemCreated



The following article demonstrates the usage of the **OnClientItemCreated** client-side event of the **RadTreeMap**.

## 

The **OnClientItemCreated** client-side event of the **RadTreeMap** is fired for each of the **RadTreeMapItems** in the collection of items. The event could be very useful, for example, if you want to set a specific color for a given item.

The event handler receives two parameter:

1. The instance of the **RadTreeMap** control firing the event.

1. Event arguments — an event arguments object that exposes the following methods:


>caption ClientItemCreated Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_dataItem()||DataItem|Gets reference to the DataItem object (data container), exposing Text and Value for the currently evaluated item, along with any values set for the [DataKeyNames collection]({%slug treemap/templates/client-templates%}).|
|get_element()||DOM Element|Returns the DOM element of the div, which the currently evaluated RadTreeMapItem is rendered in.|
|get_kendoWidget()||KendoTreeMap|Gets a reference to the KendoTreeMap object.|

**Example 1**: Handle the **RadTreeMap**'s client-side **OnClientItemCreated** event to set a specific color for a given item.

````JavaScript	
<script type="text/javascript">
function OnClientItemCreated(sender, eventArgs) {
    if (eventArgs.get_dataItem().text == "Important Item") {
        eventArgs.get_element().style.backgroundColor = "red";
    }
}
</script>
<telerik:RadTreeMap RenderMode="Lightweight" runat="server" ID="RadTreeMap1" OnClientItemCreated="OnClientItemCreated">
    <Items>
        <telerik:TreeMapItem Text="Parent Item">
            <Items>
                <telerik:TreeMapItem Text="Item 1" Value="6">
                    <Items>
                        <telerik:TreeMapItem Text="Important Item" Value="3"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 1.2" Value="2"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 1.3" Value="1"></telerik:TreeMapItem>
                    </Items>
                </telerik:TreeMapItem>
                <telerik:TreeMapItem Text="Item 2" Value="4">
                    <Items>
                        <telerik:TreeMapItem Text="Sub Item 2.1" Value="5"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 2.2" Value="2"></telerik:TreeMapItem>
                    </Items>
                </telerik:TreeMapItem>
            </Items>
        </telerik:TreeMapItem>
    </Items>
</telerik:RadTreeMap>
````


