---
title: Fluid Design
page_title: Fluid Design - RadSplitButton
description: Check our Web Forms article about Fluid Design.
slug: splitbutton/mobile-support/fluid-design
tags: fluid,design
published: True
position: 2
---

# Fluid Design

This article explains the **fluid design capabilities RadSplitButton offers**. The **Example 1** below shows how you can set button size in percent so it can resize with its parent element.

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: splitbutton/mobile-support/elastic-design, slug-fl: no")

>caption Figure 1: RadSplitButton occupying 100% of its parent's width.

![pushbutton-fluid-design](images/splitbutton-fluid-design.gif)

>caption Example 1: Shows the markup that provides fluid design of the RadSplitButton in Figure 1.

````ASPX
<div style="width: 30%;">
    <telerik:RadSplitButton runat="server" ID="RadSplitButton" Text="Split Button" Width="100%">
        <ContextMenu>
            <Items>
                <telerik:RadMenuItem Text="Action 1"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Action 2"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Action 3"></telerik:RadMenuItem>
            </Items>
        </ContextMenu>
    </telerik:RadSplitButton>
</div>
````

## See Also

 * [Mobile Support Overview]({%slug splitbutton/mobile-support/overview%})

 * [Render Modes]({%slug splitbutton/mobile-support/render-modes%})

 * [Elastic Design]({%slug splitbutton/mobile-support/elastic-design%})


