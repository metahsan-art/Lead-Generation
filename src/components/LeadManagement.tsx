import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Search, Filter, Upload, Download, Mail, Phone, ExternalLink, Star, Edit } from 'lucide-react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const mockLeads = [
  {
    id: 1,
    email: 'priscilla@beforeyoucollection.com',
    company: 'Before You Collection',
    industry: 'apparel & fashion',
    country: 'United States',
    state: 'Texas',
    city: 'Dallas',
    www: 'http://www.beforeyoucollection.com',
    phone: '+1 404-749-4746',
    firstname: 'Priscilla',
    lastname: 'Suh',
    status: 'New',
    quality: 87,
    lastContact: null,
    companySize: '11',
    companyLinkedin: 'http://www.linkedin.com/company/before-you-collection',
    domain: 'beforeyoucollection.com',
  },
  {
    id: 2,
    email: 'prr@newera.com',
    company: 'NewEra Software, Inc.',
    industry: 'information technology & services',
    country: 'United States',
    state: 'California',
    city: 'San Jose',
    www: 'http://www.newera-info.com',
    phone: '+1 669-888-5061',
    firstname: 'Paul',
    lastname: 'Robichaux',
    status: 'New',
    quality: 82,
    lastContact: null,
    companySize: '13',
    companyLinkedin: 'http://www.linkedin.com/company/newera-software',
    domain: 'newera.com',
  },
  {
    id: 3,
    email: 'pteresi@certificial.com',
    company: 'Certificial',
    industry: 'information technology & services',
    country: 'United States',
    state: 'New Jersey',
    city: 'Closter',
    www: 'http://www.certificial.com',
    phone: '+1 855-967-3090',
    firstname: 'Peter',
    lastname: 'Teresi',
    status: 'New',
    quality: 85,
    lastContact: null,
    companySize: '30',
    companyLinkedin: 'http://www.linkedin.com/company/certificial',
    domain: 'certificial.com',
  },
  {
    id: 4,
    email: 'r.mathison@aquesst.com',
    company: 'aquesst',
    industry: 'information technology & services',
    country: 'United States',
    state: 'Georgia',
    city: 'Atlanta',
    www: 'http://www.aquesst.com',
    phone: '+1 678-242-1350',
    firstname: 'Renata',
    lastname: 'Mathison',
    status: 'New',
    quality: 81,
    lastContact: null,
    companySize: '19',
    companyLinkedin: 'http://www.linkedin.com/company/aquesst',
    domain: 'aquesst.com',
  },
  {
    id: 5,
    email: 'rachel.genn@winnersalliance.com',
    company: 'Winners Alliance',
    industry: 'sports',
    country: 'United States',
    state: 'District of Columbia',
    city: 'Washington',
    www: 'http://www.winnersalliance.com',
    phone: '',
    firstname: 'Rachel',
    lastname: 'Genn',
    status: 'New',
    quality: 88,
    lastContact: null,
    companySize: '31',
    companyLinkedin: 'http://www.linkedin.com/company/winners-alliance',
    domain: 'winnersalliance.com',
  },
  {
    id: 6,
    email: 'rachel@bixbipet.com',
    company: 'BIXBI Pet',
    industry: '',
    country: 'United States',
    state: 'Colorado',
    city: 'Boulder',
    www: 'http://www.bixbipet.com',
    phone: '+1 303-666-1070',
    firstname: 'Rachel',
    lastname: "D'Agostino",
    status: 'New',
    quality: 75,
    lastContact: null,
    companySize: '',
    companyLinkedin: 'http://www.linkedin.com/company/bixbi-pet',
    domain: 'bixbipet.com',
  },
  {
    id: 7,
    email: 'rachel@dgtlmttr.com',
    company: 'Digital Matter',
    industry: 'management consulting',
    country: 'United States',
    state: 'New York',
    city: 'New York',
    www: 'http://www.dgtlmttr.com',
    phone: '+1 917-363-9835',
    firstname: 'Rachel',
    lastname: 'Mack',
    status: 'New',
    quality: 79,
    lastContact: null,
    companySize: '16',
    companyLinkedin: 'http://www.linkedin.com/company/dgtlmttr',
    domain: 'dgtlmttr.com',
  },
  {
    id: 8,
    email: 'radha@daybreaker.com',
    company: 'DAYBREAKER',
    industry: 'events services',
    country: 'United States',
    state: 'New York',
    city: 'New York',
    www: 'http://www.daybreaker.com',
    phone: '+1 917-540-5454',
    firstname: 'Radha',
    lastname: 'Agrawal',
    status: 'New',
    quality: 83,
    lastContact: null,
    companySize: '43',
    companyLinkedin: 'http://www.linkedin.com/company/daybreaker',
    domain: 'daybreaker.com',
  },
  {
    id: 9,
    email: 'randy@trilogyit.com',
    company: 'Trilogy Innovations, Inc.',
    industry: 'information technology & services',
    country: 'United States',
    state: 'West Virginia',
    city: 'Morgantown',
    www: 'http://www.trilogyit.com',
    phone: '+1 304-816-0292',
    firstname: 'Randy',
    lastname: 'Cottle',
    status: 'New',
    quality: 80,
    lastContact: null,
    companySize: '37',
    companyLinkedin: 'http://www.linkedin.com/company/trilogy-innovations',
    domain: 'trilogyit.com',
  },
  {
    id: 10,
    email: 'rayna.wolfman@alliancehealthsystem.com',
    company: 'Alliance Health System',
    industry: 'management consulting',
    country: 'United States',
    state: 'New Jersey',
    city: 'Marlboro Township',
    www: 'http://www.alliancehealthsystem.com',
    phone: '+1 732-307-8560',
    firstname: 'Rayna',
    lastname: 'Wolfman',
    status: 'New',
    quality: 86,
    lastContact: null,
    companySize: '50',
    companyLinkedin: 'http://www.linkedin.com/company/alliance-health-system',
    domain: 'alliancehealthsystem.com',
  },
  {
    id: 11,
    email: 'rblanchette@certificial.com',
    company: 'Certificial',
    industry: 'information technology & services',
    country: 'United States',
    state: 'North Carolina',
    city: '',
    www: 'http://www.certificial.com',
    phone: '+1 855-967-3090',
    firstname: 'Rob',
    lastname: 'Blanchette',
    status: 'New',
    quality: 84,
    lastContact: null,
    companySize: '30',
    companyLinkedin: 'http://www.linkedin.com/company/certificial',
    domain: 'certificial.com',
  },
  {
    id: 12,
    email: 'rburns@rogerslowell.com',
    company: 'Rogers Lowell Chamber',
    industry: 'nonprofit organization management',
    country: 'United States',
    state: 'Arkansas',
    city: 'Rogers',
    www: 'http://www.rogerslowell.com',
    phone: '+1 479-636-1240',
    firstname: 'Raymond',
    lastname: 'Burns',
    status: 'New',
    quality: 77,
    lastContact: null,
    companySize: '28',
    companyLinkedin: 'http://www.linkedin.com/company/rogers-lowell-chamber',
    domain: 'rogerslowell.com',
  },
  {
    id: 13,
    email: 'rdahnert@plymold.com',
    company: 'Plymold',
    industry: 'furniture',
    country: 'United States',
    state: 'Minnesota',
    city: 'Minneapolis',
    www: 'http://www.plymold.com',
    phone: '+1 507-789-8333',
    firstname: 'Ryan',
    lastname: 'Dahnert',
    status: 'New',
    quality: 82,
    lastContact: null,
    companySize: '42',
    companyLinkedin: 'http://www.linkedin.com/company/plymold-seating',
    domain: 'plymold.com',
  },
  {
    id: 14,
    email: 'regina.pruitt@cotefamily.com',
    company: 'Cote Hospitality',
    industry: 'hospitality',
    country: 'United States',
    state: 'Minnesota',
    city: 'Minneapolis',
    www: 'http://www.cotehospitality.com',
    phone: '+1 218-963-8762',
    firstname: 'Regina',
    lastname: 'P.',
    status: 'New',
    quality: 78,
    lastContact: null,
    companySize: '19',
    companyLinkedin: 'http://www.linkedin.com/company/cote-hospitality',
    domain: 'cotefamily.com',
  },
  {
    id: 15,
    email: 'reginas@beetalentsolutions.com',
    company: 'Bee Talent Solutions',
    industry: 'staffing & recruiting',
    country: 'United States',
    state: 'Washington',
    city: 'Seattle',
    www: 'http://www.beetalentsolutions.com',
    phone: '+1 425-638-2957',
    firstname: 'Regina',
    lastname: 'Sperry',
    status: 'New',
    quality: 85,
    lastContact: null,
    companySize: '50',
    companyLinkedin: 'http://www.linkedin.com/company/beetalent-solutions',
    domain: 'beetalentsolutions.com',
  },
  {
    id: 16,
    email: 'reout@kallati.com',
    company: 'KALLATI Jewelry',
    industry: 'retail',
    country: 'United States',
    state: 'New York',
    city: 'New York',
    www: 'http://www.kallati.com',
    phone: '+1 516-466-0035',
    firstname: 'Reout',
    lastname: 'Kallati',
    status: 'New',
    quality: 83,
    lastContact: null,
    companySize: '45',
    companyLinkedin: 'http://www.linkedin.com/company/kallati™',
    domain: 'kallati.com',
  },
  {
    id: 17,
    email: 'rferretti@pursuit.group',
    company: 'Ferretti Search',
    industry: 'staffing & recruiting',
    country: 'United States',
    state: 'North Carolina',
    city: 'Charlotte',
    www: 'http://www.ferrettisearch.com',
    phone: '+1 704-612-2900',
    firstname: 'Rick',
    lastname: 'Ferretti',
    status: 'New',
    quality: 81,
    lastContact: null,
    companySize: '26',
    companyLinkedin: 'http://www.linkedin.com/company/ferrettisearch',
    domain: 'pursuit.group',
  },
  {
    id: 18,
    email: 'rfortman@mysoftwaresolutions.com',
    company: 'Software Solutions Inc.',
    industry: 'information technology & services',
    country: 'United States',
    state: 'Ohio',
    city: 'Dayton',
    www: 'http://www.mysoftwaresolutions.com',
    phone: '+1 800-686-9578',
    firstname: 'Rick',
    lastname: 'Fortman',
    status: 'New',
    quality: 84,
    lastContact: null,
    companySize: '47',
    companyLinkedin: 'http://www.linkedin.com/company/www-mysoftwaresolutions-com',
    domain: 'mysoftwaresolutions.com',
  },
  {
    id: 19,
    email: 'rgajewski@truscottrossman.com',
    company: 'Truscott Rossman',
    industry: 'public relations & communications',
    country: 'United States',
    state: 'Michigan',
    city: 'Grand Rapids',
    www: 'http://www.truscottrossman.com',
    phone: '+1 517-487-9320',
    firstname: 'Ryan',
    lastname: 'Gajewski',
    status: 'New',
    quality: 80,
    lastContact: null,
    companySize: '33',
    companyLinkedin: 'http://www.linkedin.com/company/truscott-rossman',
    domain: 'truscottrossman.com',
  },
  {
    id: 20,
    email: 'rgarger@nextpathcp.com',
    company: 'NextPath Career Partners',
    industry: 'staffing & recruiting',
    country: 'United States',
    state: 'Florida',
    city: '',
    www: 'http://www.nextpathcp.com',
    phone: '+1 800-869-2353',
    firstname: 'Rebecca',
    lastname: 'Garger',
    status: 'New',
    quality: 83,
    lastContact: null,
    companySize: '43',
    companyLinkedin: 'http://www.linkedin.com/company/nextpathcp',
    domain: 'nextpathcp.com',
  },
];

