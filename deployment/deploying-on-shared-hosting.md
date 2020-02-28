---
title: Deploying on Shared Hosting
page_title: Deploying on Shared Hosting | UI for ASP.NET AJAX Documentation
description: Deploying on Shared Hosting
slug: introduction/deployment/deploying-on-shared-hosting
tags: deploying,on,shared,hosting
published: True
position: 2
---

# Deploying on Shared Hosting



All Telerik controls are server controls and have to be installed on the web server in order to function properly. This also means that you will need to create the respective virtual directories and give the proper permissions (ASPNET [IIS5], Network Service [IIS6]) in order to use them on the shared hosting.

## If you have already created the application on your development machine

1. Copy/upload the compiled application via FTP to the production server, i.e. on the shared hosting. The application should reside in the inetpub/wwwroot folder.

1. Create a virtual directory for the application folder. Before you do this step, consult with your hosting provider on how this is to be accomplished. If the provider offers thorough instructions, use them instead of the ones below. If you do not have access to the Information Services console, ask your provider to set the application for you. If the provider does not offer instructions, then:

	1. Locate the Internet Information Services console;
	
	1. Navigate to the application folder;
	
	1. Find the folder's Properties;
	
	1. Create a virtual directory;
	
	1. Remember the application name and click OK.

1. Give full permissions to the **ASPNET** user (if you are using IIS5) or to the **Network Service** account (using IIS6 or IIS7, Windows Server 2003, Windows Vista/Longhorn) on the application folder. Again, before doing this step, consult with your hosting provider on how this is to be accomplished. If the provider offers thorough instructions, use them instead of the ones below. Otherwise, contact your provider to set the permissions for you.

1. Run the project.

## If you plan to deploy the controls directly on the shared hosting

1. Log into your [Telerik account](https://www.telerik.com/account) and click on **Manage products** from the top menu.

1. In the dropdown that appears choose from your purchased products or trial downloads the Telerik® UI for ASP.NET AJAX, and click on it. If you have purchased a collection you would need to click on it and the trial downloads page will show all trial downloads directly.

1. Click on **Download Installer and other resources** (the Download link next to the suite if you are a trial user). You need to choose the Telerik® UI for ASP.NET AJAX suite if you have purchased the collection and click its Browse all product files button.

1. Download the **Manual installation** (**ZIP**) file.

1. On the server, create a "Telerik" folder in your "inetpub/wwwroot" folder on the server.

1. Follow the instructions from the first case above.
