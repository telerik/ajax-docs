---
title: Web Service Binding
page_title: Web Service Binding | UI for ASP.NET AJAX Documentation
description: Web Service Binding
slug: searchbox/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 5
---

# Web Service Binding



## 

RadSearchBox can be bound to Web service. The path to the Web service and the name of the service method are specified in the __WebServiceSettings' Path__ and __Method__ properties:

````ASPNET
			<telerik:RadSearchBox runat="server" ID="RadSearchBox1">
	            <WebServiceSettings Method="GetItems" Path="WebService.asmx" />
	        </telerik:RadSearchBox>
````



To use the integrated support, the Web service should have the following signature:

>tabbedCode

````C#
	
	    [WebMethod]
	    public SearchBoxData GetItems(SearchBoxContext context)
	    {
	        DataTable data = GetData(context.Text);
	
	        List<SearchBoxItemData> items = new List<SearchBoxItemData>();
	
	        for (int i = 0; i < data.Rows.Count; i++)
	        {
	            SearchBoxItemData itemData = new SearchBoxItemData();
	            itemData.Text = data.Rows[i]["ProductName"].ToString();
	            itemData.Value = data.Rows[i]["ProductId"].ToString();
	
	            items.Add(itemData);
	        }
	
	        SearchBoxData result = new SearchBoxData();
	        result.Items = items.ToArray();
	        return result;
	    }
	
	    private static DataTable GetData(string filterString)
	    {
	        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	        SqlCommand command = new SqlCommand("SELECT [ProductId], [ProductName] FROM [Products] WHERE [ProductName] LIKE '%' + @filterString + '%' ORDER BY [ProductId]");
	        command.Parameters.AddWithValue("@filterString", filterString);
	        command.Connection = connection;
	        SqlDataAdapter adapter = new SqlDataAdapter(command);
	
	        DataTable data = new DataTable();
	        adapter.Fill(data);
	        return data;
	    }
	
````
````VB.NET
	
	    <WebMethod> _
	    Public Function GetItems(context As SearchBoxContext) As SearchBoxItemData()
	        Dim data As DataTable = GetData(context.Text)
	
	        Dim result As New List(Of SearchBoxItemData)()
	
	        For i As Integer = 0 To data.Rows.Count - 1
	            Dim itemData As New SearchBoxItemData()
	            itemData.Text = data.Rows(i)("ProductName").ToString()
	            itemData.Value = data.Rows(i)("ProductId").ToString()
	
	            result.Add(itemData)
	        Next
	
	        Return result.ToArray()
	    End Function
	
	    Private Shared Function GetData(filterString As String) As DataTable
	        Dim connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	        Dim command As New SqlCommand("SELECT [ProductId], [ProductName] FROM [Products] WHERE [ProductName] LIKE '%' + @filterString + '%' ORDER BY [ProductId]")
	        command.Parameters.AddWithValue("@filterString", filterString)
	        command.Connection = connection
	        Dim adapter As New SqlDataAdapter(command)
	
	        Dim data As New DataTable()
	        adapter.Fill(data)
	        Return data
	    End Function
	
````
>end


