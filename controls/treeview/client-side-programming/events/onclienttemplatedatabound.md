---
title: OnClientTemplateDataBound
page_title: OnClientTemplateDataBound | RadTreeView for ASP.NET AJAX Documentation
description: OnClientTemplateDataBound
slug: treeview/client-side-programming/events/onclienttemplatedatabound
tags: onclienttemplatedatabound
published: True
position: 30
---

# OnClientTemplateDataBound



## OnClientTemplateDataBound

The **OnClientTemplateDataBound** client-side event of the **RadTreeView** is fired after the client template is bound and the binding expression are evaluated.

The event handler receives two parameters:

1. The instance of the **TreeView** firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_dataItem()** returns the **dataItem** object that the current item is being bound to.

* **get_html()** gets the rendered template HTML.

* **set_html()** sets the rendered template HTML.

* **get_template()** – returns the template function that’s used to bind the **dataItem** to the template text.

# See Also

 * [Client Templates Overview]({%slug treeview/templates/client-templates%})

 * [Online Demo](https://demos.telerik.com/aspnet-ajax-beta/treeview/examples/functionality/clienttemplates/defaultcs.aspx)
