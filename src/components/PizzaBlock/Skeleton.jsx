import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={456.4}
		viewBox='0 0 280 456.400'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<circle cx='127' cy='121' r='118' />
		<rect x='0' y='258' rx='10' ry='10' width='280' height='24' />
		<rect x='0' y='307' rx='16' ry='16' width='280' height='83' />
		<rect x='0' y='422' rx='10' ry='10' width='89' height='27' />
		<rect x='120' y='412' rx='10' ry='10' width='150' height='42' />
	</ContentLoader>
);
