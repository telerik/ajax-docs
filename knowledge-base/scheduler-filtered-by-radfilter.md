---
title: RadScheduler filtered by RadFilter
description: RadScheduler filtered by RadFilter. Check it now!
type: how-to
page_title: RadScheduler filtered by RadFilter
slug: scheduler-filtered-by-radfilter
res_type: kb
---

## Description
This KB illustrates how to filter RadScheduler using RadFilter control.   

## Solution

To filter the RadScheduler which is bound to LinqDataSource, you need to specify the `DataSourceControlID` property of RadFilter equal to the `DataSourceID` of the RadScheduler.  
   
To filter any .NET 35/.NET 4 data source control directly, you need to specify the `DataSourceControlID` property of RadFilter.

````ASP.NET
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1">
   <AjaxSettings>
         <telerik:AjaxSetting AjaxControlID="RadScheduler1">
            <UpdatedControls>
               <telerik:AjaxUpdatedControl ControlID="RadScheduler1" LoadingPanelID="RadAjaxLoadingPanel1">
               </telerik:AjaxUpdatedControl>
            </UpdatedControls>
         </telerik:AjaxSetting>
         <telerik:AjaxSetting AjaxControlID="RadFilter1">
            <UpdatedControls>
               <telerik:AjaxUpdatedControl ControlID="RadFilter1" LoadingPanelID="RadAjaxLoadingPanel1">
               </telerik:AjaxUpdatedControl>
            </UpdatedControls>
         </telerik:AjaxSetting>
         <telerik:AjaxSetting AjaxControlID="RadFilter1">
            <UpdatedControls>
               <telerik:AjaxUpdatedControl ControlID="RadScheduler1" LoadingPanelID="RadAjaxLoadingPanel1">
               </telerik:AjaxUpdatedControl>
            </UpdatedControls>
         </telerik:AjaxSetting>
   </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" Skin="Telerik">
</telerik:RadAjaxLoadingPanel>
<telerik:RadFilter runat="server" ID="RadFilter1" DataSourceControlID="LinqDataSource1">
</telerik:RadFilter>
<telerik:RadScheduler runat="server" ID="RadScheduler1" Width="748px" SelectedDate="2012-04-16"
   DayStartTime="08:00:00" DayEndTime="18:00:00" DataKeyField="ID" DataSubjectField="Subject"
   DataStartField="Start" DataEndField="End" DataRecurrenceField="RecurrenceRule"
   DataRecurrenceParentKeyField="RecurrenceParentID" DataSourceID="LinqDataSource1"
   OverflowBehavior="Auto">
   <ResourceTypes>
         <telerik:ResourceType KeyField="ID" Name="Room" TextField="RoomName" ForeignKeyField="RoomID"
            DataSourceID="LinqDataSource2"></telerik:ResourceType>
         <telerik:ResourceType KeyField="ID" Name="User" TextField="UserName" ForeignKeyField="UserID"
            DataSourceID="LinqDataSource3"></telerik:ResourceType>
   </ResourceTypes>
</telerik:RadScheduler>
<asp:LinqDataSource runat="server" ID="LinqDataSource1" ContextTypeName="LinqToSql.TelerikSamplesDataContext"
   EnableDelete="True" EnableInsert="True" EnableUpdate="True" TableName="Appointments">
</asp:LinqDataSource>
<asp:LinqDataSource runat="server" ID="LinqDataSource2" ContextTypeName="LinqToSql.TelerikSamplesDataContext"
   TableName="Rooms">
</asp:LinqDataSource>
<asp:LinqDataSource runat="server" ID="LinqDataSource3" ContextTypeName="LinqToSql.TelerikSamplesDataContext"
   TableName="Users">
</asp:LinqDataSource>
````

