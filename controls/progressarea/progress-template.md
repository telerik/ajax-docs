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
|PrimaryProgressBarInnerDiv or PrimaryProgressBarElement \*|Total Progress Bar|
|PrimaryPercent|Total Progress Percent|
|PrimaryValue|Total Progress|
|PrimaryTotal|Request Size|
|SecondaryProgressBarInnerDiv or SecondaryProgressBarElement \*|Files Count Bar|
|SecondaryPercent|Files Count Percent|
|SecondaryValue|Files Count|
|SecondaryTotal|Selected Files Count|
|CurrentOperation|Current File Name|
|TimeElapsed|Elapsed Time|
|TimeEstimated|Estimated Time|
|Speed|Speed|
|CancelButton|Cancel Button|

>note As of **Q2 2015** the *PrimaryProgressBarInnerDiv* and *SecondaryProgressBarInnerDiv* IDs are renamed respectively to **PrimaryProgressBarElement** and **SecondaryProgressBarElement** due to the new Lightweight rendering of the control.
>

You can also update the values of elements in your template using the client-side [OnClientProgressBarUpdating]({%slug progressarea/client-side-programming/onclientprogressbarupdating%}) and [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%}) events to bind the values of custom controls you add in the template.

>caption Example 1: Simple template that uses client-side events to show the data

````ASPNET
<telerik:RadProgressManager runat="server" ID="rpm" />
Progress:<br />
<asp:Button CssClass="button" ID="buttonSubmit" runat="server" Text="Start Processing" OnClick="buttonSubmit_Click"></asp:Button>
<br />
<telerik:RadProgressArea runat="server" ID="rpa" RenderMode="Lightweight" OnClientProgressUpdating="OnClientProgressUpdating">
	<ProgressTemplate>
		<table class="ProgrsesAreaTemplateTable">
			<tr>
				<td><span class="theText"></span>
				</td>
				<td>
					<telerik:RadProgressBar runat="server" ID="firstProgressBar" BarType="Percent" Width="100%"></telerik:RadProgressBar>
				</td>
				<td>
					<telerik:RadProgressBar runat="server" ID="secondProgressBar" BarType="Percent" Width="100%"></telerik:RadProgressBar>
				</td>
			</tr>
		</table>
	</ProgressTemplate>
</telerik:RadProgressArea>
<script>
	function OnClientProgressUpdating(sender, args) {
		var data = args.get_progressData();
		$telerik.$(sender.get_element()).find(".theText").text(data.CurrentOperationText);
		$telerik.findControl(sender.get_element(), "firstProgressBar").set_value(data.PrimaryPercent);
		$telerik.findControl(sender.get_element(), "secondProgressBar").set_value(data.SecondaryPercent);
	}
</script>
<style>
	.ProgrsesAreaTemplateTable {
		width: 100%;
		table-layout: fixed;
	}
</style>
````
````C#
	
protected void buttonSubmit_Click(object sender, System.EventArgs e)
{
    UpdateProgressContext();
}

protected void UpdateProgressContext()
{
    int mySteps = 3;
    int myRecords = 20;
    RadProgressContext progress = RadProgressContext.Current;
    progress.Speed = "N/A";

    progress.PrimaryTotal = mySteps;
    progress.PrimaryValue = 0;
    progress.PrimaryPercent = 0;

    progress.SecondaryTotal = myRecords;
    progress.SecondaryValue = 0;
    progress.SecondaryPercent = 0;

    for (int i = 1; i <= mySteps; i++)
    {
        progress.PrimaryPercent = Math.Round(i * 100 / (double)mySteps, 0);
        progress.PrimaryValue = i;
        progress.SecondaryTotal = myRecords;

        for (int j = 1; (j <= myRecords); j++)
        {
            progress.SecondaryValue = j;
            progress.SecondaryPercent = Math.Round((j * (100 / (double)myRecords)), 0);
            progress.CurrentOperationText = ("Step " + i.ToString() + " Record " + j.ToString());
            // Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100);
        }
    }
}
	
````
````VB
	
Protected Sub buttonSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs)
    UpdateProgressContext()
End Sub

Protected Sub UpdateProgressContext()
    Dim mySteps As Integer = 3
    Dim myRecords As Integer = 20

    Dim progress As RadProgressContext = RadProgressContext.Current
    progress.Speed = "N/A"

    With progress
        .PrimaryTotal = mySteps
        .PrimaryValue = 0
        .PrimaryPercent = 0

        .SecondaryTotal = myRecords
        .SecondaryValue = 0
        .SecondaryPercent = 0
    End With

    For i As Integer = 1 To mySteps
        With progress
            .PrimaryValue = i
            .PrimaryPercent = Math.Round(i * 100 / mySteps, 0)
            .SecondaryTotal = myRecords
        End With

        For j As Integer = 1 To myRecords
            progress.SecondaryValue = j
            progress.SecondaryPercent = Math.Round(j * 100 / myRecords, 0)

            progress.CurrentOperationText = "Step " & i.ToString() & " Record " & j.ToString

            'Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100)
        Next j
    Next i
