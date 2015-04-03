---
title: Problems with Registering the HttpHandlers in a Web Site that Uses Authentication
page_title: Problems with Registering the HttpHandlers in a Web Site that Uses Authentication | UI for ASP.NET AJAX Documentation
description: Problems with Registering the HttpHandlers in a Web Site that Uses Authentication
slug: editor/troubleshooting/problems-with-registering-the-httphandlers-in-a-web-site-that-uses-authentication
tags: problems,with,registering,the,httphandlers,in,a,web,site,that,uses,authentication
published: True
position: 9
---

# Problems with Registering the HttpHandlers in a Web Site that Uses Authentication



## 

In a form authentication scenario a non-logged user is redirected to the login page.When a non-logged user loads any __RadEditor__ dialog, the ASP.NET Framework tries to load the login screen in the dialog.As a result an error which alerts that the __HttpHandler__ of the dialog is not registered is thrown.

To ensure that the HttpHandler of the __RadEditor__ dialog is always accessible, you should add the following two__location__ entries to the web.config:

````XML
	<configuration>
		<location path="Telerik.Web.UI.DialogHandler.aspx">
			<system.web>
				<authorization>
					<allow roles="*"/>
				</authorization>
			</system.web>
		</location>
		<location path="Telerik.Web.UI.SpellCheckHandler.axd">
			<system.web>
				<authorization>
					<allow roles="*"/>
				</authorization>
			</system.web>
		</location>
	</configuration>
````


