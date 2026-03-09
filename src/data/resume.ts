export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
}

export interface Project {
    title: string;
    problem: string;
    solution: string;
    technologies: string[];
    image?: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export const experiences: Experience[] = [
    {
        role: 'Systems Analyst',
        company: 'Saint Mary\'s University',
        location: 'Halifax, NS',
        period: 'Sep 2022 – Present',
        bullets: [
            'Lead a cross-functional team of 7 in migrating mission-critical workflows from legacy SAP to Power Automate, automating the daily secure distribution of 100+ institutional documents including contracts, credentials, and student correspondence.',
            'Engineered a real-time runtime observability and logging framework for enterprise-scale automations (1hr+ execution), implementing dynamic state-tracking for execution progress, record counts, and error handling — ensuring 100% auditability and rapid incident response.',
            'Architected ETL pipelines ingesting data from Oracle Cloud DB and legacy Crystal Reports into Microsoft Fabric, establishing a unified data source powering university-wide strategic analytics.',
            'Delivered Power BI Paginated Reports and executive dashboards for government-mandated reporting (Finance, HR), integrating Power BI Gateways to provide real-time insights to institutional stakeholders.',
            'Modernized the DevOps lifecycle by implementing Power Platform deployment pipelines with version control, streamlining the development-to-production workflow with strict environment isolation.',
            'Managed and optimized .NET ASP-based university systems including registration portals and provisioning applications, integrating Oracle databases and Active Directory to ensure continuous uptime.',
            'Designed and deployed an automated payment processing system for Touchnet deposit and application fees to Banner ERP tables using Shell and PL/SQL, integrating with Ellucian CRM SaaS API for identity resolution.',
            'Streamlined migration of 3,000+ legacy records using Python scripting and Uniweb API, achieving zero-data-loss integration into the replacement academic platform.',
            'Built Python automation to process 800+ seasonal instructor evaluation reports using advanced regex pattern matching, eliminating hours of manual data handling per cycle.',
        ],
    },
    {
        role: 'Insurance Analyst',
        company: 'TD Insurance',
        location: 'Halifax, NS',
        period: 'Apr 2021 – Sep 2022',
        bullets: [
            'Eliminated manual bottlenecks in the regional auto-insurance premium pipeline by automating Pro-Rata and Short-Rate calculations with optimized PL/SQL, accelerating underwriting throughput.',
            'Integrated third-party vehicle history systems (Carfax) into policy tracking software using PL/SQL within an Agile team, automating data retrieval and improving underwriting efficiency by 12%.',
            'Conducted data validation and reconciliation between internal systems and external reports, ensuring compliance with corporate, industry, and regulatory standards.',
            'Created a SharePoint-based analytics dashboard linking cross-team sales data for profit projections and performance metrics, providing managers with actionable insights.',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'JJN Appliances',
        location: 'Dartmouth, NS',
        period: 'Sep 2021 – Jan 2022',
        bullets: [
            'Built a full-stack appliance recycling delivery system using JavaScript, Python, Google Apps Script, OptimoRoute API, and AWS (Lambda, S3, RDS, API Gateway), recovering 30+ malfunctioning appliances weekly.',
            'Developed a WPF C# desktop tool for on-demand scraping and storage of appliance parts data from vendor sites into MySQL and local Excel for inventory management.',
            'Applied modular design principles building reusable Next.js UI components — dynamic navigation, responsive menus — reducing development cycles and maintenance overhead.',
        ],
    },
    {
        role: 'Software Developer / Research Assistant',
        company: 'Saint Mary\'s University',
        location: 'Halifax, NS',
        period: 'Jan 2021 – Aug 2021',
        bullets: [
            'Automated mass collection of 200,000 PGN chess games using Selenium and Beautiful Soup, pipelining data to Stockfish engine analysis for Ph.D. research.',
            'Fixed critical e-commerce bugs on a client site (invalid coupons, login errors, miscalculated delivery rates), resulting in a 13% increase in revenue and customer retention.',
        ],
    },
];

export const projects: Project[] = [
    {
        title: 'SAP-to-Microsoft Fabric Cloud Migration',
        problem:
            'The university operated on fragmented legacy SAP workflows with no centralized data platform, causing manual document distribution bottlenecks and siloed analytics across departments.',
        solution:
            'Led a cross-functional team to migrate operations to Power Automate and Microsoft Fabric, automating 100+ daily document distributions, building ETL pipelines from Oracle and Crystal Reports, and delivering real-time Power BI dashboards for government-mandated reporting.',
        technologies: [
            'Microsoft Fabric',
            'Power Automate',
            'Power BI',
            'Oracle Cloud DB',
            'PL/SQL',
            'ETL',
            'Crystal Reports',
        ],
        image: '/projects/arch1.png',
    },
    {
        title: 'Automated Payment Processing System',
        problem:
            'Touchnet deposit and application fee processing required manual intervention to reconcile payments with Banner ERP tables, creating delays and data integrity risks during peak enrollment periods.',
        solution:
            'Designed an end-to-end automated pipeline using Shell and PL/SQL scripts integrated with Ellucian CRM SaaS API for identity resolution, with custom Banner 9 tables for financial data management and enforced referential constraints.',
        technologies: [
            'PL/SQL',
            'Shell',
            'Banner ERP',
            'Ellucian CRM API',
            'Oracle RDBMS',
            'Ellucian Page Builder',
        ],
        image: '/projects/arch2.png',
    },
    {
        title: 'Chess Data Automation Pipeline',
        problem:
            'A Ph.D. researcher needed to analyze hundreds of thousands of chess games with a computational engine, but manual download, upload, and analysis was infeasible at the required scale.',
        solution:
            'Built a multi-stage Python automation using Selenium WebDriver and Beautiful Soup to scrape 200,000 PGN games, pipeline them through Lichess, and store Stockfish engine analysis outputs in structured Excel datasets.',
        technologies: [
            'Python',
            'Selenium',
            'Beautiful Soup',
            'Stockfish',
            'Lichess API',
            'Excel',
        ],
        image: '/projects/arch3.png',
    },
];

export const skills: SkillCategory[] = [
    {
        category: 'Languages & Scripting',
        items: ['Python', 'PL/SQL', 'C#', 'VB.NET', 'PowerShell', 'Java', 'T-SQL'],
    },
    {
        category: 'Data & Cloud',
        items: [
            'AWS (RDS, S3, Lambda, API Gateway, Amplify)',
            'Microsoft Fabric',
            'Power BI',
            'PostgreSQL',
            'Oracle RDBMS',
            'ETL',
        ],
    },
    {
        category: 'Integrations & Web',
        items: ['REST APIs', 'JSON', 'JavaScript', 'HTML5/CSS3', 'Power Automate'],
    },
    {
        category: 'Tools & Environment',
        items: [
            'Jira',
            'Git',
            'Postman',
            'Oracle Toad',
            'DBeaver',
            'Visual Studio',
            'Linux',
            'SharePoint',
            'Visio',
        ],
    },
];

export const education = [
    {
        degree: 'Bachelor of Science – Computer Science',
        institution: 'Saint Mary\'s University, Halifax, NS',
        year: '2021',
    },
    {
        degree: 'Software Engineering Certificate',
        institution: 'Saint Mary\'s University, Halifax, NS',
        year: '2019',
    },
];
