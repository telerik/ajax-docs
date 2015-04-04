---
title: Client Templates
page_title: Client Templates | UI for ASP.NET AJAX Documentation
description: Client Templates
slug: searchbox/templates/client-templates
tags: client,templates
published: True
position: 1
---

# Client Templates



## Overview

RadSearchBox provides support for client templates. The template itself contains mark up and binding expressions which are evaluated against a __DataItem__ and then rendered as the Item's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* __#=...#__ - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* __#...#__ - Evaluates the JavaScript code expression inside, but does not output value.

* __#:...#__ - Evaluates the JavaScript code expression or a string property from the data item, and outputs the HTML encoded result in the template.

>important Client templates __can not__ contain server controls.
>


````ASPNET
			 <telerik:RadSearchBox runat="server" ID="RadSearchBox1" 
	            DataSourceID="SqlDataSource1"
	            DataValueField="ProductId"
	            DataTextField="ProductName">
	            <DropDownSettings Height="400" Width="300">
	                <ClientTemplate>
	                    #= DataItem.ID # #= Text #
	                </ClientTemplate>
	            </DropDownSettings>
	            <WebServiceSettings Path="ItemTemplateClient.aspx" Method="GetResults" />
	        </telerik:RadSearchBox>
	        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
	            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	            SelectCommand="SELECT * FROM [Products]">
	        </asp:SqlDataSource>
````





````C#
	    [WebMethod]
	    public static SearchBoxItemData[] GetResults(SearchBoxContext context)
	    {
	        DataTable data = GetData(context.Text);
	
	        List<SearchBoxItemData> result = new List<SearchBoxItemData>();
	
	        for (int i = 0; i < data.Rows.Count; i++)
	        {
	            SearchBoxItemData itemData = new SearchBoxItemData();
	            itemData.Text = data.Rows[i]["ProductName"].ToString();
	            itemData.DataItem.Add("ID", data.Rows[i]["ProductId"].ToString());
	
	            result.Add(itemData);
	        }
	
	        return result.ToArray();
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
	    Public Shared Function GetResults(context As SearchBoxContext) As SearchBoxItemData()
	        Dim data As DataTable = GetData(context.Text)
	
	        Dim result As New List(Of SearchBoxItemData)()
	
	        For i As Integer = 0 To data.Rows.Count - 1
	            Dim itemData As New SearchBoxItemData()
	            itemData.Text = data.Rows(i)("ProductName").ToString()
	            itemData.DataItem.Add("ID", data.Rows(i)("ProductId").ToString())
	
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

