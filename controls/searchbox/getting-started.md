---
title: Getting Started
page_title: Getting Started | RadSearchBox for ASP.NET AJAX Documentation
description: Getting Started
slug: searchbox/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



## Creating a simple RadSearchBox

1. Drag a RadSearchBox from the Toolbox onto your web page.

	![searchbox drag from toolbox](images/searchbox_drag_from_toolbox.png)

1. From the [Design-time Smart Tag]({%slug searchbox/design-time%}) choose the desired Data Source using the **Choose Data Source** field.

	![searchbox smart tag](images/searchbox_smart_tag.png)

1. Set the **DataTextField** and **DataValueField** according to your Data Source fields.

1. Choose the desired **Filter**,**MaxFilterLength**, **MaxResultCount** and **EmptyMessage** that will best suit your scenario.

	![searchbox smart tag with additional fields](images/searchbox_smart_tag_with_additional_fields.png)

1. Back in the Smart Tag, choose a **Skin** from the drop-down control.

1. Run the application. Type something in the RadSearchBox to see the search results.

## Sample declaration of RadSearchBox in Source mode

The following code demonstrates the RadSearchBox's markup in Source mode:

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox1"  />
</telerik:RadSearchBox>
````


>caption 

![searchbox autocomplete false with search button](images/searchbox_autocomplete_false_with_search_button.png)
