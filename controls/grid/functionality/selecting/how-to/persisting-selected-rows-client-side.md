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

**RadGrid** loses its current selection when the data is sorted, a new group or filter is added, or when the current page changes. If you want the client-side selection to persist across these events, you can do the following:

1. Define an empty javascript array for storage of the selected item's key values.
 
1. Intercept the OnRowSelected and OnRowDeselected client events of the grid to save/remove the key value for the selected/deselected item respectively.

1. Wire the OnRowCreated client event to mark the item which is about to be created as selected based on whether its key value is present in the javascript array.

Below are the code snippets from a sample implementation which illustrates the aforementioned approach:

````JavaScript
<head id="Head2" runat="server">
    <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
        <script type="text/javascript">
            var selected = {};
            function RadGrid1_RowSelected(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (!selected[mailID]) {
                    selected[mailID] = true;
                }
            }
            function RadGrid1_RowDeselected(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (selected[mailID]) {
                    selected[mailID] = null;
                }
            }
            function RadGrid1_RowCreated(sender, args) {
                var mailID = args.getDataKeyValue("MailID");
                if (selected[mailID]) {
                    args.get_gridDataItem().set_selected(true);
                }
            }
            function GridCreated(sender, eventArgs) {
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
                <Scripts>
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Detection.Detection.js" />
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
                </Scripts>
            </telerik:RadScriptManager>
            <telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server" />
            <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
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
                        <telerik:GridClientSelectColumn />
                    </Columns>
                </MasterTableView>
                <ClientSettings AllowDragToGroup="true">
                    <Selecting AllowRowSelect="true" />
                    <ClientEvents OnRowCreated="RadGrid1_RowCreated" OnRowSelected="RadGrid1_RowSelected"
                        OnRowDeselected="RadGrid1_RowDeselected" OnGridCreated="GridCreated" />
                </ClientSettings>
            </telerik:RadGrid>
            <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
                ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Mails" runat="server"></asp:SqlDataSource>
        </div>
    </form>
</body>
````

>note How to retain the selection in grid server-side you can see from [this]({%slug grid/functionality/selecting/how-to/persisting-selected-rows-server-side%}) help article.
>
