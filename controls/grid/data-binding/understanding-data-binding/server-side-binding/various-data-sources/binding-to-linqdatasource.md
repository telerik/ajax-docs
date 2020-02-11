---
title: Binding to LinqDataSource
page_title: Binding to LinqDataSource - RadGrid | UI for ASP.NET AJAX
description: Binding to LinqDataSource
slug: grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-linqdatasource
published: True
position: 7
---

# Binding To LinqDataSource control

RadGrid Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="LinqDataSource1">
</telerik:RadGrid>

<asp:LinqDataSource ID="LinqDataSource1" runat="server" OnSelecting="LinqDataSource1_Selecting"></asp:LinqDataSource>
````

Code behind section (dummy data generated using an Enumerable)

````C#
protected void LinqDataSource1_Selecting(object sender, LinqDataSourceSelectEventArgs e)
{
    e.Result = Enumerable.Range(1, 100).Select(x => new Order()
    {
        OrderID = x,
        OrderDate = DateTime.Now.Date.AddDays(x).AddHours(x).AddMinutes(x),
        Freight = x * 0.1,
        ShipName = "Name " + x,
        ShipCountry = "Country " + x
    });
}
public class Order
{
    public int OrderID { get; set; }
    public DateTime OrderDate { get; set; }
    public double Freight { get; set; }
    public string ShipName { get; set; }
    public string ShipCountry { get; set; }
}
````
````VB
Protected Sub LinqDataSource1_Selecting(sender As Object, e As LinqDataSourceSelectEventArgs)
    e.Result = Enumerable.Range(1, 100).Select(Function(x) New Order() With {
        .OrderID = x,
        .OrderDate = DateTime.Now.Date.AddDays(x).AddHours(x).AddMinutes(x),
        .Freight = x * 0.1,
        .ShipName = "Name " & x,
        .ShipCountry = "Country " & x
    })
End Sub
Public Class Order
    Public Property OrderID As Integer
    Public Property OrderDate As DateTime
    Public Property Freight As Double
    Public Property ShipName As String
    Public Property ShipCountry As String
End Class
````
 
