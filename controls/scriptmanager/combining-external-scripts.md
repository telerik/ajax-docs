---
title: Combining External Scripts
page_title: Combining External Scripts | RadScriptManager for ASP.NET AJAX Documentation
description: Combining External Scripts
slug: scriptmanager/combining-external-scripts
tags: combining,external,scripts
published: True
position: 2
---

# Combining External Scripts



Starting with **Q1 2013 RadScriptManager** has the ability to combine external scripts (specified only by path) through the Telerik.Web.UI.WebResource.axd handler. Since this operation requires access to the project file structure, a 'safe' folder or a list of folders must be specified in the **web.config** file of the web application/site.

## Example

You can specify one or more folders from your project that host the external scripts.

>caution The folder paths must be relative to the root of the application, e.g. *' **~/** path_to_folder'* .
>


### Configuration

Add the following<appSetting/> entry in your *web.config*:

````ASPNET
<appsettings>
	<add key="Telerik.Web.UI.ScriptsFolder" value="~/Scripts/;"/>
</appsettings>
````



### Usage

Register the external scripts in **RadScriptManager**. The paths to the files can be relative to the root or to the folder containing the current page.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	<Scripts>
		<telerik:RadScriptReference Path="../Script1.js" />
		<telerik:RadScriptReference Path="~/Scripts/Script2.js" />
	</Scripts>
</telerik:RadScriptManager>
````



>note If a references external script is not in one of the folder designated in the configuraton, it will be not combined and served separetely.
>


## Remarks

* You can specify more than one script sheet folder.
