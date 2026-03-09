'use client';

import AnimateOnScroll from './AnimateOnScroll';

const experienceEntries = [
    {
        role: 'Systems Analyst',
        company: 'Saint Mary\'s University',
        location: 'Halifax, NS',
        period: 'Sep 2022 – Present',
        summary:
            'Led a cross-functional engineering team to architect and maintain enterprise-grade ETL pipelines, directing the institutional migration from legacy SAP environments to Microsoft Fabric and Power Automate. Built a real-time observability framework to securely distribute 250+ high-compliance documents daily while establishing a unified data source for strategic institutional analytics.',
    },
    {
        role: 'Insurance Analyst',
        company: 'TD Insurance',
        location: 'Halifax, NS',
        period: 'Apr 2021 – Sep 2022',
        summary:
            'Engineered PL/SQL automation scripts that eliminated manual underwriting bottlenecks in the regional auto-insurance pipeline. Integrated third-party data APIs into core tracking software within an Agile environment, significantly accelerating underwriting throughput and ensuring strict regulatory compliance.',
    },
    {
        role: 'Software Engineer',
        company: 'JJN Appliances',
        location: 'Dartmouth, NS',
        period: 'Sep 2021 – Jan 2022',
        summary:
            'Developed a full-stack recycling delivery system and dynamic inventory management tools utilizing JavaScript, Python, and AWS serverless architecture (Lambda, API Gateway, S3).',
    },
    {
        role: 'Software Developer / Research Assistant',
        company: 'Saint Mary\'s University',
        location: 'Halifax, NS',
        period: 'Jan 2021 – Aug 2021',
        summary:
            'Built automated data extraction pipelines using Python (Selenium, Beautiful Soup) to scrape, process, and analyze 200,000+ records for computational Ph.D. research, directly feeding into structured datasets for algorithmic evaluation.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6" aria-labelledby="experience-heading">
            <div className="mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2
                        id="experience-heading"
                        className="text-2xl font-bold tracking-tight text-primary-light sm:text-3xl"
                    >
                        Experience
                    </h2>
                    <div className="mt-2 h-0.5 w-12 bg-accent-teal" aria-hidden="true" />
                </AnimateOnScroll>

                <div className="mt-12 space-y-0">
                    {experienceEntries.map((exp, idx) => (
                        <AnimateOnScroll key={idx} delay={idx * 0.12}>
                            <div className="relative pl-8 pb-16 last:pb-0">
                                {/* Timeline line */}
                                {idx < experienceEntries.length - 1 && (
                                    <div
                                        className="absolute left-[5px] top-3 bottom-0 w-px bg-deep-grey"
                                        aria-hidden="true"
                                    />
                                )}
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-accent-teal bg-primary-navy timeline-dot-pulse"
                                    aria-hidden="true"
                                />

                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                        <h3 className="text-lg font-semibold text-primary-light">
                                            {exp.role}
                                            <span className="font-normal text-muted"> — {exp.company}</span>
                                        </h3>
                                        <span className="text-sm text-muted whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <p className="mt-0.5 text-sm text-muted">{exp.location}</p>

                                    <p className="mt-4 mb-8 text-sm leading-relaxed text-muted">
                                        {exp.summary}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
