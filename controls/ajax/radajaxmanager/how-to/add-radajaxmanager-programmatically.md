---
title: Add RadAjaxManager Programmatically
page_title: Add RadAjaxManager Programmatically | RadAjax for ASP.NET AJAX Documentation
description: Add RadAjaxManager Programmatically
slug: ajax/radajaxmanager/how-to/add-radajaxmanager-programmatically
tags: add,radajaxmanager,programmatically
published: True
position: 7
---

# Add RadAjaxManager Programmatically



## 

There are some cases where you might need to create the RadAjaxManager control programmatically. This is an easy task, however note this should be done in the **Page_Init** event but later. Below is a sample code you can use:



````C#
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        RadAjaxManager manager = new RadAjaxManager();
	        manager.ID = "RadAjaxManager1";
	        this.Page.Form.Controls.Add(manager);
	    } 							
````
````VB.NET
	    Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
	        Dim manager As New RadAjaxManager()
	        manager.ID = "RadAjaxManager1"
	        Me.Page.Form.Controls.Add(manager)
	    End Sub
````


Then, to access the RadAjaxManager instance you can call the **GetCurrent()** static method of the RadAjaxManager class:

**Server-Side**



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {    
	        RadAjaxManager manager = RadAjaxManager.GetCurrent(Page);
	    }
				
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        Dim manager As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
	    End Sub
````


````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function GetAjaxManager() {
	                var manager = $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>")
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



Additionally, note that if you are creating the ScriptManager dynamically as well, you should add it to the Page.Form.Controls collection before the RadAjaxManager control.
