---
title: Enable Single Click Button after Cancel Click
page_title: Enable Single Click Button after Cancel Click | RadProgressArea for ASP.NET AJAX Documentation
description: How to Enable Single Click Button after Cancel Click
slug: progressarea/how-to/enable-single-click-button-after-cancel
tags: enable,single,click,button,cancel,progress
published: True
position: 0
---

# Enable Single Click Button after Cancel Click

This article explains how to enable again a **RadButton** with `SingleClick`=`true` when the user cancels the progress/upload.

When the user clicks **Cancel** in **RadProgressArea**, the postback is cancelled, so there is no actual response from the server and this is what **RadButton** uses to re-enable itself.

The solution is to attach a handler to the **Cancel** button that will use the [RadButton Client-side API]({%slug button/client-side-programming/overview%}) to enable it again:

>caption Example 1: Attaching the handler that will re-enable the button

````ASP.NET
<script>
	function reEnable() {
		var btn = $find("<%=RadButton1.ClientID%>");
		btn.enableAfterSingleClick();
		$telerik.$(".ruCancel", $find("<%=RadProgressArea1.ClientID%>").get_element()).off("mousedown", reEnable);
	}
	function attachHandlersToCancelButton() {
		$telerik.$(".ruCancel", $find("<%=RadProgressArea1.ClientID%>").get_element()).on("mousedown", reEnable);
	}
</script>
<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="Submit" SingleClick="true" SingleClickText="Please wait..." OnClick="RadButton1_Click" OnClientClicking="attachHandlersToCancelButton">
</telerik:RadButton>
<telerik:RadProgressManager ID="RadProgressManager1" runat="server" />
<telerik:RadProgressArea RenderMode="Lightweight" ID="RadProgressArea1" runat="server" DisplayCancelButton="True"
						 ProgressIndicators="FilesCountBar,
						 FilesCount,
						 FilesCountPercent,                      
						 SelectedFilesCount,                      
						 CurrentFileName,                      
						 TimeElapsed,                      
						 TimeEstimated">
</telerik:RadProgressArea>
````


>caption Example 2: Monitoring some custom progress
 

````C#
protected void Page_Load(object sender, EventArgs e)
{
 
   RadProgressArea1.Localization.UploadedFiles = "Completed Steps: ";
   RadProgressArea1.Localization.CurrentFileName = "Step: ";
   RadProgressArea1.Localization.TotalFiles = "Total Steps:";
 
}

protected void RadButton1_Click(object sender, EventArgs e)
{
	RadProgressContext context = RadProgressContext.Current;
	context.SecondaryTotal = "100";
	for (int i = 1; i < 100; i++)
	{
		context.SecondaryValue = i.ToString();
		context.SecondaryPercent = i.ToString();
		context.CurrentOperationText = "Doing step " + i.ToString();
		if (!Response.IsClientConnected)
		{
			//Cancel button was clicked or the browser was closed, so stop processing
			break;
		}
		// simulate a long time performing the current step
		System.Threading.Thread.Sleep(100);
	}
} 
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load

	RadProgressArea1.Localization.UploadedFiles = "Completed Steps: "
	RadProgressArea1.Localization.CurrentFileName = "Step: "
	RadProgressArea1.Localization.TotalFiles = "Total Steps:"

End Sub

Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles RadButton1.Click
	Dim context As RadProgressContext = RadProgressContext.Current
	context.SecondaryTotal = "100"
	Dim i As Integer = 1
	While i < 100
		context.SecondaryValue = i.ToString()
		context.SecondaryPercent = i.ToString()
		context.CurrentOperationText = "Doing step " + i.ToString()
		If Not Response.IsClientConnected Then
			'Cancel button was clicked or the browser was closed, so stop processing
			Exit While
		End If
		' simulate a long time performing the current step
		System.Threading.Thread.Sleep(100)
		i = i + 1
	End While
End Sub	
````

## See Also

* [Monitoring Custom Progress]({%slug progressarea/custom-progress%})

* [RadButton Client-side API]({%slug button/client-side-programming/overview%})
