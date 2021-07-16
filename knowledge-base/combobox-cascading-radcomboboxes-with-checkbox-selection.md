---
title: Cascading RadComboBoxes with Checkbox Selection
description: Cascading RadComboBoxes with Checkbox Selection. Check it now!
type: how-to
page_title: Cascading RadComboBoxes with Checkbox Selection
slug: combobox-cascading-radcomboboxes-with-checkbox-selection
res_type: kb
---

## How to

What is the recommended approach for implementing cascading RadComboBoxes with checkbox selection? 
  
## Description

Along with using a RadAjaxManager, an application can include cascading RadComboBoxes as shown in [the RadComboBox Cascading ComboBoxes live demo.](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/multiplecomboboxes/defaultcs.aspx)  Additionally, the component offers [selection with checkboxes](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/checkboxes/defaultcs.aspx).  Combining the implementations can be achieved, and in return, allow the user to select multiple values to determine what dataitems are available in the related RadComboBox.

## Solution

**Binding Upon CheckBox Selection**  

By [using the SelectedIndexChanged event](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/server-side-programming/selectedindexchanged), determine the [checked items of the primary RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadComboBox#properties-CheckedItems), and query the data for the secondary RadComboBox.  For example, here are two RadComboBoxes which use checkboxes and will be cascaded:

````ASPX
<table>
    <tr>
        <td>
            <telerik:RadComboBox ID="RadComboBox1" runat="server" AutoPostBack="true"
                DataValueField="DepartmentID" DataTextField="DepartmentName" EmptyMessage="Select A Department"
                CheckBoxes="true" OnSelectedIndexChanged="RadComboBox1_SelectedIndexChanged">
            </telerik:RadComboBox>
        </td>
        <td>
            <telerik:RadComboBox ID="RadComboBox2" runat="server" AutoPostBack="true"
                DataValueField="ItemID" DataTextField="ItemName" CheckBoxes="true">
            </telerik:RadComboBox>
        </td>
    </tr>
</table>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadComboBox1.DataSource = GetDepartments();
        RadComboBox1.DataBind();
    }
}

protected void RadComboBox1_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    var combo = sender as RadComboBox;
    var checkedItems = combo.CheckedItems;
    RadComboBox2.DataSource = GetItems(checkedItems);
    RadComboBox2.DataBind();
}

private DataTable GetDepartments()
{
    DataTable dataTable = new DataTable();

    DataColumn column = new DataColumn();
    column.DataType = Type.GetType("System.Int32");
    column.ColumnName = "DepartmentID";
    dataTable.Columns.Add(column);

    column = new DataColumn();
    column.DataType = Type.GetType("System.String");
    column.ColumnName = "DepartmentName";
    dataTable.Columns.Add(column);

    DataColumn[] PrimaryKeyColumns = new DataColumn[1];
    PrimaryKeyColumns[0] = dataTable.Columns["DepartmentID"];
    dataTable.PrimaryKey = PrimaryKeyColumns;


    DataRow row = dataTable.NewRow();
    row["DepartmentID"] = 1;
    row["DepartmentName"] = "Produce";
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["DepartmentID"] = 2;
    row["DepartmentName"] = "Dairy";
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["DepartmentID"] = 3;
    row["DepartmentName"] = "Bakery";
    dataTable.Rows.Add(row);

    return dataTable;
}

private DataTable GetItems(IList<RadComboBoxItem> comboItems)
{
    DataTable dataTable = new DataTable();

    DataColumn column = new DataColumn();
    column.DataType = Type.GetType("System.Int32");
    column.ColumnName = "ItemID";
    dataTable.Columns.Add(column);

    column = new DataColumn();
    column.DataType = Type.GetType("System.String");
    column.ColumnName = "ItemName";
    dataTable.Columns.Add(column);

    column = new DataColumn();
    column.DataType = Type.GetType("System.Int32");
    column.ColumnName = "DepartmentID";
    dataTable.Columns.Add(column);

    DataColumn[] PrimaryKeyColumns = new DataColumn[1];
    PrimaryKeyColumns[0] = dataTable.Columns["ItemID"];
    dataTable.PrimaryKey = PrimaryKeyColumns;


    DataRow row = dataTable.NewRow();
    row["ItemID"] = 1;
    row["ItemName"] = "Apple";
    row["DepartmentID"] = 1;
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["ItemID"] = 2;
    row["ItemName"] = "Orange";
    row["DepartmentID"] = 1;
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["ItemID"] = 3;
    row["ItemName"] = "Cheese";
    row["DepartmentID"] = 2;
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["ItemID"] = 4;
    row["ItemName"] = "Milk";
    row["DepartmentID"] = 2;
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["ItemID"] = 5;
    row["ItemName"] = "Bread";
    row["DepartmentID"] = 3;
    dataTable.Rows.Add(row);

    row = dataTable.NewRow();
    row["ItemID"] = 6;
    row["ItemName"] = "Muffins";
    row["DepartmentID"] = 3;
    dataTable.Rows.Add(row);

    
    DataTable table = dataTable.Clone();

    foreach (var dept in comboItems)
    {
        var DeptID = Convert.ToInt32(dept.Value);
        var myItems = from myRow in dataTable.AsEnumerable()
                        where myRow.Field<int>("DepartmentID") == DeptID
                        select myRow;
        myItems.CopyToDataTable(table,LoadOption.PreserveChanges);
    }

    return table;
}
````

 1. When a user checks items in RadComboBox1 and closes the dropdown, the[selectedIndexChanged event will fire.]({%slug combobox/server-side-programming/selectedindexchanged%})  

 2. During this event, reference the RadComboBox and [its checkeditems.](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadComboBox#properties-CheckedItems)  

 3. Set [the datasource of the second RadComboBox, and use DataBind().]({%slug combobox/data-binding/overview%})

**Ajaxify the RadComboBoxes**  
To ensure postback does not disrupt performance every time you select a checkbox, [use Ajax like in this live demo.](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/multiplecomboboxes/defaultcs.aspx)  Using the same RadComboBoxes from above, here's the implementation with [the RadAjaxManager:]({%slug ajaxmanager/overview%})

````
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadComboBox1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadComboBox2" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
````

## See also

 * [RadComboBox - Cascading ComboBoxes Demo](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns/column-types#gridnumericcolumn)

 * [RadComboBox - Selection with Checkboxes Demo](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/checkboxes/defaultcs.aspx)

 * [Telerik.Web.UI.RadComboBox CheckedItems - Documentation and API Reference](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns/column-types#gridnumericcolumn)

 * [SelectedIndexChanged Event - Documentation and API Reference](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/server-side-programming/selectedindexchanged)

 * [Data Binding Overview - Documentation and API Reference](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/data-binding/overview)

 * [RadAjaxManager Overview - Documentation and API Reference](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/overview)



