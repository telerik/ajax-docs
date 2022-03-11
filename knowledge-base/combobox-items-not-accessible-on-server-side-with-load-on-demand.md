---
title: RadComboBox items are not accessible on the server-side when loading them on demand 
description: With Load On Demand enabled, RadComboBox items are not accessible on server-side. The FindItemByText/FindItemByValue methods and SelectedItem/SelectedIndex are always returning null / nothing.
type: how-to
page_title: Items are not accessible on the server-side with Load On Demand - RadComboBox
slug: combobox-items-not-accessible-on-server-side-with-load-on-demand
previous_url: controls/combobox/troubleshooting/radcombobox-items-are-not-accessible-on-the-server-side-when-loading-them-on-demand
res_type: kb
---

## DESCRIPTION

RadComboBox items loaded on demand using the [ItemsRequested event]({%slug combobox/server-side-programming/itemsrequested%}), [ASMX WebService]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}) or [WCF WebService]({%slug combobox/load-on-demand/loading-items-from-wcf-service%}) do not exist on the server, therefore they cannot be accessed.

>important The following properties and methods will not yield results:
>- **FindItemByText** - returns `null` / `Nothing`
>- **FindItemByValue** - returns `null` / `Nothing`
>- **SelectedItem** - returns `null` / `Nothing`
>- **SelectedIndex** - returns `-1`

The purpose of the [Load On Demand functionality]({%slug combobox/load-on-demand/overview%}) is to boost the loading speed by using little to no ViewState related information.

## SOLUTION

The only information that will be persisted is the `Text` and `Value`.

If using the [SelectedIndexChanged event]({%slug combobox/server-side-programming/selectedindexchanged%}) of the Combo, the `Text` and `Value` will be available in the event arguments (**e.Text** and **e.Value**)

In other events, you can access the `Text` and `Value` through the **Text** and **SelectedValue** properties of the RadComboBox instance.

>caption Example Combo Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" EnableLoadOnDemand="true" 
    AutoPostBack="true"
    OnItemsRequested="RadComboBox1_ItemsRequested"
    OnSelectedIndexChanged="RadComboBox1_SelectedIndexChanged">
</telerik:RadComboBox>
````


>caption Example ItemsRequested event

````C#
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    RadComboBox combo = (RadComboBox)sender;

    // DataTable with Dummy data
    var dt = new DataTable();
    dt.Columns.Add("ID", typeof(int));
    dt.Columns.Add("Name", typeof(string));
    dt.Columns.Add("Description", typeof(string));

    for (int i = 0; i < 10; i++)
    {
        var newRow = dt.NewRow();

        newRow["ID"] = i;
        newRow["Name"] = "Name " + i;
        newRow["Description"] = "Desc " + i;

        dt.Rows.Add(newRow);
    }

    // Required by the Load On Demand functionality
    // Loop through the data
    foreach (DataRow row in dt.Rows)
    {
        // Create Combo Item and pass the Text as parameter
        RadComboBoxItem item = new RadComboBoxItem();

        // Populate the Text and Value properties
        item.Text = row["Name"].ToString(); // Needed to access the Text
        item.Value = row["ID"].ToString(); // Needed to access the Value

        // add the Combo Item to the Combo's Items collection.
        combo.Items.Add(item);
    }
}
````
````VB
Protected Sub RadComboBox1_ItemsRequested(ByVal sender As Object, ByVal e As RadComboBoxItemsRequestedEventArgs)
    Dim combo As RadComboBox = CType(sender, RadComboBox)

    'DataTable with Dummy data
    Dim dt = New DataTable()
    dt.Columns.Add("ID", GetType(Integer))
    dt.Columns.Add("Name", GetType(String))
    dt.Columns.Add("Description", GetType(String))

    'Required by the Load On Demand functionality
    'Loop through the data
    For i As Integer = 0 To 10 - 1
        Dim newRow = dt.NewRow()
        newRow("ID") = i
        newRow("Name") = "Name " & i
        newRow("Description") = "Desc " & i
        dt.Rows.Add(newRow)
    Next

    For Each row As DataRow In dt.Rows
        'Create Combo Item and pass the Text as parameter
        Dim item As RadComboBoxItem = New RadComboBoxItem()
        
        'Populate the Text and Value properties
        item.Text = row("Name").ToString() 'Needed to access the Text
        item.Value = row("ID").ToString() 'Needed to access the Value
        
        'add the Combo Item to the Combo's Items collection.
        combo.Items.Add(item)
    Next
End Sub
````

>caption Accessing the `Text` and `Value` on server side using the Combo's SelectedIndexChanged event

````C#
protected void RadComboBox1_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    var text = e.Text;
    var value = e.Value;
    // OR 
    var combo = (RadComboBox)sender;
    var text2 = combo.Text;
    var value2 = combo.SelectedValue;
}
````
````VB
Protected Sub RadComboBox1_SelectedIndexChanged(ByVal sender As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs)
    Dim text = e.Text
    Dim value = e.Value
    'OR 
    Dim combo = CType(sender, RadComboBox)
    Dim text2 = combo.Text
    Dim value2 = combo.SelectedValue
End Sub
````

>caption Accessing the `Text` and `Value` on server side in a Button Click

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    var text = RadComboBox1.Text;
    var selectedValue = RadComboBox1.SelectedValue;
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim text = RadComboBox1.Text
    Dim selectedValue = RadComboBox1.SelectedValue
End Sub
````

## See Also

- [Load On Demand]({%slug combobox/load-on-demand/overview%})
- [ItemsRequested event]({%slug combobox/server-side-programming/itemsrequested%})
- [Loading Items using ASMX WebService]({%slug combobox/load-on-demand/loading-items-from-a-web-service%})
- [Loading Items using WCF WebService]({%slug combobox/load-on-demand/loading-items-from-wcf-service%})

 
