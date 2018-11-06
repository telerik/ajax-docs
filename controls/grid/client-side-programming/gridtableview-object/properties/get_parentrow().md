---
title: get_parentRow()
page_title: get_parentRow() | RadGrid for ASP.NET AJAX Documentation
description: get_parentRow()
slug: grid/client-side-programming/gridtableview-object/properties/get_parentrow()
tags: get_parentrow()
published: True
position: 17
---

# get_parentRow()



## 

If called from a nested GridTableView returns the parent item for the current nested hierarchical GridTableView. Returns null if called from the MasterTableView.

````ASP.NET
        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
            GridLines="None" Width="800px"
            OnDetailTableDataBind="RadGrid1_DetailTableDataBind"
            OnNeedDataSource="RadGrid1_NeedDataSource">
            <ClientSettings>
                <Selecting AllowRowSelect="true" />
                <ClientEvents OnRowSelected="rowSelected" />
            </ClientSettings>
            <MasterTableView DataKeyNames="MasterID">
                <DetailTables>
                    <telerik:GridTableView Name="Orders" DataKeyNames="ChildID"></telerik:GridTableView>
                </DetailTables>
            </MasterTableView>
        </telerik:RadGrid>
````



````JavaScript
    function rowSelected(sender, args) {
        var tableView = args.get_tableView();

        if (tableView.get_name() == "Orders") {
            var parentRow = tableView.get_parentRow();
            var parentItem = $find(parentRow.id);
            var dataValue = parentItem.get_itemIndex();

            alert("Corresponding parent ID of the selected record is "
                + dataValue + ".");
        }
    }
````

````C#
    // Dummy data source for the purpose of the sample
    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        RadGrid1.DataSource = GetGridSource();
    }
    private DataTable GetGridSource()
    {
        DataTable dataTable = new DataTable();

        DataColumn column = new DataColumn();
        column.DataType = Type.GetType("System.Int32");
        column.ColumnName = "MasterID";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.DateTime");
        column.ColumnName = "Date";
        dataTable.Columns.Add(column);

        DataColumn[] PrimaryKeyColumns = new DataColumn[1];
        PrimaryKeyColumns[0] = dataTable.Columns["MasterID"];
        dataTable.PrimaryKey = PrimaryKeyColumns;

        for (int i = 0; i < 3; i++)
        {
            DataRow row = dataTable.NewRow();
            row["MasterID"] = i + 1;
            row["Date"] = DateTime.Now;

            dataTable.Rows.Add(row);
        }

        return dataTable;
    }

    private DataTable GetDetailSource()
    {
        DataTable dataTable = new DataTable();

        DataColumn column = new DataColumn();
        column.DataType = Type.GetType("System.Int32");
        column.ColumnName = "ChildID";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.ColumnName = "MasterID";
        column.DataType = Type.GetType("System.Int32");
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.String");
        column.ColumnName = "ShipName";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.String");
        column.ColumnName = "ShipCountry";
        dataTable.Columns.Add(column);

        DataColumn[] PrimaryKeyColumns = new DataColumn[1];
        PrimaryKeyColumns[0] = dataTable.Columns["ChildID"];
        dataTable.PrimaryKey = PrimaryKeyColumns;

        for (int i = 0; i < 9; i++)
        {
            DataRow row = dataTable.NewRow();
            row["ChildID"] = i + 1;
            if (i % 3 == 0)
            {
                row["MasterID"] = 3;
            }
            else if (i % 2 == 0)
            {
                row["MasterID"] = 2;
            }
            else
            {
                row["MasterID"] = 1;
            }


            row["ShipName"] = "Name " + (i + 1);
            row["ShipCountry"] = "Country " + (i + 1);

            dataTable.Rows.Add(row);
        }

        return dataTable;
    }

    protected void RadGrid1_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
    {
        e.DetailTableView.DataSource = GetDetailSource().Select("MasterID =" + e.DetailTableView.ParentItem.GetDataKeyValue("MasterID"));
    }

````

