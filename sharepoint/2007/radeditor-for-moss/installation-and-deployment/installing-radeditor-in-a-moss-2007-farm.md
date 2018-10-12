---
title: Installing RadEditor in a MOSS 2007 farm
page_title: Installing RadEditor in a MOSS 2007 farm | UI for ASP.NET AJAX Documentation
description: Installing RadEditor in a MOSS 2007 farm
slug: sharepoint/2007/radeditor-for-moss/installation-and-deployment/installing-radeditor-in-a-moss-2007-farm
tags: installing,radeditor,in,a,moss,2007,farm
published: True
position: 0
---

# Installing RadEditor in a MOSS 2007 farm





Follow the steps below to install Telerik RadEditor for MOSS on your SharePoint 2007 farm.

1. Extend your MOSS site with [ASP.NET AJAX 1.0]({%slug sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-1.0%}) or [ASP.NET AJAX 3.5]({%slug sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-3.5%})

2. Extract the contents of **RadEditorMOSS_5_x_x_Dev.zip** or (**RadEditorMOSS_5_x_x_Trial.zip** - if you are using the trial version) to a folder of your choice on the MOSS server.

3. Open a command prompt window.

4. Run the **stsadm.exe** utility to install **RadEditorMOSS**solution. By default **stsadm.exe** can be found in **[Program Files]\Common Files\Microsoft Shared\web server extensions\12\BIN**.

	Use the following syntax:
	
	`stsadm -o addsolution -filename [Path]\RadEditorMOSS.wsp`
	
	![](images/1_cmd_thumb.png)

5. Open the SharePoint **Central Administration** page.

	![](images/2_CentrAdmin_1_thumb.png)

6. Go to the **Operations** page and click on **Solution Management**.

	![](images/2_CentrAdmin_2_thumb.png)

7. You should see the **radeditormoss.wsp** solution in the list. Click on the name link to go to the **Solution Properties** page.

	![](images/2_CentrAdmin_3_thumb.png)

8. Select **Deploy Solution**.

	![](images/2_CentrAdmin_4_thumb.png)

9. From the next page you can choose when and to which applications to deploy the solution.

	![](images/2_CentrAdmin_5_thumb.png)



10. After a successful deployment you will see the following screen:

	![](images/2_CentrAdmin_6_thumb.png)

>note  If you see the following exception - "Request for permission of type..." when you try to open a page containing the editor, then you might need to modify the web.config of your SharePoint application and set the Trust level to at least Medium level. This can happen if you choose to deploy the editor solution to a single site (in the BIN folder) instead of to all sites (in the GAC).


