---
title: A Script Causes IE to Run Slowly
page_title: A Script Causes IE to Run Slowly | UI for ASP.NET AJAX Documentation
description: A Script Causes IE to Run Slowly
slug: treeview/troubleshooting/a-script-causes-ie-to-run-slowly
tags: a,script,causes,ie,to,run,slowly
published: True
position: 7
---

# A Script Causes IE to Run Slowly



## 

__The problem__

You receive an error message like "Stop running the script" or "A script is causing IE to run slowly" when you expand a node which loads its child nodes on demand. A timeout error could occur as well.



__The resolution__

You can use one of the solutions below:

1. Disable debugging in your __web.config__ file:

Note that this is the __recommended__ setting for a __production environment__.

````XML
	        <compilation debug="false">
				
````



Or, use the second approach described below.



2. Set the __ScriptMode__ property of the ScriptManager / RadScriiptManager to "__Release__":

````ASPNET
	     
			<asp:ScriptManager ID="ScriptManager1"     
			                   runat="server"     
			                   ScriptMode="release">
			</asp:ScriptManager>
				
````



````ASPNET
	     
	
	        <telerik:RadScriptManager ID="RadScriptManager1"     
	                                  ScriptMode="Release"    
	                                  runat="server">
	        </telerik:RadScriptManager>
				
````


