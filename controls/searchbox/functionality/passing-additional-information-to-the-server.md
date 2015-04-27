---
title: Passing Additional Information to the Server
page_title: Passing Additional Information to the Server | RadSearchBox for ASP.NET AJAX Documentation
description: Passing Additional Information to the Server
slug: searchbox/functionality/passing-additional-information-to-the-server
tags: passing,additional,information,to,the,server
published: True
position: 5
---

# Passing Additional Information to the Server



## Passing Additional Information to the Server

When using **RadSearchBox** it can often be useful to pass additional information to the server to improve its performance or to set some specific condition. This can easily be achieved in the [OnClientDataRequesting]({%slug searchbox/client-side-programming/events/onclientdatarequesting%}) event by using the **userContext object**, which is of type **IDictionary**, and setting its **KeyValue parameters**. After that this object is passed to the server along with the search request and is available in the [OnDataSourceSelect]({%slug searchbox/server-side-programming/server-events/ondatasourceselect%}) event handler or to the Web Service that searches items to the **RadSearchBox**.

## Using Additional userContext information with a WebService

This example below demonstrates how you can pass an integer value to the Web Service method through the [OnClientDataRequesting]({%slug searchbox/client-side-programming/events/onclientdatarequesting%}) event that will limit your search operation so that only the items that are with smaller ‘UnitPrice’ than the passed one are returned:

````ASPNET
	            <script type="text/javascript">
	                function OnClientDataRequesting(sender, args) {
	                    args.get_userContext()["maxUnitPrice"] = 10;
	                }
	            </script>
	            <telerik:RadSearchBox runat="server" id="RadSearchBox4"
	                onclientdatarequesting="OnClientDataRequesting">
	                <DropDownSettings Height="400" Width="300" />
	                <WebServiceSettings Path="SearchBox.aspx" Method="GetResults" />
	            </telerik:RadSearchBox>
````





````C#
	    [WebMethod]
	    public static SearchBoxItemData[] GetResults(SearchBoxContext context)
	    {
	        int unitPrice = (int)context.UserContext["maxUnitPrice"];
	        List<SearchBoxItemData> result = new List<SearchBoxItemData>();
	        DataTable data = GetData(context.Text, unitPrice);
	        for (int i = 0; i < data.Rows.Count; i++)
	        {
	            SearchBoxItemData itemData = new SearchBoxItemData();
	            itemData.Text = data.Rows[i]["ProductName"].ToString();
	            itemData.Value = data.Rows[i]["ProductId"].ToString();
	        }
	        return result.ToArray();
	    }
	
	    private static DataTable GetData(string filterString, int unitPrice)
	    {
	        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	        SqlCommand command = new SqlCommand("SELECT [ProductId], [ProductName],[UnitPrice] FROM [Products] WHERE [ProductName] LIKE '%' + @filterString + '%' AND [UnitPrice] <=@unitPrice ORDER BY [ProductId]");
	        command.Parameters.AddWithValue("@filterString", filterString);
	        command.Parameters.AddWithValue("@unitPrice", unitPrice);
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
	        Dim unitPrice As Integer = CInt(context.UserContext("maxUnitPrice"))
	        Dim result As New List(Of SearchBoxItemData)()
	        Dim data As DataTable = GetData(context.Text, unitPrice)
	        For i As Integer = 0 To data.Rows.Count - 1
	            Dim itemData As New SearchBoxItemData()
	            itemData.Text = data.Rows(i)("ProductName").ToString()
	            itemData.Value = data.Rows(i)("ProductId").ToString()
	        Next
	        Return result.ToArray()
	    End Function
	
	    Private Shared Function GetData(filterString As String, unitPrice As Integer) As DataTable
	        Dim connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	        Dim command As New SqlCommand("SELECT [ProductId], [ProductName],[UnitPrice] FROM [Products] WHERE [ProductName] LIKE '%' + @filterString + '%' AND [UnitPrice] <=@unitPrice ORDER BY [ProductId]")
	        command.Parameters.AddWithValue("@filterString", filterString)
	        command.Parameters.AddWithValue("@unitPrice", unitPrice)
	        command.Connection = connection
	        Dim adapter As New SqlDataAdapter(command)
	        Dim data As New DataTable()
	        adapter.Fill(data)
	        Return data
	    End Function
````


## Using Additional userContext information with the OnDataSourceSelect event

In the example below it is explained how to achieve the same scenario by passing information to the [OnDataSourceSelect]({%slug searchbox/server-side-programming/server-events/ondatasourceselect%}) server event:

````ASPNET
	
	            <script type="text/javascript">
	               function OnClientDataRequesting(sender, args) {
	                   args.get_userContext()["maxUnitPrice"] = 10;
	               }
	            </script>
	            <telerik:RadSearchBox ID="RadSearchBox1" runat="server" Width="500"
	                DropDownSettings-Height="200px"
	                OnClientDataRequesting="OnClientDataRequesting" DataSourceID="SqlDataSource1" 
	                DataTextField="ProductName" DataValueField="ProductID" 
	                OnDataSourceSelect="RadSearchBox1_DataSourceSelect">
	            </telerik:RadSearchBox>
	            <asp:SqlDataSource ID="SqlDataSource1" runat="server"
	                ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                SelectCommand="SELECT [ProductId], [ProductName],[UnitPrice] FROM [Products]">
	            </asp:SqlDataSource>
	
````





````C#
	
	    protected void RadSearchBox1_DataSourceSelect(object sender, SearchBoxDataSourceSelectEventArgs e)
	    {
	        SqlDataSource source = (SqlDataSource)e.DataSource;
	        RadSearchBox searchBox = (RadSearchBox)sender;
	        string likeCondition = string.Format("'{0}{1}%'", searchBox.Filter == SearchBoxFilter.Contains ? "%" : "", e.FilterString);
	        string unitPrice = e.UserContext["maxUnitPrice"].ToString();
	        source.SelectCommand = "SELECT * FROM[Products] WHERE [" + searchBox.DataTextField + "] LIKE " + likeCondition + "AND [UnitPrice] <=" + unitPrice;
	    }
	
````
````VB.NET
	    Protected Sub RadSearchBox1_DataSourceSelect(sender As Object, e As SearchBoxDataSourceSelectEventArgs)
	        Dim source As SqlDataSource = DirectCast(e.DataSource, SqlDataSource)
	        Dim searchBox As RadSearchBox = DirectCast(sender, RadSearchBox)
	        Dim likeCondition As String = String.Format("'{0}{1}%'", If(searchBox.Filter = SearchBoxFilter.Contains, "%", ""), e.FilterString)
	        Dim unitPrice As String = e.UserContext("maxUnitPrice").ToString()
	        source.SelectCommand = "SELECT * FROM[Products] WHERE [" + searchBox.DataTextField + "] LIKE " + likeCondition + "AND [UnitPrice] <=" + unitPrice
	    End Sub
````

