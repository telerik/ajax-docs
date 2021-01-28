---
title: DataKeyNames
page_title: DataKeyNames - RadSearchBox
description: Check our Web Forms article about DataKeyNames.
slug: searchbox/functionality/datakeynames
tags: datakeynames
published: True
position: 4
---

# DataKeyNames



**DataKeyNames** property lists the additional fields of the DataSource that will be mapped to each result item. It allows you to define the names of the data fields you want to use in code without displaying them, such as Primary Keys, ID fields, etc.

The **DataKeyNames** can be easily retrieved and used after that in the [OnClientSearch]({%slug searchbox/client-side-programming/events/onclientsearch%}) event and in the [OnSearch]({%slug searchbox/server-side-programming/events/onsearch%}) server event, as show in the following code:

````ASPNET
			
<script type="text/javascript">
	function OnClientSearch(sender, args) {
		alert(args.get_dataItem().UnitPrice);
		alert(args.get_dataItem().SupplierID);
	}
</script>
  <telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="RadTextBox1">
  </telerik:RadTextBox>
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox1" OnClientSearch="OnClientSearch" OnSearch="RadSearchBox1_Search" 
	DataSourceID="SqlDataSource1"
	DataKeyNames="UnitPrice, SupplierID"
	DataValueField="ProductId"  MaxResultCount="10"
	DataTextField="ProductName">
	<DropDownSettings Height="400" Width="300">
		
	</DropDownSettings>
</telerik:RadSearchBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
	ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	SelectCommand="SELECT * FROM [Products]">
</asp:SqlDataSource>
	
````





````C#
	
protected void RadSearchBox1_Search(object sender, Telerik.Web.UI.SearchBoxEventArgs e)
{
	string ProductId = ((Dictionary<string, object>)e.DataItem)["UnitPrice"].ToString();
	string ProductName = ((Dictionary<string, object>)e.DataItem)["SupplierID"].ToString();
	RadTextBox1.Text = ProductId + " " + ProductName;
}
	
````
````VB.NET
	
Protected Sub RadSearchBox1_Search(sender As Object, e As Telerik.Web.UI.SearchBoxEventArgs)
	Dim ProductId As String = DirectCast(e.DataItem, Dictionary(Of String, Object))("UnitPrice").ToString()
	Dim ProductName As String = DirectCast(e.DataItem, Dictionary(Of String, Object))("SupplierID").ToString()
	RadTextBox1.Text = ProductId + " " + ProductName
End Sub
	
````

