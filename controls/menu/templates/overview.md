---
title: Overview
page_title: Templates Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



## 

__RadMenu__ items are extremely configurable. In addition to the preset [skins]({%slug menu/appearance-and-styling/appearance-skins%}), you can customize the appearance of menu items by [adding custom images]({%slug menu/appearance-and-styling/adding-images-to-items%}), using [CSS classes]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%}), or [creating custom skins]({%slug menu/appearance-and-styling/tutorial:-creating-a-custom-skin%}). However, if you want to embed other HTML controls in a menu item, you must use templates. You can embed any content inside a __RadMenu__ template, including:

* HTML markup

* ASP.NET server controls

* Other third-party controls (including other Telerik controls)

At design time, add item templates to your __RadMenu__ control usingthe [Template Design Surface]({%slug menu/design-time/template-design-surface%}). __RadMenu__ supports several types of item templates:

1. The global __RadMenuItem__ template affects the appearance of all items in the menu.

1. Individual __Item__ template affects the appearance of a single menu item, overriding the global __RadMenuItem__ template if it is set (see Figure 1.).
>caption Figure 1. Using ItemTemplate

![RadMenu templates](images/menu_templates.png)

1. A __ContentTemplate__ that allows you to customize only single items from the menu.

>note As of __Q1 2014__ release of the Telerik controls you can also use the specially created __ContentTemplate__ that allows you to modify the content (where normally the child items would reside)of a single menu item as desired.
>

>caption Figure 2. Using ContentTemplate

![content Template](images/contentTemplate.png)

>note In addition to the item templates, __RadMenu__ also supports a __Loading Status__ template, which acts as a placeholder for a child group that is[loaded from a Web service]({%slug menu/data-binding/web-service-binding%})while a request for items is being serviced.
>




For live examples of using templates, see [Templates](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Functionality/Templates/DefaultCS.aspx) and [Multi-column Menus](http://demos.telerik.com/aspnet-ajax/Menu/Examples/MultiColumnMenu/DefaultCS.aspx).

>caution If you add templates at runtime, assigning an object that implements the __ITemplate__ interface to the __ItemTemplate__ property, the template only works with items added at runtime in the codebehind.
>


>caution If you add items via a __WebService__ , templates will not be applied to these items.
>


# See Also

 * [Client Templates]({%slug menu/templates/client-templates%})

 * [Server Templates]({%slug menu/templates/server-templates%})

 * [Accessing Controls Inside Templates]({%slug menu/templates/accessing-controls-inside-templates%})

 * [DataBinding expressions]({%slug menu/templates/databinding-expressions%})