End Sub
	
````

>caption Example 2: Sample template for the Lightweight RenderMode that mimics the built-in template

````ASPNET
<telerik:RadProgressManager runat="server" ID="rpm" />
Progress:<br />
<asp:Button CssClass="button" ID="buttonSubmit" runat="server" Text="Start Processing" OnClick="buttonSubmit_Click"></asp:Button>
<br />
<telerik:RadProgressArea runat="server" ID="rpa" RenderMode="Lightweight">
	<ProgressTemplate>
		<div class="ruBody">
			<div class="ruFileProgress">
				<span id="<%= rpa.ClientID %>_PrimaryProgressBarElement" class="ruProgressBar">
					<span id="<%= rpa.ClientID %>_PrimaryProgressElement" class="ruProgress"></span>
				</span>
				Uploaded
				<span id="<%= rpa.ClientID %>_PrimaryPercent"></span>
				% (
				<span id="<%= rpa.ClientID %>_PrimaryValue"></span>
				) Total 
				<span id="<%= rpa.ClientID %>_PrimaryTotal"></span>
			</div>
			<div class="ruOverallProgress">
				<span id="<%= rpa.ClientID %>_SecondaryProgressBarElement" class="ruProgressBar">
					<span id="<%= rpa.ClientID %>_SecondaryProgressElement" class="ruProgress"></span>
				</span>
				Uploaded files:
				<span id="<%= rpa.ClientID %>_SecondaryPercent"></span>
				% (
				<span id="<%= rpa.ClientID %>_SecondaryValue"></span>
				) Total files:
				<span id="<%= rpa.ClientID %>_SecondaryTotal"></span>
			</div>
			<p class="ruCurrentFile">Uploading file:
				<span id="<%= rpa.ClientID %>_CurrentOperation"></span>
			</p>
			<p class="ruTimeSpeed">Elapsed time:
				<span id="<%= rpa.ClientID %>_TimeElapsed"></span>
				&nbsp;Estimated time:
				<span id="<%= rpa.ClientID %>_TimeEstimated"></span>
				&nbsp;Speed:
				<span id="<%= rpa.ClientID %>_Speed"></span>
			</p>
		</div>
	</ProgressTemplate>
</telerik:RadProgressArea>
````
````C#
	
protected void buttonSubmit_Click(object sender, System.EventArgs e)
{
    UpdateProgressContext();
}

protected void UpdateProgressContext()
{
    int mySteps = 3;
    int myRecords = 20;
    RadProgressContext progress = RadProgressContext.Current;
    progress.Speed = "N/A";

    progress.PrimaryTotal = mySteps;
    progress.PrimaryValue = 0;
    progress.PrimaryPercent = 0;

    progress.SecondaryTotal = myRecords;
    progress.SecondaryValue = 0;
    progress.SecondaryPercent = 0;

    for (int i = 1; i <= mySteps; i++)
    {
        progress.PrimaryPercent = Math.Round(i * 100 / (double)mySteps, 0);
        progress.PrimaryValue = i;
        progress.SecondaryTotal = myRecords;

        for (int j = 1; (j <= myRecords); j++)
        {
            progress.SecondaryValue = j;
            progress.SecondaryPercent = Math.Round((j * (100 / (double)myRecords)), 0);
            progress.CurrentOperationText = ("Step " + i.ToString() + " Record " + j.ToString());
            // Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100);
        }
    }
}
	
````
````VB
	
Protected Sub buttonSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs)
    UpdateProgressContext()
End Sub

Protected Sub UpdateProgressContext()
    Dim mySteps As Integer = 3
    Dim myRecords As Integer = 20

    Dim progress As RadProgressContext = RadProgressContext.Current
    progress.Speed = "N/A"

    With progress
        .PrimaryTotal = mySteps
        .PrimaryValue = 0
        .PrimaryPercent = 0

        .SecondaryTotal = myRecords
        .SecondaryValue = 0
        .SecondaryPercent = 0
    End With

    For i As Integer = 1 To mySteps
        With progress
            .PrimaryValue = i
            .PrimaryPercent = Math.Round(i * 100 / mySteps, 0)
            .SecondaryTotal = myRecords
        End With

        For j As Integer = 1 To myRecords
            progress.SecondaryValue = j
            progress.SecondaryPercent = Math.Round(j * 100 / myRecords, 0)

            progress.CurrentOperationText = "Step " & i.ToString() & " Record " & j.ToString

            'Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100)
        Next j
    Next i
End Sub
	
````

>caption Example 3: Sample template for the Classic RenderMode that mimics the built-in template

