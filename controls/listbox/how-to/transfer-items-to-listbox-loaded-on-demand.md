---
title: Transfer Items to ListBox Loaded on Demand
page_title: Transfer Items to ListBox Loaded on Demand - RadListBox
description: Check our Web Forms article about Transfer Items to ListBox Loaded on Demand.
slug: listbox/how-to/transfer-items-to-listbox-loaded-on-demand
tags: transfer,items,loaded,on,demand
published: True
position: 8
---

# Transfer Items to ListBox Loaded on Demand

## 

In order to transfer items to a **RadListBox** that is using the Load on Demand mechanism, you need to set the **AutoPostBackOnTransfer** property of the source **RadListBox** to "true" and in its OnTransferred server-side event handler insert the items in the destination **RadListBox**'s data source.   

1. Controls declaration:

````ASPNET
<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox1" Height="200px"
    TransferToID="RadListBox2" AllowTransfer="true" AutoPostBackOnTransfer="true"
    OnTransferred="RadListBox1_Transferred">
    <Items>
        <telerik:RadListBoxItem Text="New Product1" />
        <telerik:RadListBoxItem Text="New Product2" />
        <telerik:RadListBoxItem Text="New Product3" />
    </Items>
</telerik:RadListBox>

<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox2" Height="200px"
    EnableLoadOnDemand="true" DataSourceID="SqlDataSource1"
    DataTextField="ProductName" DataValueField="ProductID" DataKeyField="ProductID">
</telerik:RadListBox>  

<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
      SelectCommand="SELECT [ProductID], [ProductName] FROM [Products]"></asp:SqlDataSource>
````

2. The OnTransferred handler:

````C#
protected void RadListBox1_Transferred(object sender, Telerik.Web.UI.RadListBoxTransferredEventArgs e)
{
    foreach (RadListBoxItem item in e.Items)
    {
        SqlConnection destinationCon = new SqlConnection("Data Source=.\\;AttachDbFilename=|DataDirectory|\\Northwind.mdf;Integrated Security=True;User Instance=True;");
        destinationCon.Open();

        SqlCommand insertCommand = destinationCon.CreateCommand();
        insertCommand.CommandText = "INSERT INTO Products (ProductName) VALUES (@ProductName)";
        insertCommand.Parameters.AddWithValue("@ProductName", item.Text);
        insertCommand.ExecuteNonQuery();
    }
}
````
````VB.NET
Protected Sub RadListBox1_Transferred(sender As Object, e As Telerik.Web.UI.RadListBoxTransferredEventArgs)
	For Each item As RadListBoxItem In e.Items
		Dim destinationCon As New SqlConnection("Data Source=.\;AttachDbFilename=|DataDirectory|\Northwind.mdf;Integrated Security=True;User Instance=True;")
		destinationCon.Open()

		Dim insertCommand As SqlCommand = destinationCon.CreateCommand()
		insertCommand.CommandText = "INSERT INTO Products (ProductName) VALUES (@ProductName)"
		insertCommand.Parameters.AddWithValue("@ProductName", item.Text)
		insertCommand.ExecuteNonQuery()
	Next
End Sub
````

# See Also

* [RadListBox Load on Demand]({%slug listbox/functionality/load-on-demand%})
 
