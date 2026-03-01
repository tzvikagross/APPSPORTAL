
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
          name: 'Payroll',
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
          name: 'Accounting',
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
          name: 'Admin',
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
              link: '/assets/master gen.xlsm',
              category: 'Funds'
            }
          ]
        }
      ],
      applications: [
        {
          id: 'fund.BDOsystem',
              name: 'BDO Fund System',
              description: 'BDO Fund System',
              link: 'https://bdo-funds.co.il/funds',
              category: 'Funds'
        }
      ]
    },
    {
      id: 'root.links',
      name: 'Useful Links',
      subfolders: [],
      applications: [
            {
              id: 'links.roc',
              name: 'רשם החברות',
              description: 'חיפוש חברה לפי שם או חפ',
              link: 'https://ica.justice.gov.il/GenericCorporarionInfo/SearchCorporation?unit=8',
              category: 'Links'
            },
            {
              id: 'links.wht',
              name: 'ניכוי מס במקור',
              description: ' אישור ניכוי במקור לחברה',
              link: 'https://taxinfo.taxes.gov.il/gmishurim/firstPage.aspx',
              category: 'Links'
            }
          ]
    }
    
  ],
  applications: []
};
