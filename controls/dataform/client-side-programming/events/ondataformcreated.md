---
title: OnDataFormCreated
page_title: OnDataFormCreated | UI for ASP.NET AJAX Documentation
description: OnDataFormCreated
slug: dataform/client-side-programming/events/ondataformcreated
tags: ondataformcreated
published: True
position: 3
---

# OnDataFormCreated



## 

The __OnDataFormCreated__ client-side event is raised after the __RadDataForm__ was created

Two parameters are passed to the event handler:

* __sender__ - the __RadDataForm__ control that fired the event

* __eventArgs__ - an event arguments object of type __Sys.EventArgs__

The following example illustrates how you can handle the __OnDataFormCreated__ event:

````ASPNET
	         <telerik:RadDataForm runat="server" ID="RadDataForm1">
	            <ClientSettings>
	                <ClientEvents OnDataFormCreated="onDataFormCreated" />
	            </ClientSettings>
	        </telerik:RadDataForm>
````



````JavaScript
	         <script type="text/javascript">
	             function onDataFormCreated(sender, args) {
	                 alert("RadDataForm created!");
	             }
	            </script>
````


