const ProjectSection = () => {
	const experiences = [
		{
			project: 'Dungeon and Dragons Companion Application',
			period: '2025',
			projectDescription1: 'Designed and developed analytics software used by the PCB Selection Committee for national team selection and awarding domestic contracts | Built performance modeling, match filtering, and player valuation tools in collaboration with the PCB analytics team using Python, Pandas, and Streamlit.',
			projectDescription2: 'Built performance modeling, match filtering, and player valuation tools in collaboration with the PCB analytics team using Python, Pandas, and Streamlit.',

        },
		{
			project: 'Dungeons and Dragons 2D Fighting Game',
			period: 'In Development',
			projectDescription1: '- Developed a predictive analytics model and player tracking system, and accompanying analytics web app for D3, club, and high school soccer teams.',
			projectDescription2: '- Built a full-stack web application with Flask, SQL, proprietary ML models to evaluate and improve athlete performance.',
			projectDescription3: '- Developed and implemented a fully-automated data ingestion and extraction system using YOLO to create a self-sustaining data platform.',

        }
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Select Personal Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.project} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.project}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.projectDescription1}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.projectDescription2}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.projectDescription3}</p>

								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
