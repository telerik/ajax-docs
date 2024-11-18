---
title: Handling Single Spaces with Track Changes in RadEditor
description: Learn how to ensure single spaces are visible when using track changes and switching between HTML and Edit views in RadEditor.
type: how-to
page_title: How to Make Single Spaces Visible with Track Changes in RadEditor
slug: editor-single-spaces-track-changes
tags: radeditor, asp.net ajax, track changes, html view, edit view, content filter
res_type: kb
ticketid: 1670384
---

## Environment

| Product                   | Version  |
|---------------------------|----------|
| RadEditor for ASP.NET AJAX| all|

## Description

When adding a single space in RadEditor with track changes enabled and then switching between HTML and Edit views, the space does not display. This issue occurs because the single space symbol is represented by the `&ZeroWidthSpace;` entity, which is not rendered by the browser in the Design mode of the editable iframe area. If two spaces are added, then it works as expected.

This KB article also answers the following questions:
- How to ensure single spaces are visible with track changes in RadEditor?
- How to display single spaces after switching views in RadEditor with track changes on?
- How to implement a custom content filter in RadEditor for handling space visibility?

## Solution

To make single spaces visible when using track changes in RadEditor, implement a custom content filter that replaces the `&ZeroWidthSpace;` entity with a space. Use the following steps and code snippet to achieve this:

1. Add a RadEditor to your page and enable Track Changes.
2. Implement the `ZeroWidthSpaceFilter` class in JavaScript to handle the replacement.
3. Register the custom filter using the `OnClientLoad` event of RadEditor.

The following example demonstrates how to set up RadEditor and the custom content filter:

```html
<telerik:RadEditor RenderMode="Lightweight" ID="theEditor" EnableTrackChanges="true" runat="server" OnClientLoad="OnClientLoad" ToolsFile="ToolsFile.xml">
    <TrackChangesSettings Author="RadEditorUser" CanAcceptTrackChanges="true" UserCssId="reU0"></TrackChangesSettings>
    <Content>
        <!-- Your content here -->
    </Content>
</telerik:RadEditor>
<script type="text/javascript">
    function OnClientLoad(editor, args) {
        editor.get_filtersManager().add(new ZeroWidthSpaceFilter());
    }

    ZeroWidthSpaceFilter = function () {
        ZeroWidthSpaceFilter.initializeBase(this);
        this.set_isDom(false);
        this.set_enabled(true);
        this.set_name("Zero-Width Space Filter");
        this.set_description("Replaces &ZeroWidthSpace; and similar representations with &nbsp;");
    }

    ZeroWidthSpaceFilter.prototype = {
        getHtmlContent: function (content) {
            // Do nothing for HTML content.
			return content;                            
		},

		getDesignContent: function (content) {
            // Replace `&ZeroWidthSpace;` with a space.
            return content.replace(/&nbsp;/gi, ' '); // Replace named entity.
        }
    }

    // Register the filter.
    ZeroWidthSpaceFilter.registerClass('ZeroWidthSpaceFilter', Telerik.Web.UI.Editor.Filter);
</script>
```

This approach ensures that single spaces added in RadEditor with track changes enabled are visible after switching between HTML view and Edit view.

## See Also

- [Implementing a Custom Filter](https://www.telerik.com/products/aspnet-ajax/documentation/controls/editor/managing-content/content-filters#implementing-a-custom-filter)
- [RadEditor Overview](https://docs.telerik.com/aspnet-ajax/controls/editor/overview)
