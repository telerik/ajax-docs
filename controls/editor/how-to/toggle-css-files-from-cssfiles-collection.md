---
title: Toggle CSS Files from the CssFiles Collection
page_title: Toggle CSS Files from the CssFiles Collection- RadEditor
description: Check our Web Forms article about Toggle CSS Files from the CssFiles Collection.
slug: editor/how-to/toggle-css-files-from-cssfiles-collection
tags: css, files, toggle, disable, decoration, content, area, iframe
published: True
position: 8
---

# Toggle CSS Files from the CssFiles Collection

In this article you learn to create a [custom tool]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%}) that toggles the decoration of the CSS files included through the [CssFiles collection]({%slug editor/functionality/toolbars/dropdowns/external-css-files%}). 

Basically, you need to programmatically find the link tag and set its `disabled` attribute to `true` to disable it or `false` to enable it. 

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
    <CssFiles>
        <telerik:EditorCssFile Value="/CssFile.css" />
    </CssFiles>
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="ToggleCssFiles" Text="Toggle Default Decoration" />
        </telerik:EditorToolGroup>
    </Tools>
</telerik:RadEditor>

<script>
    Telerik.Web.UI.Editor.CommandList["ToggleCssFiles"] = function (commandName, editor, args) {
        var $ = $telerik.$;
        var stylesToDisable = editor.get_cssFiles();
        var editorDocument = editor.get_document();

        stylesToDisable.forEach(function (item, index) {
            var link = $("link[href='" + item + "']", editorDocument).get(0);
            link.disabled = !link.disabled;
        })
    };
</script>
````

>note This works only if `ContentAreaMode` is set to `Iframe`. If [Div mode]({%slug editor/functionality/editor-views-and-modes/contentareamode-property%}) is used, you should make sure to apply similar logic to the CSS files that you have added to the page in order to decorate the content area of **RadEditor**. 

## See Also

* [Add Your Own Buttons]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%})
* [External CSS Files]({%slug editor/functionality/toolbars/dropdowns/external-css-files%})
