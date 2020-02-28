---
title: Overview
page_title: Load On Demand Overview | RadComboBox for ASP.NET AJAX Documentation
description: Overview
slug: combobox/load-on-demand/overview
tags: overview
published: True
position: 0
---

# Load On Demand Overview



**RadComboBox** provides its own Load-On-Demand mechanism. A poll-server timeout could be set, and RadComboBox fires a server-side event (**ItemsRequested**) which returns items based on the current text. RadComboBox also provides an option to [cache the items]({%slug combobox/load-on-demand/caching-items%}) loaded on demand. Starting from the **Q1 2010** release, RadComboBox supports [automatic (codeless) Load On Demand]({%slug combobox/load-on-demand/automatic-load-on-demand%}).

To use the Load-On-Demand mechanism, you need to:

* Set the **EnableLoadOnDemand** property to **True**;

* Do one of the following:

* Subscribe to the **ItemsRequested** event and add new items to the RadComboBox.

>note Items added in the **ItemsRequested** event handler are cleared when the next **ItemsRequested** event fires. If you, however, use the **ShowMoreResultsBox** mechanism or **Virtual Scrolling** the items will not be cleared upon clicking the **ShowMoreResultsBox** arrow or **scrolling down.** 
>


* Use the **WebServiceSettings** property so that RadComboBox [loads the items from a Web Service]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}).

When the user types in the input area or clicks on the drop-down toggle image when there are no items in the RadComboBox, the **[OnClientItemsRequesting]({%slug combobox/client-side-programming/events/onclientitemrequesting%})** event fires on the client, followed by an **[ItemsRequested]({%slug combobox/server-side-programming/itemsrequested%})** event on the server. Once the new items have been added to RadComboBox, an **[OnClientItemsRequested]({%slug combobox/client-side-programming/events/onclientitemrequested%})** event fires on the client.

>note The **EnableLoadOnDemand** property allows the user to enter text in the input area, regardless of the value of the **AllowCustomText** property. This is because the load-on-demand mechanism requires the user to be able to enter text.
>


To specify a timeout (in milliseconds) before the server event is executed, use the **ItemRequestTimeout**.

## Example

The **ItemsRequested** event handler shown below fills the RadComboBox with a set of items, loaded from a database. The items' text must match the string typed in the input area of the RadComboBox:



````C#
	
protected void RadComboBox1_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e)
{
   RadComboBox combo = (RadComboBox) o;

   string mdbPath = Server.MapPath("App_Data/NWind.mdb");
   OleDbConnection dbCon = new OleDbConnection ("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + mdbPath);
   dbCon.Open();

   string sql = "SELECT * from Customers WHERE CompanyName LIKE '" + e.Text + "%'";

   OleDbDataAdapter adapter = new OleDbDataAdapter(sql, dbCon);
   DataTable dt = new DataTable();
   adapter.Fill(dt);
   dbCon.Close();

   foreach (DataRow row in dt.Rows)
   {
		 RadComboBoxItem item = new RadComboBoxItem(row["CompanyName"].ToString());
		 combo.Items.Add(item);
   }
}
	          
````
````VB.NET
	     
Protected Sub RadComboBox1_ItemsRequested(ByVal o As Object, ByVal e As RadComboBoxItemsRequestedEventArgs) Handles RadComboBox1.ItemsRequested
	Dim combo As RadComboBox = DirectCast(o, RadComboBox)
	Dim mdbPath As String = Server.MapPath("App_Data/NWind.mdb")
	Dim dbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + mdbPath)
	dbCon.Open()
	Dim sql As String = "SELECT * from Customers WHERE CompanyName LIKE '" + e.Text + "%'"
	Dim adapter As New OleDbDataAdapter(sql, dbCon)
	Dim dt As New DataTable()
	adapter.Fill(dt)
	dbCon.Close()
	For Each row As DataRow In dt.Rows
		Dim item As New RadComboBoxItem(row("CompanyName").ToString())
		combo.Items.Add(item)
	Next
End Sub
	
````


[Load On Demand](https://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/autocompletesql/defaultcs.aspx)

[Populate from a WebService](https://demos.telerik.com/aspnet-ajax/combobox/examples/loadondemand/wcf/defaultcs.aspx)

# See Also

 * [Passing Context Information to the Server ]({%slug combobox/load-on-demand/passing-context-information-to-the-server-%})

 * [ShowMoreResultsBox/Virtual Scrolling]({%slug combobox/load-on-demand/showmoreresultsbox-virtual-scrolling%})

 * [Caching Items]({%slug combobox/load-on-demand/caching-items%})

 * [Automatic Load On Demand]({%slug combobox/load-on-demand/automatic-load-on-demand%})
