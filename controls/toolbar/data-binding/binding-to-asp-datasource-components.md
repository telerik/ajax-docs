---
title: Binding to ASP DataSource Components
page_title: Binding to ASP DataSource Components | RadToolBar for ASP.NET AJAX Documentation
description: Binding to ASP DataSource Components
slug: toolbar/data-binding/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 3
---

# Binding to ASP DataSource Components



**RadToolBar** supports binding to all ASP.NET 2.0 DataSource components, including

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

To bind to a DataSource component, all you need to do is set the **DataSourceID** property of the toolbar to the ID of the DataSource component. You should also set the **DataTextField** and **DataValueField** properties of the toolbar to map the **Text** and **Value** properties of the buttons to the respective columns/fields from the data source.

If you need to map additional columns from the data source to properties of the toolbar buttons, you can use the **ButtonDataBound** event. The event arguments passed to the event, **e.Button** and **e.Button.DataItem**, hold the instance of the toolbar button being bound and the **DataItem** to which it is bound. You can map a property from the **DataItem** to the corresponding property of the toolbar button. Be sure to cast the **DataItem** object to the proper data type first.


````C#	     
protected void RadToolBar1_ButtonDataBound(object sender, RadToolBarButtonEventArgs e)
{    
    DataRowView dataSourceRow = (DataRowView) e.Button.DataItem;    
    e.Button.Attributes["customAttribute"] = dataSourceRow["CustomAttribute"].ToString();       
    e.Button.ToolTip = "Read more about" + (string)DataBinder.Eval(e.Button.DataItem, "Text");
}				
````
````VB.NET
Protected Sub RadToolBar1_ButtonDataBound(ByVal sender As Object, ByVal e As RadToolBarButtonEventArgs)

    Dim dataSourceRow As DataRowView = DirectCast(e.Button.DataItem, DataRowView)
    e.Button.Attributes("customAttribute") = dataSourceRow("CustomAttribute").ToString()
    e.Button.ToolTip = "Read more about" + DirectCast(DataBinder.Eval(e.Button.DataItem, "Text"), String)

End Sub	
````

Table-based **DataSource** components, such as **SqlDataSource** and **AccessDataSource** can be used to bind the toolbar declaratively in design time.

## AccessDataSource

````ASPNET
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/Data/ToolBar.mdb"
    SelectCommand="SELECT * FROM [Tools]"></asp:AccessDataSource>
<telerik:RadToolBar ID="RadToolBar1" runat="server" DataTextField="Text" DataValueField="Value"
    DataSourceID="AccessDataSource1" OnItemDataBound="RadToolBar1_ButtonDataBound" />
````


## SqlDataSource

````ASPNET
<telerik:RadToolBar runat="server" ID="RadToolBar1" DataSourceID="SqlDataSource1"
    DataTextField="TargetName" DataValueField="TargetValue" OnTabDataBound="RadToolBar1_ButtonDataBound">
</telerik:RadToolBar>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="Persist Security Info=False;Integrated Security=true;Initial Catalog=MyDB;server=(local)"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT TargetName, TargetValue from ToolBarTable" />
````

## XmlDataSource

````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" DataSourceID="XmlDataSource1"
    Orientation="Horizontal" DataTextField="Text" DataValueField="Value">
    <CollapseAnimation Duration="200" Type="OutQuint" />
</telerik:RadToolBar>
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/Buttons.xml" XPath="Items/Item">
</asp:XmlDataSource>
````

````XML
<?xml version="1.0" encoding="utf-8" ?>
<items>
     <Item Text="Add One" Value="1" /> 
     <Item Text="Add Two" Value="2" /> 
     <Item Text="Add Three" Value="3" />
</items>
````

## ObjectDataSource

You can bind **RadToolBar** to an object-based data source such as **ObjectDataSource** or any class that implements the **IEnumerable** interface.

When using **ObjectDataSource**, you can bind **RadToolBar** declaratively at design time. The **SelectMethod** of the **ObjectDataSource** should return an object that supports the **IEnumerable** or **ICollection** interface. Such collections include **Array**, **ArrayList**, and **List<type>**.

If the **SelectMethod** returns a collection of strings, those strings are automatically mapped to the **Text** property of the respective buttons. If the collection contains objects (as opposed to string values), you can use the **DataTextField** and the **DataValueField** properties to map a property from the object directly to the **Text** and **Value** properties of the button.

To map additional properties from the object to other properties of the respective button, use a [ButtonDataBound event handler]({%slug toolbar/server-side-programming/buttondatabound%}). The event arguments passed to the event, **e.Button** and **e.Button.DataItem**, hold the instance of the button being bound and the **DataItem** associated with the button. You can map a property from the **DataItem** to the property of the **RadToolBarButton** class (make sure to cast the **DataItem** object to your respective data type first).

The following example shows a **RadToolBar** bound declaratively to an **ObjectDataSource**:

````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" DataSourceID="ObjectDataSource1">
</telerik:RadToolBar>
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetButtons" TypeName="ButtonsArray"></asp:ObjectDataSource>
````


````C#
using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Collections;
using System.Data;
using System.IO;

public class ButtonsArray
{    
	public ButtonsArray()
	{ }      
	
	public static ArrayList GetButtons()       
	{   
	    ArrayList buttonsList = new ArrayList();         
	    buttonsList.Add("One");         
	    buttonsList.Add("Two");        
	    buttonsList.Add("Three");        
	    return buttonsList;       
	}   
}		
````
````VB.NET
Imports System
Imports System.Data
Imports System.Configuration
Imports System.Web
Imports System.Web.Security
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Web.UI.WebControls.WebParts
Imports System.Web.UI.HtmlControls
Imports System.Collections
Imports System.Data
Imports System.IO

Public Class ButtonsArray

    Public Sub New()
    End Sub

    Public Shared Function GetButtons() As ArrayList
        Dim buttonsList As New ArrayList()
        buttonsList.Add("One")
        buttonsList.Add("Two")
        buttonsList.Add("Three")
        Return buttonsList
    End Function
End Class	
````

The **ObjectDataSource** component is configured to use the following class definition:

# See Also

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Binding to Array or ArrayList ]({%slug toolbar/data-binding/binding-to-array-or-arraylist-%})
