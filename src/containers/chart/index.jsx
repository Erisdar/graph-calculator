import React, { memo } from 'react';
import ChartTitle from "components/chart/chart-title";
import AxisLabel from "components/chart/axis-label";
import LineChart from "components/chart/line-chart";

const styles = {
	chartComponentsContainer: {
		display: 'grid', gridTemplateColumns: 'max-content 700px', alignItems: 'center'
	},
	chartWrapper: {maxWidth: 700, alignSelf: 'flex-start'}
}

export const Chart = memo(({data}) => {
	return (
		<div style={styles.chartComponentsContainer} className="mt-sm-0 mt-md-3">
			<div/>
			<ChartTitle text="Movements per Day of the Week"/>
			<AxisLabel text="Y" rotate/>
			<div style={styles.chartWrapper}>
				<LineChart
					width={500}
					height={300}
					data={data}
					horizontalGuides={5}
					precision={2}
					verticalGuides={1}
				/>
			</div>
			<div/>
			<AxisLabel text="X"/>
		</div>
	)
});