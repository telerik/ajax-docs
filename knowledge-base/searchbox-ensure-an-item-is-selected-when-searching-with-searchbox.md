---
title: Ensure an item is selected when searching with SearchBox
description: Ensure an item is selected when searching with SearchBox. Check it now!
type: how-to
page_title: Ensure an item is selected when searching with SearchBox
slug: searchbox-ensure-an-item-is-selected-when-searching-with-searchbox
res_type: kb
---

## How to

Force item selection by preventing OnSearch event if there is no item selected.

![SearchBox Ensure Selection](images/searchbox-ensure-an-item-is-selected.gif)

## Solution

To achieve that, you should set *HighlightFirstMatch="true"* in the control's configuration and set the client-side object's **\_postBackOnSearch** to false if there is no **\_highlightedItem** in the SearchBox in the **OnClientSearch** event. Optionally, you can clear the textbox when there is no selected item in the **OnClientLoad** event.

````ASPX
<asp:Label ID="Label1" runat="server" />
<br />
<br />
<telerik:RadSearchBox runat="server" Filter="Contains" HighlightFirstMatch="true"
    OnSearch="RadSearchBox1_Search" ID="RadSearchBox1" OnClientLoad="OnClientLoad"
    OnClientSearch="OnClientSearch">
</telerik:RadSearchBox>
````

````JavaScript
function OnClientLoad(sender, args) {
    // clear the text if there is no selected item
    if (!sender._highlightedItem) {
        sender.get_inputElement().value = "";
    }
}
function OnClientSearch(sender, args) {
    // prevent postback if no item is selected
    if (!sender._highlightedItem) {
        sender._postBackOnSearch = false
    } else {
        sender._postBackOnSearch = true
    }
}
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    if (IsCallback)
    {
        RadSearchBox1.DataSource = GetDataSource();
        RadSearchBox1.DataTextField = "Name";
        RadSearchBox1.DataValueField = "ID";
        RadSearchBox1.DataBind();
    }
}
 
protected void RadSearchBox1_Search(object sender, SearchBoxEventArgs e)
{
    Label1.Text = string.Format("OnSearch fired, selected item: Text: {0}; Value: {1}!", e.Text, e.Value);
}
 
private DataTable GetDataSource()
{
    DataTable dataTable = new DataTable();
 
    dataTable.Columns.Add(new DataColumn("ID", Type.GetType("System.Int32")));
    dataTable.Columns.Add(new DataColumn("Name", Type.GetType("System.String")));
 
    dataTable.PrimaryKey = new DataColumn[1] { dataTable.Columns["ID"] };
 
    for (int i = 0; i <= 10; i++)
    {
        dataTable.Rows.Add(i, "Name " + i);
    }
 
    return dataTable;
}
````

 