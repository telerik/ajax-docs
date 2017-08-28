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

>note The folder paths must be relative to the root of the application. For example, `~/path_to_folder`.
>


### Configuration

Add the following `<appSetting />` entry in your *web.config*:

````web.config
<appsettings>
	<add key="Telerik.Web.UI.ScriptsFolder" value="~/Scripts/;"/>
</appsettings>
````

This will include subfolders of the `~/scripts` folder as well, so you do not need to define them explicitly.

If you want to add several folders that are not nested within one another, add them in a single `Telerik.Web.UI.ScriptsFolder` entry:

````web.config
<appsettings>
	<add key="Telerik.Web.UI.ScriptsFolder" value="~/Scripts/;~/MoreScripts;~/Assets" />
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



>note If a references external script is not in one of the folder designated in the configuration, it will be not be combined and will be served separately.
>


## Remarks

* You can specify more than one script folder.
