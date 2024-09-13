---
title: Initially Hidden RadFileExplorer - appearance issues
description: Initially Hidden RadFileExplorer - appearance issues. Check it now!
type: how-to
page_title: Initially Hidden RadFileExplorer - appearance issues
slug: fileexplorer-initially-hidden-radfileexplorer-appearance-issues
res_type: kb
---

## Description

When RadFileExplorer is used in LightWeight render mode, it cannot recalculate all sizes when its parent is initially not visible, because browsers do not render dimensions for them. A common appearance glitch is that the contents of the treeview and/or the grid overflow the boundaries of the control.

## Solution

You can:

- either switch to Classic render mode of the control,
- or invoke a full postback to add it to the page (do not use AJAX),
- or recalculate the size of the  nested controls of RadFileExplorer in a similar way:

````ASP.NET
<telerik:RadTabStrip runat="server" ID="rts1" MultiPageID="rmp1" Skin="Bootstrap" RenderMode="Lightweight" OnClientTabSelected="OnClientTabSelected">
    <Tabs>
        <telerik:RadTab Text="one"></telerik:RadTab>
        <telerik:RadTab Text="two"></telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage runat="server" ID="rmp1">
    <telerik:RadPageView runat="server" ID="rpv1" Selected="true">
        select the other tab with the file explorer
    </telerik:RadPageView>
    <telerik:RadPageView runat="server" ID="rpv2">
        <telerik:RadFileExplorer RenderMode="Lightweight" runat="server" ID="rfe1" Width="900px" Height="490px">
            <Configuration ViewPaths="~/" />
        </telerik:RadFileExplorer>
    </telerik:RadPageView>
</telerik:RadMultiPage>
````

````JavaScript
function OnClientTabSelected(sender, args) {
    // check the currently active tab. This is just an example, the approach can be used with any other setup that shows the file explorer with JavaScript
    if (args.get_tab().get_text() == "two") {
        var fileExplorer = $find("<%=rfe1.ClientID%>");
        var toolbar = fileExplorer.get_toolbar();
        var splitter = fileExplorer.get_splitter();
        var grid = fileExplorer.get_grid();
        //calculate the height of any visible elements outside the splitter
        var toolbarHeight = $telerik.$(fileExplorer.get_toolbar().get_element()).height();
        var textBoxHeight = $telerik.$("#" + fileExplorer.get_addressBox()).height();
        //adjust for the height to take into account the visible elements
        var height = splitter.get_height() - toolbarHeight - textBoxHeight - 10;
        //use the current file explorer width
        var width = $telerik.$(fileExplorer.get_element()).width();

        setTimeout(function () {
            //resize and repaint controls
            grid.get_element().style.height = height + "px";
            grid.repaint();
            toolbar.repaint();
            splitter.resize(width, height);
            splitter.repaint();
        }, 10);
    }
}
````

