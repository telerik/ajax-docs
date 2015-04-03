---
title: OnDataFormCreating
page_title: OnDataFormCreating | UI for ASP.NET AJAX Documentation
description: OnDataFormCreating
slug: dataform/client-side-programming/events/ondataformcreating
tags: ondataformcreating
published: True
position: 2
---

# OnDataFormCreating



## 

The __OnDataFormCreating__ client-side event is raised just before the __RadDataForm__ is created

Two parameters are passed to the event handler:

* __sender__ - the __RadDataForm__ control that fired the event

* __eventArgs__ - an event arguments object of type __Sys.CancelEventArgs__

The following example illustrates how you can handle the __OnDataFormCreating__ event:

````ASPNET
	         <telerik:RadDataForm runat="server" ID="RadDataForm3">
	            <ClientSettings>
	                <ClientEvents OnDataFormCreating="onDataFormCreating" />
	            </ClientSettings>
	        </telerik:RadDataForm>
````



````JavaScript
	         <script type="text/javascript">
	             function onDataFormCreating(sender, args) {
	                 if (!confirm("Create RadDataForm?")) {
	                     args.set_cancel(true);
	
	                     alert("Creating DataForm canceled");
	                 }
	             }
	            </script>
````


