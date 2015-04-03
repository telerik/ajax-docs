---
title: Serving External Style Sheets
page_title: Serving External Style Sheets | UI for ASP.NET AJAX Documentation
description: Serving External Style Sheets
slug: stylesheetmanager/serving-external-style-sheets
tags: serving,external,style,sheets
published: True
position: 2
---

# Serving External Style Sheets



Starting with __Q3 2010 SP1 (version 2010.3.1215)____RadStyleSheetManager__ has the ability to serve external style sheets __combined or uncombined__. Since this operation requires access to the project file structure, a 'safe' folder or a list of folders must be specified in the __web.config__ file of the web application/site.

## Example

You can specify one or more folders from your project that host the external style sheets.

>caution The folder paths must be relative to the root of the application, e.g. *' __~/__ path_to_folder'* .
>


### Configuration

Add the following<appSetting/> entry in your *web.config*:

````ASPNET
	    <appsettings>   
	        <add key="Telerik.Web.UI.StyleSheetFolders" value="~/App_Themes/; ~/StyleSheets/" />
	    </appsettings>
````



### Usage

Register the external style sheets in __RadStyleSheetManager__. The paths to the files can be relative to the root or to the folder containing the current page.

````ASPNET
	    <telerik:RadStyleSheetManager id="RadStyleSheetManager1" runat="server">
	        <StyleSheets>
	            <telerik:StyleSheetReference Path="~/App_Themes/main.css" />
	            <telerik:StyleSheetReference Path="../../StyleSheets/StyleSheet.css" />
	        </StyleSheets>
	    </telerik:RadStyleSheetManager>
````



>note If an external style sheet, which is not in one of the folder designated in the configuraton, an exception will be thrown.
>


## Remarks

* You can specify more than one style sheet folder.

* With internal build __v2011.2.927__ links to an external or a combination of external style sheets is timestamped - if the style sheet files are modified, __RadStyleSheetManager__ automatically resets the generated link, so that the changes immediately propagate to the client.

* There is one important thing to have in mind when dealing with images in external style sheets. __RadStyleSheetManager__ serves external style sheets through the __Telerik.Web.UI.WebResource.axd__ handler. The path to the handler is relative to the root of the web site/application, so URLs to images in the served CSS code must also be relative to the root and not to the actual location of the containing style sheets.
