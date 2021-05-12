---
title: Access Telerik Controls on Client-Side
description: Access Telerik Controls on Client-Side. Check it now!
type: how-to
page_title: Access Telerik Controls on Client-Side
slug: common-access-telerik-controls-on-client-side
res_type: kb
---

## Description  

When a control is placed within a Content Page, Template or another container which implements INamingContainer interface, its UniqueID and ClientID are modified, thus making it inaccessible on main Page level. The problem is similar when using server-side expressions like `<%=txtTrackingNumber.ClientID%>` in external JavaScript files, which are not allowed.   
  

## Solution  
While on server-side you can use the FindControl method to access any control in such cases, on client-side it is important to note the difference between the regular HTML element rendered for the specific control and its own Telerik object representation. You will need to get the Telerik instance of the control in order to leverage its built-in API using one of the following approaches:
  
1. Find the control using the `findControl` or `findElement` methods:  

```JavaScript
var textBox = $telerik.findControl(document.documentElement, "txtTrackingNumber");
```

The first argument here is the container element and the second one is the original ID of the control. The findControl and findElement methods are used for Telerik and regular HTML elements respectively.  
  
1. Use the client-side event handlers of the Telerik controls to get a reference to their objects:  

```ASPX
<telerik:RadButton ... OnClientLoad="buttonLoad">
```

```JavaScript
var button;

function buttonLoad(sender, args) {
    button = sender;
}
```
 
1. Access the control directly using the `$find()` method.

This method requires the exact `ClientID` generated for the control. You can acquire it by getting the matching HTML element using jQuery or some other way and then use its id attribute to pass it as the argument.  
  
  
## See Also

* [Get Client-side Reference to a Control Object](https://docs.telerik.com/devtools/aspnet-ajax/general-information/get-client-side-reference).


