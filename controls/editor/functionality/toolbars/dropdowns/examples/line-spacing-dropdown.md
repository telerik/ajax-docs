---
title: Line Spacing Dropdown
page_title: Line Spacing Dropdown - RadEditor
description: Check our Web Forms article about Line Spacing Dropdown.
slug: editor/functionality/toolbars/dropdowns/examples/line-spacing-dropdown
tags: line,spacing,dropdown
published: True
position: 0
---

# Line Spacing Dropdown

Here is an example demonstrating how to create a line spacing dropdown, from which you can change line distance within text:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting" ContentAreaMode="Iframe" runat="server" Height="600px">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorDropDown Name="LineSpacing" Text="Line Spacing" PopupWidth="110" PopupHeight="90">
                <telerik:EditorDropDownItem Name="Default" Value="" />
                <telerik:EditorDropDownItem Name="Single space" Value="20px" />
                <telerik:EditorDropDownItem Name="1.5 Lines" Value="35px" />
                <telerik:EditorDropDownItem Name="Double spacing" Value="50px" />
            </telerik:EditorDropDown>
        </telerik:EditorToolGroup>
    </Tools>
    <Content>
        <ul>
            <li>Line 1</li>
            <li>Line 1</li>
            <li>Line 1</li>
            <li>Line 1</li>
        </ul>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
    </Content>
</telerik:RadEditor>
<script>
    function OnClientCommandExecuting(editor, args) {
        if (!args || !args.get_commandName) return;

        var name = args.get_name();
        var val = args.get_value();

        if (name == "LineSpacing") {
            const selection = editor.get_document().getSelection();
            if (selection.rangeCount) {
                const range = selection.getRangeAt(0);
                const ancestor = range.commonAncestorContainer.nodeType === Node.TEXT_NODE ? range.commonAncestorContainer.parentElement : range.commonAncestorContainer;

                const iterator = document.createNodeIterator(
                    ancestor,
                    NodeFilter.SHOW_ELEMENT,
                    node => range.intersectsNode(node) && (node.nodeName.toLowerCase() === "span" || node.nodeName.toLowerCase() === "p" || node.nodeName.toLowerCase() === "li")
                );

                let node;
                while (node = iterator.nextNode()) {
                    if (val === "") {
                        // Remove line-height style for "Default" option
                        if (node.style.lineHeight) {
                            node.style.removeProperty('line-height');
                        }
                    } else {
                        // Apply new line-height
                        node.style.lineHeight = val;
                    }
                }
            }

            args.set_cancel(true);
        };
    };
</script>
````


