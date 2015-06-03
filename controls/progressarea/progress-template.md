---
title: Progress Template
page_title: Progress Template | RadProgressArea for ASP.NET AJAX Documentation
description: Progress Template
slug: progressarea/progress-template
tags: progress,template
published: True
position: 4
---

# Progress Template



**RadProgressArea** provides a property called **ProgressTemplate**, used to instantiate its child controls. You can use the **ProgressTemplate** property to change the position of elements in the dialog and customize the dialog by adding additional elements such as images.

You can let **RadProgressArea** automatically locate and update the values of the controls in your progress template, if they have the same IDs as the elements in the default **ProgressArea** dialog. The following table lists the IDs to use when creating a progress template:

>caption  

| ID | Description |
| ------ | ------ |
|PrimaryProgressBarInnerDiv|Total Progress Bar|
|PrimaryPercent|Total Progress Percent|
|PrimaryValue|Total Progress|
|PrimaryTotal|Request Size|
|SecondaryProgressBarInnerDiv|Files Count Bar|
|SecondaryPercent|Files Count Percent|
|SecondaryValue|Files Count|
|SecondaryTotal|Selected Files Count|
|CurrentOperation|Current File Name|
|TimeElapsed|Elapsed Time|
|TimeEstimated|Estimated Time|
|Speed|Speed|
|CancelButton|Cancel Button|

You can also update the values of elements in your template using the client-side [OnClientProgressBarUpdating]({%slug progressarea/client-side-programming/onclientprogressbarupdating%}) and [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%}) events to bind the values of custom controls you add in the template.

## Example

The following example shows a **RadProgressArea** with a progress template and **OnClientProgressBarUpdating** event handler:

````ASPNET
<script type="text/javascript">
	function onClientProgressBarUpdating(progressArea, args) {
		progressArea.updateVerticalProgressBar(args.get_progressBarElement(), args.get_progressValue());
		args.set_cancel(true);
	}
</script>
<telerik:radupload id="RadUpload1" runat="server" initialfileinputscount="2" />
<asp:Button ID="ButtonSubmit" runat="server" Text="Submit" />
<telerik:radprogressmanager id="RadProgressManager1" runat="server" />
<telerik:radprogressarea id="RadProgressArea1" runat="server" onclientprogressbarupdating="onClientProgressBarUpdating">
<ProgressTemplate>
<ul class="ruProgress">
  <li>
	<h6>TotalProgressBar:</h6>
	<div style="position: relative; height: 168px; width: 168px;">
	   <div id="Div1"
		 runat="server"
		 style="background-color: Blue; height: 0%; width: 168px;
				vertical-align: bottom; position: absolute; top: 0;
				left: 0; z-index: 900;">
		 <!-- / -->
	   </div>
	   <div style="position: absolute; z-index: 1000; top: 0; left: 0;">
		 <embed src="speedometer.swf" quality="high" wmode="transparent"
				bgcolor="#ffffff" width="168" height="168" name="speedometer"
				align="middle" allowscriptaccess="sameDomain"
				type="application/x-shockwave-flash"
				pluginspage="http://www.macromedia.com/go/getflashplayer" />
	   </div>
	 </div>
  </li>
  <li>
	  <strong>TotalProgress:</strong>
	  <span runat="server" id="Span1"></span>
  </li>
  <li>
	  <strong>TotalProgressPercent:</strong>
	  <span runat="server" id="Span2"></span>
  </li>
  <li>
	  <strong>FilesCount:</strong>
	  <span runat="server" id="Span3"></span>
  </li>
  <li>
	  <strong>FilesCountPercent:</strong>
	  <span runat="server" id="Span4"></span>
  </li>
  <li>
	  <strong>RequestSize:</strong>
	  <span runat="server" id="Span5"></span>
  </li>
  <li>
	  <strong>SelectedFilesCount:</strong>
	  <span runat="server" id="Span6"></span>
  </li>
  <li>
	  <strong>CurrentFileName:</strong>
	  <span runat="server" id="Span7"></span>
  </li>
  <li>
	  <strong>TimeElapsed:</strong>
	  <span runat="server" id="Span8"></span>
  </li>
  <li>
	  <strong>TimeEstimated:</strong>
	  <span runat="server" id="Span9"></span>
  </li>
  <li>
	  <strong>TransferSpeed:</strong>
	  <span runat="server" id="Span10"></span>
   </li>
</ul>
</ProgressTemplate>
</telerik:radprogressarea>
<h6>
	TotalProgressBar:</h6>
<div style="position: relative; height: 168px; width: 168px;">
	<div id="PrimaryProgressBarInnerDiv" runat="server" style="background-color: Blue;
		height: 0%; width: 168px; vertical-align: bottom; position: absolute; top: 0;
		left: 0; z-index: 900;">
		<!-- / -->
	</div>
	<div style="position: absolute; z-index: 1000; top: 0; left: 0;">
		<embed src="speedometer.swf" quality="high" wmode="transparent" bgcolor="#ffffff"
			width="168" height="168" name="speedometer" align="middle" allowscriptaccess="sameDomain"
			type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
	</div>
</div>
</li>
<li><strong>TotalProgress:</strong> <span runat="server" id="PrimaryValue"></span>
</li>
<li><strong>TotalProgressPercent:</strong> <span runat="server" id="PrimaryPercent">
</span></li>
<li><strong>FilesCount:</strong> <span runat="server" id="SecondaryValue"></span>
</li>
<li><strong>FilesCountPercent:</strong> <span runat="server" id="SecondaryPercent"></span>
</li>
<li><strong>RequestSize:</strong> <span runat="server" id="PrimaryTotal"></span>
</li>
<li><strong>SelectedFilesCount:</strong> <span runat="server" id="SecondaryTotal"></span>
</li>
<li><strong>CurrentFileName:</strong> <span runat="server" id="CurrentOperation"></span>
</li>
<li><strong>TimeElapsed:</strong> <span runat="server" id="TimeElapsed"></span></li>
<li><strong>TimeEstimated:</strong> <span runat="server" id="TimeEstimated"></span>
</li>
<li><strong>TransferSpeed:</strong> <span runat="server" id="Speed"></span></li>
</ul> </ProgressTemplate></telerik:radprogressarea>
````





# See Also

 * [Configuraton]({%slug progressarea/configuraton%})
 * [Tutorial Creating a Custom Skin]({%slug asyncupload/appearance-and-styling/tutorial-creating-a-custom-skin%})
