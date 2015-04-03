---
title: Loading Items from a Web Service
page_title: Loading Items from a Web Service | UI for ASP.NET AJAX Documentation
description: Loading Items from a Web Service
slug: combobox/load-on-demand/loading-items-from-a-web-service
tags: loading,items,from,a,web,service
published: True
position: 2
---

# Loading Items from a Web Service



## 

Instead of supplying an __ItemsRequested__ event handler to add items on demand to RadComboBox, you can use a Web service to service the items request. The path to the Web service and the name of the service method are specified in the __WebServiceSettings' Path__ and __Method__ properties:

>note RadComboBox input's __Text__ can be obtained from the context object used by the WebService's method. The context object should be cast to __IDictionary__ type, first.
>


````C#
		public RadComboBoxItemData[] GetProducts(object context)
		{
			IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
			//Returns the Text of RadComboBox' input field.
			contextDictionary["Text"].ToString();
			//Returns the value set in the OnClientItemsRequesting event handler.
			contextDictionary["FilterString"].ToString();
		}
	
		public RadComboBoxData GetCompanyNames(RadComboBoxContext context)
		{
			//Returns the Text of RadComboBox' input field.
			var comboText = context.Text;
		}
````



````ASPNET
	
	    <script type="text/javascript">
	        function OnClientItemsRequesting(sender, eventArgs) {
	            var context = eventArgs.get_context();
	            context["FilterString"] = eventArgs.get_text();
	        }
	    </script>
	
	    <telerik:radcombobox 
	        runat="server" 
	        id="RadComboBox1" 
	        width="300px" 
	        enableloadondemand="true"
	        onclientitemsrequesting="OnClientItemsRequesting">    
	    <WebServiceSettings Method="GetProducts" Path="Products.asmx" />
	    </telerik:radcombobox>
````



To use the integrated support, the Web service should have the following signature:

>tabbedCode

````C#
	
	
	    [WebMethod]
	    public RadComboBoxItemData[] GetProducts(object context)
	    {
	        IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
	        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	        string filterString = ((string)contextDictionary["FilterString"]).ToLower(); 
	        SqlCommand selectCommand = new SqlCommand(
	     @" SELECT * FROM Customers WHERE LOWER(CompanyName) LIKE '" + filterString + "%'", connection);
	        SqlDataAdapter adapter = new SqlDataAdapter(selectCommand); 
	        DataTable products = new DataTable(); 
	        adapter.Fill(products);
	        List<RadComboBoxItemData> result = new List<RadComboBoxItemData>(products.Rows.Count); 
	        foreach (DataRow row in products.Rows) 
	        { 
	            RadComboBoxItemData itemData = new RadComboBoxItemData(); 
	            itemData.Text = row["CompanyName"].ToString(); 
	            itemData.Value = row["CompanyName"].ToString(); 
	            result.Add(itemData); 
	        }
	        return result.ToArray();
	    }
	    [WebMethod]
	    public RadComboBoxData GetCompanyNames(RadComboBoxContext context)
	    {    
	        //RadComboBoxContext context1 = new JavaScriptSerializer().ConvertToType<RadComboBoxContext>(context);    
	        string sql = "SELECT * from Customers WHERE CompanyName LIKE '" + context.Text + "%'";
	        SqlDataAdapter adapter = new SqlDataAdapter(sql, ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString); 
	        DataTable data = new DataTable(); adapter.Fill(data); 
	        List<RadComboBoxItemData> result = new List<RadComboBoxItemData>(context.NumberOfItems); 
	        RadComboBoxData comboData = new RadComboBoxData(); 
	        try
	        {
	            int itemsPerRequest = 10; 
	            int itemOffset = context.NumberOfItems; 
	            int endOffset = itemOffset + itemsPerRequest; 
	            if (endOffset > data.Rows.Count) 
	            { 
	                endOffset = data.Rows.Count; 
	            } 
	            if (endOffset == data.Rows.Count) 
	            { 
	                comboData.EndOfItems = true; 
	            } 
	            else 
	            { 
	                comboData.EndOfItems = false; 
	            }
	            result = new List<RadComboBoxItemData>(endOffset - itemOffset);
	            for (int i = itemOffset; i < endOffset; i++) 
	            { 
	                RadComboBoxItemData itemData = new RadComboBoxItemData(); 
	                itemData.Text = data.Rows[i]["CompanyName"].ToString(); 
	                itemData.Value = data.Rows[i]["CompanyName"].ToString(); 
	                result.Add(itemData); 
	            }
	            if (data.Rows.Count > 0) 
	            {
	                comboData.Message = String.Format("Items <b>1</b>-<b>{0}</b> out of <b>{1}</b>", endOffset.ToString(), data.Rows.Count.ToString()); 
	            } 
	            else 
	            { 
	                comboData.Message = "No matches"; 
	            }
	        }
	        catch (Exception e) 
	        { 
	            comboData.Message = e.Message; 
	        }
	        comboData.Items = result.ToArray(); 
	        return comboData;
	    }
	
