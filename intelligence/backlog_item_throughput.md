# Backlog Item Throughput Dashboard

The Backlog Item Throughput dashboard provides insights into the closure of backlog items within a specified period. This panel is designed to enhance visibility and understanding of the progress made in handling different types of backlog items like story, defect, and test set.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the backlog_item_throughput dataset.

### Backlog Item Throughput
Displays the trend of backlog items at a specific time. Each bar on this panel represents the total number of closed backlog items in the period shown on the x-axis. Each bar is grouped by backlog item type. The x-axis represents the calendar month or quarter, and the y-axis represents the completed backlog item count.

The dashboard has backlog item count and backlog item details grids. The backlog item count displays backlog item details like metrics, backlog item count, month or quarter on which the backlog item is closed or completed, number of completed or closed defects and stories, and total count of completed or closed backlog items for a specific period. The backlog item details displays details like the month or quarter on which the backlog item is closed or completed, work item ID, completed date, closed date, work item source URL, and total estimate. The Backlog Item Throughput drives these two grids. 

You can also click the ![source icon](../images/source_icon.PNG) icon against the work item ID to launch the source system and view more backlog item details such as status, description, owner and team.


Here is an example backlog item throughput panel.
![Backlog Item Throughput](../images/backlog_item_throughput.PNG)


You can filter and view the required data using the following filters:

- Planning level: Displays data of backlog items in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other.

:::
- Program: Displays data of backlog items in the selected program.
- Aggregation: Displays data of backlog items in the selected aggregation types like backlog item count and total estimate.
- Completed vs Closed Date: Displays data of backlog items in the selected date filter values like closed monthly, closed quarterly, completed monthly, and completed quarterly. 
 
You can use these filters to refine the displayed data. For example, you can choose a program from the Program filter to see the corresponding dashboard. Here is an example program-filtered panel.

![Backlog Item Throughput filtered panel](../images/backlog_item_throughput_filtered_panel.PNG)

### Components of dataset

The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Closed monthly| Closed month of the backlog item|
|Closed quarterly|Closed quarter of the backlog item|
|Completed monthly|Completed month of the backlog item|
|Completed quarterly|Completed quarter of the backlog item|
|Closed date| Closed date of the backlog item|
|Completed date| Completed date of the backlog item|
|Type|Type of the backlog item|
|Work item ID|Unique identifier of the backlog item|
|Work item source url| Source URL of the backlog item|


### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Backlog item count|Count of closed or completed backlog items| Count([Workitem ID])|
|Total estimate|Summation of all estimate points of the backlog item in the iteration|Sum(story points)|

