---
title: Drag and Drop from RadGrid to RadScheduler
page_title: Drag and Drop from RadGrid to RadScheduler | RadGrid for ASP.NET AJAX Documentation
description: Drag and Drop from RadGrid to RadScheduler
slug: grid/how-to/common/drag-and-drop-from-radgrid-to-radscheduler
tags: drag,and,drop,from,radgrid,to,radscheduler
published: True
position: 17
---

# Drag and Drop from RadGrid to RadScheduler



[This online demo](https://demos.telerik.com/aspnet-ajax/scheduler/examples/draganddropintegration/defaultcs.aspx?product=grid) demonstrates how to implement support for drag and drop from RadGrid to RadScheduler.

When a task is dragged from the grid to the scheduler, the time slot which will receive the appointment is highlighted. After the task is dropped, it appears in the RadScheduler control as an appointment and it is removed from the grid. This is achieved by updating the data sources and rebinding both controls.

Clicking the **Unschedule** button (implemented via AppointmentTemplate) removes the appointment and sends it back to the task list of the grid. In contrast, deleting an appointment removes the appointemnt altogether - both from the scheduler and the grid.

The appointments can be modified in the grid on row double-click, or new ones can be added using the **Add new task** button.

![Drag and drop from grid to scheduler](images/grid_drag-drop-to-scheduler.png)

##

Here follows the code used to achieve this:



````JavaScript
<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
   <script type="text/javascript">

       function rowDropping(sender, eventArgs) {
           // Fired when the user drops a grid row
           var htmlElement = eventArgs.get_destinationHtmlElement();
           var scheduler = $find('<%= RadScheduler1.ClientID %>');

           if (isPartOfSchedulerAppointmentArea(htmlElement)) {
               // The row was dropped over the scheduler appointment area
               // Find the exact time slot and save its unique index in the hidden field
               var timeSlot = scheduler._activeModel.getTimeSlotFromDomElement(htmlElement);

               $get("TargetSlotHiddenField").value = timeSlot.get_index();

               // The HTML needs to be set in order for the postback to execute normally
               eventArgs.set_destinationHtmlElement("TargetSlotHiddenField");
           }
           else {
               // The node was dropped elsewhere on the document
               eventArgs.set_cancel(true);
           }
       }

       function isPartOfSchedulerAppointmentArea(htmlElement) {
           // Determines if an html element is part of the scheduler appointment area
           // This can be either the rsContent or the rsAllDay div (in day and week view)
           return $telerik.$(htmlElement).parents().is("div.rsAllDay") ||
                       $telerik.$(htmlElement).parents().is("div.rsContent")
       }

       function onRowDoubleClick(sender, args) {
           sender.get_masterTableView().editItem(args.get_itemIndexHierarchical());
       }
   </script>
</telerik:RadScriptBlock>
````
````ASP.NET
<input type="hidden" runat="server" id="TargetSlotHiddenField" />
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1">
    <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="RadScheduler1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadScheduler1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
            <telerik:AjaxSetting AjaxControlID="RadGrid1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadSplitter RenderMode="Lightweight" runat="server" ID="RadSplitter1" Height="552px" Width="880px"
    CssClass="exampleContainer" Orientation="Horizontal" Skin="Office2007">
    <telerik:RadPane runat="server" ID="TopPane" Height="400px" Scrolling="None">
        <telerik:RadScheduler RenderMode="Lightweight" ID="RadScheduler1" runat="server" Skin="Office2007" Height="100%" Width="100%"
         RowHeaderWidth="52" OverflowBehavior="Scroll" ShowFooter="false"
         DataSourceID="SchedulerDataSource" DataKeyField="AppointmentID" DataStartField="Start" DataEndField="End"
         DataSubjectField="Subject" CustomAttributeNames="Due, Priority" RowHeight="37px"
            OnAppointmentCommand="RadScheduler1_AppointmentCommand" OnAppointmentInsert="RadScheduler1_AppointmentInsert">
            <AdvancedForm Modal="true" />

            <AppointmentTemplate>
                <%# Eval("Subject") %>
                <asp:Button runat="server" ID="UnscheduleAppointment" CssClass="simpleButton" CommandName="Unschedule"
                Text="&nbsp;" ToolTip="Unschedule this appointment" />
            </AppointmentTemplate>
 <TimeSlotContextMenuSettings EnableDefault="true" />
 <AppointmentContextMenuSettings EnableDefault="true" />                    
        </telerik:RadScheduler>
    </telerik:RadPane>
    <telerik:RadSplitBar runat="Server" ID="RadSplitBar1" />
    <telerik:RadPane runat="server" ID="BottomPane">
        <div style="float: left; height: 100%; width: 55px; background: #E3EFFF; text-align: center;
            border-right: 1px solid #6593CF;">
            <img src="images/tasks.gif" alt="" /></div>
        <div style="margin-left: 56px; border: none;">
            <telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" DataSourceID="GridDataSource" GridLines="None"
                AutoGenerateColumns="False" OnRowDrop="RadGrid1_RowDrop" Skin="Office2007" Style="border: none;
                outline: 0" Height="100%" AllowAutomaticInserts="True" AllowAutomaticUpdates="true"
                ShowFooter="true" OnItemCreated="RadGrid1_ItemCreated" OnItemCommand="RadGrid1_ItemCommand"
                AllowSorting="true">
                <clientsettings allowrowsdragdrop="True">
                        <Selecting AllowRowSelect="True" />
                        <ClientEvents OnRowDropping="rowDropping" OnRowDblClick="onRowDoubleClick" />
                    </clientsettings>
                <mastertableview datakeynames="AppointmentID" insertitemdisplay="Bottom" editmode="InPlace">
                    <SortExpressions>
                        <telerik:GridSortExpression FieldName="Due" SortOrder="Ascending" />
                    </SortExpressions>
                        <Columns>
                            <telerik:GridTemplateColumn DataField="Subject" HeaderText="Task">
                                <ItemTemplate>
                                    <asp:Label runat="server" ID="Label1" Text='<%# Bind("Subject") %>'></asp:Label>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <asp:LinkButton Text="Add new task" CommandName="<%# RadGrid.InitInsertCommandName %>"
                                        runat="server" ID="LinkButton1"></asp:LinkButton>
                                </FooterTemplate>
                                <EditItemTemplate>
                                    <asp:TextBox runat="Server" ID="TextBox1" Text='<%# Bind("Subject") %>' Width="100%"></asp:TextBox>
                                </EditItemTemplate>
                            </telerik:GridTemplateColumn>
                            <telerik:GridDateTimeColumn DataField="Due" HeaderText="Due Date" DataFormatString="{0:d}"
                                HeaderStyle-Width="200px">
                            </telerik:GridDateTimeColumn>
                            <telerik:GridTemplateColumn DataField="Priority" HeaderText="Priority" HeaderStyle-Width="200px">
                                <ItemTemplate>
                                    <asp:Label runat="Server" ID="Label2" Text='<%#Bind("Priority") %>'></asp:Label>
                                </ItemTemplate>
                                <EditItemTemplate>
                                    <telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="priorityComboBox" SelectedValue='<%#Bind("Priority") %>' Skin="Office2007" Width="80px">
                                        <Items>
                                            <telerik:RadComboBoxItem Text="High" Value="High" />
                                            <telerik:RadComboBoxItem Text="Medium" Value="Medium" />
                                            <telerik:RadComboBoxItem Text="Low" Value="Low" />
                                        </Items>
                                    </telerik:RadComboBox>
                                    <asp:LinkButton ID="btnUpdate" Text="Save" runat="server" CommandName='<%# (Container is GridDataInsertItem) ? RadGrid.PerformInsertCommandName : RadGrid.UpdateCommandName %>'></asp:LinkButton>
                                    <asp:LinkButton ID="btnCancel" Text="Cancel" runat="server" CommandName='<%# RadGrid.CancelCommandName %>'></asp:LinkButton>
                                </EditItemTemplate>
                            </telerik:GridTemplateColumn>
                        </Columns>
                    </mastertableview>
            </telerik:RadGrid>
        </div>
    </telerik:RadPane>
</telerik:RadSplitter>
<asp:SqlDataSource ID="SchedulerDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
    SelectCommand="SELECT [AppointmentID], [Start], [End], [Subject], [Due], [Priority] FROM [Appointments_DragAndDrop] WHERE ([Start] IS NOT NULL) AND ([End] IS NOT NULL)"
    InsertCommand="INSERT INTO [Appointments_DragAndDrop] ([Subject], [Start], [End]) VALUES (@Subject, @Start, @End)"
    UpdateCommand="UPDATE [Appointments_DragAndDrop] SET [Start] = @Start, [End] = @End, [Subject] = @Subject WHERE AppointmentID = @AppointmentID"
    DeleteCommand="DELETE FROM [Appointments_DragAndDrop] WHERE [AppointmentID] = @AppointmentID">
    <InsertParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Start" Type="DateTime" />
            <asp:Parameter Name="End" Type="DateTime" />
    </InsertParameters>
    <UpdateParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Start" Type="DateTime" />
            <asp:Parameter Name="End" Type="DateTime" />
            <asp:Parameter Name="AppointmentID" Type="Int32" />
        </UpdateParameters>
    <DeleteParameters>
            <asp:Parameter Name="AppointmentID" Type="Int32" />
        </DeleteParameters>
</asp:SqlDataSource>
<asp:SqlDataSource ID="GridDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
    SelectCommand="SELECT [AppointmentID], [Start], [End], [Subject], [Due], [Priority] FROM [Appointments_DragAndDrop] WHERE ([Start] IS NULL) AND ([End] IS NULL)"
    UpdateCommand="UPDATE [Appointments_DragAndDrop] SET [Start] = @Start, [End] = @End, [Subject] = @Subject, [Due] = @Due, [Priority] = @Priority WHERE AppointmentID = @AppointmentID"
    InsertCommand="INSERT INTO [Appointments_DragAndDrop] ([Subject], [Due], [Priority]) VALUES (@Subject, @Due, @Priority)">
    <UpdateParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Start" Type="DateTime" />
            <asp:Parameter Name="End" Type="DateTime" />
            <asp:Parameter Name="Due" Type="DateTime" />
            <asp:Parameter Name="Priority" Type="String" />
            <asp:Parameter Name="AppointmentID" Type="Int32" />
    </UpdateParameters>
    <InsertParameters>
            <asp:Parameter Name="Subject" Type="String" />
            <asp:Parameter Name="Due" Type="DateTime" />
            <asp:Parameter Name="Priority" Type="String" />
    </InsertParameters>
</sds:SessionDataSource>
````
````C#

protected void RadScheduler1_AppointmentInsert(object sender, SchedulerCancelEventArgs e)
{
    e.Appointment.Attributes["Due"] = e.Appointment.Start.AddDays(1).ToString("yyyy/MM/dd HH:mm", CultureInfo.InvariantCulture);
    e.Appointment.Attributes["Priority"] = "Medium";
}

protected void RadGrid1_RowDrop(object sender, GridDragDropEventArgs e)
{
    GridDataItem dataItem = e.DraggedItems[0];

    Hashtable values = new Hashtable();
    dataItem.ExtractValues(values);

    int id = (int)dataItem.GetDataKeyValue("AppointmentID");
    string subject = (string)values["Subject"];
    string targetSlotIndex = TargetSlotHiddenField.Value;

    if (targetSlotIndex != string.Empty)
    {
        HandleSchedulerDrop(id, subject, targetSlotIndex);
        TargetSlotHiddenField.Value = string.Empty;
    }
    RadScheduler1.Rebind();
    RadGrid1.Rebind();
    RadAjaxManager1.AjaxSettings.AddAjaxSetting(RadGrid1, RadScheduler1);
}

private void HandleSchedulerDrop(int id, string subject, string targetSlotIndex)
{
    RadScheduler1.Rebind();

    ISchedulerTimeSlot slot = RadScheduler1.GetTimeSlotFromIndex(targetSlotIndex);

    TimeSpan duration = TimeSpan.FromHours(1);
    if (slot.Duration == TimeSpan.FromDays(1))
    {
        duration = slot.Duration;
    }

    ScheduleAppointment(id, subject, slot.Start, slot.Start.Add(duration));
}


protected void RadScheduler1_AppointmentCommand(object sender, AppointmentCommandEventArgs e)
{
    if (e.CommandName == "Unschedule")
    {
        int id = (int)e.Container.Appointment.ID;

        DateTime dueDate = DateTime.Now;

        if (!string.IsNullOrEmpty(e.Container.Appointment.Attributes["Due"]))
            dueDate = Convert.ToDateTime(e.Container.Appointment.Attributes["Due"]);

        string priority = "Medium";

        if (!string.IsNullOrEmpty(e.Container.Appointment.Attributes["Priority"]))
            priority = e.Container.Appointment.Attributes["Priority"];

        UnscheduleAppointment(id, dueDate, priority);
        RadScheduler1.Rebind();
        RadGrid1.Rebind();

        RadAjaxManager1.AjaxSettings.AddAjaxSetting(RadScheduler1, RadGrid1);
    }
}

private void UnscheduleAppointment(int id, DateTime dueDate, string priority)
{
    IDataSource dataSource = GridDataSource;
    DataSourceView view = dataSource.GetView("DefaultView");

    IOrderedDictionary data = new OrderedDictionary();
    data.Add("Start", null);
    data.Add("End", null);
    data.Add("Due", dueDate);
    data.Add("Priority", priority);

    IDictionary keys = new OrderedDictionary();
    keys.Add("AppointmentID", id);

    view.Update(keys, data, new OrderedDictionary(), OnDataSourceOperationComplete);
}

private void ScheduleAppointment(int id, string subject, DateTime start, DateTime end)
{
    IDataSource dataSource = SchedulerDataSource;
    DataSourceView view = dataSource.GetView("DefaultView");

    IOrderedDictionary data = new OrderedDictionary();
    data.Add("Subject", subject);
    data.Add("Start", start);
    data.Add("End", end);

    IDictionary keys = new OrderedDictionary();
    keys.Add("AppointmentID", id);

    view.Update(keys, data, new OrderedDictionary(), OnDataSourceOperationComplete);
}

private static bool OnDataSourceOperationComplete(int count, Exception e)
{
    if (e != null)
    {
        throw e;
    }
    return true;
}

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFooterItem && RadGrid1.MasterTableView.IsItemInserted)
    {
        e.Item.Visible = false;
    }
}

protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.InitInsertCommandName)
    {
        e.Canceled = true;
        //Prepare an IDictionary with the predefined values
        ListDictionary newValues = new ListDictionary();
        newValues["Priority"] = "High";
        newValues["Due"] = DateTime.Now;
        newValues["Subject"] = "New task";
        //Insert the item and rebind
        e.Item.OwnerTableView.InsertItem(newValues);
    }
}
````
````VB
Protected Sub RadGrid1_RowDrop(ByVal sender As Object, ByVal e As GridDragDropEventArgs)
    Dim dataItem As GridDataItem = e.DraggedItems(0)

    Dim values As New Hashtable()
    dataItem.ExtractValues(values)

    Dim id As Integer = DirectCast(dataItem.GetDataKeyValue("AppointmentID"), Integer)
    Dim subject As String = DirectCast(values("Subject"), String)
    Dim targetSlotIndex As String = TargetSlotHiddenField.Value

    If targetSlotIndex <> String.Empty Then
        HandleSchedulerDrop(id, subject, targetSlotIndex)
        TargetSlotHiddenField.Value = String.Empty
    End If
    RadScheduler1.Rebind()
    RadGrid1.Rebind()
    RadAjaxManager1.AjaxSettings.AddAjaxSetting(RadGrid1, RadScheduler1)
