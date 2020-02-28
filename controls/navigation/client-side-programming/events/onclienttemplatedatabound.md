---
title: OnClientTemplateDataBound
page_title: OnClientTemplateDataBound | RadNavigation for ASP.NET AJAX Documentation
description: OnClientTemplateDataBound
slug: navigation/client-side-programming/events/onclienttemplatedatabound
tags: onclienttemplatedatabound
published: True
position: 10
---

# OnClientTemplateDataBound

The following article demonstrates how to use and subscribe to the **OnClientTemplateDataBound** client-side event of the **RadNavigation** control.

## OnClientTemplateDataBound

The **OnClientTemplateDataBound** client-side event of the **RadNavigation** is fired after the client template is bound and the binding expression are evaluated. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientTemplateDataBound** property. 

The client-side **OnClientTemplateDataBound** event handler receives two arguments:

1. sender — the instance of the **RadNavigation** firing the event.

1. Event arguments — an Telerik.Web.UI.RadTemplateBoundEventArgs object that exposes the following methods:

* **get_dataItem()** returns the **dataItem** object that the current item is being bound to.

* **get_html()** gets the rendered template HTML.

* **set_html()** sets the rendered template HTML.

* **get_template()** – returns the template function that’s used to bind the **dataItem** to the template text.


## See Also

 * [Demo: Navigation - Client-side Templates](https://demos.telerik.com/aspnet-ajax/navigation/functionality/client-side-templates/defaultcs.aspx)

 
 