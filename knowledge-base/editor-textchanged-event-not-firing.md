---
title: TextChanged Event of RadEditor Does Not Fire
description: The server-side TextChanged event of RadEditor does not fire after editing content and performing a postback.
type: troubleshooting
page_title: TextChanged Event Does Not Fire - RadEditor
slug: editor-textchanged-event-not-firing
tags: radeditor, textchanged, postback, content-change, track-changes
res_type: kb
ticketid: 1606342
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | all |

## Description

The server-side `TextChanged` event of `RadEditor` does not fire after the user modifies the content and triggers a postback. The event handler assigned to the `TextChanged` event is never executed even though the content has visibly changed.

## Cause

The `TextChanged` event works by comparing the posted content value with the previous value stored in ViewState. However, this comparison is unreliable for rich-text editors due to the following factors:

1. **Browser DOM normalization** — the browser's `contentEditable` implementation reorders attributes, normalizes whitespace, self-closes tags, and changes casing. This produces HTML that differs structurally from the original source but represents the same visual output.

2. **Content filters** — RadEditor applies client-side content filters (`ConvertToXhtml`, `FixEnclosingP`, `MakeUrlsAbsolute`, etc.) via `get_html(true)` before submitting. These filters transform the content during every postback, which can normalize it back to the same string as the ViewState value — even when real edits were made.

3. **Initial content mismatch** — The editor stores the raw initial content from the hidden textarea in `get_initialContent()`, but `get_html(true)` returns content that has been round-tripped through the DOM and the filter pipeline. These two values will almost always differ in formatting even without user edits, making a naive comparison unreliable.

This is a known limitation of string-based change detection in rich-text editors where the content goes through multiple transformation layers.

## Solution

### Approach 1: Track Changes (Recommended)

Use the built-in **Track Changes** feature of RadEditor. Instead of relying on string comparison, Track Changes monitors actual DOM mutations (insertions, deletions, formatting changes) and embeds semantic markers in the content:

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight"
    EnableTrackChanges="true" Width="750px" Height="350px">
    <TrackChangesSettings Author="CurrentUser" CanAcceptTrackChanges="true" UserCssId="reU0" />
    <Content>
        <p>Edit this content to test change detection.</p>
    </Content>
</telerik:RadEditor>

<asp:Button runat="server" ID="btnSubmit" Text="Submit" OnClick="btnSubmit_Click" />
````

On the server, check for track change markers in the posted HTML:

````C#
protected void btnSubmit_Click(object sender, EventArgs e)
{
    string content = RadEditor1.Content;

    // Track Changes inserts elements with class "reU0"-"reU9" for the user,
    // <del> elements for deletions, and class "reFormat" for formatting changes
    bool hasChanges = content.Contains("class=\"reU") 
                   || content.Contains("<del ") 
                   || content.Contains("class=\"reFormat");

    if (hasChanges)
    {
        // Content was modified — process it
    }
}
````

**Advantages:**
- Detects the exact type of change (insert, delete, format)
- No false positives from filter normalization
- Provides an audit trail of who changed what and when

**Live Demo:** [Track Changes](https://demos.telerik.com/aspnet-ajax/editor/examples/trackchanges/defaultcs.aspx)

### Approach 2: Client-Side Content Comparison

If Track Changes is not suitable (e.g., you don't want the visual markers), use `OnClientLoad` and `OnClientSubmit` to compare the filtered content at two consistent points in time:

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight"
    Width="750px" Height="350px"
    OnClientLoad="onClientLoad"
    OnClientSubmit="onClientSubmit">
    <Content>
        <p>Edit this content to test change detection.</p>
    </Content>
</telerik:RadEditor>

<asp:HiddenField runat="server" ID="ContentChangedFlag" Value="false" />
<asp:Button runat="server" ID="btnSubmit" Text="Submit" OnClick="btnSubmit_Click" />
````

````JavaScript
var _savedContent;

function onClientLoad(editor, args) {
    // Capture get_html(true) AFTER the editor has fully initialized.
    // This ensures the content has been through the same filter pipeline
    // that will be used on submit.
    _savedContent = editor.get_html(true);
}

function onClientSubmit(editor, args) {
    var currentContent = editor.get_html(true);
    var isChanged = (currentContent !== _savedContent);

    var hiddenField = document.getElementById('<%= ContentChangedFlag.ClientID %>');
    hiddenField.value = isChanged.toString();
}
````

````C#
protected void btnSubmit_Click(object sender, EventArgs e)
{
    bool contentChanged = ContentChangedFlag.Value == "true";

    if (contentChanged)
    {
        string newContent = RadEditor1.Content;
        // Process the changed content
    }
}
````

**Key points:**

- Both `_savedContent` and the comparison value use `get_html(true)` — this ensures both pass through the same DOM-to-string conversion and filter pipeline.
- Do **NOT** use `get_initialContent()` for comparison. It stores the raw pre-filter HTML from the hidden textarea, which will always differ from `get_html(true)` due to DOM normalization and filter processing.
- This approach has no visual impact on the editor content (no markers or highlights).

## Notes

- The native `TextChanged` event may still fire in some scenarios (e.g., when significant structural changes make the filtered output differ from ViewState). The workarounds above provide consistent detection regardless.
- If using AJAX (RadAjaxManager/RadAjaxPanel), ensure the `OnClientSubmit` handler runs before the AJAX request. The editor hooks into `__doPostBack` and `PageRequestManager` automatically, but custom AJAX calls may bypass these hooks.

## See Also

- [Track Changes Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/trackchanges/defaultcs.aspx)
- [Client-Side Events Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/events/overview)
- [OnClientLoad Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/events/onclientload)
- [OnClientSubmit Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/events/onclientsubmit)
- [Content Filters](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/content-filters)
