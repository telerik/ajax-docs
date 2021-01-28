---
title: Sorting
page_title: Sorting - RadTimeline
description: Check our Web Forms article about Sorting.
slug: timeline/functionality/sorting
tags: sorting,client,server
published: True
position: 4
---

# Sorting

**RadTimeline** provides a built-in sorting mechanism for its events when the control is bound client-side, allowing you to sort them in ascending or descending order.

By default, the datasource is not sorted and the events might not show chronologically. To ensure the events are in chronological order, set the sort order, Asc or Desc, via the `SortExpressions` of the internal `WebServiceClientDataSource` or the external `ClientDataSource`.

>caption Example 1: RadTimeline with data sorted descending by Date

````ASPNET
<telerik:RadTimeline runat="server" ID="RadTimeline1" AlternatingMode="true" CollapsibleEvents="true" Orientation="Vertical">
    <WebServiceClientDataSource>
        <WebServiceSettings>
            <Select Url="events-vertical-part1.json" DataType="JSON" />
        </WebServiceSettings>
        <Schema>
            <Model>
                <telerik:ClientDataSourceModelField DataType="Date" FieldName="date" />
            </Model>
        </Schema>
            <SortExpressions>
                <telerik:ClientDataSourceSortExpression FieldName="date" SortOrder="Desc" />
            </SortExpressions>
    </WebServiceClientDataSource>
</telerik:RadTimeline>
````

## Toggle Sorting Direction

The sorting can be toggled via the internal Kendo widget. Here is an example how a Button click will change the sorting direction of RadTimeline on the client-side:

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Text="Reverse Timeline events order" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<script>
    function OnClientClicked(sender, args) {
        var toggleSort = { "asc": "desc", "desc": "asc" };
        var kendoDS = $find("<%= RadClientDataSource1.ClientID %>").get_kendoWidget();
        var sort = kendoDS.sort();
        sort[0].dir = toggleSort[sort[0].dir];
        kendoDS.sort(sort);
    }
</script>
````


# See Also

 * [Overview demo](https://demos.telerik.com/aspnet-ajax/timeline/overview/defaultcs.aspx)







