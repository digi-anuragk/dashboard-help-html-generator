# Work Item Time In Status Dashboard

 The Work Item Time In Status dashboard shows the duration of work items (like a backlog item, defect, or test set) in different stages. For example, it tracks the duration of work items in different stages, such as ready for dev, in progress, and testing.  This dashboard helps you to see where work items are delayed and how smoothly they move through the process. It's like a timeline that provides insights into how efficiently your team works and completes the tasks.

 The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the work_item_in_status dataset. 

Here is an example work item time in status panel.
![Work Item Time In Status](./images/work_item_time_in_status.png)

You can filter and view the required data using the following filters:

- Planning level: Displays data of work items in the selected planning level and and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Last date time in status filter.

:::
- Program: Displays data of work items in the selected program.
- Backlog group: Displays data of work items in the selected backlog group and child backlog group that belongs to the backlog group.
- Team: Displays data of a specific group of cross-functional members.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of work items in the selected portfolio item and child work items that belong to the portfolio item.
- Backlog goal: Displays data of work items in the selected backlog goal.
- Work item type: Displays data of work items in any of the following work item types: Defect, Story, and Test set. 
- Work item status: Displays data of work items in the selected status.
- Work item State: Displays data of work items in any of the following reporting category states: in progress and closed.
- Last date time in status: Displays data of work items in the selected date range.
 
You can use these filters to refine the displayed data. For example, you can choose an iteration from the Iteration filter to view the corresponding work item time in status dashboard. Here is an example iteration-filtered panel.

![Work Item Time In Status filtered panel](./images/work_item_time_in_status_filtered_panel.png)

### All Work Items
Displays the duration of a work item in a specific status. Each dot on this panel represents a single work item. The dot position on the y-axis represents the days the work item is in the selected status. The dot position on the x-axis represents the last date the work item is seen in the selected status. It also has a 95th Percentile line indicating the maximum number of days that 95% of the work items are spent in the status value. The x-axis represents the last status date, and the y-axis represents the days in status. You can hover the cursor over the dot to see the work item number, last status date, and days that a work item is in the status.

### All Backlog Items in Status
Displays detailed information about work items. The provided information includes various details such as ID, work item link, title, state, created on, first date in status, last date in status, and days in status. This grid lists the details of all work items categorized under All Work Items.

You can also click the ![source](./images/source_icon.PNG) icon against the work item ID to launch the source system and view more work item details such as status, description, owner and team.

### Components of dataset

The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Created Date|Date on which the work item was created|
|Days| Days a work item spent in a specific status|
|First Date in Status|First date on which the status is changed|
|Last Date in Status|Last date on which the status is changed|
|State|Current state of the work item|
|Title|Title of the work item|
|ID|ID refers to a work item that represents work to be completed|
|Work item number|Unique identification number of a work item|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Work item count|Count of work items in a program or planning level|Count[Work item number]ID|
|95th Percentile|Days that 95% of the work items spent in a particular status value|Percentile<UseLookupForAttributes=True>([Status duration days], 0.95){auto}|
|Days in Status|First date of the work items in the selected status value|Sum(status duration days)|



