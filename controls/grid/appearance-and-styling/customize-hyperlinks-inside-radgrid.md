---
title: Customize Hyperlinks inside RadGrid
page_title: Customize Hyperlinks inside RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Customize Hyperlinks inside RadGrid
slug: grid/appearance-and-styling/customize-hyperlinks-inside-radgrid
tags: customize,hyperlinks,inside,radgrid
published: True
position: 8
---

# Customize Hyperlinks inside RadGrid



## 

You can use css style selectors to get the desired appearance. You need to define those css settings in separate classes and then assign them to the grid through the **CssClass** property of the control.

There are cases when one would like to have different visualization for the links in the grid, compared to the ones outside the grid. Below is an example code which will make the default color of the links in the **GridHyperLinkColumn** to be brown. The links will turn orange and will have bigger font size on mouse hover or when visited.

There are two cases when you want to change the default color of links in **GridHyperLinkColumn**:

* When RadGrid has set Skin property(built-in skin or a custom one) different than empty string(e.g. "").

>note Note that, in case you omit to set the Skin property, the Default skin is used.
>


````ASP.NET
	  <html>
	  <head>
	    <title>Customize hyperlinks in Telerik RadGrid</title>
	    <style>
	      div.RadGrid_Default .rgRow a,
	      div.RadGrid_Default .rgAltRow a
	      {
	        color: brown;
	      }
	      div.RadGrid_Default .rgRow a:hover,
	      div.RadGrid_Default .rgRow a:visited,
	      div.RadGrid_Default .rgAltRow a:hover,
	      div.RadGrid_Default .rgAltRow a:visited
	      {
	        color: orange;
	        font-size: 15px;
	      }
	    </style>
	  </head>
	  <body>
	    <form id="Form1" method="post" runat="server">
	    <telerik:RadGrid ID="RadGrid1" CssClass="RadGrid" runat="server" AutoGenerateColumns="False"
	      Skin="Default">
	      <MasterTableView>
	        <Columns>
	          <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact Name" DataField="ContactName">
	          </telerik:GridBoundColumn>
	          <telerik:GridBoundColumn UniqueName="Address" HeaderText="Address" DataField="Address">
	          </telerik:GridBoundColumn>
	          <telerik:GridHyperLinkColumn NavigateUrl="http://www.sharepointcontrols.com" UniqueName="HyperLinkColumn"
	            HeaderText="Button Column" Text="link button">
	          </telerik:GridHyperLinkColumn>
	        </Columns>
	      </MasterTableView>
	    </telerik:RadGrid>
	    <a href="http://www.sharepointcontrols.com">go to our mcmscontrols site</a>
	    </form>
	  </body>
	  </html>
````



>note In this example we have used Default skin of RadGrid. In case you want to use different Skin, you should substitute **Default** from **RadGrid_Default** with the respective Skin name(e.g. RadGrid_[SkinName]).
>


## 

* When RadGrid has Skin property set to an empty string("").

````ASP.NET
	  <html>
	  <head>
	    <title>Customize hyperlinks in Telerik RadGrid</title>
	    <style>
	      .RadGrid a     
	      {
	        color: brown;
	      }
	      .RadGrid  a:hover,
	      .RadGrid  a:visited     
	      {
	        color: orange;
	        font-size: 15px;
	      }
	    </style>
	  </head>
	  <body>
	    <form id="Form2" method="post" runat="server">
	    <telerik:RadGrid ID="RadGrid1" CssClass="RadGrid" runat="server" AutoGenerateColumns="False"
	      Skin="">
	      <MasterTableView>
	        <Columns>
	          <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact Name" DataField="ContactName">
	          </telerik:GridBoundColumn>
	          <telerik:GridBoundColumn UniqueName="Address" HeaderText="Address" DataField="Address">
	          </telerik:GridBoundColumn>
	          <telerik:GridHyperLinkColumn NavigateUrl="http://www.sharepointcontrols.com" UniqueName="HyperLinkColumn"
	            HeaderText="Button Column" Text="link button">
	          </telerik:GridHyperLinkColumn>
	        </Columns>
	      </MasterTableView>
	    </telerik:RadGrid>
	    <a href="http://www.sharepointcontrols.com">go to our mcmscontrols site</a>
	    </form>
	  </body>
	  </html>
````


