---
title: Inheriting Grid Columns
page_title: Inheriting Grid Columns | RadGrid for ASP.NET AJAX Documentation
description: Inheriting Grid Columns
slug: grid/inheritance/inheriting-grid-columns
tags: inheriting,grid,columns
published: True
position: 1
---

# Inheriting Grid Columns



## 

In some scenarios you may want to extend the default functionality of **GridColumn** (including additional properties for it, embedding extra controls in its cells, etc.). The proper way to accomplish this task is by inheriting the corresponding default **GridColumn** class (in your own class) and overriding the **InitializeCell(cell, columnIndex,gridItem)** method of that class. Thus you can reuse the custom configuration of your choice in all your grid instances in your application.The example below shows a basic approach how to redefine the object model for GridBoundColumn:



````ASPNET
	  <%@ Register tagprefix="custom" namespace="MyNamespace" %>
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowPaging="True"
	    AllowSorting="True" runat="server" AutoGenerateColumns="false">
	    <MasterTableView DataKeyNames="CustomerID">
	      <Columns>
	        <custom:MyCustomColumn DataField="CustomerID" HeaderText="CustomerID">
	        </custom:MyCustomColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	     SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````C#
	    public class MyCustomColumn : GridBoundColumn
	    {
	
	        public override void InitializeCell(System.Web.UI.WebControls.TableCell cell, int columnIndex, Telerik.Web.UI.GridItem inItem)
	        {
	            if (inItem is GridHeaderItem)
	            {
	                cell.Text = this.DataField;
	            }
	            if (inItem is GridDataItem)
	            {
	                string ID = inItem.OwnerTableView.DataKeyValues[inItem.ItemIndex]["CustomerID"];
	                cell.Controls.Add(new LiteralControl(ID));
	            }
	        }
	    }
````
````VB.NET
	  Namespace MyNamespace
	
	    Public Class MyCustomColumn
	        Inherits GridBoundColumn
	
	         Public Overrides Sub InitializeCell(ByVal cell As System.Web.UI.WebControls.TableCell, ByVal columnIndex As Integer, ByVal inItem As
	        Telerik.Web.UI.GridItem)
	             If TypeOf inItem Is GridHeaderItem Then
	                cell.Text = Me.DataField
	             End If
	             If TypeOf inItem Is GridDataItem Then
	                 Dim ID As String = inItem.OwnerTableView.DataKeyValues(inItem.ItemIndex)( "CustomerID")
	                cell.Controls.Add( New LiteralControl(ID))
	             End If
	         End Sub
	    End Class
	End Namespace
````


>note When inheriting grid columns in hierarchy, you need to override their Clone() method and copy the base properties as follows:
>


````C#
	    public override GridColumn Clone()
	    {
	        RequiredGridBoundColumn requiredGridBoundColumn = new RequiredGridBoundColumn();
	
	        //you should override CopyBaseProperties if you have some column specific properties
	        requiredGridBoundColumn.CopyBaseProperties(this);
	
	        return requiredGridBoundColumn;
	    }
````



````VB.NET
	    Public Overloads Overrides Function Clone() As GridColumn
	        Dim requiredGridBoundColumn As New RequiredGridBoundColumn()
	
	        'you should override CopyBaseProperties if you have some column specific properties
	        requiredGridBoundColumn.CopyBaseProperties(Me)
	
	        Return requiredGridBoundColumn
	    End Function
````



>note Note that we do not support issues with inherited versions of RadGrid and the purpose of this topic is to provide basic instructions how to inherit your custom grid columns from RadGrid.
>

