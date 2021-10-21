---
title: Fix the spelling mistakes in a RadEditor before submitting its content
description: See how to fix the spelling mistakes in RadEditor before submitting its content
type: how-to
page_title: How to combine save and spell check
slug: editor-how-to-combine-save-and-spell-check
res_type: kb
---

## How-To

Combine a spell check button with the save button so the user can click Save and go through a spell check. For example, you may want your user to always fix spelling mistakes in sRadEditor before submitting its content.

## Solution

The simplest solution is to use the SpellCheckValidator control that informs the user they need to perform a spellcheck:

* [SpellCheckValidator](https://docs.telerik.com/devtools/aspnet-ajax/controls/spell/how-to/spellcheckvalidator)
* [Spellcheck Validation](https://demos.telerik.com/aspnet-ajax/spell/examples/spellcheckvalidator/defaultcs.aspx?product=editor)

Alternatively, you can:

* use a RadSpell instance and point it to the [control or controls you wish to have checked](https://docs.telerik.com/devtools/aspnet-ajax/controls/spell/how-to/setting-a-control-to-check)
* hook to the client click of the button, prevent the postback and [start the spellcheck](https://docs.telerik.com/devtools/aspnet-ajax/controls/spell/how-to/launching-on-client-side-event)
* use its [OnClientCheckFinished event](https://docs.telerik.com/devtools/aspnet-ajax/controls/spell/client-side-programming/events/onclientcheckfinished) to invoke the postback

````ASP.NET
<asp:Button Text="save" OnClientClick="checkMe(); return false;" ID="Button1" OnClick="Button1_Click" runat="server" />
<telerik:RadEditor runat="server" ID="re1" RenderMode="Lightweight">
    <Content>miztake</Content>
</telerik:RadEditor>
<telerik:RadSpell runat="server" ID="rs1" IsClientID="true" ButtonType="None" OnClientCheckFinished="OnClientCheckFinished" RenderMode="Lightweight" />
<script>   
    function checkMe() {
        $find("<%=rs1.ClientID%>").startSpellCheck();
    }
 
    function OnClientCheckFinished() {
        __doPostBack("<%=Button1.UniqueID%>", "");
    }
</script>
````

Codebehind

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        rs1.ControlToCheck = re1.ClientID;
    }
}
 
protected void Button1_Click(object sender, EventArgs e)
{
    Response.Write("processed" + re1.Content);
}
````

A third option is to do this purely on the client as shown in the [Invoke Separate Spell Check for each Textbox and Submit the Form on Success KB article](https://www.telerik.com/support/kb/aspnet-ajax/spell/details/invoke-separate-spell-check-for-each-textbox-and-submit-the-form-on-success).





