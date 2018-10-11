---
title: ASPX Template Structure
page_title: ASPX Template Structure | RadToolBar for ASP.NET AJAX Documentation
description: ASPX Template Structure
slug: toolbar/templates/aspx-template-structure
tags: aspx,template,structure
published: True
position: 1
---

# ASPX Template Structure

## 

Only RadToolBarButtons and RadToolBarSplitButtons support templates.

>tip If you set a template to a RaToolBarSplitButton, this template will not be inherited by the child buttons of the split button. If you want to define templates for the child buttons, you should define an ItemTemplate for each child button.
>


````ASPNET
<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server">
    <CollapseAnimation Duration="200" Type="OutQuint" />
    <Items>
        <telerik:RadToolBarButton runat="server" CausesValidation="True" Text="Button 0">
        </telerik:RadToolBarButton>
        <telerik:RadToolBarDropDown runat="server" Text="DropDown 0">
            <Buttons>
                <telerik:RadToolBarButton runat="server" CausesValidation="True" Text="Child Button 1">
                    <ItemTemplate>
                        <asp:TextBox ID="TextBox1" runat="server" Text="Templated control"></asp:TextBox>
                    </ItemTemplate>
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarDropDown>
        <telerik:RadToolBarSplitButton runat="server" CausesValidation="True" DefaultButtonIndex="0"
            Text="SplitButton 0">
            <ItemTemplate>
                <asp:TextBox ID="TextBox1" runat="server" Text="Templated control"></asp:TextBox>
            </ItemTemplate>
            <Buttons>
                <telerik:RadToolBarButton runat="server" CausesValidation="True" Text="Child Button 1">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton runat="server" CausesValidation="True" Text="Child Button 2">
                    <ItemTemplate>
                        <asp:TextBox ID="TextBox1" runat="server" Text="Templated control"></asp:TextBox>
                    </ItemTemplate>
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````


>tip  **DataBinder.Eval** expressions work only when the toolbar is in a bound mode. In other words, you should explicitly call the DataBind() method even if no datasource is set to the toolbar.
>


The following demonstrates how to embed RadMenu, RadComboBox and a color picker inside the toolbar buttons and split button templates.

![ToolBar Templates](images/toolbar_templates_aspx.gif)



````ASPNET
<telerik:RadToolBar RenderMode="Lightweight" runat="server" ID="RadToolBar1" Style="overflow: visible;" Skin="Web20">
    <Items>
        <telerik:RadToolBarButton>
            <ItemTemplate>
                <telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Skin="Web20">
                    <Items>
                        <telerik:RadMenuItem Text="Template">
                            ...
                        </telerik:RadMenuItem>
                    </Items>
                </telerik:RadMenu>
            </ItemTemplate>
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton IsSeparator="true">
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton>
            <ItemTemplate>
                <div style="padding-left: 30px">
                    <telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" ...>
                    </telerik:RadComboBox>
                </div>
            </ItemTemplate>
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton>
            <ItemTemplate>
                <div style="font: bold 11px Tahoma; padding: 0 5px 0 15px; color: #15428b;">
                    Color scheme:</div>
            </ItemTemplate>
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton>
            <ItemTemplate>
                <telerik:RadColorPicker RenderMode="Lightweight" ID="RadColorPicker1" runat="server" ShowIcon="true" Preset="module"
                    Skin="Web20">
                </telerik:RadColorPicker>
            </ItemTemplate>
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton Text="Post" Style="margin-left: 10px;">
        </telerik:RadToolBarButton>
    </Items>
</telerik:RadToolBar>
````


