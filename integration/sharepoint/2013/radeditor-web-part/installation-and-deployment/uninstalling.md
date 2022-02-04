---
title: Uninstalling
page_title: Uninstalling
description: Check our Web Forms article about Uninstalling.
slug: sharepoint/2013/radeditor-web-part/installation-and-deployment/uninstalling
tags: uninstalling
published: True
position: 2
---

# Uninstalling




In general, there are 2 approaches for uninstalling Telerik controls for SharePoint 2013. You could do that either by

1. Using the MS Windows’ Control Panel / Add Remove Programs (Programs and Features in Windows7)

1. OR by using SharePoint’s Central Administration page.

The information below provides details about the second approach. __Still, we strongly recommend following points 1 to 3 (inclusive) from the "*uninstall Telerik RadEditor from your SharePoint 2013 site*" section below, when uninstalling the controls via the MS Windows Control Panel applet__.

In order to uninstall SharePoint 2013 you need to first perform the following preliminary tasks. Note that these tasks are needed ONLY if you do not plan to upgrade to a newer version of SharePoint 2013 (e.g., you wish to use only the default SharePoint editor again):

1. Revert to the default rich-text editor in Web Content Management scenario (do the reverse actions of the ones described in [Using RadEditor in Web Content Management scenario]({%slug sharepoint/2013/radeditor-web-part/installation-and-deployment/web-content-management-scenario%})).

1. Open the page(s) in which you have used RadEditor for SharePoint 2013.

1. Replace the RadEditor tags (`telerik:RadHtmlField`) with the default editor tags:

	**ASP.NET**

		<PublishingWebControls:RichHtmlField  runat="server" id="Richhtmlfield1" FieldName="..." />


1. Remove the RadEditor registration line from the top of the page:

	**ASP.NET**

		<%@ Register TagPrefix="telerik" Namespace="Telerik.SharePoint.FieldEditor" Assembly="RadEditorSharePoint, Version=x.x.x.x, culture=neutral, PublicKeyToken=1f131a624888eeed" %>


1. Replace all instances of the RadEditor Web Part with the default rich-text editor Web Part:

1. Open a given page for editing

1. Copy the content of a given RadEditor Web Part

1. Delete this RadEditor Web Part

1. Place a default rich-text editor Web Part on its place

1. Paste to copied content inside the Web Part and save it

1. Repeat these steps for all RadEditor Web Parts on the page

1. Once you have performed the steps described above, please do the following to **uninstall Telerik RadEditor from yourSharePoint 2013 site**:

	1. Open your SharePoint site in the browser. From the Site Actions menu go to Site Settings

		![sp 2103-selecting-site-settings](images/sp2103-selecting-site-settings.png)
	
	1. Click Manage site features link from the Site Actions section.

		![sp 2013-select-manage-features](images/sp2013-select-manage-features.png)
	
	1. Scroll to the bottom of the list and deactivate the RadEditor features.

		![sp 2013-disabled-features](images/sp2013-disabled-features.png)
	
	1. Open the SharePoint Central Administration page.
	
	1. Go to the System Settings and click on Manage farm solutions link from the Farm Management section.
	
		![sp 2013-manage-farm-solutions](images/sp2013-manage-farm-solutions.png)
	
	1. You should see the radcontrolssp.wsp solution in the list. Click on the name link to go to the Solution Properties page.
	
		![sp 2013-selecting-wsp-solution](images/sp2013-selecting-wsp-solution.png)
	
	1. Choose Retract Solution. On the next page choose when and from which solutions to retract the RadEditor. Then click Ok.
	
		![sp 2013-selecting-retract-solution](images/sp2013-selecting-retract-solution.png)
	
	1. Wait a few minutes. Then refresh the page. The retraction process should be over and you should see the following screen:
	
		![sp 2013-wsp-solution-not-deployed](images/sp2013-wsp-solution-not-deployed.png)
	
	1. Click the name link to open the Solution Properties page again. This time click the Remove Solution button. Then confirm in the dialog box. The solution should be removed from the farm and a confirmation screen will be displayed.
	
		![sp 2013-remove-solution](images/sp2013-remove-solution.png)
