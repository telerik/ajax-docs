---
title: Binding to WCF
page_title: Binding to WCF - RadDropDownList
description: Check our Web Forms article about Binding to WCF.
slug: dropdownlist/databinding/client-side-binding/binding-to-wcf
tags: binding,to,wcf
published: True
position: 0
---

# Binding to WCF



RadDropDownList supports binding to an WCF service.

## Example of binding to WCF service

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" runat="server" Skin="Default" EmptySelectionMessage="Select">
	<WebServiceSettings Path="DropDownListWcfService.svc" Method="LoadData" />
</telerik:RadDropDownList>
````


