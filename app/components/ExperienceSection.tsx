const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Full-Stack Software Engineer',
			company: 'Sony Pictures Entertainment',
			period: '2022 - Present',
			highlights: 'Developing solutions across teams and divisions using Java, Angular, Python, AWS, Terraform, and industry standard AI technologies/toolsets.',
		},
		{
			role: 'Co-Founder, CTO',
			company: 'Precision Analysis Systems for Sport (PASS)',
			period: '2021 - Present',
			highlights: 'Sole developer of ML-based performance evaluation and team building soccer software licensed to D3 collegiate, club, and high school programs.',
		},
		{
			role: 'Programmer (Contract)',
			company: 'Brimstone Energy',
			period: 'May 2020 - August 2020',
			highlights: 'Migrated MATLAB-based emissions analysis code to Python for faster data visualization. Helped build tools for analyzing soil chemistry and carbon data for sustainable R&D',
		},
				{
			role: 'Analyst and Developer (Pro Bono)',
			company: 'Pakistan Cricket Board',
			period: 'January 2024 - Present',
			highlights: 'Built performance evaluation algorithm and player rankings system for the Pakistan Cricket Board; used to select national team and award domestic contracts.',
		}
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Professional Developer Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
