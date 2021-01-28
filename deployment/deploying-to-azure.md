---
title: Deploying to Azure
page_title: Deploying to Azure
description: Check our Web Forms article about Deploying to Azure.
slug: introduction/deployment/deploying-to-azure
tags: deploying,to,azure
published: True
position: 3
---

# Deploying to Azure



## General information

Deploying a project that uses the Telerik® UI for ASP.NET AJAX to Windows Azure is not very different than deploying a standard application. More information can be found in the following resources:

* [Telerik® UI for ASP.NET AJAX on Azure from Todd Anglin's blog](https://www.telerik.com/blogs/radcontrols-for-asp-net-ajax-on-azure-part-1)

* [Deploying Telerik® UI for ASP.NET AJAX to Azure from Todd Anglin's blog](https://www.telerik.com/blogs/deploying-radcontrols-to-azure)


## Common Issues

**WebResource requests are not returned, which results in missing CSS files and/or scripts.**

This can often seem like an intermittent problem - i.e. after some deployment attempts the Telerik controls will work, after some - they will not.

The reason behind this behavior, however, is within Microsoft's servers - when you upload from a location that is ahead of the time zone in which the Azure servers are located the AssemblyResourceLocator does not work correctly until the servers catch up to the local time in which you upload. This is explained in [this thread in Microsoft's forums](http://social.msdn.microsoft.com/Forums/en/windowsazure/thread/751e27a9-4108-4446-9870-411f409d2c08). Additionally, you can try enabling the Telerik CDN:
[CDN Support Overview]({%slug scriptmanager/cdn-support/overview%}).
