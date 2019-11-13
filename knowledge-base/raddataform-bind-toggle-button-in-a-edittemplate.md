---
title: How To: Bind Toggle Button in a RadDataForm EditTemplate
description: Learn about binding a toggle button in a RadDataForm Edit Template
type: how-to
page_title: Binding a Toggle Button in EditTemplate for RadDataForm
slug: raddataform-bind-toggle-button-in-a-edittemplate
position: 
tags: RadDataForm, EditTemplate, RadButton, ButtonToggle
ticketid: 1441058
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadCheckBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
If using a [Toggle Type Telerik RadButton](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/button-types/toggle-button), the Toggle can have any combination of states. This can be confusing to bind to in when [Editing in a RadDataForm](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/data-editing/manual-crud-operations). In order to bind the Toggle State, Set the DataKeyNames and use the SetSelectedToggleByText or SetSelectedToggleByValue. See the below Solution for an Example in when binding a Toggle Button in a RadDataForm.

## Solution
In the below sample, the IsSomething value is either a 0 or 1, i.e. true or false. In the [RadDataForm ItemTemplate](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/data-binding/declarative-data-source) binding can use the [DataBinder.Eval Method](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.databinder.eval). This doesn't work when Editing. In this case, set the [DataKeyNames](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/dataform-object) and use the [OnItemCreated](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/events) Event of the RadDataForm to set the Toggle State using the SetSelectedToggleByText or SetSelectedToggleByValue.

