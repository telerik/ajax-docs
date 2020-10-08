---
title: Serving External Style Sheets
page_title: Serving External Style Sheets | RadStyleSheetManager for ASP.NET AJAX Documentation
description: Serving External Style Sheets
slug: stylesheetmanager/serving-external-style-sheets
tags: serving,external,style,sheets
published: True
position: 2
---

# Serving External Style Sheets



Starting with **Q3 2010 SP1 (version 2010.3.1215) RadStyleSheetManager** has the ability to serve external style sheets **combined or uncombined**. Since this operation requires access to the project file structure, a 'safe' folder or a list of folders must be specified in the **web.config** file of the web application/site.

## Example

You can specify one or more folders from your project that host the external style sheets.

>important The folder paths must be relative to the root of the application, e.g. **'~/path_to_folder'** .
>


### Configuration

Add the following `<appSetting/>` entry in your *web.config*:

````ASPNET
<appsettings>   
    <add key="Telerik.Web.UI.StyleSheetFolders" value="~/App_Themes/; ~/StyleSheets/" />
</appsettings>
````



### Usage

>important External StyleSheet **File Names are case-sensitive** for security reasons.
>

Register the external style sheets in **RadStyleSheetManager**. The paths to the files can be relative to the root or to the folder containing the current page.

````ASPNET
<telerik:RadStyleSheetManager id="RadStyleSheetManager1" runat="server">
    <StyleSheets>
        <telerik:StyleSheetReference Path="~/App_Themes/main.css" />
        <telerik:StyleSheetReference Path="../../StyleSheets/StyleSheet.css" />
    </StyleSheets>
</telerik:RadStyleSheetManager>
````


You can also add external style sheets to the **RadStyleSheetManager** from the code-behind:

````C#
		
	protected void Page_Load(object sender, EventArgs e)
	{
		StyleSheetReference relativeToTheRootFolder = new StyleSheetReference();
        relativeToTheRootFolder.Path = "~/App_Themes/main.css";
        RadStyleSheetManager1.StyleSheets.Add(relativeToTheRootFolder);

        StyleSheetReference relativeToTheCurrentFolder= new StyleSheetReference();
        relativeToTheCurrentFolder.Path = "../../StyleSheets/StyleSheet.css";
        RadStyleSheetManager1.StyleSheets.Add(relativeToTheCurrentFolder);

        //you can use the static GetCurrent() to add stylesheets from a content page or user control for a 
        //RadStyleSheetManager defined in the master page or other file that renders as the same page
        StyleSheetReference addedFromContentPage = new StyleSheetReference();
        addedFromContentPage.Path = "~/addStylesContentPage/StyleSheet.css";
        RadStyleSheetManager.GetCurrent(Page).StyleSheets.Add(addedFromContentPage);
	}
		
````
````VB
			
	Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
		Dim relativeToTheRootFolder As New StyleSheetReference()
        relativeToTheRootFolder.Path = "~/App_Themes/main.css"
        RadStyleSheetManager1.StyleSheets.Add(relativeToTheRootFolder)

        Dim relativeToTheCurrentFolder As New StyleSheetReference()
        relativeToTheCurrentFolder.Path = "../../StyleSheets/StyleSheet.css"
        RadStyleSheetManager1.StyleSheets.Add(relativeToTheCurrentFolder)

        'You can use the static GetCurrent() to add stylesheets from a content page or user control for a 
        'RadStyleSheetManager defined in the master page or other file that renders as the same page
        Dim addedFromContentPage As New StyleSheetReference()
        addedFromContentPage.Path = "~/addStylesContentPage/StyleSheet.css"
        RadStyleSheetManager.GetCurrent(Page).StyleSheets.Add(addedFromContentPage)
	End Sub
		
````


>caution If an external style sheet is added, which is not in one of the folder designated in the configuration, an exception will be thrown.
>


### OrderIndex

The **OrderIndex** property gets or sets the order index of the style sheet reference. The default value is 0. Items with smaller index will appear first in the output HTML, as well as in the combined StyleSheet

````ASP.NET
<telerik:RadStyleSheetManager id="RadStyleSheetManager1" runat="server">
    <StyleSheets>
        <telerik:StyleSheetReference Path="~/App_Themes/main.css" OrderIndex="1" />
        <telerik:StyleSheetReference Path="../../StyleSheets/StyleSheet.css" OrderIndex="3" />
    </StyleSheets>
</telerik:RadStyleSheetManager>
````


## Remarks

* You can specify more than one style sheet folder. Separate folders with a semicolon `;`.

* There is one important thing to have in mind when dealing with images in external style sheets. **RadStyleSheetManager** serves external style sheets through the **Telerik.Web.UI.WebResource.axd** handler. The path to the handler is relative to the root of the web site/application, so URLs to images in the served CSS code must also be relative to the root and not to the actual location of the containing style sheets.

* As of **Q3 2011** (2011.3.1115), and automatic **cache buster** is implemented. Links to an external or a combination of external style sheets are timestamped - if the style sheet files are modified, **RadStyleSheetManager** automatically resets the generated link, so that the changes immediately propagate to the client.

    * Adding custom cache busters is not supported. For example, adding querystring will throw an `Illegal characters in path` error.
    
    * Such stylesheets are part of a combined request for all stylesheets RadStyleSheetManager will serve, so whether they will be cached depends on the entire content - if any part of it changes, the entire URL will change. Changing the list of files to be combined also changes the content (this includes adding/removing a Telerik control from the page or changing the Stylesheets collection).

