"use client";

import {
	Card,
	Metric,
	Text,
	Flex,
	BadgeDelta,
	DeltaType,
	Color,
	Grid,
	ProgressBar,
} from "@tremor/react";

const colors: { [key: string]: Color } = {
	increase: "emerald",
	moderateIncrease: "emerald",
	unchanged: "orange",
	moderateDecrease: "rose",
	decrease: "rose",
};

const categories: {
	title: string;
	metric: string;
	metricPrev: string;
	delta: string;
	deltaType: DeltaType;
}[] = [
	{
		title: "Sales",
		metric: "$ 12,699",
		metricPrev: "$ 9,456",
		delta: "34.3%",
		deltaType: "moderateIncrease",
	},
	{
		title: "Profit",
		metric: "$ 40,598",
		metricPrev: "$ 45,564",
		delta: "10.9%",
		deltaType: "moderateDecrease",
	},
	{
		title: "Customers",
		metric: "1,072",
		metricPrev: "856",
		delta: "25.3%",
		deltaType: "moderateIncrease",
	},
];

export default function Example() {
	return (
		<Grid numColsSm={2} numColsLg={3} className="gap-6">
			{categories.map((item) => (
				<Card key={item.title}>
					<Text>{item.title}</Text>
					<Flex
						justifyContent="start"
						alignItems="baseline"
						className="truncate space-x-3"
					>
						<Metric>{item.metric}</Metric>
						<Text className="truncate">from {item.metricPrev}</Text>
					</Flex>
					<Flex justifyContent="start" className="space-x-2 mt-4">
						<BadgeDelta deltaType={item.deltaType} />
						<Flex justifyContent="start" className="space-x-1 truncate">
							<Text color={colors[item.deltaType]}>{item.delta}</Text>
							<Text className="truncate"> to previous month </Text>
						</Flex>
					</Flex>
				</Card>
			))}
			<Card className="max-w-xs mx-auto">
				<Text>Sales</Text>
				<Metric>$ 71,465</Metric>
				<Flex className="mt-4">
					<Text>32% of annual target</Text>
					<Text>$ 225,000</Text>
				</Flex>
				<ProgressBar percentageValue={32} className="mt-2" />
			</Card>
		</Grid>
	);
}
