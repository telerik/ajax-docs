---
title: Printing Problem
page_title: Printing Problem | UI for ASP.NET AJAX Documentation
description: Printing Problem
slug: splitter/troubleshooting/printing-problem
tags: printing,problem
published: True
position: 0
---

# Printing Problem



## Problem:

When printing RadPane containing Telerik controls or other decorated controls, some of them are not rendered correctly.

## Description:

The reason for this issue is the missing CSS files decorating the controls. When calling RadPane’s print method the content of the pane is loaded inside a new browser’s window which does not contain the CSS files registered on the parent page.

## Solution:

In order to avoid this problem you need to manually load the CSS files. RadPane’s print method accepts a string array as an argument with paths to external CSS files that should be loaded in the newly opened window.

The following sample demonstrates how to get reference to the RadComboBox’s CSS files path as WebResources and provide them to the RadPane’s Print() method:

````JavaScript
	    <telerik:radsplitter id="RadSplitter1" runat="server">
	    <telerik:RadPane ID="RadPane1" runat="server">
	     <telerik:RadComboBox ID="RadComboBox1" runat="server">
	      <Items>
	       <telerik:RadComboBoxItem Text="Item 1" />
	       <telerik:RadComboBoxItem Text="Item 2" />
	       <telerik:RadComboBoxItem Text="Item 3" />
	       <telerik:RadComboBoxItem Text="Item 4" />
	      </Items>
	     </telerik:RadComboBox>
	    </telerik:RadPane>
	    </telerik:radsplitter>
	    <asp:Button ID="printPane" runat="server" Text="Print RadPane's Content" OnClientClick="PrintPane(); return false;" />
	    <telerik:radcodeblock id="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	        function PrintPane()
	        {
	            var splitter = $find("<%=RadSplitter1.ClientID %>");
	            var pane = splitter.getPaneById("RadPane1");
	            //get reference to the RadComboBox CSS files WebResource
	            var radComboBoxBaseStylesheet = '<%= Page.ClientScript.GetWebResourceUrl(typeof(RadComboBox), "Telerik.Web.UI.Skins.ComboBox.css") %>';
	            var radComboBoxDefaultSkinStylesheet = '<%= Page.ClientScript.GetWebResourceUrl(typeof(RadComboBox), "Telerik.Web.UI.Skins.Default.ComboBox.Default.css") %>';
	            
	            var externalCssFiles = new Array();
	            externalCssFiles.push(radComboBoxBaseStylesheet);
	            externalCssFiles.push(radComboBoxDefaultSkinStylesheet);
	            pane.Print(externalCssFiles);
	        }
	    </script>
	    </telerik:radcodeblock>
````


