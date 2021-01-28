---
title: Styles
page_title: RadCard Styles
description: Check our Web Forms article about Styles.
slug: card/styles
tags: styles
published: True
position: 4
---

# Styles

Cards provide predefined state that you can use to change the Card appearance. To do that, change the **CardState** property to one of the following states:

- Default
- Primary
- Info
- Success
- Warning
- Error

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server" CardState="Default" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Default
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-default">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-default">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>

<telerik:RadCard ID="RadCard2" runat="server" CardState="Primary" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Primary
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-primary">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-primary">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>

<telerik:RadCard ID="RadCard3" runat="server" CardState="Info" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Info
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-info">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-info">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>

<telerik:RadCard ID="RadCard4" runat="server" CardState="Success" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Success
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-success">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-success">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>

<telerik:RadCard ID="RadCard5" runat="server" CardState="Warning" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Warning
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-warning">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-warning">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>

<telerik:RadCard ID="RadCard6" runat="server" CardState="Error" Width="300px">
    <telerik:CardTitleComponent runat="server">
        Card Title Error
    </telerik:CardTitleComponent>
    <telerik:CardSubtitleComponent runat="server">
        Card Subtitle
    </telerik:CardSubtitleComponent>
    <telerik:CardBodyComponent runat="server">
        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
    </telerik:CardBodyComponent>
    <telerik:CardActionsContainerComponent runat="server" CardActionsAlignment="Stretched">
        <span class="k-button k-flat k-error">Action 1</span>
        <telerik:CardSeparatorComponent runat="server" Orientation="Vertical">
        </telerik:CardSeparatorComponent>
        <span class="k-button k-flat k-error">Action 2</span>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
````
  
