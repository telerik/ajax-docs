---
title: Achieve SelectedIndexChanged server-side event behavior with RadMultiColumnComboBox
description: Achieve SelectedIndexChanged server-side event behavior with RadMultiColumnComboBox. Check it now!
type: how-to
page_title: Achieve SelectedIndexChanged server-side event behavior with RadMultiColumnComboBox
slug: multicolumncombobox-achieve-selectedindexchanged-server-side-event
res_type: kb
---


### HOW TO

Achieve `SelectedIndexChanged` server-side event with RadMultiColumnComboBox.

### SOLUTION

In the `OnChange` event of the multicolumn combobox, we set the arguments for a hidden button and programmatically click it. Then, the `OnClick` server-side event handler of the button is used as a server-side event handler for the change of the MultiColumnCombobox.

````ASP.NET
<asp:Label id="Label1" runat="server" />
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox1" runat="server" Skin="Default"
    DropDownWidth="400" Width="220px"
    DataTextField="Name" DataValueField="Id">
    <ClientEvents OnChange="OnChange" />
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="Id" Title="Id" />
        <telerik:MultiColumnComboBoxColumn Field="Name" Title="Name" />
        <telerik:MultiColumnComboBoxColumn Field="Title" Title="Title" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
<div style="display: none">
    <telerik:RadButton runat="server" ID="RadButton1" Text="Postback" CommandName="SelectedIndexChanged" AutoPostBack="true" OnClick="RadButton1_Click" />
</div>
````

````JavaScript
function OnChange(sender, args) {
    var selectedDataItem = sender.kendoWidget.dataItems()[sender.get_selected()];
    var button = $find("<%= RadButton1.ClientID %>");
 
    if (sender.get_selected() > -1) {
        // make the selectedDataItem JS objec to a string and add it as a commandArgument
        button.set_commandArgument(JSON.stringify(selectedDataItem));
    } else {
        button.set_commandArgument("");
    }
 
    setTimeout(function () {
        button.click();
    });
}
````

````C#
public class MyClass
{
    public int Id { get; set; }
    public String Name { get; set; }
    public String Title { get; set; }
}
 
protected void Page_Load(object sender, EventArgs e)
{
    var items = Enumerable.Range(0, 10).Select(x => new MyClass()
    {
        Id = x,
        Name = "Name " + x,
        Title = "Title " + x
    });
 
    RadMultiColumnComboBox1.DataSource = items;
    RadMultiColumnComboBox1.DataBind();
 
}
 
protected void RadButton1_Click(object sender, EventArgs e)
{
    var button = sender as RadButton;
    var multiColumnComboBox = RadMultiColumnComboBox1;
    if (button.CommandName == "SelectedIndexChanged")
    {
        var dataItemString = button.CommandArgument;
        // Deserialize the stringified JS object from the commandArguments
        if (!string.IsNullOrWhiteSpace(dataItemString))
        {
            MyClass dataItem = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<MyClass>(dataItemString);
            Label1.Text = string.Format("Selected item: Id - {0}; Name - {1}; Title - {2};", dataItem.Id, dataItem.Name, dataItem.Title);
        }
        else
        {
            Label1.Text = "No item selected";
        }
    }
}
````
````VB
Public Class MyClass
    Public Property Id As Integer
    Public Property Name As String
    Public Property Title As String
End Class

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    Dim items = Enumerable.Range(0, 10).[Select](Function(x) New [MyClass]() With {
        .Id = x,
        .Name = "Name " & x,
        .Title = "Title " & x
    })
    RadMultiColumnComboBox1.DataSource = items
    RadMultiColumnComboBox1.DataBind()
End Sub

Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim button = TryCast(sender, RadButton)
    Dim multiColumnComboBox = RadMultiColumnComboBox1

    If button.CommandName = "SelectedIndexChanged" Then
        Dim dataItemString = button.CommandArgument
        'Deserialize the stringified JS object from the commandArguments

        If Not String.IsNullOrWhiteSpace(dataItemString) Then
            Dim dataItem As [MyClass] = New System.Web.Script.Serialization.JavaScriptSerializer().Deserialize(Of [MyClass])(dataItemString)
            Label1.Text = String.Format("Selected item: Id - {0}; Name - {1}; Title - {2};", dataItem.Id, dataItem.Name, dataItem.Title)
        Else
            Label1.Text = "No item selected"
        End If
    End If
End Sub
````




