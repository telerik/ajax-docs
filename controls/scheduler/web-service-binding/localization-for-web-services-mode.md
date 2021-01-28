---
title: Localization for Web Services Mode
page_title: Localization for Web Services Mode - RadScheduler
description: Check our Web Forms article about Localization for Web Services Mode.
slug: scheduler/web-service-binding/localization-for-web-services-mode
tags: localization,for,web,services,mode
published: True
position: 2
---

# Localization for Web Services Mode



## 



RadScheduler supports localization when using Web Service
binding starting from Q1 2009 SP2. However, some additional settings
are required as listed below:



**1**. Enable script globalization for the ScriptManager or
RadScriptManager on the page:

````ASPNET
<asp:ScriptManager ID="ScriptManager1" runat="server" EnableScriptGlobalization="true" />
````



**2**. Set the page culture either in web.config or in the page
directive. For example:

````XML
<globalization culture="fr-CA" />
````



or

````ASPNET
	
<%@ Page Language="C#" Culture="fr-CA" AutoEventWireup="true" %>
	
````



**3**. Set the Culture property for
RadScheduler.

````ASPNET
	  
<telerik:RadScheduler RenderMode="Lightweight" runat="server" ID="RadScheduler1" Culture="fr-CA">
<WebServiceSettings Path="~/SchedulerDataService.asmx" />
</telerik:RadScheduler>  
	
````


