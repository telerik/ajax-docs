---
title: Callback Configuration
page_title: Callback Configuration | RadXmlHttpPanel for ASP.NET AJAX Documentation
description: Callback Configuration
slug: xmlhttppanel/getting-started/callback-configuration
tags: callback,configuration
published: True
position: 2
---

# Callback Configuration





This article explains how to configure the RadXmlHttpPanel's callback:

1. Add RadXmlHttpPanel ASP.NET AJAX to the page.

1. Set the **EnableClientScriptEvaluation** property to **true** to enable the evaluation of scripts loaded by the controls within the XmlHttpPanel.

1. Place a Label control inside the RadXmlHttpPanel.

1. Handle the **ServiceRequest** server-side event of RadXmlHttpPanel.

1. In the handler method, add the following code:

	__C#__
	
		protected void RadXmlHttpPanel1_ServiceRequest(object sender, Telerik.Web.UI.RadXmlHttpPanelEventArgs e)
		{
			Label1.Text = "Label updated by XmlHttpPanel callback at: " + DateTime.Now.ToString();
		}

	__VB__

		Protected Sub RadXmlHttpPanel1_ServiceRequest(sender As Object, e As Telerik.Web.UI.RadXmlHttpPanelEventArgs)
			Label1.Text = "Label updated by XmlHttpPanel callback at: " + Now.ToString()
		End Sub
	



1. Create an `<input/>` of type button that will call the **set_value** client method of the XmlHttpPanel, on a button click. You can also access the callback value from the client on the server using the `e.Value` property in the ServiceRequest event. Here is how the page and its code-behind should look after completing the steps above:

	__ASP.NET__

	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadXmlHttpPanel runat="server" ID="RadXmlHttpPanel1" EnableClientScriptEvaluation="true"
	        OnServiceRequest="RadXmlHttpPanel1_ServiceRequest">
	        <asp:Label ID="Label2" runat="server"></asp:Label>
	    </telerik:RadXmlHttpPanel>
	    <br />
	    <br />
	    <br />
	    <input type="button" value="Set Value" onclick="SetValue();return false;" />
	    <script type="text/javascript">
	        function SetValue()
	        {
	            var panel = $find("<%=RadXmlHttpPanel1.ClientID %>");
	            panel.set_value("string_value");
	        }
	    </script>


	__C#__

		protected void RadXmlHttpPanel1_ServiceRequest(object sender, Telerik.Web.UI.RadXmlHttpPanelEventArgs e)
		{
			Label1.Text = "Label updated by XmlHttpPanel callback at: " + DateTime.Now.ToString();
			//access the callback value from the client on the server using the e.Value property
			Label1.Text += "<br/> The returned value fron the client's set_value() function is: <strong>" + e.Value + "</strong>";
		}

	__VB__

	    Protected Sub RadXmlHttpPanel1_ServiceRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadXmlHttpPanelEventArgs)
	        Label1.Text = "Label updated by XmlHttpPanel callback at: " + DateTime.Now.ToString()
	        'access the callback value from the client on the server using the e.Value property
	        Label1.Text += "<br/> The returned value fron the client's set_value() function is: <strong>" + e.Value + "</strong>"
	    End Sub



