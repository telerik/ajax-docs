---
title: Orientation
page_title: RadCard Orientation
description: Check our Web Forms article about Orientation.
slug: card/orientation
tags: orientation
published: True
position: 3
---

# Orientation

Orientation allows the content to be arranged horizontally or vertically.



## Card Orientation

Card orientation will arrange the content (Header, Body, Footer, etc) of the Card.


````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server" Orientation="Horizontal">
    <telerik:CardHeaderComponent runat="server">Header</telerik:CardHeaderComponent>
    <telerik:CardBodyComponent runat="server">Body</telerik:CardBodyComponent>
    <telerik:CardFooterComponent runat="server">Footer</telerik:CardFooterComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 2</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
````


## Actions Orientation

Actions orientation will arrange the actions (CardActionComponents)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server" Orientation="Horizontal">
    <telerik:CardHeaderComponent runat="server">Header</telerik:CardHeaderComponent>
    <telerik:CardBodyComponent runat="server">Body</telerik:CardBodyComponent>
    <telerik:CardFooterComponent runat="server">Footer</telerik:CardFooterComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched" Orientation="Vertical">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-secondary">Action 2</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
````

## Actions alignment

- Start
- Centered
- End
- Stretched
- None

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Centered">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Centered">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Centered">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="None">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="None">
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            <span class="k-button k-flat k-primary">Action 1</span>
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
````
 
