---
title: Defining custom CSS styles
page_title: Defining custom CSS styles | UI for ASP.NET AJAX Documentation
description: Defining custom CSS styles
slug: sharepoint/2007/radeditor-for-moss/customization/defining-custom-css-styles
tags: defining,custom,css,styles
published: True
position: 0
---

# Defining custom CSS styles



## 

Telerik RadEditor uses the same CSS files as the default rich-text editor. Those files are __HtmlEditorTableFormats__.__css__ and __HtmlEditorCustomStyles.css,__ which are located in the following folder:

`/Program Files/Common Files/Microsoft Shared/web server extensions/12/Template/Layouts/1033/Styles`

>note The folder location can be different if you are not using US English version of MOSS. The 1033 number signifies the current culture and might be different for different language versions of MOSS.
>


By modifying these CSS files you can add, edit, and delete CSS styles which are displayed in the "Apply CSS class" dropdown and are applied to the editor's content. When defining styles you don't have to use Microsoft's naming convention with the __.ms-rteCustom__ prefix.

If you do not wish to modify the default MOSS editor CSS files, you can add your custom styles in another location:

`/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/CssEditor.css`

This file is __not__ created by default when you install RadEditor for MOSS. However, if it is present, the editor will automatically load it. Note that the folder name depends on the editor version (in this case it is 5.3.1.0). Also do not forget to back up the CssEditor.css file when you uninstall/upgrade the editor.

The CssEditor.css file will also be automatically loaded in presentation mode (i.e. when the editor is not visible) in the Web Part and Publishing field (WCM) scenarios. The file will not be loaded in presentation mode when the editor is used in a list (e.g. wiki). This is because we cannot modify the page and add it when the editor is invisible. To workaround this problem you can include this file manually to the master page (using SharePoint Designer) or add it in the MOSS core CSS styles. Either way it will be automatically loaded in presentation as well as authoring (editing) mode. For example, to add the CssEditor.css file in the default MOSS styles, open the file

`/Program Files/Common Files/Microsoft Shared/web server extensions/12/Template/Layouts/1033/Styles/CORE.CSS`

and add the following line:

@import url("/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/CssEditor.css");

RadEditor for MOSS can be configured to load external CSS files as well. Thanks to the CssFiles property, you can specify a list of CSS files, which you need the editor to use. In order to do this you need to modify the respective ToolsFile.xml or ListToolsFile.xml, which are located in the `/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/` folder. For example if you create Styles1.css and Styles2.css files in the same folder the code that you need to add is:

````XML
	    <root>
	        ....
	        <cssFiles>
	           <item name="/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/Styles1.css" />
	           <item name="/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/Styles2.css" />
	        </cssFiles>
	        ...
	    </root>
````



More information you can find in the following online help article:[External CSS Files](88C1DD5C-6AF5-487F-B646-1321FADC0138).

Note that in some scenarios, it is useful to manually check what styles are applied to the editor's content before and after it is submitted. Thus, you can trace if some global styles are ruing your design. This can be easily done using [IE Dev Toolbar](http://www.microsoft.com/downloads/details.aspx?familyid=e59c3964-672d-4511-bb3e-2d5e1db91038&displaylang=en) or [FireBug](http://getfirebug.com/).

>note Note the version number in the CSS file URL - this should be set to the RadEditor for MOSS version you have - e.g. 5.1.2.0 if your version is 5.12
>


>note Similarly to the default rich-text editor the Telerik RadEditor for MOSS cannot load CSS files from the "Style Library" folder.
>

