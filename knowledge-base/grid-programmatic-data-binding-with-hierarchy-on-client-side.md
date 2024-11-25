---
title: Programmatic Data Binding with Hierarchy on Client-side
description: Instructions to implement programmatic data binding with Hierarchical RadGrid on client-side that supports paging, sorting, filtering and 2 level hierarchy.
type: how-to
page_title: Programmatic Data Binding with Hierarchy on Client-side - RadGrid
slug: grid-programmatic-data-binding-with-hierarchy-on-client-side
res_type: kb
tags: radgrid,programmatic,data,binding,with,hierarchy,client-side
---

## Description

Instructions to implement programmatic data binding with Hierarchical RadGrid on client-side that supports paging, sorting, filtering and 2 level hierarchy.

This example works with the following functionalities:
- 2 Level Hierarchy
- Paging
- Sorting
- Filtering

>note You can customize the code to make it work with 3 or more level hierarchies. You just need to access the Nested Views in each data item of every `DetailTable` and bind them to data.

## Solution

Steps to implement this solution:

1. Add a `RadGrid` component to the page and set its `AllowPaging`, `AllowSorting`, `AllowFilteringByColumn` properties to `true`.
1. Set the `PageSize` property to the maximum number you can choose from the `PageSize` ComboBox in the Pager (in this case it is `50`).
    >To avoid the Grid flickering, you will need to hide it on initial binding and unhide it after:
    >1. Set the `CssClass` property to `hidden`.
    >2. Add a `CSS` style to the page targeting the `.hidden` class, and sets the `display` attribute to `none`.
    >3. After the initial data binding, you can remove the `hidden` class from the Grid.
1. Attach the [OnGridCreated]({%slug grid/client-side-programming/events/ongridcreated%}) and [OnCommand]({%slug grid/client-side-programming/events/oncommand%}) client-side events.
1. Add the `MasterTableView` element and define its `Columns`.
   - Set the `DataType` property for each column.
2. Add a `GridTableView` element to the `DetailTables` collection of the `MasterTableView` and define its `Columns`.
   - Set the `DataType` property for each column.
3. Set the `Name` property on every `MasterTable`, `GridTableView` to the name of the data source Table (in this example, the `MasterTableView` will be the `Orders` and its child table will be the `OrderDetails`).
4. Set the `ClientDataKeyNames` property on all Parent Tables (in this case `MasterTableView` is the only parent table).
5. Set the `HierarchyLoadMode` property to `Client` on all Parent Tables (in this case `MasterTableView` is the only parent table).
6. Finally, add your JavaScript code that will handle binding data to this Grid and its `DetailTables`. Check out the Example below for a runnable sample.

>note You can `Copy/Paste` the following example code as is, and test it out. Feel free to customize it according to your needs.

>caption Example

````ASP.NET
<style>
    .hidden {
        display: none;
    }
</style>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" AllowSorting="true" AllowFilteringByColumn="true" PageSize="50" CssClass="hidden" Width="800px">
    <MasterTableView Name="Orders" ClientDataKeyNames="OrderID" HierarchyLoadMode="Client">
        <DetailTables>
            <telerik:GridTableView Name="OrderDetails">
                <Columns>
                    <telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" UniqueName="OrderID" DataType="System.Int32" ReadOnly="true"></telerik:GridNumericColumn>
                    <telerik:GridNumericColumn DataField="UnitsInStock" HeaderText="UnitsInStock" UniqueName="UnitsInStock" DataType="System.Int32"></telerik:GridNumericColumn>
                    <telerik:GridNumericColumn DataField="Discount" HeaderText="Discount" UniqueName="Discount" DataType="System.Decimal" DataFormatString="{0:P0}"></telerik:GridNumericColumn>
                    <telerik:GridBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description"></telerik:GridBoundColumn>
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" UniqueName="OrderID" ReadOnly="true" DataType="System.Int32"></telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" UniqueName="OrderDate" DataType="System.DateTime"></telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" UniqueName="Freight" DataType="System.Decimal" NumericType="Number">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" UniqueName="ShipName"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" UniqueName="ShipCountry"></telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnGridCreated="RadGrid1_OnGridCreated" OnCommand="RadGrid1_OnCommand" />
    </ClientSettings>
