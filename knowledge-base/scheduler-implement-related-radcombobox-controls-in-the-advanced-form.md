---
title: Implement related RadComboBox controls in the advanced form
description: Implement related RadComboBox controls in the advanced form of RadScheduler for ASP.NET AJAX. Check it now!
type: how-to
page_title: Implement related RadComboBox controls in the advanced form
slug: scheduler-implement-related-radcombobox-controls-in-the-advanced-form
res_type: kb
---


   
## HOW-TO  
  
 Implement related RadComboBox controls in the advanced form  
   
 ![related combox in advanced form](Images/scheduler-Related-Combos-Advanced-Form.png)  
   
## DESCRIPTION  
   
 The advanced form exposes two RadComboBox controls. A selection in the first RadComboBox control updates the data source of the second RadComboBox using a select parameter. The values of the selected items of the RadComboBox controls are stored in **custom attributes**. It is important to note that this functionality cannot be achieved using resources and therefore the RadComboBox controls are not resources (although they appear as such). They are manually added controls to the **AdvancedForm **user control.  
   
## SOLUTION  
   
 1. Create two new fields of type string for the DbProvider\_Classes - **Continent** and **Country**. The **TelerikVSX.mdf** file is in the App\_Data folder of the sample.  
   
 2. Add the following code in the 'Resource controls' section of the **AdvancedForm.ascx**:  
   
````ASP.NET
<!-- Optionally add more ResourceControl instances here -->
<li>
   <telerik:RadComboBox ID="ComboBoxContinent" runat="server" DataSourceID="SqlDataSource1" Label="Continent:"
      DataTextField="Name" DataValueField="ID" AutoPostBack="True"
      ondatabound="ComboBoxContinent_DataBound"
      onselectedindexchanged="ComboBoxContinent_SelectedIndexChanged">
   </telerik:RadComboBox>
   <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
      SelectCommand="SELECT * FROM [Continents]"></asp:SqlDataSource>
   
   <telerik:RadComboBox ID="ComboBoxCountry" runat="server" DataSourceID="SqlDataSource2" Label="Country:"
      DataTextField="Name" DataValueField="ID">
   </telerik:RadComboBox>
   <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
      SelectCommand="SELECT * FROM [Countries] WHERE ([ContinentID] = @ContinentID)">
      <SelectParameters>
            <asp:ControlParameter ControlID="ComboBoxContinent" Name="ContinentID" PropertyName="SelectedValue"
               Type="Int32" />
      </SelectParameters>
   </asp:SqlDataSource>
</li>
````
 
 3. In code behind of the AdvancedForm user control add the following code:  
   
 ````C#
#region Attributes and resources
 
[Bindable(BindableSupport.Yes, BindingDirection.TwoWay)]
        public string Continent
        {
            get
            {
                return ComboBoxContinent.SelectedValue.ToString();
            }
 
            set
            {
                ComboBoxContinent.SelectedValue = value;
            }
        }
 
        [Bindable(BindableSupport.Yes, BindingDirection.TwoWay)]
        public string Country
        {
            get
            {
                return ComboBoxCountry.SelectedValue;
            }
 
            set
            {
                ComboBoxCountry.SelectedValue = value;
            }
        }  

protected void ComboBoxContinent_DataBound(object sender, EventArgs e)
        {
            RadComboBox combo = (RadComboBox) sender;
            combo.Items.Insert(0, new RadComboBoxItem("-", String.Empty));
       
        }
        protected void ComboBoxContinent_SelectedIndexChanged(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
        {
            if (e.Value == String.Empty)
                ComboBoxCountry.Items.Clear();
 
        }
 ````
 ````VB
 <Bindable(BindableSupport.Yes, BindingDirection.TwoWay)> _
Public Property Continent() As String
    Get
        Return ComboBoxContinent.SelectedValue.ToString()
    End Get
 
    Set
        ComboBoxContinent.SelectedValue = value
    End Set
End Property
 
<Bindable(BindableSupport.Yes, BindingDirection.TwoWay)> _
Public Property Country() As String
    Get
        Return ComboBoxCountry.SelectedValue
    End Get
 
    Set
        ComboBoxCountry.SelectedValue = value
    End Set
End Property
 
 
Protected Sub ComboBoxContinent_DataBound(sender As Object, e As EventArgs)
    Dim combo As RadComboBox = DirectCast(sender, RadComboBox)
    combo.Items.Insert(0, New RadComboBoxItem("-", [String].Empty))
 
End Sub
Protected Sub ComboBoxContinent_SelectedIndexChanged(sender As Object, e As RadComboBoxSelectedIndexChangedEventArgs)
    If e.Value = [String].Empty Then
        ComboBoxCountry.Items.Clear()
    End If
 
End Sub
 ````

4. In Default.aspx add and bind the Type and Resource custom attributes:

````ASP.NET
<telerik:RadScheduler runat="server" ID="RadScheduler1" Width="750px" AppointmentStyleMode="Default"
   StartInsertingInAdvancedForm="true" StartEditingInAdvancedForm="true" OnAppointmentDataBound="RadScheduler1_AppointmentDataBound"
   OnClientFormCreated="schedulerFormCreated" CustomAttributeNames="AppointmentColor, Continent, Country"
   EnableDescriptionField="True" DataDescriptionField="Description" DataEndField="End"
   DataKeyField="ClassID" DataRecurrenceField="RecurrenceRule" DataRecurrenceParentKeyField="RecurrenceParentID"
   DataReminderField="Reminder" DataSourceID="SqlDataSource1" DataStartField="Start"
   DataSubjectField="Subject">
   <AdvancedForm Modal="true" />
   <Reminders Enabled="true" />
   <AdvancedEditTemplate>
         <scheduler:AdvancedForm runat="server" ID="AdvancedEditForm1" Mode="Edit" Subject='<%# Bind("Subject") %>'
            Description='<%# Bind("Description") %>' Start='<%# Bind("Start") %>' End='<%# Bind("End") %>'
            RecurrenceRuleText='<%# Bind("RecurrenceRule") %>' Continent='<%# Bind("Continent") %>'
            Country='<%# Bind("Country") %>' Reminder='<%# Bind("Reminder") %>' AppointmentColor='<%# Bind("AppointmentColor") %>'
            TeacherID='<%# Bind("Teacher") %>' />
   </AdvancedEditTemplate>
   <AdvancedInsertTemplate>
         <scheduler:AdvancedForm runat="server" ID="AdvancedInsertForm1" Mode="Insert" Subject='<%# Bind("Subject") %>'
            Start='<%# Bind("Start") %>' End='<%# Bind("End") %>' Description='<%# Bind("Description") %>'
            RecurrenceRuleText='<%# Bind("RecurrenceRule") %>' Continent='<%# Bind("Continent") %>'
            Country='<%# Bind("Country") %>' Reminder='<%# Bind("Reminder") %>' AppointmentColor='<%# Bind("AppointmentColor") %>'
            TeacherID='<%# Bind("Teacher") %>' />
   </AdvancedInsertTemplate>
   <ResourceTypes>
         <telerik:ResourceType DataSourceID="SqlDataSource2" ForeignKeyField="TeacherID" KeyField="TeacherID"
            Name="Teacher" TextField="Name" />
   </ResourceTypes>
   <TimelineView UserSelectable="false" />
   <TimeSlotContextMenuSettings EnableDefault="true" />
   <AppointmentContextMenuSettings EnableDefault="true" />
</telerik:RadScheduler>
````

You can download the project files from [here](files/scheduler-relatedcombosinadvform.zip).


   