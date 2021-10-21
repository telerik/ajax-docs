---
title: Related Load on Demand RadComboBoxes in the advanced form of RadScheduler
description: Related Load on Demand RadComboBoxes in the advanced form of RadScheduler. Check it now!
type: how-to
page_title: Related Load on Demand RadComboBoxes in the advanced form of RadScheduler
slug: scheduler-related-load-on-demand-radcomboboxes-in-the-advanced-form-of-radscheduler
res_type: kb
---


  

   
 **HOW-TO**  
   
 add related Load on Demand RadComboBoxes in the advanced form of RadScheduler  
   
 **DESCRIPTION**  
   
 This kb article merges the functionalities of the [Related ComboBoxes](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/multiplecomboboxes/defaultcs.aspx) and the [Advanced Templates](http://demos.telerik.com/aspnet-ajax/scheduler/examples/advancedformtemplate/defaultcs.aspx) demos. The selected values of the two RadComboBoxes are stored using custom attributes. Note that we don't use resources for this case.   

   
 **SOLUTION**  
   
 1. Download the attached sample.   
   
 2. In **AdvancedForm.ascx** add the following code within the **AdvancedControlsPanel**:  
   
 
````ASPX
<asp:panel runat="server" id="AdvancedControlsPanel" cssclass="rsAdvMoreControls">
   <telerik:RadComboBox ID="ContinentsRadComboBox" runat="server" Width="186px" Label="Continent:"
         OnClientSelectedIndexChanged="LoadCountries" />
   <telerik:RadComboBox ID="CountriesRadComboBox" runat="server" Label="Country:" Width="186px"
         OnItemsRequested="CountriesRadComboBox_ItemsRequested" OnClientItemsRequested="CountriesLoaded"
         OnClientLoad="CountriesComboClientLoad" EnableViewState="false" />
</asp:panel>
````
   
   
 3. Still in **AdvancedForm.js** add the following javascript:  
 
 
````JavaScript
var countriesCombo = null;
function CountriesComboClientLoad(sender) {
    countriesCombo = sender;
}
function CountriesLoaded(combo, eventArqs) {
    if (combo.get_items().get_count() > 0) {
        // Pre-select the first country  
        combo.set_text(combo.get_items().getItem(0).get_text());
        combo.get_items().getItem(0).highlight();
    }
    combo.showDropDown();
}
 
function LoadCountries(combo, eventArqs) {
    var item = eventArqs.get_item();
 
    countriesCombo.set_text("Loading...");
 
    // Is continent selected?  
    if (item.get_index() > 0) {
        // Request items through the ItemsRequested event of the   
        // countries RadComboBox passing the continentID as a parameter   
        countriesCombo.requestItems(item.get_value(), false);
    }
    else {
        // The "-Select a continent-" item was chosen  
        countriesCombo.set_text(" ");
        countriesCombo.clearItems();
    }
}
````
   
   
   
 4. In code-behind of **AdvancedForm.ascx** add the following:  
   
   4.1 In the "**Private Members**" region add:  
   
 **C#**  
#region Private members  
private string _selectedCountry; 

 
   
     4.2 In the "**Attributes and resources**" region add:  
   
````C#
//Continent, Coutry  
        [Bindable(BindableSupport.Yes, BindingDirection.TwoWay)]  
        public string Continent  
        {  
            get 
            {  
                return ContinentsRadComboBox.SelectedValue;  
            }  
 
            set 
            {  
                ContinentsRadComboBox.SelectedValue = value;  
            }  
        }  
 
        [Bindable(BindableSupport.Yes, BindingDirection.TwoWay)]  
        public string Country  
        {  
            get 
            {  
                return CountriesRadComboBox.SelectedValue;  
            }  
 
            set 
            {  
                // Store the selected country ID until we obtain the continent ID  
                _selectedCountry = value;  
            }  
        }  
 
 
        protected void LoadContinents()  
        {  
            SqlConnection connection = new SqlConnection(  
            ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString);  
 
            SqlDataAdapter adapter = new SqlDataAdapter("SELECT * FROM Continents ORDER By Name", connection);  
            DataTable dt = new DataTable();  
            adapter.Fill(dt);  
            ContinentsRadComboBox.Items.Clear();  
            ContinentsRadComboBox.Items.Insert(0, new RadComboBoxItem("- Select a continent -"));  
            ContinentsRadComboBox.AppendDataBoundItems = true;  
            ContinentsRadComboBox.DataTextField = "Name";  
            ContinentsRadComboBox.DataValueField = "ID";  
            ContinentsRadComboBox.DataSource = dt;  
            ContinentsRadComboBox.DataBind();  
            ContinentsRadComboBox.DataSource = null;  
            //insert the first item  
 
        }  
 
        protected void LoadCountries(string continentID)  
        {  
            SqlConnection connection = new SqlConnection(  
            ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString);  
 
            //select a country based on the continentID  
            SqlDataAdapter adapter = new SqlDataAdapter("SELECT * FROM Countries WHERE ContinentID=@ContinentID ORDER By Name", connection);  
            adapter.SelectCommand.Parameters.AddWithValue("@ContinentID", continentID);  
 
            DataTable dt = new DataTable();  
            adapter.Fill(dt);  
 
            CountriesRadComboBox.DataTextField = "Name";  
            CountriesRadComboBox.DataValueField = "ID";  
            CountriesRadComboBox.DataSource = dt;  
            CountriesRadComboBox.DataBind();  
        }  
 
        protected void CountriesRadComboBox_ItemsRequested(object o, RadComboBoxItemsRequestedEventArgs e)  
        {  
            // e.Text is the first parameter of the requestItems method   
            // invoked in LoadCountries method   
            LoadCountries(e.Text);  
        } 
````
 
4.3  In Page_Load add:

````C#
protected void Page_Load(object sender, EventArgs e)  
    {  
            if (ContinentsRadComboBox.Items.Count == 0)  
            {  
                // Fill the continents combo  
                LoadContinents();  
            } 
````

4.4 In PreRender add:

````C#
protected override void OnPreRender(EventArgs e)  
{  
   base.OnPreRender(e);  

   if (!string.IsNullOrEmpty(_selectedCountry))  
   {  
         // Fill the countries combo.  
         // Note that Continent value is available in PreRender  
         LoadCountries(Continent);  
         CountriesRadComboBox.SelectedValue = _selectedCountry;  
   } 
````

5. Copy Telerik.mdf from your local installation of the Telerik.Web.UI suit \Live Demos\App_Data to the App_Data folder of your current web site. In the web.config file add the following connection string:

````C#
<connectionStrings> 
        <add name="TelerikConnectionString" connectionString="Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|\Telerik.mdf;Integrated Security=True;User Instance=True" providerName="System.Data.SqlClient"/>  
    </connectionStrings> 
````

6. In Default.aspx, use the following RadScheduler declaration and SqlDataSource:

````ASPX
<telerik:RadScheduler runat="server" ID="RadScheduler1" OnClientFormCreated="schedulerFormCreated" 
        Width="750px" SelectedDate="2009-03-30" TimeZoneOffset="03:00:00" CustomAttributeNames="Description,Continent,Country" 
        OnDataBound="RadScheduler1_DataBound" OnAppointmentDataBound="RadScheduler1_AppointmentDataBound" 
        DataEndField="End" DataKeyField="ID" DataRecurrenceField="RecurrenceRule" DataRecurrenceParentKeyField="RecurrenceParentID" 
         DataStartField="Start" DataSubjectField="Subject" 
        HoursPanelTimeFormat="htt" ValidationGroup="RadScheduler1"   
        DataSourceID="SqlDataSource1">     <AdvancedForm Modal="true" /> 
        <AdvancedEditTemplate> 
            <scheduler:AdvancedForm runat="server" ID="AdvancedEditForm1" Mode="Edit" Subject='<%# Bind("Subject") %>' 
                Start='<%# Bind("Start") %>' End='<%# Bind("End") %>' RecurrenceRuleText='<%# Bind("RecurrenceRule") %>' 
                Continent='<%# Bind("Continent") %>' 
                Country='<%# Bind("Country") %>'/>  
        </AdvancedEditTemplate> 
        <AdvancedInsertTemplate> 
            <scheduler:AdvancedForm runat="server" ID="AdvancedInsertForm1" Mode="Insert" Subject='<%# Bind("Subject") %>' 
                Start='<%# Bind("Start") %>' End='<%# Bind("End") %>' RecurrenceRuleText='<%# Bind("RecurrenceRule") %>' 
                Continent='<%# Bind("Continent") %>' 
                Country='<%# Bind("Country") %>' /> 
        </AdvancedInsertTemplate>         
    </telerik:RadScheduler> 
    <asp:SqlDataSource ID="SqlDataSource1" runat="server"   
        ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"   
        DeleteCommand="DELETE FROM [Appointments] WHERE [ID] = @ID"   
        InsertCommand="INSERT INTO [Appointments] ([Subject], [Start], [End], [UserID], [RoomID], [RecurrenceRule], [RecurrenceParentID], [Description], [Continent], [Country]) VALUES (@Subject, @Start, @End, @UserID, @RoomID, @RecurrenceRule, @RecurrenceParentID, @Description, @Continent, @Country)"   
        SelectCommand="SELECT * FROM [Appointments]"   
        UpdateCommand="UPDATE [Appointments] SET [Subject] = @Subject, [Start] = @Start, [End] = @End, [UserID] = @UserID, [RoomID] = @RoomID, [RecurrenceRule] = @RecurrenceRule, [RecurrenceParentID] = @RecurrenceParentID, [Description] = @Description, [Continent] = @Continent, [Country] = @Country WHERE [ID] = @ID">  
        <DeleteParameters> 
            <asp:Parameter Name="ID" Type="Int32" /> 
        </DeleteParameters> 
        <UpdateParameters> 
            <asp:Parameter Name="Subject" Type="String" /> 
            <asp:Parameter Name="Start" Type="DateTime" /> 
            <asp:Parameter Name="End" Type="DateTime" /> 
            <asp:Parameter Name="UserID" Type="Int32" /> 
            <asp:Parameter Name="RoomID" Type="Int32" /> 
            <asp:Parameter Name="RecurrenceRule" Type="String" /> 
            <asp:Parameter Name="RecurrenceParentID" Type="Int32" /> 
            <asp:Parameter Name="Description" Type="String" /> 
            <asp:Parameter Name="Continent" Type="String" /> 
            <asp:Parameter Name="Country" Type="String" /> 
            <asp:Parameter Name="ID" Type="Int32" /> 
        </UpdateParameters> 
        <InsertParameters> 
            <asp:Parameter Name="Subject" Type="String" /> 
            <asp:Parameter Name="Start" Type="DateTime" /> 
            <asp:Parameter Name="End" Type="DateTime" /> 
            <asp:Parameter Name="UserID" Type="Int32" /> 
            <asp:Parameter Name="RoomID" Type="Int32" /> 
            <asp:Parameter Name="RecurrenceRule" Type="String" /> 
            <asp:Parameter Name="RecurrenceParentID" Type="Int32" /> 
            <asp:Parameter Name="Description" Type="String" /> 
            <asp:Parameter Name="Continent" Type="String" /> 
            <asp:Parameter Name="Country" Type="String" /> 
        </InsertParameters> 
    </asp:SqlDataSource>    
7. In Default.aspx make sure that the script reference is pointing to the correct location of the AdvancedForm.js file:
<asp:ScriptManager ID="ScriptManager1" runat="server">  
        <Scripts> 
            <asp:ScriptReference Path="~/CS/AdvancedForm.js" /> 
        </Scripts> 
    </asp:ScriptManager>
````

   