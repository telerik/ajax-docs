---
title: OnDataFormCreated
page_title: OnDataFormCreated - RadDataForm
description: Check our Web Forms article about OnDataFormCreated.
slug: dataform/client-side-programming/events/ondataformcreated
tags: ondataformcreated
published: True
position: 3
---

# OnDataFormCreated



## 

The **OnDataFormCreated** client-side event is raised after the **RadDataForm** was created

Two parameters are passed to the event handler:

* **sender** - the **RadDataForm** control that fired the event

* **eventArgs** - an event arguments object of type **Sys.EventArgs**

The following example illustrates how you can handle the **OnDataFormCreated** event:

````ASPNET
 <telerik:RadDataForm RenderMode="Lightweight" runat="server" ID="RadDataForm1">
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