````ASPNET
<telerik:RadScriptManager runat="server" ID="rsm" />
<telerik:RadProgressManager runat="server" ID="rpm" />
Progress:<br />
<asp:Button CssClass="button" ID="buttonSubmit" runat="server" Text="Start Processing" OnClick="buttonSubmit_Click"></asp:Button>
<br />
<telerik:RadProgressArea runat="server" ID="rpa" RenderMode="Classic">
    <ProgressTemplate>
        <ul class="ruProgress">
            <li class="ruProgressHeader"><span id="rpa_Panel_ProgressAreaHeader"></span></li>
            <li class="ruFilePortion">
                <div id="<%= rpa.ClientID %>_Panel_PrimaryProgressBarElement" class="ruBar">
                    <div id="<%= rpa.ClientID %>_Panel_PrimaryProgressElement">
                        <!-- -->
                    </div>
                </div>
                Uploaded <span id="rpa_Panel_PrimaryPercent"></span>% (<span id="<%= rpa.ClientID %>_Panel_PrimaryValue"></span> ) Total  <span id="<%= rpa.ClientID %>_Panel_PrimaryTotal"></span></li>
            <li class="ruFileCount">
                <div id="<%= rpa.ClientID %>_Panel_SecondaryProgressBarElement" class="ruBar">
                    <div id="<%= rpa.ClientID %>_Panel_SecondaryProgressElement">
                        <!-- -->
                    </div>
                </div>
                Uploaded files:  <span id="<%= rpa.ClientID %>_Panel_SecondaryPercent"></span>% (<span id="<%= rpa.ClientID %>_Panel_SecondaryValue"></span>) Total files:  <span id="<%= rpa.ClientID %>_Panel_SecondaryTotal"></span></li>
            <li class="ruCurrentFile">Uploading file:  <span id="<%= rpa.ClientID %>_Panel_CurrentOperation"></span></li>
            <li class="ruTimeSpeed">Elapsed time:  <span id="<%= rpa.ClientID %>_Panel_TimeElapsed"></span>&nbsp;Estimated time:  <span id="<%= rpa.ClientID %>_Panel_TimeEstimated"></span>&nbsp;Speed:  <span id="<%= rpa.ClientID %>_Panel_Speed"></span></li>
        </ul>
    </ProgressTemplate>
</telerik:RadProgressArea>
````
````C#
	
protected void buttonSubmit_Click(object sender, System.EventArgs e)
{
    UpdateProgressContext();
}

protected void UpdateProgressContext()
{
    int mySteps = 3;
    int myRecords = 20;
    RadProgressContext progress = RadProgressContext.Current;
    progress.Speed = "N/A";

    progress.PrimaryTotal = mySteps;
    progress.PrimaryValue = 0;
    progress.PrimaryPercent = 0;

    progress.SecondaryTotal = myRecords;
    progress.SecondaryValue = 0;
    progress.SecondaryPercent = 0;

    for (int i = 1; i <= mySteps; i++)
    {
        progress.PrimaryPercent = Math.Round(i * 100 / (double)mySteps, 0);
        progress.PrimaryValue = i;
        progress.SecondaryTotal = myRecords;

        for (int j = 1; (j <= myRecords); j++)
        {
            progress.SecondaryValue = j;
            progress.SecondaryPercent = Math.Round((j * (100 / (double)myRecords)), 0);
            progress.CurrentOperationText = ("Step " + i.ToString() + " Record " + j.ToString());
            // Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100);
        }
    }
}
	
````
````VB
	
Protected Sub buttonSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs)
    UpdateProgressContext()
End Sub

Protected Sub UpdateProgressContext()
    Dim mySteps As Integer = 3
    Dim myRecords As Integer = 20

    Dim progress As RadProgressContext = RadProgressContext.Current
    progress.Speed = "N/A"

    With progress
        .PrimaryTotal = mySteps
        .PrimaryValue = 0
        .PrimaryPercent = 0

        .SecondaryTotal = myRecords
        .SecondaryValue = 0
        .SecondaryPercent = 0
    End With

    For i As Integer = 1 To mySteps
        With progress
            .PrimaryValue = i
            .PrimaryPercent = Math.Round(i * 100 / mySteps, 0)
            .SecondaryTotal = myRecords
        End With

        For j As Integer = 1 To myRecords
            progress.SecondaryValue = j
            progress.SecondaryPercent = Math.Round(j * 100 / myRecords, 0)

            progress.CurrentOperationText = "Step " & i.ToString() & " Record " & j.ToString

            'Stall the current thread for 0.1 seconds
            System.Threading.Thread.Sleep(100)
        Next j
    Next i
End Sub
	
````

The following example shows a **RadProgressArea** with a progress template and **OnClientProgressBarUpdating** event handler for versions **before Q2 2015**:

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
