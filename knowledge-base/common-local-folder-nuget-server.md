---
title: Installing Telerik.UI.for.AspNet.Ajax.Net NuGet Package from a local folder
description: Find another way of installing NuGet Package nupkg files. This approach is useful when experiencing problems connecting to the live nuget feeds.
type: how-to
page_title: Installing Telerik.UI.for.AspNet.Ajax.Net NuGet Package from a local NuGet storage.
slug: common-local-folder-nuget-server
position: 
tags: 
ticketid: 1568246
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The tutorial shows how to download the Telerik.UI.for.AspNet.Ajax.Net NuGet package from telerik.com and install it through a local NuGet folder using Visual Studio. This approach is useful when experiencing connectivity problems with the live Nuget feed (https://status.telerik.com/), network and policy limitations, and problems with the Nuget server credentials.

## Solution
Steps to install the Telerik.UI.for.AspNet.Ajax.Net45.202x.x.xxxx.nupkg package from a local NuGet storage:
* Log into https://www.telerik.com/account/product-download?product=RCAJAX and download the NuGet Package(s), e.g. Telerik.UI.for.AspNet.Ajax.Net40.2023.1.323.nupkg.
* Copy the downloaded nuget package file(s) to the Microsoft Visual Studio Offline Packages folder located at C:\Program Files (x86)\Microsoft SDKs\NuGetPackages folder.
* Go to Visual Studio -> Tools -> Nuget Package Manager -> Manage NuGet Packages for Solution.
* In the NuGet Packages for Solution window choose from the Package source dropdown either All or Microsoft Visual Studio Offline Packages option. This should make the visible for installation as shown in the following screenshot:

![local nuget server](images/common_local_nuget_repo.png)

>Tip: If you want to use a folder different from Microsoft Visual Studio Offline Packages one, you can specify another installation folder on your machine by pressing the plus + button in the Options dialog.

## See More
* [First Steps with NuGet]({%slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package%})
* [Restoring NuGet Packages in Your CI Workflow]({%slug deployment/nuget-keys%})
* [Troubleshooting NuGet Installation Issues]({%slug troubleshooting-nuget-installation-issues%})
   
     