const ProjectSection = () => {
	const experiences = [
		{
			project: 'Cricket Analytics Platform',
			company: 'Pakistan Cricket Board',
			period: '2022 - Present',
			projectDescription1: 'Designed and developed analytics software used by the PCB Selection Committee for national team selection and awarding domestic contracts | Built performance modeling, match filtering, and player valuation tools in collaboration with the PCB analytics team using Python, Pandas, and Streamlit.',
			projectDescription2: 'Built performance modeling, match filtering, and player valuation tools in collaboration with the PCB analytics team using Python, Pandas, and Streamlit.',

        },
		{
			project: 'Sports Performance Analytics Engine and Platform',
			company: 'Precision Analysis Systems for Sport (PASS)',
			period: '2021 - Present',
			projectDescription1: '- Developed a predictive analytics model and player tracking system, and accompanying analytics web app for D3, club, and high school soccer teams.',
			projectDescription2: '- Built a full-stack web application with Flask, SQL, proprietary ML models to evaluate and improve athlete performance.',
			projectDescription3: '- Developed and implemented a fully-automated data ingestion and extraction system using YOLO to create a self-sustaining data platform.',

        },
		{
			project: 'Talent and Project Acquisition Database Application',
			company: 'Sony Pictures	Entertainment',
			period: '2025',
			projectDescription1: "Developed and deployed an automated database solution to parse casting and production documents, track talent data, and match talent to relevant productions for SPE's Post Sound team.",
            projectDescription2: 'Built using Python, GPT integration, JavaScript, and the Airtable platform.',
            projectDescription3: 'Integrated IMDb API and automated data ingestion, reducing manual effort by more than 80%'
		},
        {
			project: 'Production Management Application',
			company: 'Sony Pictures Entertainment',
			period: '2024',
			projectDescription1: "Part of team developing Java and Angular-based calendaring/task-management system used across SPE's Motion Pictures and Television divisions.",
            projectDescription2: 'Enhanced user access control via custom production scheduling/management features'
		},
        {
			project: 'Internal Production Finance Chat Bot',
			company: 'Sony Pictures Entertainment',
			period: '2025',
			projectDescription1: "Utilized internal SPE LLM to build a chat bot system for quantitative analysis and document breakdown for SPE Production Finance teams."
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Select Professional Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.project}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
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
