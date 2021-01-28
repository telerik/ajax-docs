---
title: Binding to DataTable, DataSet or DataView
page_title: Binding to DataTable, DataSet or DataView - RadListBox
description: Check our Web Forms article about Binding to DataTable, DataSet or DataView.
slug: listbox/data-binding/binding-to-datatable,-dataset-or-dataview
tags: binding,to,datatable,,dataset,or,dataview
published: True
position: 1
---

# Binding to DataTable, DataSet or DataView

## 

**RadListBox** can be bound to a **DataTable**, **DataSet** and a **DataView**. This example shows binding to a **DataTable** object.

The declaration of the RadListBox object includes no DataSourceID property or <items> section:

````ASPNET
<telerik:radlistbox id="RadListBox1" runat="server"></telerik:radlistbox>
````

In the **Page_Load** event handler, create and fill the **DataTable** object, then bind it to the ListBox. You must call the **DataBind** method after setting the **DataSource** property.


````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadListBox1.DataSource = GetData(); 
        RadListBox1.DataTextField = "ProductName"; 
        RadListBox1.DataValueField = "ProductID"; 
        RadListBox1.DataBind();
    }
}
protected DataTable GetData()
{
    SqlDataAdapter adapter = new SqlDataAdapter("SELECT ProductID, ProductName FROM Products", ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
    DataTable result = new DataTable(); adapter.Fill(result);
    return result;
}			
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        RadListBox1.DataSource = GetData()
        RadListBox1.DataTextField = "ProductName"
        RadListBox1.DataValueField = "ProductID"
        RadListBox1.DataBind()
    End If
End Sub
Protected Function GetData() As DataTable
    Dim adapter As New SqlDataAdapter("SELECT ProductID, ProductName FROM Products", ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
    Dim result As New DataTable()
    adapter.Fill(result)
    Return result

End Function
````

# See Also

 * [Overview]({%slug listbox/data-binding/overview%})

 * [Binding to Array or ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})
