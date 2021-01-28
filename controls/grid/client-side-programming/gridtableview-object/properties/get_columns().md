---
title: get_columns()
page_title: get_columns() - RadGrid
description: Check our Web Forms article about get_columns().
slug: grid/client-side-programming/gridtableview-object/properties/get_columns()
tags: get_columns()
published: True
position: 3
---

# get_columns()



## 

Property that returns a one-dimensional array of **Telerik.Web.UI.GridColumn** objects.

The following example illustrates how you could get the columns in the MasterTableView after the RadGrid is created:

````JavaScript
<script type="text/javascript">
    function gridCreated(sender, args) {
        var grid = sender;
        var masterTableView = grid.get_masterTableView();
        var columns = masterTableView.get_columns();

        // alerts "ID" and "Name"
        for (var i = 0; i < columns.length; i++) {
            alert(columns[i].get_uniqueName());
        }

    }
</script>
````

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    AutoGenerateColumns="false"
    AllowPaging="true" PageSize="10">

    <ClientSettings>
        <ClientEvents OnGridCreated="gridCreated" />
    </ClientSettings>

    <MasterTableView DataKeyNames="ID">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Name" HeaderText="Name" UniqueName="Name">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````


