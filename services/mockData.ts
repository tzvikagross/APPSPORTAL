
import { PortalFolder } from '../types';

export const mockPortalData: PortalFolder = {
  id: 'root',
  name: 'FSO PORTAL',
  subfolders: [
    {
      id: 'root.apps',
      name: 'Applications',
      subfolders: [
        {
          id: 'root.apps.payroll',
          name: 'Payroll & Employement',
          subfolders: [],
          applications: [
            {
              id: 'payrol.control',
              name: 'בקרת שכר',
              description: 'קובץ אקסל לבקרת שכר',
              link: '/assets/PayrollItemsControll.xlsx',
              category: 'Payroll'
            },
            {
              id: 'payrol.G2N',
              name: 'G2N Generator',
              description: 'הכנה של קובץ G2N',
              link: 'https://benify.com',
              category: 'Payroll'
            }
          ]
        },
        {
          id: 'root.apps.accounting',
          name: 'Accounting and Controller',
          subfolders: [],
          applications: [
            {
              id: 'accounting.special',
              name: 'Special Reports',
              description: 'Manage Special Reports',
              link: 'https://apps.powerapps.com/play/e/default-3c054339-d6c2-4bdc-b99e-4aeb43de91ec/a/193d7052-94b5-44aa-8160-cbc7e7391faa?tenantId=3c054339-d6c2-4bdc-b99e-4aeb43de91ec&hint=f70ced99-e6ec-46ce-a540-7af1467de7ab&sourcetime=1710230923529&source=portal',
              category: 'Accounting'
            },{
              id: 'accounting.options',
              name: 'SBC Amortization',
              description: 'Calculate period amortization of SBC',
              link: '/assets/Option amortization model.xlsm',
              category: 'Accounting'
            },{
              id: 'accounting.invoice',
              name: 'Priority Invoice Generation',
              description: 'Invoice generation for Performance Energy',
              link: '/assets/Priority Invoice XML generation.xlsm',
              category: 'Accounting'
            }
          ]
        },
        {
          id: 'root.apps.admin',
          name: 'Admin and backoffice',
          subfolders: [],
          applications: [
            {
              id: 'admin.billing',
              name: 'Monthly Billing',
              description: 'Generate Monthly Invoices',
              link: '/assets/invoice Generator.xlsm',
              category: 'Admin'
            },{
              id: 'admin.proforma',
              name: 'Proforma Invoice',
              description: 'Show Clients Proforma Invoice',
              link: 'bdonet/invoices/InvoicePrint.aspx?invoiceid=123456',
              category: 'Admin'
            }
          ]
        },
        {
          id: 'root.apps.fund',
          name: 'Fund Administration Services',
          subfolders: [],
          applications: [
            {
              id: 'fund.BDO',
              name: 'BDO Fund System',
              description: 'BDO Fund System',
              link: 'https://bdo-funds.co.il/funds',
              category: 'Funds'
            },{
              id: 'fund.distribute',
              name: 'Document Generator',
              description: 'BDO Document Distribution System',
              link: 'https://bdo-funds.co.il/funds',
              category: 'Funds'
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
