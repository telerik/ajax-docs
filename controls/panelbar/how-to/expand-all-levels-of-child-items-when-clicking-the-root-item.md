---
title: Expand All Levels of Child Items When Clicking the Root Item
page_title: Expand All Levels of Child Items When Clicking the Root Item - RadPanelBar
description: Check our Web Forms article about Expand All Levels of Child Items When Clicking the Root Item.
slug: panelbar/how-to/expand-all-levels-of-child-items-when-clicking-the-root-item
tags: expand,all,levels,of,child,items,when,clicking,the,root,item
published: True
position: 1
---

# Expand All Levels of Child Items When Clicking the Root Item



## 

This example shows how to expand all levels of child items when clicking the root item.

````ASPNET
<telerik:RadPanelBar RenderMode="Lightweight" ID="RadPanelBar1" runat="server" Skin="Outlook" OnClientItemClicking="ExpandAllChildren">
    <CollapseAnimation Duration="100" Type="None" />
    <Items>
        <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1">
            <Items>
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                </telerik:RadPanelItem>
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                    <Items>
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                            <Items>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                                </telerik:RadPanelItem>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                                </telerik:RadPanelItem>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
                                </telerik:RadPanelItem>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 4">
                                </telerik:RadPanelItem>
                            </Items>
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
                        </telerik:RadPanelItem>
                    </Items>
                </telerik:RadPanelItem>
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
                </telerik:RadPanelItem>
                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 4">
                    <Items>
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                        </telerik:RadPanelItem>
                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                            <Items>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                                </telerik:RadPanelItem>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                                    <Items>
                                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 1">
                                        </telerik:RadPanelItem>
                                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 2">
                                        </telerik:RadPanelItem>
                                        <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
                                        </telerik:RadPanelItem>
                                    </Items>
                                </telerik:RadPanelItem>
                                <telerik:RadPanelItem runat="server" Text="Child RadPanelItem 3">
                                </telerik:RadPanelItem>
                            </Items>
                        </telerik:RadPanelItem>
                    </Items>
                </telerik:RadPanelItem>
            </Items>
        </telerik:RadPanelItem>
    </Items>
    <ExpandAnimation Duration="100" Type="None" />
</telerik:RadPanelBar>
````



````JavaScript
<script type="text/javascript">
    function ExpandAllChildren(sender, args) {
        enumerateChildItems(args.get_item());
    }

    function enumerateChildItems(myitem) {
        for (var i = 0; i < myitem.get_items().get_count(); i++) {
            myitem.get_items().getItem(i).expand()
            enumerateChildItems(myitem.get_items().getItem(i));
        }
    }
</script>
````




