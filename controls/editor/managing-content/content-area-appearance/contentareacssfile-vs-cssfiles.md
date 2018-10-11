---
title: ContentAreaCssFile vs. CssFiles
page_title: ContentAreaCssFile vs. CssFiles | RadEditor for ASP.NET AJAX Documentation
description: ContentAreaCssFile versus CssFiles
slug: editor/managing-content/content-area-appearance/contentareacssfile-vs-cssfiles
tags: contentareacssfile, cssfiles, custom, stylization, content, area, css
published: True
position: 2
---

# ContentAreaCssFile vs. CssFiles

Here you can examine some major differences regarding custom content area stylization via [ContentAreaCssFile property]({%slug editor/managing-content/content-area-appearance/set-defaults%}) and [CssFiles collection]({%slug editor/managing-content/content-area-appearance/using-contentareacssfile-property%}).

The two approaches give you solutions to decorate and customize the content area of **RadEditor**. However, both of them differ in concepts and behave differently. The following sections will provide a clear view of the logic behind their differences and will help you to decide which approach to use.

>tip This approach is available only when [ContentAreaMode]({%slug editor/functionality/editor-views-and-modes/contentareamode-property%}) is iframe. Using a content area rendered as a DIV element does not offer native capabilities to add external CSS files. You can find out how to decorate the DIV content area here—[Decorating Div Content Area]({%slug editor/managing-content/content-area-appearance/decorating-div-contentareamode%}). 

## Using ContentAreaCssFile property

* Does not prevent styles from the main page from decorating the content area of **RadEditor** (i.e., any global styles that decorate your page will also decorate the editor's content area);
* All styles from the **ContentAreaCssFile** will not decorate the content in **Preview** mode;
* All styles form the **ContentAreaCssFile** file can be toggled via the [Show/Hide Border tool]({%slug editor/managing-content/content-area-appearance/using-contentareacssfile-property%}#showhide-border-tool);
* Only a single external CSS file can be used for custom stylization;
* Classes from the **ContentAreaCssFile** stylesheet will not be present in the **[Apply CSS Class dropdown]({%slug editor/functionality/toolbars/dropdowns/css-styles%})**;
* Its concept is to provide user-friendly styling for creating the content, which is not part of the styling of the place where the content will be used.

## Using CssFiles collection

* Its concept is to let the end user see what their content will look like when used;
* Does not affect the built-in **ContentAreaCssFile**—preserves the designed user-friendly experience with content editing;
* Stops CSS style propagation and inheritence from the main page;
* Allows CSS files to be changed/added/removed dynamically;
* Can be configured with various techniques—via markup, XML file and from the code behind;
* Multiple CSS files can be injected into the content area;
* Custom styles cannot be toggled by the **Show/Hide tool**;
* Custom styles affect both **Design** and **Preview** modes.

>tip If you only want to stop the page style inheritance, you do not need to have a special blank stylesheet. An empty value for the **CssFile** will have the same effect and will avoid the unnecessary request:
>
>    **ASP.NET**
>    - - -
>        <telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
>            <CssFiles>
>                <telerik:EditorCssFile Value="" />
>            </CssFiles>
>            <Content>
>               <p>para</p>
>            </Content>
>        </telerik:RadEditor>

## See Also

* [ContentAreaCssFile property]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [Setting Default Stylization]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [CSS Styles]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})

* [External CSS Files]({%slug editor/managing-content/content-area-appearance/set-defaults%})

