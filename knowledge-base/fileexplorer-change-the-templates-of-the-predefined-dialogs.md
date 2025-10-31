---
title: Change the templates of the predefined dialogs (radalert, radconfirm and radprompt)
description: Change the templates of the predefined dialogs (radalert, radconfirm and radprompt). Check it now!
type: how-to
page_title: Change the templates of the predefined dialogs (radalert, radconfirm and radprompt)
slug: fileexplorer-change-the-templates-of-the-predefined-dialogs
res_type: kb
---

   
 ## HOW TO

Change the templates of the predefined dialogs shown in RadFileExplorer control.  
   
## DESCRIPTION 

This article shows how to set new templates for the RadConfirm, RadAlert and RadPrompt dialogs shown in RadFileExplorer control. The provided solution allows introducing a completely new look and feel of the dialogs.   
   

## SOLUTION   

The predefined dialogs' templates can be changed by assigning the desired templates to the corresponding template properties of the RadWindowManager embedded in the RadFileExplorer. The manager can be accessed by using the WindowManager property of the RadFileExplorer control.  
   

The example bellow goes through all the steps in order to change the alert template:  
 
1. Add a new class to the `App_Code` folder. Name the class `AlertTemplate` - it should inherit the `ITemplate` interface:  

````C#
public class AlertTemplate : ITemplate
{
    private Page _page;
 
    public AlertTemplate(Page page)
    {
        this._page = page;
    }
 
    void ITemplate.InstantiateIn(Control owner)
    {
        Control ctrl = _page.LoadControl("~/Controls/AlertTemplate.ascx");
        owner.Controls.Add(ctrl);
    }
}
````
````VB
Public Class AlertTemplate
    Implements ITemplate
    Private _page As Page
 
    Public Sub New(page As Page)
        Me._page = page
    End Sub
 
    Private Sub ITemplate_InstantiateIn(owner As Control) Implements ITemplate.InstantiateIn
        Dim ctrl As Control = _page.LoadControl("~/Controls/AlertTemplate.ascx")
        owner.Controls.Add(ctrl)
    End Sub
End Class
````

1. Create `AlertTemplate.ascx` user control which contains the new template. The template should be prepared based on the information provided in [this help article]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates %}).  
   

    AlertTemplate.ascx's content for the alert template:  
 
````html 
<div id="RadWindowManager1_alerttemplate">
     <div class="windowpopup radalert">
        <div class="dialogtext">
            <div style="color:Red;">CUSTOM RADALERT TEMPLATE :</div> {1} 
        </div> 
        <div> 
            <a onclick="$find('{0}').close();" class="radwindowbutton" href="javascript:void(0);"> 
                <span class="outerspan"><span class="innerspan">##LOC[OK]##</span> </span></a> 
        </div> 
    </div> 
</div>
````

3. The same should be done for the rest of the templates. Then the new templates should be assigned to the corresponding RadWindowManager's properties:  
    
 
````C#
protected void Page_Load(Object sender, EventArgs e) 
{ 
       RadFileExplorer1.WindowManager.AlertTemplate = New AlertTemplate(this.Page); 
 
       RadFileExplorer1.WindowManager.ConfirmTemplate = New ConfirmTemplate(this.Page); 
 
       RadFileExplorer1.WindowManager.PromptTemplate = New PromptTemplate(this.Page); 
} 
```` 
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    RadFileExplorer1.WindowManager.AlertTemplate = New AlertTemplate(Me.Page)

    RadFileExplorer1.WindowManager.ConfirmTemplate = New ConfirmTemplate(Me.Page)

    RadFileExplorer1.WindowManager.PromptTemplate = New PromptTemplate(Me.Page)

End Sub
````

   
 



