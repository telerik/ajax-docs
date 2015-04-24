---
title: RadPanelBar Occupy 100% of Browser Window Height
page_title: RadPanelBar Occupy 100% of Browser Window Height | RadPanelBar for ASP.NET AJAX Documentation
description: RadPanelBar Occupy 100% of Browser Window Height
slug: panelbar/how-to/radpanelbar-occupy-100%-of-browser-window-height
tags: radpanelbar,occupy,100%,of,browser,window,height
published: True
position: 3
---

# RadPanelBar Occupy 100% of Browser Window Height



## 

1. Add the following style in the head tag of your ASPX:

````ASPNET
	     
		<style type="text/css">
		    html, body, form
		    {    
		        margin:0px;    
		        padding:0px;    
		        height:100%;
		    }
		 </style>
				
````



1. Set the ExpandMode property of the panelbar control to FullExpandedItem;

1. Set Height="100%" in the definition of the panelbar control

Here’s a sample code snippet that demonstrates the approach:

````ASPNET
	     
	
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head id="Head1" runat="server">
	   <title>Untitled Page</title>
	   <style type="text/css">
	   html, body, form
	   {
	       margin:0px;
	       padding:0px;
	       height:100%;
	   }
	   </style>
	</head>
	<body>
	   <form runat="server" id="mainForm" method="post">
	       <telerik:RadScriptManager ID="ScriptManager" runat="server" />
	       <telerik:RadPanelBar ID="RadPanelBar1" runat="server" Skin="Outlook" Height="100%" ExpandMode="FullExpandedItem">
	           <Items>
	               <telerik:RadPanelItem runat="server" Expanded="True" Selected="True" Text="Root RadPanelItem1">
	                   <Items>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                       </telerik:RadPanelItem>
	                   </Items>
	               </telerik:RadPanelItem>
	               <telerik:RadPanelItem runat="server" Text="Root RadPanelItem2">
	                   <Items>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 4">
	                       </telerik:RadPanelItem>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 5">
	                       </telerik:RadPanelItem>
	                   </Items>
	               </telerik:RadPanelItem>
	               <telerik:RadPanelItem runat="server" Text="Root RadPanelItem3">
	                   <Items>
	                       <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
	                       </telerik:RadPanelItem>
	                   </Items>
	               </telerik:RadPanelItem>
	           </Items>
	           <CollapseAnimation Duration="100" Type="None" />
	           <ExpandAnimation Duration="100" Type="None" />
	       </telerik:RadPanelBar>
	       <br />
	   </form>
	</body>
	</html> 
				
````


