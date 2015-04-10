---
title: Get the Previously Selected Tab
page_title: Get the Previously Selected Tab | UI for ASP.NET AJAX Documentation
description: Get the Previously Selected Tab
slug: tabstrip/how-to/get-the-previously-selected-tab
tags: get,the,previously,selected,tab
published: True
position: 1
---

# Get the Previously Selected Tab



## 

If you need to get the previously selected tab you can use the approach described below:

* Hook on the OnClientTabSelecting client-side event

* Place a hidden field on the page

* Set the value of the hidden field to the last selected tab

* At the server-side use the value of the hidden field to locate the selected tab

__Example__

````ASPNET
	
	<form id="form1" runat="server">
	   <asp:ScriptManager ID="ScriptManager1" runat="server">
	   </asp:ScriptManager>
	   <asp:HiddenField ID="previousTabHidden" runat="Server" />
	   <script type="text/javascript">
	   function OnSelecting(sender, args)
	   {
	       $get("<%= previousTabHidden.ClientID%>").value = sender.get_selectedTab().get_text();
	   }
	   </script>
	   <telerik:RadTabStrip ID="RadTabStrip1" runat="server" Skin="Outlook" SelectedIndex="3" AutoPostBack="true" OnTabClick="RadTabStrip1_TabClick" OnClientTabSelecting="OnSelecting">
	       <Tabs>
	           <telerik:RadTab Text="Advanced">
	           </telerik:RadTab>
	           <telerik:RadTab Text="Automatic Updates">
	           </telerik:RadTab>
	           <telerik:RadTab Text="Remote">
	           </telerik:RadTab>
	           <telerik:RadTab Text="General">
	           </telerik:RadTab>
	           <telerik:RadTab Text="Computer Name">
	           </telerik:RadTab>
	           <telerik:RadTab Text="Hardware">
	           </telerik:RadTab>
	       </Tabs>
	   </telerik:RadTabStrip>
	</form> 
	
````







````C#
	
	RadTab lastClickedTab = null;
	protected void Page_Load(object sender, EventArgs e)
	{
	   if (Page.IsPostBack)
	   {
	       if (Request.Form["__EVENTTARGET"] == RadTabStrip1.UniqueID)
	       {
	           //locate the selected tab by using the value of the hidden field
	           //The code below will be executed only if the postback is fired by the tabstrip
	           lastClickedTab = RadTabStrip1.FindTabByText(previousTabHidden.Value);
	       }
	   }
	}
	protected void RadTabStrip1_TabClick(object sender, Telerik.Web.UI.RadTabStripEventArgs e)
	{
	   Response.Write("You clicked " + e.Tab.Text);
	   Response.Write("</br> Previous clicked tab was " + lastClickedTab.Text);
	} 
	
````
````VB.NET
	
	Private lastClickedTab As RadTab = Nothing
	Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	    If Page.IsPostBack Then
	        If Request.Form("__EVENTTARGET") = RadTabStrip1.UniqueID Then
	            'locate the selected tab by using the value of the hidden field
	            'The code below will be executed only if the postback is fired by the tabstrip
	            lastClickedTab = RadTabStrip1.FindTabByText(previousTabHidden.Value)
	        End If
	    End If
	End Sub
	Protected Sub RadTabStrip1_TabClick(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTabStripEventArgs)
	    Response.Write("You clicked " + e.Tab.Text)
	    Response.Write("</br> Previous clicked tab was " + lastClickedTab.Text)
	End Sub 
				
````

