---
title: Visually indicate filtered columns in Excel-Like filtering
description: Visually indicate filtered columns in Excel-Like filtering
type: how-to
page_title: Visually indicate filtered columns in Excel-Like filtering - RadGrid
slug: grid-visually-indicate-filtered-columns-in-excel-like-filtering
res_type: kb
---


## DESCRIPTION

Show an indicator that a column (field) is filtered when Excel-like filtering is used.

## SOLUTION

You can use the PreRender event of the grid, loop through the columns and see which column has a filter expression. If it has, access its cell and apply changes (class name, attributes, etc.).

For example:

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource"
    AllowFilteringByColumn="true" FilterType="HeaderContext"
    EnableHeaderContextMenu="true" EnableHeaderContextFilterMenu="true"
    OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested"
    OnPreRender="RadGrid1_PreRender" RenderMode="Lightweight">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID"
                FilterCheckListEnableLoadOnDemand="true">
            </telerik:GridBoundColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight" AllowFiltering="false"
                FilterCheckListEnableLoadOnDemand="true">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName"
                FilterCheckListEnableLoadOnDemand="true">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry"
                FilterCheckListEnableLoadOnDemand="true">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

Code behind

````C#
//show filtering indicator
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridHeaderItem header = RadGrid1.MasterTableView.GetItems(GridItemType.Header)[0] as GridHeaderItem;
    foreach (GridColumn col in RadGrid1.MasterTableView.RenderColumns
           .OfType<IGridDataColumn>().Where(x => x.AllowFiltering))
    {
        if (!string.IsNullOrEmpty(col.EvaluateFilterExpression()))
        {
            TableCell cell = header[col.UniqueName];
 
            //style the cell as desired (e.g., change class, background color, add image, etc.
            cell.CssClass = "myFilteredColumnHeader";
 
            cell.BackColor = System.Drawing.Color.Aqua;
            cell.Style["background-image"] = "none";
 
            cell.Controls.Add(new Image()
            {
                ID = "FilterIndicator" + col.UniqueName,
                ImageUrl = "~/images/filterIndicator.png"
            });
        }
    }
}
 
//data binding
private class DataRowComparer : IEqualityComparer<DataRow>
{
    private string dataField;
    public DataRowComparer(string dataField)
    {
        this.dataField = dataField;
    }
    public bool Equals(DataRow x, DataRow y)
    {
        return x[dataField].ToString() == y[dataField].ToString();
    }
    public int GetHashCode(DataRow dataRow)
    {
        return dataRow[dataField].GetHashCode();
    }
}
protected void Page_Load(object sender, EventArgs e)
{
}
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetGridSource();
}
private DataTable GetGridSource()
{
    DataTable dataTable = new DataTable();
 
    DataColumn column = new DataColumn();
    column.DataType = Type.GetType("System.Int32");
    column.ColumnName = "OrderID";
    dataTable.Columns.Add(column);
 
    column = new DataColumn();
    column.DataType = Type.GetType("System.Decimal");
    column.ColumnName = "Freight";
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
    PrimaryKeyColumns[0] = dataTable.Columns["OrderID"];
    dataTable.PrimaryKey = PrimaryKeyColumns;
 
    for (int i = 0; i <= 80; i++)
    {
        DataRow row = dataTable.NewRow();
        row["OrderID"] = i + 1;
        row["Freight"] = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01;
        row["ShipName"] = "Name " + (i % 6 + 1);
        row["ShipCountry"] = "Country " + (i % 9 + 1);
 
        dataTable.Rows.Add(row);
    }
 
    return dataTable;
}
private DataTable GetListBoxSource(string dataField)
{
    DataTable table = GetGridSource().Clone();
    table.Rows.Clear();
    GetGridSource().Rows.Cast<DataRow>().Distinct<DataRow>(new DataRowComparer(dataField))
        .ToList().ForEach(x => table.ImportRow(x));
    return table;
}
protected void RadGrid1_FilterCheckListItemsRequested(object sender, GridFilterCheckListItemsRequestedEventArgs e)
{
    string DataField = (e.Column as IGridDataColumn).GetActiveDataField();
 
    e.ListBox.DataSource = GetListBoxSource(DataField);
    e.ListBox.DataKeyField = DataField;
    e.ListBox.DataTextField = DataField;
    e.ListBox.DataValueField = DataField;
    e.ListBox.DataBind();
}
````
 