### RadDataForm Markup
``` html
<telerik:RadDataForm runat="server" ID="RadDataForm1" DataSourceID="SqlDataSource1" DataKeyNames="PersonId, IsSomething" CssClass="rdfInlineBlock" RenderMode="Lightweight" OnItemCreated="RadDataForm1_ItemCreated">
    <LayoutTemplate>
        <div class="RadDataForm RadDataForm_<%# Container.Skin %> rdfInlineBlock">
            <div runat="server" id="itemPlaceholder"></div>
            <div class="rdfPager">
                <span>
                    <telerik:RadButton ID="btnFirst" runat="server" CommandArgument="First" CommandName="Page" CssClass="rdfActionButton rdfPageFirst" RenderMode="Lightweight" ToolTip="First">
                        <Icon PrimaryIconCssClass="rdfIcon rdfPageFirstIcon" />
                </telerik:RadButton>
                <telerik:RadButton ID="btnPrev" runat="server" CommandArgument="Prev" CommandName="Page" CssClass="rdfActionButton rdfPagePrev" RenderMode="Lightweight" ToolTip="Previous">
                    <Icon PrimaryIconCssClass="rdfIcon rdfPagePrevIcon" />
                </telerik:RadButton>
                </span><span>
                    <telerik:RadButton ID="btnNext" runat="server" CommandArgument="Next" CommandName="Page" CssClass="rdfActionButton rdfPageNext" RenderMode="Lightweight" ToolTip="Next">
                        <Icon PrimaryIconCssClass="rdfIcon rdfPageNextIcon" />
                </telerik:RadButton>
                <telerik:RadButton ID="btnLast" runat="server" CommandArgument="Last" CommandName="Page" CssClass="rdfActionButton rdfPageLast" RenderMode="Lightweight" ToolTip="Last">
                    <Icon PrimaryIconCssClass="rdfIcon rdfPageLastIcon" />
                </telerik:RadButton>
                </span>
            </div>
        </div>
    </LayoutTemplate>
    <ItemTemplate>
        <fieldset class="rdfFieldset rdfBorders">
            <div class="rdfRow">
                <%# Eval("PersonId") %>
            </div>
            <div class="rdfRow">
                <%# Eval("FirstName") %>
            </div>
            <div class="rdfRow">
                <%# Eval("LastName") %>
            </div>
            <div class="rdfRow">
                <%# Eval("IsSomething") %>
            </div>
            <legend class="rdfLegend">View</legend>
            <div class="rdfCommandButtons">
                <hr class="rdfHr" />
                <telerik:RadButton ID="InitInsertButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="InitInsert" RenderMode="Lightweight" Text="Insert" ToolTip="Insert" />
                <telerik:RadButton ID="EditButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Edit" RenderMode="Lightweight" Text="Edit" ToolTip="Edit" />
                <telerik:RadButton ID="DeleteButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Delete" RenderMode="Lightweight" Text="Delete" ToolTip="Delete" />
            </div>
        </fieldset>
    </ItemTemplate>
    <EditItemTemplate>
        <fieldset class="rdfFieldset rdfBorders">
            <legend class="rdfLegend">Edit</legend>
            <div class="rdfCommandButtons">
                <div class="rdfRow">
                    <telerik:RadButton ID="EditItem_IsSomething" runat="server" ToggleType="CustomToggle" ButtonType="ToggleButton">
                        <ToggleStates>
                            <telerik:RadButtonToggleState Text="No" Value="0" />
                            <telerik:RadButtonToggleState Text="Yes" Value="1" />
                            <telerik:RadButtonToggleState Text="N/A" Value="2" />
                        </ToggleStates>
                    </telerik:RadButton>
                </div>
                <hr class="rdfHr" />
                <telerik:RadButton ID="UpdateButton" runat="server" ButtonType="SkinnedButton" CommandName="Update" RenderMode="Lightweight" Text="Update" ToolTip="Update" />
                <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" RenderMode="Lightweight" Text="Cancel" ToolTip="Cancel" />
            </div>
        </fieldset>
    </EditItemTemplate>
    <InsertItemTemplate>
        <fieldset class="rdfFieldset rdfBorders">
            <legend class="rdfLegend">Insert</legend>
            <div class="rdfCommandButtons">
                <hr class="rdfHr" />
                <telerik:RadButton ID="PerformInsertButton" runat="server" ButtonType="SkinnedButton" CommandName="PerformInsert" RenderMode="Lightweight" Text="Insert" ToolTip="Insert" />
                <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" RenderMode="Lightweight" Text="Cancel" ToolTip="Cancel" />
            </div>
        </fieldset>
    </InsertItemTemplate>
    <EmptyDataTemplate>
        <div class="RadDataForm RadDataForm_<%# Container.Skin %>">
            <div class="rdfEmpty">
                There are no items to be displayed.</div>
        </div>
    </EmptyDataTemplate>
</telerik:RadDataForm>
```
### The OnItemCreatedEvent
``` csharp
protected void RadDataForm1_ItemCreated(object sender, RadDataFormItemEventArgs e)
{
    if (e.Item.ItemType == RadDataFormItemType.EditItem)
    {
        // Get the RadDataFormEditableItem from e.Item
        RadDataFormEditableItem item = e.Item as RadDataFormEditableItem;

        //  Find the control by ID
        RadButton rb = item.FindControl("EditItem_IsSomething") as RadButton;

        //  Use the GetDataKeyValue to get the value of is preferred
        string IsSomethingValue = item.GetDataKeyValue("IsSomething").ToString().ToLower();

        //   Custom logic will be different for each application
        string IsPreferred;

        switch (IsSomethingValue)
        {
            case "false":
                IsPreferred = "No";
                break;
            case "true":
                IsPreferred = "Yes";
                break;
            default:
                IsPreferred = "N/A";
                break;
        }

        //  Set the value by Text. Can also do by Value.
        rb.SetSelectedToggleStateByText(IsPreferred);
    }
}
```
## See Also

*   [Toggle Type Telerik RadButton](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/button-types/toggle-button)
*   [Editing in a RadDataForm](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/data-editing/manual-crud-operations)
*   [RadDataForm ItemTemplate](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/data-binding/declarative-data-source)
*   [DataBinder.Eval Method](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.databinder.eval?view=netframework-4.8)
*   [DataKeyNames](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/dataform-object)
*   [OnItemCreated](https://docs.telerik.com/devtools/aspnet-ajax/controls/dataform/server-side-programming/events)
