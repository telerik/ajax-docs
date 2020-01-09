---
title: Overview
page_title: Overview | RadMultiSelect for ASP.NET AJAX Documentation
description: Overview
slug: multiselect/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of **RadMultiSelect** and create its elements in the code-behind via the Server-Side API of the control.

## RadMultiSelect Server-side Events
Below you can see a list of the server-side events available in the **RadMultiSelect**: 

* OnDataBinding
* OnDataBound
* OnInit
* [OnItemDataBound]({%slug multiselect/server-side-programming/events/itemdatabound%})
* OnLoad
* OnPreRender
* [OnItemSelected]({%slug multiselect/server-side-programming/events/itemselected%})
* [OnItemDeselected]({%slug multiselect/server-side-programming/events/itemdeselected%})
* [OnSelectionChanged]({%slug multiselect/server-side-programming/events/selectionchanged%})

## RadMultiSelect Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadMultiSelect class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadMultiSelect). You can also find it in the intellisense in Visual Studio.

## Get Selected Items Text and Value

**RadMultiSelect** exposes the **Text** and **Value** server-side properties that contain the information from the `DataTextField` and `DataValueField` fields respectively.

>caption Example 1: Get selected items value and text from RadMultiSelect

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" Filter="Contains" Width="400px" Placeholder="Select items...">
</telerik:RadMultiSelect>

<asp:Button ID="Button1" runat="server" Text="Get Data" OnClick="Button1_Click" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadMultiSelect1.DataTextField = "textField";
        RadMultiSelect1.DataValueField = "valueField";
        RadMultiSelect1.DataSource = GetData();
        RadMultiSelect1.DataBind();
    }
}

private object GetData()
{
    DataTable dt = new DataTable();
    dt.Columns.Add("textField");
    dt.Columns.Add("valueField");

    for (int i = 0; i < 10; i++)
    {
        dt.Rows.Add("Item " + i, i);
    }

    return dt;
}

protected void Button1_Click(object sender, EventArgs e)
{
    var selectedValues = RadMultiSelect1.Value;

    foreach (string value in selectedValues)
    {
        MultiSelectItem selectedItem = RadMultiSelect1.Items.FindChildByValue(value);
        string result = string.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value);
        Response.Write(result);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        RadMultiSelect1.DataTextField = "textField"
        RadMultiSelect1.DataValueField = "valueField"
        RadMultiSelect1.DataSource = GetData()
        RadMultiSelect1.DataBind()
    End If
End Sub

Private Function GetData() As Object
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add("textField")
    dt.Columns.Add("valueField")

    For i As Integer = 0 To 10 - 1
        dt.Rows.Add("Item " & i, i)
    Next

    Return dt
End Function

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim selectedValues = RadMultiSelect1.Value

    For Each value As String In selectedValues
        Dim selectedItem As MultiSelectItem = RadMultiSelect1.Items.FindChildByValue(value)
        Dim result As String = String.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value)
        Response.Write(result)
    Next
End Sub
````






