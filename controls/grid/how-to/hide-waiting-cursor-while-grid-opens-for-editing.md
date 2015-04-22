---
title: Hide Waiting Cursor while Grid Opens for Editing
page_title: Hide Waiting Cursor while Grid Opens for Editing | RadGrid for ASP.NET AJAX Documentation
description: Hide Waiting Cursor while Grid Opens for Editing
slug: grid/how-to/hide-waiting-cursor-while-grid-opens-for-editing
tags: hide,waiting,cursor,while,grid,opens,for,editing
published: True
position: 10
---

# Hide Waiting Cursor while Grid Opens for Editing



## 

In case you have a grid with lots of records being shown at once, waiting for the Grid to open a row for editing might take some time, during which, the "waiting cursor" will be stuck over the grid. This might be unwanted especially if using Ajax and LoadingPanel. Luckily, you can handle the client OnRequestStart and OnRequestEnd events of RadAjaxManager (which ajaxifies the grid) to manually hide the hour glass cursor or replace it with the default one.

Here is some sample code:

````ASPNET
	<telerik:RadAjaxManager id="RadAjaxManager1" runat="server">
	  <AjaxSettings>    
	    <telerik:AjaxSetting AjaxControlID="RadGrid1">       
	      <UpdatedControls>          
	      <telerik:AjaxUpdatedControl ControlID="RadGrid1" />       
	      </UpdatedControls>    
	    </telerik:AjaxSetting>  
	  </AjaxSettings>  
	  <ClientEvents OnRequestStart="RequestStart" OnResponseEnd="ResponseEnd" />
	</telerik:RadAjaxManager> 
	<telerik:RadGrid id="RadGrid1" runat="server" ... /> 			
````



````JavaScript
	 <style type="text/css">        
	 .hidewaiting td        
	 {            
	  cursor: default;        
	 }           
	 </style>
	 <script type="text/javascript">
	    function RequestStart(){       
	        var grid = $find("<%= RadGrid1.ClientID %>");     
	        grid.Control.className = "hidewaiting"; 
	     }
	     function ResponseEnd()
	     {     
	       var grid = $find("<%= RadGrid1.ClientID %>");   
	       grid.Control.style.cursor = "";
	     }		
	 </script>	
````


