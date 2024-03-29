---
title: Edit Grid columns with ComboBox CheckBoxes
description: 
type: how-to
page_title: Edit Grid columns with ComboBox CheckBoxes - RadGrid
slug: grid-edit-columns-with-combobox-checkboxes
res_type: kb
---

## Description

Editing records using RadComboBox with [CheckBox Support]({%slug combobox/functionality/checkbox-support%})

![](images/grid-edit-columns-with-combobox-checkboxes-overview.png)

Normally, editing the RadGrid using a ComboBox is a straightforward process. You can see an example in the [Combo in Grid](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/comboingrid/defaultcs.aspx) online demo.

However, when the [CheckBoxes]({%slug combobox/functionality/checkbox-support%}) are enabled for the ComboBox, the SelectedItem or SelectedValue will no longer be relevant as the CheckBox Functionality relies on the Combo's CheckedItems collection to track the changes.

## Solution

In order to have a Grid cell with multiple values, the database field should contain a single string with all the values separated by a coma " **,** ", similar to the approach in the [Edit Grid columns with MultiSelect]({%slug grid-edit-columns-with-multiselect%}) article. 

>note Using coma " **,** " to separate items is just a personal preference. You may use any other character that suits you. If you change that, be sure to adjust the code that will split the items respectively.


>caption RadGrid Markup Code

````ASP.NET
<asp:Label ID="Label1" runat="server" Text="Action:"></asp:Label>
<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px"
    AutoGenerateEditColumn="true"
    AutoGenerateDeleteColumn="true"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnInsertCommand="RadGrid1_InsertCommand"
    OnUpdateCommand="RadGrid1_UpdateCommand"
    OnDeleteCommand="RadGrid1_DeleteCommand"
    OnItemDataBound="RadGrid1_ItemDataBound">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" CommandItemDisplay="Top" InsertItemDisplay="Top" InsertItemPageIndexAction="ShowItemOnLastPage">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime" DataFormatString="{0:MM/dd/yyyy}"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>

            <telerik:GridTemplateColumn DataField="ComboBoxValues" UniqueName="MyTemplateColumn" HeaderText="TemplateColumn - ComboBox">
                <ItemTemplate>
                    <asp:Label ID="Label2" runat="server" Text='<%# Eval("ComboBoxValues") %>'></asp:Label>
                </ItemTemplate>

                <EditItemTemplate>
                        <telerik:RadComboBox ID="RadComboBox1" runat="server"
                        CheckBoxes="true"
                        EnableCheckAllItemsCheckBox="true"
                        OnDataBinding="RadComboBox1_DataBinding"
                        DataTextField="Text"
                        DataValueField="Value" />
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

>caption Binding data to RadGrid

````C#
public DataTable SessionDataSource
{
    get
    {
        string sessionKey = "SessionDataSource";

        if (Session[sessionKey] == null || !IsPostBack)
        {
            Session[sessionKey] = OrdersTable();
        }
        return (DataTable)Session[sessionKey];
    }
}

// READ (data binding)
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = SessionDataSource;
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
    dt.Columns.Add(new DataColumn("ComboBoxValues", typeof(string)));


    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 5; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        if (index % 4 == 0) { row["ComboBoxValues"] = "Item 1,Item 2,Item 3"; }
        else if (index % 3 == 0) { row["ComboBoxValues"] = "Item 2,Item 4"; }
        else if (index % 2 == 0) { row["ComboBoxValues"] = "Item 1,Item 2,Item 3,Item 4,Item 5"; }
        else { row["ComboBoxValues"] = "Item 1"; }

        dt.Rows.Add(row);
    }

    return dt;
}
````

>caption Binding data to the ComboBox

````C#
protected void RadComboBox1_DataBinding(object sender, EventArgs e)
{
    RadComboBox combo = (RadComboBox)sender;

    combo.DataSource = Enumerable.Range(1, 5).Select(x => new
    {
        Text = "Item " + x,
        Value = "Item" + x
    }).ToList();
}
````

>caption Pre-Checking ComboBox Items based on Grid cell values

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item.IsInEditMode && !(e.Item is GridEditFormInsertItem) && !(e.Item is GridDataInsertItem)) // This part is needed to split the Values and Check the Combo items based on them
    {
        GridDataItem dataItem = null;

        if (e.Item is GridEditFormItem)
        {
            dataItem = ((GridEditFormItem)e.Item).ParentItem as GridDataItem;
        }
        else
        {
            dataItem = e.Item as GridDataItem;
        }

        if (dataItem != null)
        {
            GridEditableItem editedItem = e.Item as GridEditableItem;
            var combo = editedItem.FindControl("RadComboBox1") as RadComboBox;

            if (combo != null)
            {
                DataRow foundRow = SessionDataSource.Select(string.Format("OrderID = {0}", dataItem.GetDataKeyValue("OrderID"))).FirstOrDefault();

                if (foundRow != null)
                {
                    string[] values = foundRow["ComboBoxValues"].ToString().Trim().Split(',');

                    foreach (string text in values)
                    {
                        var comboItemToCheck = combo.FindItemByText(text);

                        if (comboItemToCheck != null)
                        {
                            comboItemToCheck.Checked = true;
                        }
                    }
                }
            }
        }
    }
}
````

