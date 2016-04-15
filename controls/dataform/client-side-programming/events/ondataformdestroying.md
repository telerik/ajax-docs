---
title: OnDataFormDestroying
page_title: OnDataFormDestroying | RadDataForm for ASP.NET AJAX 
description: OnDataFormDestroying
slug: dataform/client-side-programming/events/ondataformdestroying
tags: ondataformdestroying
published: True
position: 4
---

# OnDataFormDestroying



## 

The **OnDataFormDestroying** client-side event is raised just before the **RadDataForm** is destroyed.

Two parameters are passed to the event handler:

* **sender** - the **RadDataForm** control that fired the event

* **eventArgs** - an event arguments object of type **Sys.CancelEventArgs**

The following example illustrates how you can handle the **OnDataFormDestroying** event:

````ASPNET
<telerik:RadDataForm RenderMode="Lightweight" runat="server" ID="RadDataForm4">
    <ClientSettings>
        <ClientEvents OnDataFormDestroying="onDataFormDestroying" />
    </ClientSettings>
</telerik:RadDataForm>
````



````JavaScript
<script type="text/javascript">
	function onDataFormDestroying(sender, args) {
		alert("DataForm destroying");
	}
</script>
````