</telerik:RadGrid>

<script>
    (function () {
        // Generates the dummy data for Orders and OrderDetails tables. You might as well fetch the data from server using XMLHttpRequests.
        let db = window.db = {
            Orders: [],
            OrderDetails: [],
            temp: {}
        };

        for (var i = 1; i <= 100; i++) {
            var nextDay = Date.now() + i * 1000 * 60 * 60 * 24;

            db.Orders.push({
                OrderID: i,
                OrderDate: `/Date(${nextDay})/`,
                Freight: parseFloat((i * 0.1).toFixed(2)),
                ShipName: `Name ${i}`,
                ShipCountry: `Country ${i}`
            });

            for (var j = 1; j <= 20; j++) {
                db.OrderDetails.push({
                    OrderID: i,
                    UnitsInStock: j * 3,
                    Discount: parseFloat((j / 100).toFixed(2)),
                    Description: `Details ${j} of Order #${i}`
                });
            }
        }
    })();

    /** RadGrid Client Events */
    function RadGrid1_OnGridCreated(sender, args) {
        /** Initial Data binding */
        let masterTable = sender.get_masterTableView();
        masterTable.PageSize = 10;

        bindTableView(masterTable);

        $(sender.get_element()).removeClass('hidden');
    }

    /** Data Binding on User action (e.g. Sorting, Filtering, Paging) */
    function RadGrid1_OnCommand(sender, args) {
        args.set_cancel(true);

        let tableView = args.get_tableView();
        bindTableView(tableView);
    }

    /** Helper Functions */
    function bindTableView(tableView) {
        let dataSource = getDataSource(tableView);

        tableView.set_dataSource(dataSource);
        tableView.dataBind();

        let dataItems = tableView.get_dataItems();

        dataItems.forEach(function (dataItem) {
            let detailTables = dataItem.get_nestedViews();

            detailTables.forEach(function (tableView) {
                tableView.PageSize = 10;
                let dataSource = getDataSource(tableView);

                tableView.set_dataSource(dataSource);
                tableView.dataBind();
            });
        });
    }

    function getDataSource(tableView) {
        if (tableView) {
            let name = tableView.get_name();
            let data = $.extend([], db[name]);

            if (!data) return null;

            if (!(tableView.get_parent() instanceof Telerik.Web.UI.RadGrid)) {
                var parentRowElement = tableView.get_parentRow();

                if (!parentRowElement.control) { tableView.get_dataItems(); }

                let parentDataKeyName = tableView.get_parentView().get_clientDataKeyNames()[0];
                let parentItem = parentRowElement.control;
                let parentId = parentItem.getDataKeyValue(parentDataKeyName);

                data = data.filter(item => item[parentDataKeyName] == parentId);
            }

            let filteredData = window.db.temp[name] = $.extend(true, [], data);
            let virtualItemCount = data.length;

            let filterExpressions = tableView.get_filterExpressions().toList();

            if (filterExpressions.length > 0) {
                filteredData = filterData(data, filterExpressions);

                virtualItemCount = filteredData.length;
            }

            let sortExpressions = tableView.get_sortExpressions().toList();

            if (sortExpressions.length > 0) {
                filteredData = sortData(filteredData, sortExpressions);
            }

            tableView.set_virtualItemCount(virtualItemCount);

            var skip = tableView.get_pageSize() * tableView.get_currentPageIndex();
            var take = tableView.get_pageSize();

            filteredData = filteredData.splice(skip, take);

            return filteredData;
        }
    }

    function sortData(data, sortExpressions) {
        const sortExpression = sortExpressions[0];
        const sortOrder = sortExpression.SortOrder;
        const fieldName = sortExpression.FieldName;

        if (sortOrder == 1) {
            return data.sort(item => item[fieldName]);
        } else if (sortOrder == 2) {
            return data.reverse(item => item[fieldName]);
        } else {
            return data;
        }
    }

    function filterData(data, filterExpressions) {
        const filterExpressionsMap = filterExpressions.map(createFilterExpressionsMap);

        return data.filter(item => filterExpressionsMap.every(fn => fn(item)));
    }

    function createFilterExpressionsMap(filterExpression) {
        const dataTypeName = filterExpression.get_dataTypeName();
        const fieldName = filterExpression.get_fieldName();
        let fieldValue = filterExpression.get_fieldValue();
        const filterFunction = filterExpression.get_filterFunction();

        const filterFunctions = {
            Contains: item => item[fieldName]?.includes(fieldValue),
            DoesNotContain: item => !item[fieldName]?.includes(fieldValue),
            StartsWith: item => item[fieldName]?.startsWith(fieldValue),
            EndsWith: item => item[fieldName]?.endsWith(fieldValue),
            EqualTo: item => equalTo(item[fieldName], fieldValue, dataTypeName),
            NotEqualTo: item => !equalTo(item[fieldName], fieldValue, dataTypeName),
            GreaterThan: item => greaterThan(item[fieldName], fieldValue, dataTypeName),
            LessThan: item => lessThan(item[fieldName], fieldValue, dataTypeName),
            GreaterThanOrEqualTo: item => greaterThanOrEqualTo(item[fieldName], fieldValue, dataTypeName),
            LessThanOrEqualTo: item => lessThanOrEqualTo(item[fieldName], fieldValue, dataTypeName),
            IsEmpty: item => item[fieldName] === '',
            NotIsEmpty: item => item[fieldName] !== '',
            IsNull: item => item[fieldName] == null,
            NotIsNull: item => item[fieldName] != null
        };

        const equalTo = function (dbValue, userValue, dataTypeName) {
            if (dataTypeName === 'System.Decimal') {
                return parseFloat(dbValue.toFixed(2)) == parseFloat(userValue.toFixed(2));
            }
            else if (dataTypeName == 'System.DateTime') {
                return parseInt(dbValue.match(/\d+/)[0]) == Date.parse(userValue);
            }
            else {
                return dbValue === userValue;
            }
        }
        const greaterThan = function (dbValue, userValue, dataTypeName) {
            if (dataTypeName === 'System.Decimal') {
                return parseFloat(dbValue.toFixed(2)) > parseFloat(userValue.toFixed(2));
            }
            else if (dataTypeName == 'System.DateTime') {
                return parseInt(dbValue.match(/\d+/)[0]) > Date.parse(userValue);
            }
            else {
                return dbValue > userValue;
            }
        }
        const lessThan = function (dbValue, userValue, dataTypeName) {
            if (dataTypeName === 'System.Decimal') {
                return parseFloat(dbValue.toFixed(2)) < parseFloat(userValue.toFixed(2));
            }
            else if (dataTypeName == 'System.DateTime') {
                return parseInt(dbValue.match(/\d+/)[0]) < Date.parse(userValue);
            }
            else {
                return dbValue < userValue;
            }
        }
        const greaterThanOrEqualTo = function (dbValue, userValue, dataTypeName) {
            return greaterThan(dbValue, userValue, dataTypeName) || equalTo(dbValue, userValue, dataTypeName);
        }
        const lessThanOrEqualTo = function (dbValue, userValue, dataTypeName) {
            return lessThan(dbValue, userValue, dataTypeName) || equalTo(dbValue, userValue, dataTypeName);
        }

        const filterFn = filterFunctions[filterFunction];

        if (!filterFn) {
            throw new DOMException(`Unsupported filter function: ${filterFunction}`);
        }

        return filterFn;
    }
</script>
````
