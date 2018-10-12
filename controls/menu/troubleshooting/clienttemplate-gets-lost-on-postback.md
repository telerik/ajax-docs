---
title: ClientTemplate Gets Lost on PostBack
page_title: ClientTemplate Gets Lost on PostBack | RadMenu for ASP.NET AJAX Documentation
description: ClientTemplate Gets Lost on PostBack
slug: menu/troubleshooting/clienttemplate-gets-lost-on-postback
tags: clienttemplate,gets,lost,on,postback
published: True
position: 5
---

# ClientTemplate Gets Lost on PostBack

## 

When initially loading data form the web service the **ClientTemplates** are applied to the control/items normally. On PostBack of the page, however, the **ClientTemplate** gets lost. This is due to the fact that on postback the items are recreated on the server and are no longer loaded through web service. In order to preserve the templated look, a server side template needs to be applied. So in order to have consistent look when using ClientTemplates and PostBacks, you have to include Server template with the same layout as the **ClientTemplate**, that is applied to nodes that come from the server.

>note Keep in mind that on **PageLoad** the **DataBind()** event needs to be called as well( **RadMenu1.DataBind();** ).
>


````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" runat="server" ID="RadMenu1" PersistLoadOnDemandItems="true" >
        <WebServiceSettings Path="MenuWcfService.svc" Method="LoadData" />
        <ClientItemTemplate>
            Client Item Template  #= Text #
        </ClientItemTemplate>
        <ItemTemplate>
            Client Item Template
            <%# DataBinder.Eval(Container, "Text") %>
        </ItemTemplate>
</telerik:RadMenu>
````


