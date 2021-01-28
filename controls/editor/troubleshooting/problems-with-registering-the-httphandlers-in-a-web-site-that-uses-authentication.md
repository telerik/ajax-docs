---
title: Problems with Registering the HttpHandlers in a Web Site that Uses Authentication
page_title: Problems with Registering the HttpHandlers in a Web Site that Uses Authentication - RadEditor
description: Check our Web Forms article about Problems with Registering the HttpHandlers in a Web Site that Uses Authentication.
slug: editor/troubleshooting/problems-with-registering-the-httphandlers-in-a-web-site-that-uses-authentication
tags: problems,with,registering,the,httphandlers,in,a,web,site,that,uses,authentication
published: True
position: 9
---

# Problems with Registering the HttpHandlers in a Web Site that Uses Authentication

In a form authentication scenario a non-logged user is redirected to the login page.When a non-logged user loads any **RadEditor** dialog, the ASP.NET Framework tries to load the login screen in the dialog. As a result an error which alerts that the **HttpHandler** of the dialog is not registered is thrown.

To ensure that the HttpHandler of the **RadEditor** dialog is always accessible, you should add the following two **location** entries to the web.config:

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

### See Also

 * [Error: Web.config registration missing! The Telerik dialogs require a HttpHandler registration in the web.config file.](https://www.telerik.com/support/kb/aspnet-ajax/editor/details/error-web-config-registration-missing!-the-telerik-dialogs-require-a-httphandler-registration-in-the-web-config-file-)