````



````VB.NET
	
	
	<WebMethod()> 
	    Public Function GetProducts(ByVal context As Object) As RadComboBoxItemData()
	        Dim contextDictionary As IDictionary(Of String, Object) = DirectCast(context, IDictionary(Of String, Object))
	        Dim connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	        Dim filterString As String = (DirectCast(contextDictionary("FilterString"), String)).ToLower()
	        Dim selectCommand As New SqlCommand("" & Chr(9) & 
	    "SELECT * FROM Customers" & Chr(13) & "" & Chr(10) & " WHERE LOWER(CompanyName) LIKE '" + filterString + "%'", connection)
	        Dim adapter As New SqlDataAdapter(selectCommand)
	        Dim products As New DataTable()
	        adapter.Fill(products)
	        Dim result As New List(Of RadComboBoxItemData)(products.Rows.Count)
	        For Each row As DataRow In products.Rows
	            Dim itemData As New RadComboBoxItemData()
	            itemData.Text = row("CompanyName").ToString()
	            itemData.Value = row("CompanyName").ToString()
	            result.Add(itemData)
	        Next
	        Return result.ToArray()
	    End Function
	<WebMethod()>
	
	    Public Function GetCompanyNames(ByVal context As RadComboBoxContext) As RadComboBoxData
	
	        'RadComboBoxContext context1 = new JavaScriptSerializer().ConvertToType<RadComboBoxContext>(context);
	        Dim sql As String = "SELECT * from Customers WHERE CompanyName LIKE '" + context.Text + "%'"
	        Dim adapter As New SqlDataAdapter(sql, ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	        Dim data As New DataTable()
	        adapter.Fill(data)
	        Dim result As New List(Of RadComboBoxItemData)(context.NumberOfItems)
	        Dim comboData As New RadComboBoxData()
	        Try
	            Dim itemsPerRequest As Integer = 10
	            Dim itemOffset As Integer = context.NumberOfItems
	            Dim endOffset As Integer = itemOffset + itemsPerRequest
	            If endOffset > data.Rows.Count Then
	                endOffset = data.Rows.Count
	            End If
	            If endOffset = data.Rows.Count Then
	                comboData.EndOfItems = True
	            Else
	                comboData.EndOfItems = False
	            End If
	            result = New List(Of RadComboBoxItemData)(endOffset - itemOffset)
	            Dim i As Integer = itemOffset
	            While i < endOffset
	                Dim itemData As New RadComboBoxItemData()
	                itemData.Text = data.Rows(i)("CompanyName").ToString()
	                itemData.Value = data.Rows(i)("CompanyName").ToString()
	                result.Add(itemData)
	                i = i + 1
	            End While
	            If data.Rows.Count > 0 Then
	                comboData.Message = [String].Format("Items <b>1</b>-<b>{0}</b> out of <b>{1}</b>", endOffset.ToString(), data.Rows.Count.ToString())
	            Else
	                comboData.Message = "No matches"
	            End If
	        Catch e As Exception
	            comboData.Message = e.Message
	        End Try
	        comboData.Items = result.ToArray()
	        Return comboData
	    End Function
	
````


>end

__For a live example refer to the online demo:__[Populate From Web Service.](http://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/autocompletesql/defaultcs.aspx)

# See Also

 * [ShowMoreResultsBox/Virtual Scrolling]({%slug combobox/load-on-demand/showmoreresultsbox/virtual-scrolling%})
