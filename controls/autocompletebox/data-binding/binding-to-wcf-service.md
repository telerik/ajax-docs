---
title: Binding to WCF service
page_title: Binding to WCF service | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Binding to WCF service
slug: autocompletebox/data-binding/binding-to-wcf-service
tags: binding,to,wcf,service
published: True
position: 5
---

# Binding to WCF service



## 

RadAutoCompleteBox supports WCF binding. The steps below show how to load items from WCF service. It also shows how to use the **context** object to pass information from the client to the OperationContract.

````JavaScript
<script type="text/javascript">
	function requesting(sender, eventArgs) {
		var context = eventArgs.get_context();
		//Data passed to the service.
		context["ClientData"] = "ClientData_Passed_To_The_Service";
	}
</script>
````



The path to the Web service and the name of the service method are specified in the **WebServiceSettings' Path** and **Method** properties:

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox2" OnClientRequesting="requesting">
	<WebServiceSettings Path="LoadEntriesWCF.svc" Method="GetCompanyNames" />
</telerik:RadAutoCompleteBox>
````



To use the integrated support, the Web service should have the following signature:



````C#
[OperationContract]
public AutoCompleteBoxData GetCompanyNames(RadAutoCompleteContext context)
{
	//Accesses the additional data sent from the client.
	string clientData = context["ClientData"].ToString();

	string sql = "SELECT  * from Customers WHERE CompanyName LIKE '" + context.Text + "%'";
	SqlDataAdapter adapter = new SqlDataAdapter(sql,
		ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	DataTable data = new DataTable();
	adapter.Fill(data);
	List<AutoCompleteBoxItemData> result = new List<AutoCompleteBoxItemData>();
	AutoCompleteBoxData  dropDownData = new AutoCompleteBoxData();

	result = new List<AutoCompleteBoxItemData>();

	for (int i = 0; i < data.Rows.Count; i++)
	{
		AutoCompleteBoxItemData  itemData = new AutoCompleteBoxItemData();
		itemData.Text = data.Rows[i]["CompanyName"].ToString();
		itemData.Value = data.Rows[i]["CustomerID"].ToString();

		result.Add(itemData);
	}

	dropDownData.Items = result.ToArray();
	return dropDownData;
}
````
````VB.NET
<OperationContract()>
Public Function GetCompanyNames(context As RadAutoCompleteContext) As AutoCompleteBoxData
	'Accesses the additional data sent from the client.
	Dim clientData As String = context("ClientData").ToString()

	Dim sql As String = "SELECT  * from Customers WHERE CompanyName LIKE '" + context.Text + "%'"
	Dim adapter As New SqlDataAdapter(sql, ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	Dim data As New DataTable()
	adapter.Fill(data)
	Dim result As New List(Of AutoCompleteBoxItemData)()
	Dim dropDownData As New AutoCompleteBoxData()

	result = New List(Of AutoCompleteBoxItemData)()

	For i As Integer = 0 To data.Rows.Count - 1
		Dim itemData As New AutoCompleteBoxItemData()
		itemData.Text = data.Rows(i)("CompanyName").ToString()
		itemData.Value = data.Rows(i)("CustomerID").ToString()

		result.Add(itemData)
	Next

	dropDownData.Items = result.ToArray()
	Return dropDownData
End Function
````


# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
