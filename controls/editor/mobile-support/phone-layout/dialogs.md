---
title: Dialogs
page_title: Phone Layout Dialogs | RadEditor for ASP.NET AJAX Documentation
description: Mobile Rendering
slug: editor/mobile-support/phone-layout/dialogs
tags: editor,support,mobile,rendering,dialogs
published: True
position: 5
---

# Phone Layout Dialogs

This help article lists the advantages of the mobile dialogs of **RadEditor** when optimized for **phone layout** and shows how to open, configure and customize them. 

* [Overview](dialogs#overview)

* [Open Dialogs](dialogs#open-dialogs)

* [Configure File Browser Dialogs](dialogs#configure-file-browser-dialogs)

* [Customize Dialogs](dialogs#customize-dialogs)

## Overview

To get a better user experience when inserting objects and configuring HTML attributes in mobile devices, **RadEditor** provides a specific rendering for its dialogs:

* Dialogs always pop-up in full screen mode.

* Complex configuration is split in sub dialogs.

* Larger controls are used (e.g., buttons, dropdowns, color pickers, etc.).

>caption **Figure 1**: RadEditor Insert Link dialog in mobile device.

![Insert Link Dialog](./images/changing-tab-1.png) 

## Open Dialogs

To open mobile dialogs you should open the ToolZone, pop-up the TabStrip from the Tools Navigator and then select the **Insert** Tab. Then you will be provided with the list of the available dialogs, as illustrated in **Figure 2**.

>caption **Figure 2**: Open RadEditor mobile dialogs.

![Insert Link Dialog](./images/changing-tab-1.png)

Mobile dialogs are also used for editing attributes of selected HTML elements. For example the **Table Property** and **Table Border** dialogs, shown in **Figure 3**.

## Configure Dialogs

Dialogs in the **phone layout** are configured just like the regular dialogs:

* Define the `Telerik.Web.UI.DialogHandler` HTTP handler in the web.config file.

	>caption Example X: Define the `Telerik.Web.UI.DialogHandler` HTTP handler through the smart tag.
	
	![]() ----------------
	
	>caption Example X: Input the `Telerik.Web.UI.DialogHandler` HTTP handler directly in the web.config file.
	
	**XML**

		<httpHandlers>  
			...  
			<add path="Telerik.Web.UI.DialogHandler.aspx" verb="*" type="Telerik.Web.UI.DialogHandler" validate="false" />
		</httpHandlers>
		...
		<system.webServer>    
			<handlers>      
				...      
				<add name="Telerik_Web_UI_DialogHandler_aspx" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" />    
			</handlers>  
		</system.webServer>
		
		More information is available in the [Dialogs Overview]({%slug editor/functionality/dialogs/overview%}) article.

* Configure the view/upload/delete paths for File Browser Dialogs.
	
	>caption **Example 1**: Configure view/upload/delete paths of ImageManager in the markup.
	
	**ASP.NET**
		
		<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Mobile">
			<ImageManager ViewPaths="~/Images" UploadPaths="~/Images" DeletePaths="~/Images" />
		</telerik:RadEditor>
	
	>caption **Example 2**: Configure view/upload/delete paths of ImageManager from the code behind.
	
	**C#**
		
		if (!IsPostBack)
		{
			string[] myPath = new string[] { "~/Images" };
			RadEditor1.ImageManager.ViewPaths = RadEditor1.ImageManager.UploadPaths = RadEditor1.ImageManager.DeletePaths = myPath;
		}
		
	**VB**
		
		If Not IsPostBack Then   -------------
			Dim myPath As String() = New String() {"~/Images"}
			RadEditor1.ImageManager.ViewPaths = RadEditor1.ImageManager.UploadPaths = RadEditor1.ImageManager.DeletePaths = myPath
		End If
		
	More information is available in the [File Browser Dialogs Overview]({%slug editor/functionality/dialogs/file-browser-dialogs/overview%}) article.

 
## Customize Dialogs

The mobile dialogs of **RadEditor** are located in the same folder that holds the rest of the dialogs  - `Telerik.Web.UI\Editor\DialogControls\`. The difference comes in the`Mobile` prefix, being added to their names (e.g., `Telerik.Web.UI\Editor\DialogControls\MobileImageManager.ascx`).

[ExternalDialogsPath Property]({%slug editor/functionality/dialogs/externaldialogspath-property%})
[Custom Dialogs]({%slug editor/functionality/dialogs/custom-dialogs%})

## See Also

* [Phone Layout Overview]({%slug editor/mobile-support/phone-layout/overview%})
* [Phone Layout ToolBar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%})
* [Toolbars Overview]({%slug editor/functionality/toolbars/overview%})