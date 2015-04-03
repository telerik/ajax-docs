---
title: Programmatic Creation from XML
page_title: Programmatic Creation from XML | UI for ASP.NET AJAX Documentation
description: Programmatic Creation from XML
slug: grid/data-binding/programmatic-creation-from-xml
tags: programmatic,creation,from,xml
published: True
position: 4
---

# Programmatic Creation from XML



## 

You can load the structure of a __RadGrid__ control from a file containing its XML representation. This approach is useful when you want to load grid instances with equal predefined settings on different pages of your web site.

The following steps describe how to import the structure of a grid:

1. Create an XSL file that contains the grid structure you want to import and a dummy XML file for receiving the grid structure.

1. On the ASPX file for the Web page, add a __PlaceHolder__ control to receive the grid, plus any other elements you want (such as data source controls).

1. In the __Page_Init__ event handler of your Web page

1. Load an __XPathDocument__ with the dummy XML file and an __XslCompiledTransform__ object with the XSL file you created.

1. Create a __StringWriter__.

1. With the __XslCompiledTransform__ object, use the __StringWriter__ to transform the XSL definition to the XML file. This loads the transformed XML file into the __StringWriter__.

1. Create a __StringBuilder__ object, and initialize it with the "<%@ Register >" directive for the Telerik.Web.UI assembly.

1. Load the contents of the __StringWriter__ (the grid structure) into your __StringBuilder__ object.

1. Using the __StringBuilder__, remove theXML file header and xmlns string.

1. Call __Page.ParseControl__, passing in the contents of the __StringBuilder__, to create an instance of the grid based on the structure that the __StringBuilder__ contains.

1. Add the grid instance to the __PlaceHolder__ control in the ASPX file for the Web page.

>note The grid should be loaded and added to the Web page in the __Page_Init__ event handler.
>


````XML
	<?xml version="1.0" encoding="utf-8"?>
	<xsl:stylesheet version="1.0"
	   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	   xmlns:telerik="remove">
	 <xsl:template match="/">
	   <div>
	     <telerik:RadGrid
	         ID="RadGrid1" runat="server"
	         DataSourceID = "SqlDataSource1";
	         Width="95%"
	         AllowFilteringByColumn="True"
	         AllowSorting="True"
	         PageSize="15"
	         ShowFooter="True"
	         ShowGroupPanel="True"
	         AllowPaging="True"
	         AllowMultiRowSelection="True">
	       <HeaderStyle Width="150px" />
	       <ClientSettings
	            ReorderColumnsOnClient="True"
	            AllowDragToGroup="True"
	            AllowColumnsReorder="True">
	         <Scrolling
	           AllowScroll="True"
	           UseStaticHeaders="True">
	         </Scrolling>
	         <Resizing
	           AllowRowResize="True"
	           AllowColumnResize="True">
	         </Resizing>
	         <Selecting AllowRowSelect="True" />
	       </ClientSettings>
	     </telerik:RadGrid>
	   </div>
	 </xsl:template>
	</xsl:stylesheet>
				
````



````XML
	     
	<?xml version="1.0" encoding="utf-8" ?>
	<root>
	    <foo/>
	</root>
				
````



In the code-behind:

>tabbedCode

````C#
	
	
	    public void Page_Init(object sender, EventArgs e)
	    {
	        XPathDocument MyXPathDocument = new XPathDocument(Server.MapPath("XMLFile.xml"));
	        XslCompiledTransform MyXslTransform = new XslCompiledTransform();
	        MyXslTransform.Load(Server.MapPath("XSLTFile.xsl"));
	        StringWriter MyStringWriter = new StringWriter();
	        MyXslTransform.Transform(MyXPathDocument, null, MyStringWriter);
	        StringBuilder MyStringBuilder = new StringBuilder();
	        MyStringBuilder.Append(@"<%@ Register Assembly=""Telerik.Web.UI"" Namespace=""Telerik.Web.UI"" TagPrefix=""telerik"" %>");
	        MyStringBuilder.Append(MyStringWriter.ToString());
	        MyStringBuilder = MyStringBuilder.Replace("xmlns:telerik=\"remove\"", "");
	        MyStringBuilder = MyStringBuilder.Replace(@"<?xml version=""1.0"" encoding=""utf-16""?>", "");
	        Control ctrl = Page.ParseControl(MyStringBuilder.ToString());
	        PlaceHolder1.Controls.Add(ctrl);
	    }
	
	
````



````VB.NET
	
	
	    Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
	        Dim MyXPathDocument As XPathDocument = New XPathDocument(Server.MapPath("~/App_Data/XMLFile.xml"))
	        Dim MyXslTransform As XslCompiledTransform = New XslCompiledTransform()
	        MyXslTransform.Load(Server.MapPath("~/App_Data/XSLTFile.xsl"))
	        Dim MyStringWriter As StringWriter = New StringWriter()
	        MyXslTransform.Transform(MyXPathDocument, Nothing, MyStringWriter)
	        Dim MyStringBuilder As StringBuilder = New StringBuilder()
	        MyStringBuilder.Append("<%@ Register Assembly=""Telerik.Web.UI"" Namespace=""Telerik.Web.UI"" TagPrefix=""telerik"" %>")
	        MyStringBuilder.Append(MyStringWriter.ToString())
	        MyStringBuilder = MyStringBuilder.Replace("xmlns:telerik=""remove""", "")
	        MyStringBuilder = MyStringBuilder.Replace("<?xml version=""1.0"" encoding=""utf-16""?>", "")
	        Dim ctrl As Control = Page.ParseControl(MyStringBuilder.ToString())
	        PlaceHolder1.Controls.Add(ctrl)
	    End Sub
	
	
````


>end
