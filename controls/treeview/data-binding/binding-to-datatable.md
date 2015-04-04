---
title: Binding to DataTable
page_title: Binding to DataTable | UI for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: treeview/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



## 

__RadTreeView__can be bound to a __DataTable__, __DataSet__ and a __DataView__. This example shows binding to a __DataTable__ object.

The declaration of the __RadTreeView__ object includes no __DataSourceID__ property or __<Items>__ section:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" Skin="WebBlue" OnNodeDataBound="RadTreeView1_NodeDataBound">
	    </telerik:RadTreeView>
````



In the __Page_Load__ event handler, create and fill the __DataTable__ object, then bind it to the __RadTreeView__. You must call the __DataBind__ method after setting the __DataSource__ property. Minimally you must assign the __DataSource__and __DataTextField__properties. Optionally, you can assign __DataFieldID__ and __DataValueField__ properties. The following example binds to a table but does not create a hierarchy. See the [Binding to Hierarchical Data]({%slug treeview/data-binding/binding-to-hierarchical-data%}) and [Getting Started, Binding to a Database]({%slug treeview/getting-started/binding-to-a-database%}) for more information.






>caption 

![RadTreeView DataBase](images/treeview_databindingdatabase.png)



````C#
	     
	
	using System.Data.SqlClient;using Telerik.Web.UI;
	namespace RadTreeView_DataBindDataTable
	{    
	    public partial class _Default : System.Web.UI.Page        
	    {        
	        protected void Page_Load(object sender, EventArgs e)                
	        {                        
	            if (!IsPostBack)                        
	            {                               
	                BindToDataTable(RadTreeView1);                        
	            }               
	        }        
	        private void BindToDataTable(RadTreeView treeView)           
	        {                   
	            SqlConnection connection = new SqlConnection(Properties.Settings.Default.NwindConnectionString);        
	            SqlDataAdapter adapter = new SqlDataAdapter("select CategoryID, CategoryName, Description from Categories", connection);            
	            DataTable dataTable = new DataTable();        
	            adapter.Fill(dataTable);        
	            treeView.DataTextField = "CategoryName";                  
	            treeView.DataFieldID = "CategoryID";                   
	            treeView.DataValueField = "Description";                     
	            treeView.DataSource = dataTable;                    
	            treeView.DataBind();            
	        }  
	    }
	
				
````
````VB.NET
	    Imports System.Data.SqlClient
	    Imports Telerik.Web.UI
	    Imports System.Data
	    Namespace RadTreeView_DataBindDataTable
	        Partial Public Class _Default
	            Inherits System.Web.UI.Page
	            Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	                If (Not IsPostBack) Then
	                    BindToDataTable(RadTreeView1)
	                End If
	            End Sub
	            Private Sub BindToDataTable(ByVal treeView As RadTreeView)
	                Dim connection As New SqlConnection(Properties.Settings.[Default].NwindConnectionString)
	                Dim adapter As New SqlDataAdapter("select CategoryID, CategoryName, Description from Categories", connection)
	                Dim dataTable As New DataTable()
	                adapter.Fill(dataTable)
	                treeView.DataTextField = "CategoryName"
	                treeView.DataFieldID = "CategoryID"
	                treeView.DataValueField = "Description"
	                treeView.DataSource = dataTable
	                treeView.DataBind()
	            End Sub
	        End Class
	    End Namespace
````


# See Also

 * [Overview]({%slug treeview/data-binding/overview%})

 * [Binding to a Database]({%slug treeview/getting-started/binding-to-a-database%})
