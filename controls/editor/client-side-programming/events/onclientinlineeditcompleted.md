---
title: OnClientInlineEditCompleted
page_title: OnClientInlineEditCompleted | RadEditor for ASP.NET AJAX Documentation
description: OnClientInlineEditCompleted
slug: editor/client-side-programming/events/onclientinlineeditcompleted
tags: onclientinlineeditcompleted
published: True
position: 10
---

# OnClientInlineEditCompleted

The **OnClientInlineEditCompleted** event is fired after the completion of inline editing	(i.e., clicking outside of the content area of an editor with enabled inline-editing). The event is useful for executing custom	client-side code when the user finishes with the inline-editing (e.g., saving the updated content in a database). See a sample in **Example 1**.

This event is available as of **Q3 2014**. You can find more details about the Inline Editing in the [Inline Editing Mode]({%slug editor/functionality/editor-views-and-modes/inline-editing-mode%}) article.

The event handler receives one argument- the [RadEditor client-side object]({%slug editor/client-side-programming/getting-a-reference-to-radeditor%}) that fired the event.

The **Example 1** showcases how to perform an AJAX request when the **OnClientInlineEditCompleted** event is fired and put the editor's content in a simple div element from code behind. With a similar approach you can update a database record with the content, for example.

>caption Example 1: Storing **RadEditor**'s content in a div in **OnClientInlineEditCompleted** event.



````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="ContentDiv" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
		function OnClientInlineEditCompleted(sender) {
			$find("<%= RadAjaxManager1.ClientID %>").ajaxRequest();
		}
	</script>
</telerik:RadCodeBlock>
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server" EditType="Inline" OnClientInlineEditCompleted="OnClientInlineEditCompleted">
	<Content>
	<div style="width: 420px">
		<h2 class="titleText">RadEditor for ASP.NET AJAX</h2>
		<p style="text-align: justify;">
			<span style="color: #4f6128; font-size: 19px;"><strong>RadEditor</strong></span><span style="color: #4f6128;">
			</span>is not simply an HTML
			<a href="#HTMLDescription">
				<sup>1</sup>
			</a> Editor. It is what Microsoft chose to use in <strong>MSDN</strong>, <strong>CodePlex</strong>, <strong>TechNet</strong>, <strong>MCMS</strong> and even as an alternative to the default editor in
			<a href="https://www.telerik.com/products/aspnet-ajax/sharepoint.aspx">SharePoint</a>.
		</p>
	</div>
	</Content>
</telerik:RadEditor>
<div id="ContentDiv" runat="server"></div>
````
````C#
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	ContentDiv.InnerHtml = RadEditor1.Content;
}
````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(sender As Object, e As Telerik.Web.UI.AjaxRequestEventArgs)
	ContentDiv.InnerHtml = RadEditor1.Content
End Sub
````


## See Also

 * [Inline Editing Mode]({%slug editor/functionality/editor-views-and-modes/inline-editing-mode%})
