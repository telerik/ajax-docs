---
title: OnDataFormCreating
page_title: OnDataFormCreating - RadDataForm
description: Check our Web Forms article about OnDataFormCreating.
slug: dataform/client-side-programming/events/ondataformcreating
tags: ondataformcreating
published: True
position: 2
---

# OnDataFormCreating



## 

The **OnDataFormCreating** client-side event is raised just before the **RadDataForm** is created

Two parameters are passed to the event handler:

* **sender** - the **RadDataForm** control that fired the event

* **eventArgs** - an event arguments object of type **Sys.CancelEventArgs**

The following example illustrates how you can handle the **OnDataFormCreating** event:

````ASPNET
 <telerik:RadDataForm RenderMode="Lightweight" runat="server" ID="RadDataForm3">
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


