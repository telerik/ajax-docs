---
title: Ajaxify Particular Templated GridView Buttons
page_title: Ajaxify Particular Templated GridView Buttons | RadAjax for ASP.NET AJAX Documentation
description: Ajaxify Particular Templated GridView Buttons
slug: ajax/radajaxmanager/how-to/ajaxify-particular-templated-gridview-buttons
tags: ajaxify,particular,templated,gridview,buttons
published: True
position: 5
---

# Ajaxify Particular Templated GridView Buttons



## 

Sometimes you may want to ajaxify *particular* controls (residing in template column of GridView control) in order to update other controls (for example outside of the GridView) without postback. The most straight-forward solution is to ajaxify the whole GridView. Here is a sample code:



````ASP.NET
<asp:ScriptManager ID="ScriptManager" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="TextBox" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
````





However, you may need another column to make regular postbacks or even the rest of the actions to trigger standard postback requests.

This is when the RadAjaxManager comes into place. The manager settings can be added programmatically specifying each particular control which you want to ajaxify and/or update. The essential part is to attach the appropriate event(s) in which to apply the ajax settings. For the GridView in this situation the proper place is the **Row_PreRender** event handler.

The GridView in the sample contains one template and one button column. The ImageButtons in the template column are ajaxified by the RadAjaxManager and the buttons in the ButtonField start regular postbacks. Both the image and the push buttons update text box outside of the GridView.





````ASP.NET
<asp:TextBox ID="TextBox1" runat="server" Width="400px" Text="not updated"></asp:TextBox>
<asp:ScriptManager ID="ScriptManager" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
</telerik:RadAjaxManager>
<asp:GridView ID="GridView1" DataSourceID="AccessDataSource1" AllowPaging="true"
	        runat="server">
	        <Columns>
	            <asp:TemplateField HeaderText="TemplateField">
	                <ItemTemplate>
	                    <asp:ImageButton ID="ImageButton1" CommandName="MyCommand" CommandArgument='<%# Eval("CustomerID") %>'
	                        ImageUrl="arrow.gif" runat="server" />
	                </ItemTemplate>
	            </asp:TemplateField>
	            <asp:ButtonField ButtonType="Button" HeaderText="ButtonField" CommandName="Test"
	                Text="Button" ImageUrl="arrow.gif" />
	        </Columns>
</asp:GridView>
<asp:AccessDataSource ID="AccessDataSource1" DataFile="~/Grid/Data/Access/Nwind.mdb"
	runat="server" SelectCommand="SELECT * FROM [Customers]"></asp:AccessDataSource>
````
````C#
	
protected void GridView1_RowCreated(object sender, System.Web.UI.WebControls.GridViewRowEventArgs e)
{
	if (e.Row.RowType == DataControlRowType.DataRow)
	    {
	        e.Row.PreRender += new System.EventHandler(Row_PreRender);
	    }
}
	
protected void GridView1_RowCommand(object sender, System.Web.UI.WebControls.GridViewCommandEventArgs e)
{
	TextBox1.Text = string.Format("CommandName:{0}, CommandArgument:{1}", e.CommandName, e.CommandArgument);
}
	
protected void Row_PreRender(object sender, System.EventArgs e)
{
	ImageButton ImageButton1 = ((ImageButton)(((Control)(sender)).FindControl("ImageButton1")));
	RadAjaxManager1.AjaxSettings.AddAjaxSetting(ImageButton1, TextBox1);
}
				
````
````VB
Protected Sub GridView1_RowCreated(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewRowEventArgs) Handles GridView1.RowCreated
	        If e.Row.RowType = DataControlRowType.DataRow Then
	            AddHandler e.Row.PreRender, AddressOf Row_PreRender
	        End If
End Sub
	
Protected Sub GridView1_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles GridView1.RowCommand
	        TextBox1.Text = String.Format("CommandName:{0}, CommandArgument:{1}", e.CommandName, e.CommandArgument)
End Sub
	
Protected Sub Row_PreRender(ByVal sender As Object, ByVal e As System.EventArgs)
	        Dim ImageButton1 As ImageButton = CType(CType(sender, Control).FindControl("ImageButton1"), ImageButton)
	        RadAjaxManager1.AjaxSettings.AddAjaxSetting(ImageButton1, TextBox1)
End Sub
	
	
````


## See Also

 * [Ajaxifying particular controls in Telerik RadGrid template column with RadAjaxManager](http://www.Telerik.com/support/kb/article/b454K-ted-b454T-ceh.aspx)
