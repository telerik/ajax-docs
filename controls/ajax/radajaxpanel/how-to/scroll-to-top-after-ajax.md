---
title: Scroll to Top after AJAX
page_title: Scroll to Top after AJAX | UI for ASP.NET AJAX Documentation
description: Scroll to Top after AJAX
slug: ajax/radajaxpanel/how-to/scroll-to-top-after-ajax
tags: scroll,to,top,after,ajax
published: True
position: 1
---

# Scroll to Top after AJAX



The examples in this help article demonstrate how to scroll a page to the top after AJAX-enabled controls in an AJAX panel are updated.

## 

By default, __RadAjaxPanel__ maintains the focus of the AJAX-ified control when the response ends. For instance, if you have a button at the bottom of the page embedded in an AJAX Panel control, the button will still be focused when the update finishes. If this button is near the bottom of a longer page you may need to scroll the page to the top (where the updated controls might be placed) after the AJAX update concludes. You can use the JavaScript function in __Example 1__ to do this.

__Example 1__: This JavaScript function will force the page to scroll to the top

````JavaScript
	    <script type="text/javascript">
	        function scrollTop() {
	            window.document.body.scrollTop = 0;
	            window.document.documentElement.scrollTop = 0;
	        }
	    </script>
````



You have to add the function in __Example 1__ to the __ResponseScripts__ collection of the __RadAjaxPanel__ control so it will be executed after an AJAX call.

__Example 2__: Add scrollTop() to the ResposeScripts collection.



````C#
	    private void Page_Load(object sender, System.EventArgs e)
	    {
	        RadAjaxPanel1.ResponseScripts.Add("scrollTop();");
	    }
	
	    private void cmd1_Click(object sender, System.EventArgs e)
	    {
	        lbl1.Text = System.DateTime.Now.ToString;
	        //set no active element
	        RadAjaxPanel1.ActiveElementID = null;
	    }  			
````
````VB.NET
	     
	    Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
	        RadAjaxPanel1.ResponseScripts.Add("scrollTop();")
	    End Sub
	
	    Private Sub cmd1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles cmd1.Click
	        lbl1.Text = Date.Now.ToString
	        'set no active element
	        RadAjaxPanel1.ActiveElementID = Nothing
	    End Sub
````


The __RadAjaxManager__ control does not maintain focus on active controls after an asynchronous request. If you need to focus a specific control, you can use the __RadAjaxManager____FocusControl__ method. Check the [Setting Focus ](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/SettingFocus/DefaultCS.aspx) online demo that illustrates this aspect of the __RadAjaxManager__ server-side API.

# See Also

 * [Overview]({%slug ajax/radajaxpanel/overview%})

 * [Demo: Setting Focus](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/SettingFocus/DefaultCS.aspx)
