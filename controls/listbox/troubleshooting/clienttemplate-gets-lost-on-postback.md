---
title: ClientTemplate Gets Lost on PostBack
page_title: ClientTemplate Gets Lost on PostBack | UI for ASP.NET AJAX Documentation
description: ClientTemplate Gets Lost on PostBack
slug: listbox/troubleshooting/clienttemplate-gets-lost-on-postback
tags: clienttemplate,gets,lost,on,postback
published: True
position: 3
---

# ClientTemplate Gets Lost on PostBack



## 

When initially loading data form the web service the __ClientTemplates__ are applied to the control/items normally. On PostBack of the page, however, the __ClientTemplate__ gets lost. This is due to the fact that on postback the itemsare recreated on the server and are no longer loaded through web service. In order to preserve the templated look, a server side template needs to be applied. So in order to have consistent look when using ClientTemplates and PostBacks,you have to include Server template with the same layout as the __ClientTemplate__, that is applied to nodes that come from the server.

>note Keep in mind that on __PageLoad__ the __DataBind()__ event needs to be called as well( __RadListBox1.DataBind();__ ).
>


````ASPNET
	    <telerik:RadListBox runat="server" ID="RadListBox1" Height="410px" Width="320px">
	            <HeaderTemplate>
	                <h2> Customers</h2>
	            </HeaderTemplate>
	            <ClientItemTemplate>              
	             Template  #= Text # 
	                </div>
	            </ClientItemTemplate>
	            <ItemTemplate>
	                Template <%# DataBinder.Eval(Container, "Text")%>
	            </ItemTemplate>
	            <WebServiceSettings Method="GetCustomers" Path="defaultcs.aspx" />
	        </telerik:RadListBox>
	
````


