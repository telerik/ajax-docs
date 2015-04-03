---
title: Web Service Binding
page_title: Web Service Binding | UI for ASP.NET AJAX Documentation
description: Web Service Binding
slug: dropdowntree/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 3
---

# Web Service Binding



## Web Service Binding

Since __Q2 2013__ the RadDropDownTree control supports web service binding (WCF and ASMX). By using the__Databindings__ settings of the RadDropDownTree control you can set the __ExpandMode__ property to *WebService*.You will also need to set the path to the Web service and the name of the service method as specified in the WebServiceSettings' Path and Method properties below:

````ASPNET
	            <telerik:RadDropDownTree ID="RadDropDownTree1" runat="server" DataSourceID="LinqDataSource1"
	                DataTextField="Text" DataValueField="id" Width="280px">
	                <databindings>
	                    <telerik:DropDownNodeBinding Depth="0" ExpandMode="WebService" />
	                </databindings>
	                <webservicesettings path="DropDownTreeWebService.svc" method="LoadData"></webservicesettings>
	            </telerik:RadDropDownTree>
````



>tabbedCode

````C#
	    [ServiceContract(Namespace = "")]
	    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
	    public class DropDownTreeWebService
	    {
	
	        [OperationContract]
	        public DropDownNodeData[] LoadData(DropDownNodeData node)
	        {
	            TelerikSamplesDataContext context = new TelerikSamplesDataContext();
	
	            var result = from link in context.Links
	                         where link.parentId == Convert.ToInt32(node.Value)
	                         let children = from child in context.Links
	                                        where child.parentId == link.id
	                                        select child
	                         select new DropDownNodeData
	                         {
	                             Text = link.Text,
	                             ExpandMode = children.Count() > 0 ? DropDownTreeNodeExpandMode.WebService : DropDownTreeNodeExpandMode.ClientSide,
	                             Value = link.id.ToString()
	                         };
	
	            return result.ToArray();
	        }
	    }
````


>end
