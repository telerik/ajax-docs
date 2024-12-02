---
title: Accessing ASP.NET PlaceHolder Control in RadPane Using JavaScript
description: Learn how to make ASP.NET PlaceHolder controls accessible via JavaScript when used within a RadPane by wrapping them in a server control that renders an HTML element.
type: how-to
page_title: Making ASP.NET PlaceHolder Controls Accessible in JavaScript within RadPane
slug: splitter-accessing-aspnet-placeholder-control-in-radpane-using-javascript
tags: radsplitter, asp.net ajax, radpane, javascript, placeholder, panel
res_type: kb
ticketid: 1671798
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadSplitter for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description

In ASP.NET WebForms, I'm using a `asp:PlaceHolder` control inside a `RadPane` to dynamically add several controls. However, I cannot locate the `PlaceHolder` using JavaScript functions like `$find('RecordForm')` or `document.getElementById('RecordForm')`. Both return null. How can I access the PlaceHolder control with JavaScript?

This knowledge base article also answers the following questions:
- How to make a PlaceHolder control accessible via JavaScript in ASP.NET AJAX?
- What is the method to interact with dynamically added controls in a PlaceHolder on the client side?
- Why can't JavaScript find a PlaceHolder control and how to solve it?

## Solution

The `asp:PlaceHolder` control does not render any HTML element, making it inaccessible through JavaScript's `$get()` or `document.getElementById()`. To interact with the PlaceHolder or its dynamically added controls on the client side, wrap the PlaceHolder in a server control that renders an HTML element, such as `asp:Panel`.

Modify your markup to include the PlaceHolder within a Panel:

```asp
<telerik:RadPane id="PaneLeftTop" runat="server" Scrolling="None" BackColor="#F5F5F5" OnClientResized="OnClientPaneLeftTopResized">
    <div style="margin-top:3px;margin-left:7px;line-height:2.25">
        <asp:Panel id="RecordFormPanel" runat="server">
            <asp:PlaceHolder id="RecordForm" runat="server" />
        </asp:Panel>
    </div>
</telerik:RadPane>
```

Access the Panel with JavaScript by its ID:

```javascript
var panel = document.getElementById('RecordFormPanel'); // or $get('RecordFormPanel')
```

The `asp:Panel` control renders as a `<div>` element in HTML, making it accessible through JavaScript. This approach allows you to maintain the server-side functionality of dynamically adding controls to the PlaceHolder while also providing a way to interact with those controls or their container on the client side.

## See Also

- [RadSplitter for ASP.NET AJAX - Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/splitter/overview)
- [ASP.NET Panel Control Overview](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.webcontrols.panel)
- [Using JavaScript to Manipulate DOM Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
