import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Mail, Send, Users, Eye, MessageSquare, Plus, Calendar, Zap } from 'lucide-react';

const activeCampaigns = [
  {
    id: 1,
    name: 'Q4 Gym Wear Outreach',
    subject: 'Premium Gym Wear Manufacturing - Special Q4 Rates',
    status: 'Active',
    sent: 1240,
    opened: 892,
    replied: 127,
    created: '2025-10-10',
    industry: 'Gym Wear',
  },
  {
    id: 2,
    name: 'Martial Arts Apparel Campaign',
    subject: 'Custom Martial Arts Uniforms - Your Reliable Partner',
    status: 'Active',
    sent: 627,
    opened: 451,
    replied: 89,
    created: '2025-10-12',
    industry: 'Martial Arts',
  },
  {
    id: 3,
    name: 'Sportswear Follow-up Series',
    subject: 'Re: Partnership Opportunity in Sportswear Manufacturing',
    status: 'Scheduled',
    sent: 0,
    opened: 0,
    replied: 0,
    created: '2025-10-15',
    industry: 'Sportswear',
  },
];

const emailTemplates = [
  {
    id: 1,
    name: 'Initial Outreach',
    subject: 'Premium {Industry} Manufacturing Partnership',
    preview: 'Hi {Firstname}, I noticed {Company} specializes in quality apparel...',
  },
  {
    id: 2,
    name: 'Follow-up - No Response',
    subject: 'Following up: Partnership Opportunity',
    preview: 'Hi {Firstname}, I wanted to follow up on my previous email...',
  },
  {
    id: 3,
    name: 'Catalog Share',
    subject: 'Our Complete Product Catalog & Pricing',
    preview: 'Hi {Firstname}, As requested, please find attached our full catalog...',
  },
];

export function CampaignManager() {
  const [activeTab, setActiveTab] = useState('campaigns');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Email Campaigns</h2>
          <p className="text-gray-600 text-sm mt-1">Create, manage, and track your outreach campaigns</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          {activeCampaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{campaign.name}</CardTitle>
                    <CardDescription className="mt-1">{campaign.subject}</CardDescription>
                  </div>
                  <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-gray-900">{campaign.sent}</div>
                      <div className="text-sm text-gray-600">Sent</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Eye className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                      <div className="text-gray-900">{campaign.opened}</div>
                      <div className="text-sm text-gray-600">Opened</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-green-600 mx-auto mb-2" />
                      <div className="text-gray-900">{campaign.replied}</div>
                      <div className="text-sm text-gray-600">Replied</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                      <div className="text-gray-900">
                        {campaign.sent > 0 ? ((campaign.replied / campaign.sent) * 100).toFixed(1) : 0}%
                      </div>
                      <div className="text-sm text-gray-600">Conv. Rate</div>
                    </div>
                  </div>

                  {campaign.sent > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Open Rate</span>
                        <span className="text-gray-900">{((campaign.opened / campaign.sent) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={(campaign.opened / campaign.sent) * 100} />
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Created {campaign.created}
                    <span className="mx-2">•</span>
                    <Badge variant="outline">{campaign.industry}</Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="outline">Edit</Button>
                    {campaign.status === 'Active' && (
                      <Button size="sm" variant="outline">Pause</Button>
                    )}
                    {campaign.status === 'Scheduled' && (
                      <Button size="sm">
                        <Send className="w-4 h-4 mr-2" />
                        Launch Now
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up a new email outreach campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Campaign Name</Label>
                <Input placeholder="e.g., Q4 Sportswear Outreach" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Target Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gym">Gym Wear</SelectItem>
                      <SelectItem value="sports">Sportswear</SelectItem>
                      <SelectItem value="martial">Martial Arts</SelectItem>
                      <SelectItem value="all">All Industries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Target Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="all">All Countries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Email Template</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {emailTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id.toString()}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Subject Line</Label>
                <Input placeholder="Premium Manufacturing Partnership Opportunity" />
                <p className="text-sm text-gray-500 mt-1">
                  Use variables: {'{Firstname}'}, {'{Company}'}, {'{Industry}'}
                </p>
              </div>

              <div>
                <Label>Email Body</Label>
                <Textarea
                  placeholder="Hi {Firstname},&#10;&#10;I hope this email finds you well. I'm reaching out from [Your Company] regarding a potential partnership opportunity..."
                  rows={8}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Send Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When to send" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Send Immediately</SelectItem>
                      <SelectItem value="scheduled">Schedule for Later</SelectItem>
                      <SelectItem value="drip">Drip Campaign (3 days apart)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Estimated Recipients</Label>
                  <Input value="847 contacts" disabled />
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Launch Campaign
                </Button>
                <Button variant="outline">Save as Draft</Button>
                <Button variant="outline">
                  <Zap className="w-4 h-4 mr-2" />
                  AI Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          {emailTemplates.map((template) => (
            <Card key={template.id}>
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.subject}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{template.preview}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Use Template</Button>
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Preview</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Create New Template
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
