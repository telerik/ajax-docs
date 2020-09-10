---
title: Styles
page_title: RadCard Styles | UI for ASP.NET AJAX Documentation
description: Styles
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
<telerik:RadCard ID="RadCard1" runat="server" CardState="Default" Width="300px" Height="30px">
    <span><span class="k-icon k-i-unpin"></span> Default</span>
</telerik:RadCard>

<telerik:RadCard ID="RadCard1" runat="server" CardState="Primary" Width="300px" Height="30px">
    <span><span class="k-icon k-i-marker-pin-target"></span> Primary</span>
</telerik:RadCard>

<telerik:RadCard ID="RadCard1" runat="server" CardState="Info" Width="300px" Height="30px">
    <span><span class="k-icon k-i-information"></span> Info</span>
</telerik:RadCard>

<telerik:RadCard ID="RadCard1" runat="server" CardState="Success" Width="300px" Height="30px">
    <span><span class="k-icon k-i-check-outline"></span> Success</span>
</telerik:RadCard>

<telerik:RadCard ID="RadCard1" runat="server" CardState="Warning" Width="300px" Height="30px">
    <span><span class="k-icon k-i-warning"></span> Warning</span>
</telerik:RadCard>

<telerik:RadCard ID="RadCard1" runat="server" CardState="Error" Width="300px" Height="30px">
    <span><span class="k-icon k-i-close-outline"></span> Error</span>
</telerik:RadCard>
````
 