>caption Inserting Records

````C#
// CREATE (Add New Record)
protected void RadGrid1_InsertCommand(object sender, GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;

    DataRow newRow = SessionDataSource.NewRow();

    //As this example demonstrates only in-memory editing, a new primary key value should be generated
    //This should not be applied when updating directly the database
    DataRow[] allValues = SessionDataSource.Select("OrderID = MAX(OrderID)");

    if (allValues.Length > 0)
    {
        newRow["OrderID"] = int.Parse(allValues[0]["OrderID"].ToString()) + 1;
    }
    else
    {
        newRow["OrderID"] = 1; //the table is empty;
    }

    //Set new values
    Hashtable newValues = new Hashtable();
    //The GridTableView will fill the values from all editable columns in the hash
    e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);

    // Extract the Checked Values of the Combo and update the newValues Hashtable
    RadComboBox combo = editedItem.FindControl("RadComboBox1") as RadComboBox;

    if (combo != null)
    {
        if (combo.CheckedItems.Count > 0)
        {
            newValues["ComboBoxValues"] = string.Join(",", combo.CheckedItems.Select(x => x.Text).ToArray());
        }
    }

    try
    {
        foreach (DictionaryEntry entry in newValues)
        {
            newRow[(string)entry.Key] = entry.Value;
        }
    }
    catch (Exception ex)
    {
        Label1.Text += string.Format("<br />Unable to insert into Orders. Reason: {0}", ex.Message);
        e.Canceled = true;
        return;
    }

    SessionDataSource.Rows.Add(newRow);
    //Code for updating the database ca go here...
    Label1.Text += string.Format("<br />Order {0} inserted", newRow["OrderID"]);
}
````

>caption Updating Records

````C#
// UPDATE
protected void RadGrid1_UpdateCommand(object sender, GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;

    //Locate the changed row in the DataSource
    DataRow[] changedRows = SessionDataSource.Select(string.Format("OrderID = {0}", editedItem.GetDataKeyValue("OrderID")));

    if (changedRows.Length != 1)
    {
        this.Label1.Text += "Unable to locate the Order for updating.";
        e.Canceled = true;
        return;
    }
    //Update new values
    Hashtable newValues = new Hashtable();
    e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);

    // Extract the Checked Values of the Combo and update the newValues Hashtable
    RadComboBox combo = editedItem.FindControl("RadComboBox1") as RadComboBox;

    if (combo != null)
    {
        if (combo.CheckedItems.Count > 0)
        {
            newValues["ComboBoxValues"] = string.Join(",", combo.CheckedItems.Select(x => x.Text).ToArray());
        }
    }

    changedRows[0].BeginEdit();
    try
    {
        foreach (DictionaryEntry entry in newValues)
        {
            changedRows[0][(string)entry.Key] = entry.Value;
        }
        changedRows[0].EndEdit();
    }
    catch (Exception ex)
    {
        changedRows[0].CancelEdit();
        Label1.Text += string.Format("Unable to update Orders. Reason: {0}", ex.Message);
        e.Canceled = true;
        return;
    }
}
````

>caption Deleting Records

````C#
// DELETE
protected void RadGrid1_DeleteCommand(object sender, GridCommandEventArgs e)
{
    GridDataItem dataItem = e.Item as GridDataItem;
    string ID = dataItem.GetDataKeyValue("OrderID").ToString();

    if (SessionDataSource.Rows.Find(ID) != null)
    {
        SessionDataSource.Rows.Find(ID).Delete();
    }
}
````

>caption BONUS - Displaying the values one under the other

If you wanted to display the values separated and one under the other, you can add the following code to the ItemDataBound event.

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (!e.Item.IsInEditMode && e.Item is GridDataItem) // This part is needed to split the Contract names and create a Line break to render them one under the other when the Grid is loaded
    {
        GridDataItem dataItem = (GridDataItem)e.Item;

        Label lblComboValues = dataItem.FindControl("Label2") as Label;

        if (lblComboValues != null)
        {
            lblComboValues.Text = string.Join("<br/>", lblComboValues.Text.Trim().Split(','));
        }
    }
}
````

## See Also

- [Edit Grid columns with MultiSelect]({%slug grid-edit-columns-with-multiselect%})