---
title: Overview
page_title: Dialogs Overview | RadEditor for ASP.NET AJAX Documentation
description: Overview
slug: editor/functionality/dialogs/overview
tags: overview
published: True
position: 0
---

# Dialogs Overview

RadEditor offers FileBrowser dialogs such as

* Image Manager

* Flash Manager

* Silverlight Manager

* Document Manager

* HyperlinkManager

* Media Manager

* Template Manager

The RadEditor FileBrowser dialogs are mainly used to insert objects in the content area. These are the Image Manager, Flash Manager, Document Manager, Media Manager and Template Manager dialogs. The FileBrowser dialogs also provide the ability to upload and delete files and directories. You can find more information about the File Browser dialogs in the following article: [File Browser Dialogs]({%slug editor/functionality/dialogs/file-browser-dialogs/overview%}).

These dialogs are enabled by default. Dialog visibility can be toggled using the [ToolsFile.xml]({%slug editor/functionality/toolbars/using-toolsfile.xml%}) or by populating the RadEditor Tools collection.

RadEditor offers FileBrowser dialogs such as ImageManager, FlashManager and DocumentManager as well as others such as the HyperlinkManager, the About and Help dialogs.

To enable dialogs, use the Smart Tag **Enable RadEditor Dialogs** option.

![](images/editor-ataglance001.png)

Running the Smart Tag option will add the following web.config HttpHandler entry:

>caption web.config sample

````XML
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
````

>tip You can find the full list of the required and optional web.config settings is available in the [web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) article.

As of **Q2 2015**, new phone-optimized UI is introduced in **RadEditor**—[Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%}). You can find more details about the dialog-related optimizations in the [Mobile Dialogs]({%slug editor/mobile-support/phone-layout/dialogs%}) article.    

## See Also

* [File Browser Dialogs]({%slug editor/functionality/dialogs/file-browser-dialogs/overview%})

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

* [Phone Layout of RadEditor]({%slug editor/mobile-support/phone-layout/overview%})

* [Phone Layout Getting Started]({%slug editor/mobile-support/phone-layout/getting-started%})

* [Phone Layout Elements Structure]({%slug editor/mobile-support/phone-layout/elements-structure%})

* [Mobile Dialogs]({%slug editor/mobile-support/phone-layout/dialogs%})
