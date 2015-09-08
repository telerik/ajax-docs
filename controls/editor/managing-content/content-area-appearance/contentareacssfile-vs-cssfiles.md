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

The two approaches give you solutions to decorate and customize the content area of **RadEditor**. However, both of them differ in concepts and behave differently. The following sections will provide a more clear view what is the logic behind their differences and will help you to decide which approach to use.

>warning Both approaches work only when **ContentAreaMode** property is set to **Iframe** mode. Using the **Div** mode, the content area stylization should be done with ordinary CSS file linked in the **head** element and using the **.reContentArea** as parent for all desired child elements in the CSS selectors. You can examine this online demo—[Customize Content Area](http://demos.telerik.com/aspnet-ajax/editor/examples/settingcontentareadefaults/defaultcs.aspx)—on the matter.

## Using ContentAreaCssFile property

* Does not prevent styles from the main page to decorate the content area of **RadEditor** (i.e., any global styles that decorate your page will also decorate the editor's content area);
* All styles from the **ContentAreaCssFile** will not decorate the content in **Preview** mode;
* All styles form the **ContentAreaCssFile** file can be toggled via the [Show/Hide Border tool]({%slug editor/managing-content/content-area-appearance/using-contentareacssfile-property%}#showhide-border-tool);
* Only a single external CSS file can be used for custom stylization.

## Using CssFiles collection

* Does not affect the built-in **ContentAreaCssFile**—preserves the designed user-friendly experience with content editing;
* Allows CSS files to be changed/added/removed dynamically;
* Can be configured with various techniques—via markup, XML file and from the code behind;
* Multiple CSS files can be injected into the content area;
* Custom styles cannot be toggled by the **Show/Hide tool**;
* Custom styles affect both **Design** and **Preview** modes.

## See Also

* [ContentAreaCssFile property]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [Setting Default Stylization]({%slug editor/managing-content/content-area-appearance/set-defaults%})

* [CSS Styles]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})

* [External CSS Files]({%slug editor/managing-content/content-area-appearance/set-defaults%})

