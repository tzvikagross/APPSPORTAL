
import { PortalFolder } from '../types';

export const mockPortalData: PortalFolder = {
  id: 'root',
  name: 'Home',
  subfolders: [
    {
      id: 'f1',
      name: 'Human Resources',
      subfolders: [
        {
          id: 'f1-1',
          name: 'Payroll & Benefits',
          subfolders: [],
          applications: [
            {
              id: 'app1',
              name: 'Workday',
              description: 'Manage personal profile, paystubs, and time off.',
              link: 'https://workday.com',
              category: 'Finance'
            },
            {
              id: 'app2',
              name: 'Benify',
              description: 'Explore and enroll in employee benefits programs.',
              link: 'https://benify.com',
              category: 'Insurance'
            }
          ]
        },
        {
          id: 'f1-2',
          name: 'Recruitment',
          subfolders: [],
          applications: [
            {
              id: 'app3',
              name: 'Greenhouse',
              description: 'Applicant tracking system and hiring pipeline.',
              link: 'https://greenhouse.io',
              category: 'Talent'
            }
          ]
        }
      ],
      applications: [
        {
          id: 'app4',
          name: 'HR Handbook',
          description: 'Official company policies and guidelines document.',
          link: '#',
          category: 'Documentation'
        }
      ]
    },
    {
      id: 'f2',
      name: 'Engineering',
      subfolders: [
        {
          id: 'f2-1',
          name: 'Cloud Services',
          subfolders: [
            {
              id: 'f2-1-1',
              name: 'AWS Dashboards',
              subfolders: [],
              applications: [
                {
                  id: 'app5',
                  name: 'CloudWatch Metrics',
                  description: 'Real-time performance monitoring for microservices.',
                  link: '#',
                  category: 'Monitoring'
                }
              ]
            }
          ],
          applications: [
            {
              id: 'app6',
              name: 'GCP Console',
              description: 'Access to Google Cloud Platform resources.',
              link: 'https://console.cloud.google.com',
              category: 'Infrastructure'
            }
          ]
        },
        {
          id: 'f2-2',
          name: 'Developer Tools',
          subfolders: [],
          applications: [
            {
              id: 'app7',
              name: 'GitHub Enterprise',
              description: 'Version control and collaboration platform.',
              link: 'https://github.com',
              category: 'Development'
            },
            {
              id: 'app8',
              name: 'Linear',
              description: 'The issue tracker for modern software teams.',
              link: 'https://linear.app',
              category: 'Management'
            }
          ]
        }
      ],
      applications: []
    },
    {
      id: 'f3',
      name: 'Marketing',
      subfolders: [],
      applications: [
        {
          id: 'app9',
          name: 'Canva',
          description: 'Design tool for social media and marketing assets.',
          link: 'https://canva.com',
          category: 'Creative'
        },
        {
          id: 'app10',
          name: 'Buffer',
          description: 'Schedule and manage social media posts.',
          link: 'https://buffer.com',
          category: 'Social'
        }
      ]
    },
    {
      id: 'f4',
      name: 'Internal Tools',
      subfolders: [],
      applications: [
        {
          id: 'app11',
          name: 'Internal Wiki',
          description: 'Central knowledge base for team-specific documentation.',
          link: '#',
          category: 'Knowledge'
        }
      ]
    }
  ],
  applications: [
    {
      id: 'app12',
      name: 'Email Service',
      description: 'Corporate email and calendaring system.',
      link: 'https://outlook.com',
      category: 'Communication'
    },
    {
      id: 'app13',
      name: 'Slack',
      description: 'Real-time messaging and channel-based collaboration.',
      link: 'https://slack.com',
      category: 'Communication'
    }
  ]
};
