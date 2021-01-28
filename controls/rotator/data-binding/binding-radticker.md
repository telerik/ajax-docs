---
title: Binding RadTicker
page_title: Binding RadTicker - RadRotator
description: Check our Web Forms article about Binding RadTicker.
slug: rotator/data-binding/binding-radticker
tags: binding,radticker
published: True
position: 1
---

# Binding RadTicker

**RadTicker**'s databinding mechanism is the same as [RadRotator's]({%slug rotator/data-binding/binding-to-asp-datasource-components%}) one. Because **RadRotator** support literal content only, you must use the **DataTextField** property to select which field to bind to:

````ASP.NET
<telerik:RadTicker ID="RadTicker1" AutoStart="true" DataSourceID="AccessDataSource1"
	DataTextField="ProductName" Loop="true" runat="server">
</telerik:RadTicker>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
	SelectCommand="SELECT [ProductName], [UnitPrice], [UnitsInStock] FROM [Alphabetical List of Products]">
</asp:AccessDataSource>
````

````C#
DataTable data = new DataTable();
data.Columns.Add("MyID");
data.Columns.Add("MyValue");
data.Rows.Add(new object[] { "1", "ticker item text 1" });
data.Rows.Add(new object[] { "2", "ticker item text 2" });
RadTicker1.DataSource = data;
RadTicker1.DataTextField = "MyValue"; //"MyValue" column provides values for the Text property of databound ticker items
RadTicker1.DataBind();
````
````VB
Dim data As New DataTable()
data.Columns.Add("MyID")
data.Columns.Add("MyValue")
data.Rows.Add(New Object() {"1", "ticker item text 1"})
data.Rows.Add(New Object() {"2", "ticker item text 2"})
RadTicker1.DataSource = dataRadTicker1.DataTextField = "MyValue" '"MyValue" column provides values for the Text property of databound ticker items
RadTicker1.DataBind()
````

If needed, you can feed different lines to the control's items collection by using the **RadTickerItem** tag. RadTicker is also able to read literal content that is inside the **RadTickerItem** tags. This way you can construct your tickers easily without having to worry about missing to use the template tags. You can use them only when you need them.

````ASP.NET
<telerik:RadTicker ID="RadTicker1" AutoStart="true" Loop="true" runat="server">
	<Items>
		<telerik:RadTickerItem ID="RadTickerItem1" runat="server">Ticker Item 1</telerik:RadTickerItem>
		<telerik:RadTickerItem ID="RadTickerItem2" runat="server">Ticker Item 2</telerik:RadTickerItem>
		<telerik:RadTickerItem ID="RadTickerItem3" runat="server">Ticker Item 3</telerik:RadTickerItem>
		<telerik:RadTickerItem ID="RadTickerItem4" runat="server">Ticker Item 4</telerik:RadTickerItem>
	</Items>
</telerik:RadTicker>
````


