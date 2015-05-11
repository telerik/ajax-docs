---
title: RadAjax and WebUserControls
page_title: RadAjax and WebUserControls | RadAjax for ASP.NET AJAX Documentation
description: RadAjax and WebUserControls
slug: ajax/radajaxmanager/how-to/radajax-and-webusercontrols
tags: radajax,and,webusercontrols
published: True
position: 1
---

# RadAjax and WebUserControls



## 

RadAjax for ASP.NET AJAX Manager allows a single instance of the control on the same page only. One cannot place manager in the main page and second instance inside a user control anymore. RadAjaxManager designer on the other hand, cannot locate the WebUserControl (as well as controls inside it).

Since the release of RadAjax for ASP.NET AJAX from May 2007, there is a new, **RadAjaxManagerProxy**[control]({%slug ajax/radajaxmanagerproxy/overview%}). The new control can be added inside a WebUserControl and configured the same way as the manager to AJAX-enable the user control completely codeless:

````ASPNET
<telerik:RadAjaxManagerProxy ID="AjaxManagerProxy1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManagerProxy>
````



>note RadAjaxManagerProxy can be used for design-time configuration only. It does not have a client-side object, methods or events!
>


>note If one still needs the manager instance at the code of a WebUserControl for example so that an AJAX request need to be triggered explicitly, she can get the manager by **RadAjaxManager.GetCurrent()** method call. The method will return null if there is no manager on the page, similar to[ASP:ScriptManager implementation](http://msdn.microsoft.com/en-us/magazine/cc163354.aspx).
>


Should you need the server or client-side RadAjaxManager functionality (like **ResponseScripts** collection, **ajaxRequest** function) you can get the "master" manager instance via Server-Side **GetCurrent** method from the user control code-behind:

````ASP.NET
RadAjaxManager.GetCurrent(Page);
````



Use server-side code block in a JS function inside your WebUserControl to call the master manager ajaxRequest function:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myUserControlClickHandler() {
	        $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	    }
	</script>
</telerik:RadCodeBlock>
````



As to the AJAX settings, the old RadAjax approach, **adding AJAX settings programmatically**, is still applicable. Here is a simple example demonstrating how this could be achieved:

**ASPX:**

````ASP.NET
<form id="Form1" method="post" runat="server">
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
</telerik:RadAjaxManager>
<uc1:webusercontrol1 id="WebUserControl1" runat="server"></uc1:webusercontrol1>
</form>
````



````ASP.NET
<asp:Button ID="Button1" Text="Button" runat="server"></asp:Button>
<asp:Label ID="Label1" runat="server">Label</asp:Label>
````



And in the code-behind:



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	        //Get the WebUserControl
	        UserControl MyControl = (UserControl)Page.FindControl("WebUserControl1");
	
	        //Get user control's button and label
	        Button MyButton = (Button)MyControl.FindControl("Button1");
	        Label MyLabel = (Label)MyControl.FindControl("Label1");
	
	        //Add the necessary AJAX setting programmatically
	        RadAjaxManager1.AjaxSettings.AddAjaxSetting(MyButton, MyLabel);
}
				
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        'Get the WebUserControl
	        Dim MyControl As UserControl = CType(Page.FindControl("WebUserControl1"), UserControl)
	
	        'Get user control's button and label
	        Dim MyButton As Button = CType(MyControl.FindControl("Button1"), Button)
	        Dim MyLabel As Label = CType(MyControl.FindControl("Label1"), Label)
	
	        'Add the necessary AJAX setting programmatically
	        RadAjaxManager1.AjaxSettings.AddAjaxSetting(MyButton, MyLabel)
End Sub 'Page_Load  
````




````C#
protected void Button1_Click(object sender, System.EventArgs e)
{
	        Label1.Text = DateTime.Now.ToLongTimeString();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
	        Label1.Text = DateTime.Now
End Sub
````


## See Also

 * [Load User Controls]({%slug ajax/how-to/load-user-controls%})

 * [Add AjaxSettings Programmatically]({%slug ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically%})

 * [User Controls](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/UserControl/DefaultCS.aspx)
