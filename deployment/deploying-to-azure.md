---
title: Deploying to Azure
page_title: Deploying to Azure | UI for ASP.NET AJAX Documentation
description: Deploying to Azure
slug: introduction/deployment/deploying-to-azure
tags: deploying,to,azure
published: True
position: 3
---

# Deploying to Azure



## General information

Deploying a project that uses the Telerik UI for ASP.NET AJAX to Windows Azure is not very different than deploying a standard application. More information can be found in the following resources:

* [Telerik UI for ASP.NET AJAX on Azure from Todd Anglin's blog](http://blogs.telerik.com/toddanglin/posts/09-04-13/radcontrols-for-asp-net-ajax-on-azure-part-1.aspx)

* [Deploying Telerik UI for ASP.NET AJAX to Azure from Todd Anglin's blog](http://blogs.telerik.com/toddanglin/posts/09-04-17/deploying-radcontrols-to-azure.aspx)

* [Telerik UI for ASP.NET AJAX and Azure video by Carl Bergenhem](http://tv.telerik.com/watch/aspnet-ajax/telerik-radcontrols-for-aspnet-ajax-azure)

## Common Issues

__WebResource requests are not returned, which results in missing CSS files and/or scripts.__

This can often seem like an intermittent problem - i.e. after some deployment attempts the Telerik controls will work, after some - they will not.

The reason behind this behavior, however, is within Microsoft's servers - when you upload from a location that is ahead of the time zone in which the Azure servers are located the AssemblyResourceLocator does not work correctly until the servers catch up to the local time in which you upload. This is explained in [this thread in Microsoft's forums](http://social.msdn.microsoft.com/Forums/en/windowsazure/thread/751e27a9-4108-4446-9870-411f409d2c08).

This means that usually simply waiting will resolve the situation. More information and an alternative approach is shown in Simon Holman's blog post [Telerik CSS issues with Windows Azure](http://simon-holman.net/2011/07/telerik-css-issues-with-windows-azure/).
