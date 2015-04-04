---
title: Binding to Web service
page_title: Binding to Web service | UI for ASP.NET AJAX Documentation
description: Binding to Web service
slug: autocompletebox/data-binding/binding-to-web-service
tags: binding,to,web,service
published: True
position: 4
---

# Binding to Web service



## 

RadAutoCompleteBox can be bound to Web service. The path to the Web service and the name of the service method are specified in the __WebServiceSettings' Path__ and __Method__ properties:

>note The text currently present in the input area can be obtained from the context object used by the WebService's method.
>


````JavaScript
			<script type="text/javascript">
				function requesting(sender, eventArgs) {
					var context = eventArgs.get_context();
					//Data passed to the service.
					context["ClientData"] = "ClientData_Passed_To_The_Service";
				}
			</script>
````



````ASPNET
			<telerik:radautocompletebox runat="server" id="RadAutoCompleteBox1" onclientrequesting="requesting">
				<WebServiceSettings Path="LoadEntries.asmx" Method="GetCompanyNames" />
			</telerik:radautocompletebox>
````



To use the integrated support, the Web service should have the following signature:

>tabbedCode

````C#
		[WebMethod]
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
	    <WebMethod()>
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
>end



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
