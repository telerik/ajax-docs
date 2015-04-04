---
title: Import from MS Project
page_title: Import from MS Project | UI for ASP.NET AJAX Documentation
description: Import from MS Project
slug: gantt/import/import-from-ms-project
tags: import,from,ms,project
published: True
position: 0
---

# Import from MS Project



__RadGantt__ control can import and work with __MS Project__ data stored in XML format.

## Example

Following code shows how to import [MS Project XML data](http://msdn.microsoft.com/en-us/library/bb968652(v=office.12).aspx)into __RadGantt__ and save it using the [Gantt's XML Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%}).

1. Add simple __RadGantt__ definition in the page markup.

````ASPNET
	        <telerik:RadGantt runat="server" ID="RadGantt1" SelectedView="MonthView"></telerik:RadGantt>
	        <asp:Button ID="btnImport" Text="Import Tasks" runat="server" OnClick="btnImport_Click" />
````



1. Configure __RadGantt__ control to use an empty provider.

>note For the purpose of this demo a[XmlGanttProvider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%}). is used. But the import functionality works with all supported data binding options of the __RadGantt__ control.
>


* *ImportedMSProject.xml*

````XML
	        <?xml version="1.0" encoding="utf-8"?>
	        <Project />
````



>tabbedCode

````C#
	    protected override void OnInit(EventArgs e)
	    {
	        base.OnInit(e);
	        //Create a new gantt XML file where will stored the imported Data from MS Project
	        RadGantt1.Provider = new Telerik.Web.UI.XmlGanttProvider("~/ImportedMSProject.xml");
	    }
````
````VB.NET
	    Protected Overrides Sub OnInit(e As EventArgs)
	        MyBase.OnInit(e)
	        'Create a new gantt XML file where will stored the imported Data from MS Project
	        RadGantt1.Provider = New Telerik.Web.UI.XmlGanttProvider("~/ImportedMSProject.xml")
	    End Sub
````
>end

1. Importing the MS Project data is done using the __ImportXml__ method of the gantt. As a parameter is passed the physical path of the data file.

>tabbedCode

````C#
	    protected void btnImport_Click(object sender, EventArgs e)
	    {
	        RadGantt1.ImportXml(Server.MapPath("MSProjectTasks.xml"));
	    }
````
````VB.NET
	    Protected Sub btnImport_Click(sender As Object, e As EventArgs)
	        RadGantt1.ImportXml(Server.MapPath("MSProjectTasks.xml"))
	    End Sub
````
>end

# See Also

 * [XML Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%})
