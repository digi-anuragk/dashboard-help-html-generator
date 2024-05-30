# Work Item Cycle Time Details Dashboard

The Work Item Cycle Time Details dashboard provides a detailed view of all the work items that have gone through a specific cycle, offering insights into the time each item spent in that cycle. The dashboard displays the duration of a work item in the defined cycle. This dashboard includes the duration it took to move through each stage.

Cycle refers to the duration of a work item to move from the filtered two  status like developing to the ready to demo status.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the work_item_in_status dataset. 

Here is an example work item cycle time details panel.
![Work Item Cycle Time Details](./images/work_item_cycle_time_details.png)

You can filter and view the required data using the following filters:
- Planning level: Displays data of work items in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Include items after filter.

:::
- Program: Displays data of work items in the selected program.
- Backlog group: Displays data of work items in the selected backlog group and child backlog group that belongs to the backlog group.
- Team: Displays data of a specific group of cross-functional members.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of work items in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Backlog Goal: Displays data of work items assigned to the selected backlog goal. 
- Work item type: Displays data of work items in any of the following types: story, defect, and test set.
- Work item state: Displays data of work items in any of the following reporting category states: in progress and closed.
- Include items after: Displays data of specific date range or period.
- Cycle start: Displays the status of work items that define the beginning of the cycle.
- Cycle end: Displays the status of work items that define the end of the cycle.
:::note

If you choose a cycle start range value that is higher than the rank of the cycle end status, the system will automatically swap the selected status values for both options. This ensures consistency and accuracy in defining the cycle range for your analysis.

:::
 
You can use these filters to refine the displayed data. For example, you can choose an iteration from the Iteration filter to view the corresponding dashboard. Here is an example iteration-filtered panel.

![Work Item Cycle Time Details filtered panel](./images/work_item_cycle_time_details_filtered_panel.png)

### All work item items
Displays the trend of the work item in cycle time. This scatter plot represents one dot for every work item that completed the defined cycle after the beginning date. The x-axis dot is determined by the date the work item exited the cycle. The y-axis dot is determined by the duration of the work item in the cycle, in days. The x-axis represents the last date in status and the y-axis represents the cycle time. You can hover the cursor over each dot to see the work item number, work item title, last date in status, and cycle time.

### All work item items - details
Displays details of all backlog items, along with work item, work item source URL, cycle time, and last date in status.  The All backlog items drives this gird.

You can also click the ![source](./images/source_icon.PNG) icon against the work item ID to launch the source system and view more work item details such as status, description, owner and team.

### Components used in this dashboard
The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Source Url|Url to the work item|
|Work item title|Title of the work item|
|Work item number|Unique identifier for the work item|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Cycle time|Duration between work start and work completed for a work item|Sum(DateDiff([Last date in status], [First date in status], "d")){[Work item number]+, [Work item team name]+, [Work item portfolio item name]+, [Work item type]+, [Work item closed by]+, [Work item created by]+, [Work item backlog group name]+}|
|Last date in status|Date on which the work item was in the status the last time|Max([Last datetime in status]@ID){[Work item number]+}|