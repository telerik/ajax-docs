---
title: Using WebFarm or WebGarden Environment
page_title: Using WebFarm or WebGarden Environment | RadCaptcha for ASP.NET AJAX Documentation
description: Using WebFarm or WebGarden Environment
slug: captcha/troubleshooting/using-webfarm-or-webgarden-environment
tags: using,webfarm,or,webgarden,environment
published: True
position: 0
---

# Using WebFarm or WebGarden Environment

By default the RadCaptcha control stores the CaptchaImage in the Cache object.	In case your application is configured to run in any of the environments, listed below, there will be a problem accessing the captcha image:

* **Web Farm** - The application runs on more than one web server at the same time.

* **Web Garden** - The application runs on a single server, but the server load is divided among many worker processes (more than one process are running the same application).

Usually, every server (or every worker process) has an independent Cache, which means that,	when the page request is not handled by the same web server (worker process), the CaptchaImage will be null and a gray image will be shown.

To avoid this behavior, you should store the CaptchaImage in the Session, and configure your server environment to use out of process Session State(i.e. the Session object is shared among different processes and servers). Practically you need to:

1. Set the **ImageStorageLocation** property of RadCaptcha to **Session**;

1. Configure the httpHandler in the following way:

	>caption web.config:

	**XML**
	
		<configuration>
			<system.web>
				<httpHandlers>
					<add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResourceSession, Telerik.Web.UI" verb="*" validate="false" />
				</httpHandlers>
			</system.web>
			<system.webServer>
				<handlers>
					<add name="Telerik_Web_UI_WebResource_axd" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResourceSession, Telerik.Web.UI" />
				</handlers>
			</system.webServer>
		</configuration>

1. Ensure that you have configured your server environment to use [out of process Session State](http://msdn.microsoft.com/en-us/library/ms972429.aspx). In order to setup such Session State, you can apply any of the following solutions:

	* Deploy the out-of-process Session State server that is provided with ASP.NET.

	* Manually configure each Web server to store Session State data on a SQL Server.
