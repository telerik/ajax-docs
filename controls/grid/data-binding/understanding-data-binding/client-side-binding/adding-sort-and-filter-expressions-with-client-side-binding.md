---
title: Adding Sort and Filter Expressions with Client-side Binding
page_title: Adding Sort and Filter Expressions with Client-side Binding | RadGrid for ASP.NET AJAX Documentation
description: Adding Sort and Filter Expressions with Client-side Binding
slug: grid/data-binding/understanding-data-binding/client-side-binding/adding-sort-and-filter-expressions-with-client-side-binding
tags: adding,sort,and,filter,expressions,with,client-side,binding
published: True
position: 2
---

# Adding Sort and Filter Expressions with Client-side Binding



This help topic illustrates how you can add sort and filter expressions for the grid when it is bound client-side.

## Add sort expressions

RadGrid does not have public API for adding sort expressions on the client. However one can use the below methods to add a sort expression or multiple sort expressions.

````JavaScript
<script type="text/javascript">
    function AddSortExpression(grid, fieldName, sortOrder) {
        var sortExpression = new Telerik.Web.UI.GridSortExpression();
        sortExpression.set_fieldName(fieldName);
        sortExpression.set_sortOrder(sortOrder);
        grid.get_masterTableView()._sortExpressions.add(sortExpression);
        grid.get_masterTableView()._showSortIconForField(fieldName, sortOrder);
    }
</script>
````



## Add filter expressions

To add a new filter expression to your client-side bound grid, one should call the following grid methods.

````JavaScript
<script type="text/javascript">
    function AddFilterExpression(grid, columnUniqueName, dataField, filterFunction, filterValue) {
        var filterExpression = new Telerik.Web.UI.GridFilterExpression();
        var column = grid.get_masterTableView().getColumnByUniqueName(columnUniqueName);
        column.set_filterFunction("Contains");
        filterExpression.set_fieldName(dataField);
        filterExpression.set_fieldValue(filterValue);
        filterExpression.set_filterFunction(filterFunction);
        filterExpression.set_columnUniqueName(columnUniqueName);
        grid.get_masterTableView()._updateFilterControlValue(filterValue, columnUniqueName, filterFunction);
        grid.get_masterTableView()._filterExpressions.add(filterExpression);
    }
</script>
````



## Add default sort and filter expressions

Then if you want to have your client-side bound grid sorted and filtered by default, handle its **OnGridCreated** client-side event and there call the above functions.

````JavaScript
<script type="text/javascript">
    function GridCreated(sender, args) {
        var grid = $find("<%=RadGrid1.ClientID %>");

        var fieldName = "Name";
        var sortOrder = Telerik.Web.UI.GridSortOrder.Descending;
        AddSortExpression(grid, fieldName, sortOrder);

        fieldName = "ID";
        sortOrder = Telerik.Web.UI.GridSortOrder.Descending;
        AddSortExpression(grid, fieldName, sortOrder);

        var columnUniqueName = "Name";
        var dataField = "Name";
        var filterFunction = Telerik.Web.UI.GridFilterFunction.Contains;
        var filterValue = "Ma";
        AddFilterExpression(grid, columnUniqueName, dataField, filterFunction, filterValue);
    }
</script>
````



````ASP.NET
<telerik:RadGrid ID="RadGrid1" AllowSorting="true" AllowPaging="true" AllowFilteringByColumn="true"
    AutoGenerateColumns="false" runat="server">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" DataType="System.Int32" />
            <telerik:GridBoundColumn DataField="Name" HeaderText="Name" />
            <telerik:GridNumericColumn DataField="UnitPrice" HeaderText="Unit price" DataType="System.Decimal" />
            <telerik:GridBoundColumn DataField="Date" DataFormatString="{0:d}" HeaderText="Date"
                DataType="System.DateTime" />
            <telerik:GridCheckBoxColumn DataField="Discontinued" HeaderText="Discontinued" DataType="System.Boolean" />
        </Columns>
    </MasterTableView>
    <PagerStyle AlwaysVisible="true" />
    <ClientSettings>
        <ClientEvents OnGridCreated="GridCreated" />
        <DataBinding Location="WebService.asmx" SelectMethod="GetDataAndCount" />
    </ClientSettings>
</telerik:RadGrid>
````