End Sub

Private Sub HandleSchedulerDrop(ByVal id As Integer, ByVal subject As String, ByVal targetSlotIndex As String)
    RadScheduler1.Rebind()

    Dim slot As ISchedulerTimeSlot = RadScheduler1.GetTimeSlotFromIndex(targetSlotIndex)

    Dim duration As TimeSpan = TimeSpan.FromHours(1)
    If slot.Duration = TimeSpan.FromDays(1) Then
        duration = slot.Duration
    End If

    ScheduleAppointment(id, subject, slot.Start, slot.Start.Add(duration))
End Sub

Protected Sub RadScheduler1_AppointmentCommand(ByVal sender As Object, ByVal e As AppointmentCommandEventArgs)
    If e.CommandName = "Unschedule" Then
        Dim id As Integer = DirectCast(e.Container.Appointment.ID, Integer)

        Dim dueDate As DateTime = DateTime.Now

        If Not String.IsNullOrEmpty(e.Container.Appointment.Attributes("Due")) Then
            dueDate = Convert.ToDateTime(e.Container.Appointment.Attributes("Due"))
        End If

        Dim priority As String = "Medium"

        If Not String.IsNullOrEmpty(e.Container.Appointment.Attributes("Priority")) Then
            priority = e.Container.Appointment.Attributes("Priority")
        End If

        UnscheduleAppointment(id, dueDate, priority)
        RadScheduler1.Rebind()
        RadGrid1.Rebind()

        RadAjaxManager1.AjaxSettings.AddAjaxSetting(RadScheduler1, RadGrid1)
    End If
