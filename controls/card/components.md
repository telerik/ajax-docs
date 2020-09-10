---
title: Components
page_title: RadCard Components | UI for ASP.NET AJAX Documentation
description: Components
slug: card/components
tags: components
published: True
position: 1
---

# Components

Card components are building blocks that inherit the [System.Web.HtmlContainerControl](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.htmlcontrols.htmlcontainercontrol?view=netframework-4.8) class and its features such as Properties, Controls collection, Attributes, etc. They also expose the [`TagKey`](#tagkey) property which can be modified to make the Components render HTML elements different from the default.

List of Components:
- [Header](#header)
- [Title](#title)
- [Body](#body)
- [Footer](#footer)
- [Actions](#actions)
- [Media](#media)
- [Separators](#separators)


## Header

To create a header, add a **CardHeaderComponent** inside the **RadCard** tag. This renders a div element.

[`TagKey="div"`](#tagkey)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardHeaderComponent runat="server">
        <%--Header Content--%>
    </telerik:CardHeaderComponent>
</telerik:RadCard>
````

## Title

To create a Title, add a **CardTitleComponent** inside the **RadCard** tag. This renders an h5 element.

[`TagKey="h5"`](#tagkey)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardTitleComponent runat="server">
        <%--Card Title--%>
    </telerik:CardTitleComponent>
</telerik:RadCard>
````


## Body

To create a body, add a **CardBodyComponent** inside the **RadCard** tag. This renders a div element.

[`TagKey="div"`](#tagkey)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardBodyComponent runat="server">
        <%--Body Content--%>
    </telerik:CardBodyComponent>
</telerik:RadCard>
````

## Footer

To create a footer, add a **CardFooterComponent** inside the **RadCard** tag. This renders a div element.

[`TagKey="div"`](#tagkey)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardFooterComponent runat="server">
        <%--Footer Content--%>
    </telerik:CardFooterComponent>
</telerik:RadCard>
````


## Actions

Actions consist of two parts, the **CardActionsContainerComponent** that could contain one or more **CardActionComponent**.
To create actions, add a **CardActionsContainerComponent** inside the **RadCard** tag, then create Actions by adding one or more **CardActionComponent** elements.

- **CardActionsContainerComponent**. This renders a div element.

[`TagKey="div"`](#tagkey)

- **CardActionComponent**. This renders a span element

[`TagKey="span"`](#tagkey)


````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardActionsContainerComponent runat="server" Orientation="Vertical" CardActionsAppearance="Stretched">
        <telerik:CardActionComponent runat="server"> 
            Book now
        </telerik:CardActionComponent>
        <telerik:CardActionComponent runat="server">
            Check Rates
        </telerik:CardActionComponent>
    </telerik:CardActionsContainerComponent>
</telerik:RadCard>
````


## Media

To create a placeholder for icons/images, add a **CardMediaComponent** inside the RadCard tag. This renders a div element.

[`TagKey="div"`](#tagkey)

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardMediaComponent runat="server">
        <%--Media Content--%>
    </telerik:CardMediaComponent>
</telerik:RadCard>
````


## Separators

To create separators, add **CardSeparatorComponent** inside the RadCard tag between other components or any other element you would like to separate. This renders an hr element.

[`TagKey="hr"`](#tagkey)]

````ASP.NET
<telerik:RadCard ID="RadCard1" runat="server">
    <telerik:CardSeparatorComponent runat="server">
    </telerik:CardSeparatorComponent>
</telerik:RadCard>
````
  
### TagKey

The [WebControl.TagKey property](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.webcontrols.webcontrol.tagkey?view=netframework-4.8) allows you to get the [HtmlTextWriterTag](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.htmltextwritertag?view=netframework-4.8) value that is associated with this Web server control. The `TagKey` property exposed by the Card Components also allows you to change this value. You can change this if you would like the Control to render a different HTML element.

**Example**

Default `TagKey` of the **CardBodyComponent** is `Div` and it will render a DIV element.

````ASP.NET
<telerik:CardBodyComponent runat="server">
    <telerik:CardTitleComponent runat="server" Content="African Safari"></telerik:CardTitleComponent>
    <p>Africa provides some of the most epic wildlife diversity on the planet. Not many vacations involve sleeping in close quarters with lions, leopards, elephants, buffaloes, rhinos, giraffes and hippos.</p>
</telerik:CardBodyComponent>
````

Rendered HTML

````HTML
<div class="k-card-body ">
    <h5 class="k-card-title ">African Safari</h5>
    <p>Africa provides some of the most epic wildlife diversity on the planet. Not many vacations involve sleeping in close quarters with lions, leopards, elephants, buffaloes, rhinos, giraffes and hippos.</p>
</div>
````

Changing the `TagKey` to `Span` will render a Span element.

````ASP.NET
<telerik:CardBodyComponent runat="server" TagKey="Span">
    <telerik:CardTitleComponent runat="server" Content="African Safari"></telerik:CardTitleComponent>
    <p>Africa provides some of the most epic wildlife diversity on the planet. Not many vacations involve sleeping in close quarters with lions, leopards, elephants, buffaloes, rhinos, giraffes and hippos.</p>
</telerik:CardBodyComponent>
````

Rendered HTML

````HTML
<span class="k-card-body ">
    <h5 class="k-card-title ">African Safari</h5>
    <p>Africa provides some of the most epic wildlife diversity on the planet. Not many vacations involve sleeping in close quarters with lions, leopards, elephants, buffaloes, rhinos, giraffes and hippos.</p>
</span>
````
 
