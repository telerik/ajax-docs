---
title: A Script Causes IE to Run Slowly
page_title: A Script Causes IE to Run Slowly | RadTreeView for ASP.NET AJAX Documentation
description: A Script Causes IE to Run Slowly
slug: treeview/troubleshooting/a-script-causes-ie-to-run-slowly
tags: a,script,causes,ie,to,run,slowly
published: True
position: 7
---

# A Script Causes IE to Run Slowly



## 

**The problem**

You receive an error message like "Stop running the script" or "A script is causing IE to run slowly" when you expand a node which loads its child nodes on demand. A timeout error could occur as well.



**The resolution**

You can use one of the solutions below:

1. Disable debugging in your **web.config** file:

Note that this is the **recommended** setting for a **production environment**.

````XML
	        <compilation debug="false">
				
````



Or, use the second approach described below.



2. Set the **ScriptMode** property of the ScriptManager / RadScriiptManager to "**Release**":

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


