---
title: RadEditor Content Not Saved After Ajax Update in IE9, Firefox, Google Chrome and Safari 
description: See how to update RadEditor content via ASP Button and ImageButton in AJAX scenarios
type: how-to
page_title: RadEditor Content Not Saved After Ajax Update in IE9, Firefox, Google Chrome and Safari
slug: editor-content-not-saved-after-ajax-update-in-ie9-firefox-google-chrome-and-safari
res_type: kb
---

## Description

In scenarios in which RadEditor and an **<asp:ImageButton** or an **<asp:Button** are placed inside a **<telerik:RadAjaxPanel** or an **<asp:UpdatePanel** and the editor's content is updated by pressing the <asp:ImageButton or an <asp:Button the editor's content is not populated:

````ASPX
<asp:ScriptManager ID="ScriptManager2" runat="server" /> 
<telerik:RadAjaxPanel ID="RadAjaxPanel2" runat="server">  
        <asp:Panel ID="Panel1" runat="server">  
            <div>Standard Button:&nbsp;&nbsp;<asp:Button ID="Button2" runat="server" OnClick="btnSave_Click" Text="Save" /></div>  
            <div style="margin-top: 10px;">Image Button:&nbsp;<asp:ImageButton ID="ImageButton3" runat="server" OnClick="btnSave_Click" ImageUrl="Save.png" /></div>  
            <div style="margin-top: 10px;">  
                <telerik:RadEditor ID="RadEditor1" runat="server" EnableViewState="false"></telerik:RadEditor> 
            </div> 
        </asp:Panel> 
</telerik:RadAjaxPanel> 
 
<asp:UpdatePanel id="UpdatePanel2" runat="server">  
        <ContentTemplate> 
        <div>Standard Button:&nbsp;&nbsp;<asp:Button ID="Button3" runat="server" OnClick="btnSave_Click" Text="Save" /></div>  
            <div style="margin-top: 10px;">Image Button:&nbsp;<asp:ImageButton ID="ImageButton4" runat="server" OnClick="btnSave_Click" ImageUrl="Save.png" /></div>  
            <div style="margin-top: 10px;">  
                <telerik:RadEditor ID="RadEditor3" runat="server" EnableViewState="false"></telerik:RadEditor> 
            </div> 
        </ContentTemplate> 
</asp:UpdatePanel> 
````

````C#
protected void btnSave_Click(object sender, EventArgs e)  
    {  
        string content = RadEditor1.Content;  
    } 
````

## Solution

Telerik UI for ASP.NET AJAX, such as RadEditor and RadAjax are built on top of MS AJAX and rely on its mechanism to be informed about partial page updates.
Unfortunately in the case of ImageButtons and server buttons, by the time the MS AJAX framework "informs" the editor that a partial update is about to occur, the POST data has already been collected and recorded. The editor does not get a chance to set the updated content properly. The problem exists in Firefox, Chrome, Safari and Internet Explorer 9+.

### Solution for <asp:Button> controls:
In order to fix the problem you will have to set the "submit" button's property **UseSubmitBehavior="false"**, e.g.

<asp:Button UseSubmitBehavior="false" ID="Button1" runat="server" OnClick="btnSave_Click" Text="Save" />

OR use <telerik:RadAjaxPanel> instead of <asp:UpdatePanel>. RadAjaxPanel will add the **UseSubmitBehavior="false"** behavior automatically to all push buttons.


### Solution for <asp:ImageButton> controls:
Since the <asp:ImageButton does not offer such an UseSubmitBehavior property, we develop a workaround that tricks the MS AJAX framework, here it is:

````ASPX
<asp:ImageButton OnClientClick="javascript:__doPostBack(this.id,'');return false;"
ID="ImageButton1" runat="server" OnClick="btnSave_Click"
ImageUrl="Save.gif" />
````

Note the additional **OnClientClick** that is needed.
If the solution for the ImageButton does not work in some scenarios, then replace the this.id property with this.name and test again.

### Solution for RadGrid when Image Update Buttons are used:
When the editor is placed in RadGrid, you can use the following code to fix the problem:

````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        string buttonId = e.Item is IGridInsertItem ? "PerformInsertButton" : "UpdateButton";
        ImageButton but = e.Item.FindControl(buttonId) as ImageButton;
        but.Attributes.Add("onclick", @"javascript:__doPostBack('" + but.UniqueID + "',''); return false;");
    }
}
````

## See Also
* The following forum thread discusses the behavior of the submit and image buttons in a UpdatePanel in Firefox: [Firefox updatepanel defaultbutton issue](http://forums.asp.net/p/1122767/1759690.aspx#1759690).
* [AjaxUpdate.zip - demo files](https://d585tldpucybw.cloudfront.net/docs/default-source/knowledgebasearticleattachments/ajaxupdate-zip.zip?sfvrsn=dac766da_0)

