---
title: Dynamically Adding RadAjaxManager to Sharepoint Web Parts
page_title: Dynamically Adding RadAjaxManager to Sharepoint Web Parts | UI for ASP.NET AJAX Documentation
description: Dynamically Adding RadAjaxManager to Sharepoint Web Parts
slug: ajax/radajaxmanager/troubleshooting/dynamically-adding-radajaxmanager-to-sharepoint-web-parts
tags: dynamically,adding,radajaxmanager,to,sharepoint,web,parts
published: True
position: 4
---

# Dynamically Adding RadAjaxManager to Sharepoint Web Parts



## 

RadAjax controls for ASP.NET AJAX support SharePoint and can be integrated with WebParts.

There is a minor detail to be taken into account when __adding RadAjaxManager dynamically into a WebPart__, though. The control should be added both to *Page.Form.Controls* collection as well as to *Page.Items* collection. Otherwise, the code accessing the manager in order to add the necessary AJAX settings for example, would return null:

>tabbedCode

````C#
	
	        ScriptManager scriptManager = ScriptManager.GetCurrent(Page);
	        RadAjaxManager ajaxManager = RadAjaxManager.GetCurrent(Page);
	        ajaxManager.AjaxSettings.AddAjaxSetting(Button1, Label1); //may throw null reference exception  
	
````



````VB.NET
	        ajaxManager = New RadAjaxManager
	        ajaxManager.ID = "RadAjaxManager1"
	        Me.Page.Items.Add(ajaxManager.GetType, ajaxManager)
	        Me.Page.Form.Controls.Add(ajaxManager)
````


>end

We recommend using WebPart __OnInit__ event to add the RadAjaxManager dynamically:

>tabbedCode

````C#
	
	        ajaxManager = new RadAjaxManager();
	        ajaxManager.ID = "RadAjaxManager1";
	        this.Page.Items.Add(ajaxManager.GetType(), ajaxManager);
	        this.Page.Form.Controls.Add(ajaxManager);
	
````



````VB.NET
	        ajaxManager = New RadAjaxManager
	        ajaxManager.ID = "RadAjaxManager1"
	        Me.Page.Items.Add(ajaxManager.GetType, ajaxManager)
	        Me.Page.Form.Controls.Add(ajaxManager)
````


>end

as well as [adding the necessary AJAX settings]({%slug ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically%}) into the __Page_PreRender__ event.
