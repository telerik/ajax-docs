---
title: Sorting
page_title: Sorting | RadTimeline for ASP.NET AJAX Documentation
description: Sorting
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

# See Also

 * [Overview demo](https://demos.telerik.com/aspnet-ajax/timeline/overview/defaultcs.aspx)







