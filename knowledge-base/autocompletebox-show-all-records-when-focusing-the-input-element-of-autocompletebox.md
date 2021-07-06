---
title: Show all records when focusing the input element of RadAutoCompleteBox
description: Show all records when focusing the input element of RadAutoCompleteBox. Check it now!
type: how-to
page_title: Show all records when focusing the input element of RadAutoCompleteBox
slug: autocompletebox-show-all-records-when-focusing-the-input-element-of-autocompletebox
res_type: kb
---

## How to

Show all records in AutoCompleteBox when the input is focused.  
  
![AutoCompleteShowAllOnFocus](images/autocompletebox-show-all-records-when-focusing-the-input-element-of-autocompletebox.gif)

## Solution

To achieve that, we need to use the [OnDataSourceSelect]({%slug autocompletebox/server-side-programming/events/ondatasourceselect%})event of the RadAutoCompleteBox in order to send the custom data. Then, in the OnClientLoad event of the AutoCompleteBox, we subscribe to the focus event of the AutoCompleteBox' input element and fire a request manually.

````JavaScript
function OnClientLoad(sender, args) {
    // fire a request for all records when focusing the input
    $telerik.$(sender.get_inputElement()).on("focus", function (e) {
        var showAllRecords = true;
        console.log("focused");

        if (!sender.__isAddingEntry) {
            sender._requestItems("ShowAllRecords", showAllRecords)
        }
        sender.__isAddingEntry = false;
    });

    // prevent request fired when clicking an item of the dropdown
    sender.__isAddingEntry = false;
    $telerik.$(sender.get_dropDownElement()).find(".racList").on("mousedown", function () {
        sender.__isAddingEntry = true;
    });
}
````

````ASPX
<telerik:RadAutoCompleteBox HighlightFirstMatch="false" OnDataSourceSelect="RadAutoCompleteBox1_DataSourceSelect"
    ID="RadAutoCompleteBox1" OnClientLoad="OnClientLoad" DataTextField="Name"
    DataValueField="ID" runat="server">
</telerik:RadAutoCompleteBox>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    if (IsCallback)
    {           
        // prevent DataSource not set error
        RadAutoCompleteBox1.DataSource = "";
    }
}
 
protected void RadAutoCompleteBox1_DataSourceSelect(object sender, Telerik.Web.UI.AutoCompleteBoxDataSourceSelectEventArgs e)
{
    var autocompleteBox = sender as RadAutoCompleteBox;
    DataTable ds = GetDataSource();
    if (e.FilterString == "ShowAllRecords")
    {
        autocompleteBox.DataSource = ds;
    }
    else
    {
        DataTable filtered = ds.AsEnumerable().Where(x => x["Name"].ToString().ToLower().Contains(e.FilterString.ToLower())).CopyToDataTable();
        autocompleteBox.DataSource = filtered;
    }
}
 
 
private DataTable GetDataSource()
{
    DataTable dataTable = new DataTable();
 
    dataTable.Columns.Add(new DataColumn("ID", typeof(int)));
    dataTable.Columns.Add(new DataColumn("Name", typeof(string)));
    dataTable.Columns.Add(new DataColumn("CustomField", typeof(string)));
 
    dataTable.PrimaryKey = new DataColumn[1] { dataTable.Columns["ID"] };
 
    for (int i = 0; i <= 10; i++)
    {
        dataTable.Rows.Add(i, "Name #" + i, "Custom Field #" + i);
    }
 
    return dataTable;
}
````


## See also

- [AutoCompleteBox to remain with open dropdown to allow multiselection](https://www.telerik.com/support/kb/aspnet-ajax/autocompletebox/details/autocompletebox-to-remain-with-open-dropdown-to-allow-multiselection)


