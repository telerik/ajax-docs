---
title: Defining Declaratively
page_title: Defining Declaratively | RadTabStrip for ASP.NET AJAX Documentation
description: Defining Declaratively
slug: tabstrip/radmultipage/defining-declaratively
tags: defining,declaratively
published: True
position: 1
---

# Defining Declaratively



## 

**RadMultiPage**provides a convenient mechanism that lets you define its structure in-line - directly in the .ASPX/.ASCX file.To do this, you need to enclose every **RadPageView** definition in the **<telerik:RadPageView >** ...**</telerik:RadPageView>** tags:

````ASPNET
	  
	  <telerik:RadMultiPage id="RadMultiPage1" runat="server" SelectedIndex="0" Width="400">
	  <telerik:RadPageView id="Pageview1" runat="server">
	      ...     
	  </telerik:RadPageView>
	  <telerik:RadPageView id="Pageview2" runat="server">
	      ...       
	  </telerik:RadPageView>
	  <telerik:RadPageView id="Pageview3" runat="server">
	      ...       
	  </telerik:RadPageView>
	</telerik:RadMultiPage> 
	  
````