End Sub

Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, ByVal e As SchedulerCancelEventArgs)
    e.Appointment.Attributes("Due") = e.Appointment.Start.AddDays(1).ToString("yyyy/MM/dd HH:mm", CultureInfo.InvariantCulture)
    e.Appointment.Attributes("Priority") = "Medium"
End Sub

Private Sub UnscheduleAppointment(ByVal id As Integer, ByVal dueDate As DateTime, ByVal priority As String)
    Dim dataSource As IDataSource = GridDataSource
    Dim view As DataSourceView = dataSource.GetView("DefaultView")

    Dim data As IOrderedDictionary = New OrderedDictionary()
    data.Add("Start", Nothing)
    data.Add("End", Nothing)
    data.Add("Due", dueDate)
    data.Add("Priority", priority)

    Dim keys As IDictionary = New OrderedDictionary()
    keys.Add("AppointmentID", id)

    view.Update(keys, data, New OrderedDictionary(), AddressOf OnDataSourceOperationComplete)
End Sub

Private Sub ScheduleAppointment(ByVal id As Integer, ByVal subject As String, ByVal start As DateTime, ByVal [end] As DateTime)
    Dim dataSource As IDataSource = SchedulerDataSource
    Dim view As DataSourceView = dataSource.GetView("DefaultView")

    Dim data As IOrderedDictionary = New OrderedDictionary()
    data.Add("Subject", subject)
    data.Add("Start", start)
    data.Add("End", [end])

    Dim keys As IDictionary = New OrderedDictionary()
    keys.Add("AppointmentID", id)

    view.Update(keys, data, New OrderedDictionary(), AddressOf OnDataSourceOperationComplete)
End Sub

Private Shared Function OnDataSourceOperationComplete(ByVal count As Integer, ByVal e As Exception) As Boolean
    If e IsNot Nothing Then
        Throw e
    End If

    Return True
End Function

Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridFooterItem AndAlso RadGrid1.MasterTableView.IsItemInserted Then
        e.Item.Visible = False
    End If
End Sub

Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = RadGrid.InitInsertCommandName Then
        e.Canceled = True
        'Prepare an IDictionary with the predefined values
        Dim newValues As New ListDictionary()
        newValues("Priority") = "High"
        newValues("Due") = DateTime.Now
        newValues("Subject") = "New task"
        'Insert the item and rebind
        e.Item.OwnerTableView.InsertItem(newValues)
    End If
End Sub
````

>caution The bind expressions in the markup use C# syntax. In order to view their VB translation please visit the above linked demo.
>

