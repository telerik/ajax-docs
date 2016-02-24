---
title: Persisting the Selected Rows Client-side on Sorting/Paging/Filtering/Grouping
page_title: Persisting the Selected Rows Client-side on Sorting/Paging/Filtering/Grouping | RadGrid for ASP.NET AJAX Documentation
description: Persisting the Selected Rows Client-side on Sorting/Paging/Filtering/Grouping
slug: grid/functionality/selecting/how-to/persisting-selected-rows-client-side
tags: client-side,selecting,persisting
published: True
position: 4
---

# Persisting the Selected Rows Client-side on Sorting/Paging/Filtering/Grouping

**RadGrid** loses its current selection on postback - e.g. when the data is sorted, a new group or filter is added, or when the current page changes. The following snippets illustrate how you can persist the selection client-side. 

The following logic is used to persist the selected rows:

1. Handle **OnRowSelected** and **OnRowDeselected** events for **RadGrid**. In the handlers you should update the collection of the selected items. 

1. Handle **OnRowCreated** event. In this handler you should check if the current item is present in the selected rows collection and select it if necessary.


Below you can see two approaches for implementing the functionality. 


## Using Web Storage

For modern browsers that support it you can use [WebStorage](https://www.w3.org/TR/webstorage/) to persist the selected items.


````JavaScript
function rowSelected(sender, args) {
    var id = args.getDataKeyValue("ID");

    var selected = (JSON.parse(sessionStorage.getItem("selectedItems")) != null) ? JSON.parse(sessionStorage.getItem("selectedItems")) : {};

    if (!selected[id]) {
        selected[id] = true;

        sessionStorage.setItem("selectedItems", JSON.stringify(selected));
    }
}

function rowDeselected(sender, args) {
    var id = args.getDataKeyValue("ID");
    var selected = JSON.parse(sessionStorage.getItem("selectedItems"));

    if (selected[id]) {
        selected[id] = null;

        sessionStorage.setItem("selectedItems", JSON.stringify(selected));
    }
}

function rowCreated(sender, args) {
    var id = args.getDataKeyValue("ID");
    var selected = JSON.parse(sessionStorage.getItem("selectedItems"));

    if (selected && selected[id]) {
        args.get_gridDataItem().set_selected(true);
    }
}

function gridCreated(sender, eventArgs) {
    var masterTable = sender.get_masterTableView();
    var selectColumn = masterTable.getColumnByUniqueName("ClientSelectColumnName");
    var headerCheckBox = $(selectColumn.get_element()).find("[type=checkbox]")[0];

    if (headerCheckBox) {
        headerCheckBox.checked = masterTable.get_selectedItems().length ==
            masterTable.get_dataItems().length;
    }
}
````
````ASP.NET
<telerik:RadGrid ID="RadGrid1" AllowMultiRowSelection="true"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    AllowPaging="true" AllowSorting="true" runat="server" AllowFilteringByColumn="true"
    ShowGroupPanel="true">
    <MasterTableView ClientDataKeyNames="ID">
        <Columns>
            <telerik:GridClientSelectColumn UniqueName="ClientSelectColumnName" />
        </Columns>
    </MasterTableView>

    <ClientSettings AllowDragToGroup="true">
        <Selecting AllowRowSelect="true" />

        <ClientEvents OnRowCreated="rowCreated" OnRowSelected="rowSelected"
            OnRowDeselected="rowDeselected" OnGridCreated="gridCreated" />
    </ClientSettings>
</telerik:RadGrid>
````



## Using JavaScript array

For older browsers you can use a static JavaScript array to keep the selected items. Note that AJAX is enabled and the **EnablePageHeadUpdate** property of **RadAjaxManager** is set to **false**.


````JavaScript
<head id="Head2" runat="server">
    <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
        <script type="text/javascript">
            var selected = {};
            function rowSelected(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (!selected[mailID]) {
                    selected[mailID] = true;
                }
            }
            function rowDeselected(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (selected[mailID]) {
                    selected[mailID] = null;
                }
            }
            function rowCreated(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (selected[mailID]) {
                    args.get_gridDataItem().set_selected(true);
                }
            }
            function gridCreated(sender, eventArgs) {
                var masterTable = sender.get_masterTableView();
                var selectColumn = masterTable.getColumnByUniqueName("SelectColumnID");
                var headerCheckBox = $(selectColumn.get_element()).find("[type=checkbox]")[0];

                if (headerCheckBox) {
                    headerCheckBox.checked = masterTable.get_selectedItems().length ==
                        masterTable.get_dataItems().length;
                }
            }
        </script>
    </telerik:RadScriptBlock>
</head>
````
````ASP.NET
<body>
    <form id="form1" runat="server">
        <div>
            <telerik:RadScriptManager ID="RadScriptManager2" runat="server">
            </telerik:RadScriptManager>
            
            <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" EnablePageHeadUpdate="false">
                <AjaxSettings>
                    <telerik:AjaxSetting AjaxControlID="RadGrid1">
                        <UpdatedControls>
                            <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                        </UpdatedControls>
                    </telerik:AjaxSetting>
                </AjaxSettings>
            </telerik:RadAjaxManager>
            <telerik:RadGrid ID="RadGrid1" AllowMultiRowSelection="true" DataSourceID="SqlDataSource1"
                AllowPaging="true" AllowSorting="true" runat="server" AllowFilteringByColumn="true"
                ShowGroupPanel="true">
                <MasterTableView ClientDataKeyNames="MailID">
                    <Columns>
                        <telerik:GridClientSelectColumn UniqueName="SelectColumnID" />
                    </Columns>
                </MasterTableView>
                <ClientSettings AllowDragToGroup="true">
                    <Selecting AllowRowSelect="true" />
                    <ClientEvents OnRowCreated="rowCreated" OnRowSelected="rowSelected"
                        OnRowDeselected="rowDeselected" OnGridCreated="gridCreated" />
                </ClientSettings>
            </telerik:RadGrid>
            <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
                ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Mails" runat="server"></asp:SqlDataSource>
        </div>
    </form>
</body>
````



## See Also 

* [Persisting the Selected Rows Server-side]({%slug grid/functionality/selecting/how-to/persisting-selected-rows-server-side%})



