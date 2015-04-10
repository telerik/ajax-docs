---
title: Change Tabs on Mouseover
page_title: Change Tabs on Mouseover | UI for ASP.NET AJAX Documentation
description: Change Tabs on Mouseover
slug: tabstrip/how-to/change-tabs-on-mouseover
tags: change,tabs,on,mouseover
published: True
position: 0
---

# Change Tabs on Mouseover



## 

````ASPNET
	<form id="form1" runat="server">
	   <asp:ScriptManager ID="ScriptManager1" runat="server" />
	   <script type="text/javascript" language="javascript">
	   function SelectMyTab(sender, args)
	   {
	       var multiPageID = sender.get_multiPageID();
	       sender.set_multiPageID(null);
	       args.get_tab().select();
	       sender.set_multiPageID(multiPageID);
	   }
	     
	   function UnSelectMyTab(e)        
	   {  
	       var tabStrip = $find('<%= RadTabStrip1.ClientID%>');
	       //Find the element which the mouse is over
	       var destElement = e.relatedTarget || e.toElement;
	       if ($telerik.isDescendant(tabStrip.get_element(), destElement))
	           return;
	       var initialTab = tabStrip.findTabByText("<%= MyTab %>");
	       //initialTab.unselect();
	       initialTab.selectParents();
	   }        
	   </script>
	   <telerik:RadTabStrip ID="RadTabStrip1" runat="server" UnSelectChildren="true" OnClientMouseOver="SelectMyTab" ClickSelectedTab="True" AutoPostBack="True" onmouseout="UnSelectMyTab(event)" SelectedIndex="0" Skin="Outlook" MultiPageID="RadMultiPage1">
	       <Tabs>
	           <telerik:RadTab ID="Tab1" runat="server" Text="Root Tab 1">
	               <Tabs>
	                   <telerik:RadTab ID="Tab2" runat="server" Text="Child Tab 1.1" PageViewID="PageView1">
	                   </telerik:RadTab>
	                   <telerik:RadTab ID="Tab3" runat="server" Text="Child Tab 1.2" PageViewID="PageView2">
	                   </telerik:RadTab>
	               </Tabs>
	           </telerik:RadTab>
	           <telerik:RadTab ID="Tab4" runat="server" Text="Root Tab 2">
	               <Tabs>
	                   <telerik:RadTab ID="Tab5" runat="server" Text="Child Tab 2.1" PageViewID="PageView3">
	                   </telerik:RadTab>
	                   <telerik:RadTab ID="Tab6" runat="server" Text="Child Tab 2.2" PageViewID="PageView4">
	                   </telerik:RadTab>
	                   <telerik:RadTab ID="Tab7" runat="server" Text="Child Tab 2.3" PageViewID="PageView5">
	                   </telerik:RadTab>
	               </Tabs>
	           </telerik:RadTab>
	           <telerik:RadTab ID="Tab8" runat="server" Text="Root Tab 3">
	               <Tabs>
	                   <telerik:RadTab ID="Tab9" runat="server" Text="Child Tab 3.1" PageViewID="PageView6">
	                   </telerik:RadTab>
	               </Tabs>
	           </telerik:RadTab>
	       </Tabs>
	   </telerik:RadTabStrip>
	   <telerik:RadMultiPage ID="RadMultiPage1" runat="server" Height="454px" Width="737px">
	       <telerik:RadPageView ID="PageView1" runat="server">
	           Child Tab 1.1</telerik:RadPageView>
	       <telerik:RadPageView ID="PageView2" runat="server" Width="100%">
	           Child Tab 1.2</telerik:RadPageView>
	       <telerik:RadPageView ID="PageView3" runat="server" Width="100%">
	           Child Tab 2.1</telerik:RadPageView>
	       <telerik:RadPageView ID="PageView4" runat="server" Width="100%">
	           Child Tab 2.2</telerik:RadPageView>
	       <telerik:RadPageView ID="PageView5" runat="server" Width="100%">
	           Child Tab 2.3</telerik:RadPageView>
	       <telerik:RadPageView ID="PageView6" runat="server" Width="100%">
	           Child Tab 3.1</telerik:RadPageView>
	   </telerik:RadMultiPage>
	</form> 
				
````







````C#
	     
	
	        using System;
	        using System.Data;
	        using System.Data.SqlClient;
	        using System.Configuration;
	        using System.Collections;
	        using System.Web;
	        using System.Web.Security;
	        using System.Web.UI;
	        using System.Web.UI.WebControls;
	        using System.Web.UI.WebControls.WebParts;
	        using System.Web.UI.HtmlControls;
	        using Telerik.Web.UI;
	        public partial class _Default : System.Web.UI.Page
	        {
	           protected string MyTab;
	           protected void Page_Load(object sender, EventArgs e)
	           {
	               MyTab = RadTabStrip1.InnermostSelectedTab.Text;
	           }
	        } 
	
				
````
````VB.NET
	     
	
	        Imports System
	        Imports System.Data
	        Imports System.Data.SqlClient
	        Imports System.Configuration
	        Imports System.Collections
	        Imports System.Web
	        Imports System.Web.Security
	        Imports System.Web.UI
	        Imports System.Web.UI.WebControls
	        Imports System.Web.UI.WebControls.WebParts
	        Imports System.Web.UI.HtmlControls
	        Imports Telerik.Web.UI
	        Public Partial Class _Default
	         Inherits System.Web.UI.Page
	         Protected MyTab As String
	        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	            MyTab = RadTabStrip1.InnermostSelectedTab.Text
	        End Sub
	        End Class
	
				
````

