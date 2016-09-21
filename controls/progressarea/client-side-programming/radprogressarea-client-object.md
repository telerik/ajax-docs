---
title: RadProgressArea Client Object
page_title: RadProgressArea Client Object | RadProgressArea for ASP.NET AJAX Documentation
description: RadProgressArea Client Object
slug: progressarea/client-side-programming/radprogressarea-client-object
tags: radprogressarea,client,object
published: True
position: 0
---

# RadProgressArea Client Object



## 

The following table lists the important methods of the **RadProgressArea** client object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|cancelRequest|none|none|Cancels the current request by refreshing the page. This method works only when the page is being submitted. See **Example 1**. |
| show | none | none | Displays the RadProgressArea dialog. See **Example 2**. |
| hide | none | none | Hides the RadProgressArea dialog. See **Example 3**. |
| update | progressData | none | Updates the RadProgressArea with the specified information and causes the OnClientProgressUpdating event to fire. If the RadProgressArea is hidden, this method shows it by calling the show() method. See **Example 4**. |
| updateVerticalProgressBar | HTML element, integer | none | Updates the height of the progress bar element passed as the first parameter to represent the percentage specified by the second parameter. This method is intended for implementing an OnClientProgressBarUpdating event handler. See **Example 5**. |
| updateHorizontalProgressBar | HTML element, integer | none | Updates the width of the progress bar element passed as the first parameter to represent the percentage specified by the second parameter. This method is intended for implementing an OnClientProgressBarUpdating event handler. See **Example 6**. |
| updateTextIndicator | HTML element, string | none | Updates the text value of the HTML element passed as the first parameter to the value passed as the second parameter. This method is intended for updating custom elements in a progress template from an OnClientProgressUpdating event handler. See **Example 7**. |
| get_element | none | HTML Element | Returns the DOM element for the RadProgressArea control. |


>caption Example 1: Cancel the current request.
````JavaScript
	     
$find("<%= RadProgressArea1.ClientID %>").cancelRequest();
				
````


>caption Example 2: Display the RadProgressArea dialog.
````ASPNET
<telerik:radprogressarea runat="server" id="RadProgressArea1" />
<input type="button" value="Show" onclick="myShow()" />
<script type="text/javascript">
	function myShow() {
		$find("<%= RadProgressArea1.ClientID %>").show();
	}
</script>
````


>caption Example 3: Hide the RadProgressArea dialog.
````ASPNET
<telerik:radprogressarea runat="server" id="RadProgressArea1" />
<input type="button" value="Hide" onclick="hideDialog()" />
<script type="text/javascript">
	function hideDialog() { 
		$find("<%= RadProgressArea1.ClientID %>").hide(); 
	}
</script>
````


>caption Example 4: Updates the RadProgressArea with the specified information.
````JavaScript	
function myUpdate() { 
	var progressData =   {     
		PrimaryPercent : 10,    
		PrimaryTotal : '50kB',   
		PrimaryValue : '5kB',  
		SecondaryPercent : 50,   
		SecondaryTotal : '20kB',  
		SecondaryValue : '10kB',   
		CurrentOperationText : 'c:\\test.jpg',  
		TimeElapsed : '5seconds',   
		TimeEstimated : '10seconds',   
		TransferSpeed : '100kB/second' 
	}
	find("<%= RadProgressArea1.ClientID %>").update(progressData);
}		
````


>caption Example 5: Update the height of the progress bar element.
````JavaScript	     
function clientProgressBarUpdating(radProgressArea, args) {  
	var bar = args.get_progressBarElement();  
	radProgressArea.updateVerticalProgressBar(bar, args.get_progressValue());  
	// skip the default progress bar updating  
	args.set_cancel(true);
} 			
````


>caption Example 6: Update the width of the progress bar element.
````JavaScript	     
function clientProgressBarUpdating(radProgressArea, args) {  
	var bar = args.get_progressBarElement();  
	radProgressArea.updateHorizontalProgressBar(bar, args.get_progressValue());
	// skip the default progress bar updating  args.set_cancel(true);
} 				
````


>caption Example 7: Update the text value of the HTML element.
````JavaScript
function clientProgressUpdating(progressArea, args) {
	var myControl = $get("myTemplatePrimaryValue");
	var data = args.get_progressData();
	progressArea.updateTextIndicator(myControl, progressData.PrimaryValue);
	args.set_cancel(true);
}			
````

