---
title: OnDataFormDestroying
page_title: OnDataFormDestroying | UI for ASP.NET AJAX Documentation
description: OnDataFormDestroying
slug: dataform/client-side-programming/events/ondataformdestroying
tags: ondataformdestroying
published: True
position: 4
---

# OnDataFormDestroying



## 

The __OnDataFormDestroying__ client-side event is raised just before the __RadDataForm__ is destroyed.

Two parameters are passed to the event handler:

* __sender__ - the __RadDataForm__ control that fired the event

* __eventArgs__ - an event arguments object of type __Sys.CancelEventArgs__

The following example illustrates how you can handle the __OnDataFormDestroying__ event:

````ASPNET
	         <telerik:RadDataForm runat="server" ID="RadDataForm4">
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


