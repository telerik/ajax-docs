---
title: Defining Custom CSS Styles
page_title: Defining Custom CSS Styles | UI for ASP.NET AJAX Documentation
description: Defining Custom CSS Styles
slug: sharepoint/2010/radeditor-web-part/customization/defining-custom-css-styles
tags: defining,custom,css,styles
published: True
position: 0
---

# Defining Custom CSS Styles

This help article illustrates different ways to customize the content area of RadEditor for SharePoint 2010.

* [Modify Existing Styles](#modify-existing-styles)

* [Load Custom Styles Through the Default CssEditor.css File](#load-custom-styles-through-the-default-csseditorcss-file)

* [Load Custom Styles Through the CssFiles Collection](#load-custom-styles-through-the-cssfiles-collection)

## Modify Existing Styles

Telerik RadEditor uses the same CSS as the default rich-text editor. Those styles reside inside the **HtmlEditorStyles.css** file which is located in the following folder:

`/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/1033/STYLES`

>note The folder location can be different if you are not using US English version of Share Point. The 1033 number signifies the current culture and might be different for different language versions of Share Point.
>


By modifying this CSS file you can add, edit, and delete CSS styles which are displayed in the "Apply CSS class" dropdown and are applied to the editor's content. When defining styles you don't have to use Microsoft's naming convention with the **.ms-rteCustom** prefix.

>caution This approach takes effect only for ContentAreaMode="Iframe". See **Table 1** for details.

>caption Table 1: Scenarios in which HtmlEditorStyles.css styles take effect over editor content.

| Scenario | ContentAreaMode = Iframe - Edit Mode | ContentAreaMode = Iframe - Presentation Mode | ContentAreaMode = Div - Edit Mode | ContentAreaMode = Div - Presentation Mode |
| ------ | ------ | ------ | ------ | ------ |
|Web Part|Yes|No|No|No|
|WCM/List|Yes|No|No|No|

## Load Custom Styles Through the Default CssEditor.css File

If you do not wish to modify the default Share Point editor CSS files, you can add your custom styles in another location:

`/Program Files/Common Files/Microsoft Shared/Web Server Extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/CssEditor.css`

This file is **not** created by default when you install RadEditor for Share Point. However, if it is present, the editor will automatically load it. Note that the folder name depends on the editor version (in this case it is 6.12.0.0). You can also back up the CssEditor.css file when you uninstall/upgrade the editor.


>caption  Table 2: Scenarios in which CssEditor.css styles take effect over editor content. 

| Scenario | ContentAreaMode = Iframe - Edit Mode | ContentAreaMode = Iframe - Presentation Mode | ContentAreaMode = Div - Edit Mode | ContentAreaMode = Div - Presentation Mode |
| ------ | ------ | ------ | ------ | ------ |
|Web Part|Yes|Yes|Yes|Yes|
|WCM/List|Yes|No|No|No|

The CssEditor.css file will also be automatically loaded in presentation mode (i.e. when the editor is not visible) in the Web Part scenario. The file will not be loaded in presentation mode when the editor is used in a WCM/List (e.g. wiki) scenarios.This is because we cannot modify the page and add it when the editor is invisible. You can workaround this problem in **Div** modeby including this file manually to the master page (using SharePoint Designer) or add it in the Share Point core CSS styles. Either way it will be automatically loaded in presentation as well as authoring (editing) mode. For example, to add the CssEditor.css file in the default Share Point styles, open the file

`/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/1033/STYLES/Themable/COREV4.CSS`

and add the following line:

`@import url("/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/CssEditor.css");`

## Load Custom Styles Through the CssFiles Collection

RadEditor for Share Point can be configured to load external CSS files as well. Thanks to the **CssFiles** property, you can specify a list of CSS files, which you need the editor to use. In order to do this you need to modify the respective ToolsFile.xml or ListToolsFile.xml, which are located in the `/Program Files/Common Files/Microsoft Shared/Web Server Extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/` folder. For example if you create Styles1.css and Styles2.css files in the same folder the code that you need to add is:

````XML
<root>
    ....
    <cssFiles>
       <item name="/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/Styles1.css" />
       <item name="/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/Styles2.css" />
    </cssFiles>
    ...
</root>
````



More information you can find in the following online help article: [External CSS Files]({%slug editor/functionality/toolbars/dropdowns/external-css-files%}).

>caution This approach takes effect only for ContentAreaMode="Iframe". See **Table 3** for details.

>caption  Table 3: Scenarios in which styles from the CssFiles collection take effect over editor content. 

| Scenario | ContentAreaMode = Iframe - Edit Mode | ContentAreaMode = Iframe - Presentation Mode | ContentAreaMode = Div - Edit Mode | ContentAreaMode = Div - Presentation Mode |
| ------ | ------ | ------ | ------ | ------ |
|Web Part|Yes|No|No|No|
|WCM/List|Yes|No|No|No|

Note that in some scenarios, it is useful to manually check what styles are applied to the editor's content before and after it is submitted. Thus, you can trace if some global styles are ruing your design. This can be easily done using [IE Dev Toolbar](https://www.microsoft.com/downloads/details.aspx?familyid=e59c3964-672d-4511-bb3e-2d5e1db91038&displaylang=en) or [FireBug](http://getfirebug.com/).

>note Note the version number in the CSS file URL - this should be set to the RadEditor for Share Point version you have (e.g. 6.12.0.0).

>note Similarly to the default rich-text editor the Telerik RadEditor for Share Point cannot load CSS files from the "Style Library" folder.

## See Also

* [External CSS Files]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})