const statusColors: Record<string, string> = {
  'New': 'bg-gray-100 text-gray-800',
  'Contacted': 'bg-blue-100 text-blue-800',
  'Interested': 'bg-yellow-100 text-yellow-800',
  'Quote Requested': 'bg-purple-100 text-purple-800',
  'Order Placed': 'bg-green-100 text-green-800',
  'Not Interested': 'bg-red-100 text-red-800',
};

export function LeadManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedLead, setSelectedLead] = useState<typeof mockLeads[0] | null>(null);

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = 
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.lastname.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filterIndustry === 'all' || lead.industry === filterIndustry;
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    
    return matchesSearch && matchesIndustry && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search leads by name, company, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import CSV
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label>Industry</Label>
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="gym wear">Gym Wear</SelectItem>
                  <SelectItem value="sportswear">Sportswear</SelectItem>
                  <SelectItem value="martial arts">Martial Arts</SelectItem>
                  <SelectItem value="apparel & fashion">Apparel & Fashion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Contacted">Contacted</SelectItem>
                  <SelectItem value="Interested">Interested</SelectItem>
                  <SelectItem value="Quote Requested">Quote Requested</SelectItem>
                  <SelectItem value="Order Placed">Order Placed</SelectItem>
                  <SelectItem value="Not Interested">Not Interested</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Leads ({filteredLeads.length})</CardTitle>
          <CardDescription>Manage and track your B2B contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Quality</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div>
                        <div className="text-gray-900">{lead.firstname} {lead.lastname}</div>
                        <div className="text-sm text-gray-600">{lead.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-gray-900">{lead.company}</div>
                        {lead.www && (
                          <a href={lead.www} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                            Website <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{lead.industry}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="text-gray-900">{lead.city}, {lead.state}</div>
                        <div className="text-gray-600">{lead.country}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${lead.quality >= 90 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                        <span className="text-gray-900">{lead.quality}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[lead.status]}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedLead(lead)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Lead Details</DialogTitle>
                              <DialogDescription>
                                View and manage lead information
                              </DialogDescription>
                            </DialogHeader>
                            {selectedLead && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>First Name</Label>
                                    <Input defaultValue={selectedLead.firstname} />
                                  </div>
                                  <div>
                                    <Label>Last Name</Label>
                                    <Input defaultValue={selectedLead.lastname} />
                                  </div>
                                </div>
                                <div>
                                  <Label>Email</Label>
                                  <Input defaultValue={selectedLead.email} />
                                </div>
                                <div>
                                  <Label>Company</Label>
                                  <Input defaultValue={selectedLead.company} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Phone</Label>
                                    <Input defaultValue={selectedLead.phone} />
                                  </div>
                                  <div>
                                    <Label>Website</Label>
                                    <Input defaultValue={selectedLead.www} />
                                  </div>
                                </div>
                                <div>
                                  <Label>Status</Label>
                                  <Select defaultValue={selectedLead.status}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="New">New</SelectItem>
                                      <SelectItem value="Contacted">Contacted</SelectItem>
                                      <SelectItem value="Interested">Interested</SelectItem>
                                      <SelectItem value="Quote Requested">Quote Requested</SelectItem>
                                      <SelectItem value="Order Placed">Order Placed</SelectItem>
                                      <SelectItem value="Not Interested">Not Interested</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label>Notes</Label>
                                  <Textarea placeholder="Add notes about this lead..." rows={4} />
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button className="flex-1">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                  </Button>
                                  <Button variant="outline">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`mailto:${lead.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}