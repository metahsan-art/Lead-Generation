import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Database, Mail, Zap, FileText, Bell, User } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Settings</h2>
        <p className="text-gray-600 text-sm mt-1">Configure your lead generation system</p>
      </div>

      <Tabs defaultValue="data">
        <TabsList>
          <TabsTrigger value="data">Data Sources</TabsTrigger>
          <TabsTrigger value="email">Email Config</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Source Configuration
              </CardTitle>
              <CardDescription>Configure connections to lead data sources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="text-gray-900">Google Sheets Integration</h4>
                    <p className="text-sm text-gray-600 mt-1">Sync leads with Google Sheets database</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Google Sheet URL</Label>
                  <Input placeholder="https://docs.google.com/spreadsheets/d/..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Sheet Name</Label>
                    <Input defaultValue="Leads" />
                  </div>
                  <div className="space-y-2">
                    <Label>Sync Frequency</Label>
                    <Select defaultValue="hourly">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="15min">Every 15 minutes</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <h4 className="text-gray-900">Scraping Sources</h4>
                <div className="space-y-2">
                  {['Amazon', 'Alibaba', 'Google Maps', 'LinkedIn', 'WhatsApp Links'].map((source) => (
                    <div key={source} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900">{source}</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <Button>Save Data Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Configuration
              </CardTitle>
              <CardDescription>Set up your email sending preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Sender Name</Label>
                  <Input defaultValue="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <Label>Sender Email</Label>
                  <Input type="email" defaultValue="contact@yourcompany.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Reply-To Email</Label>
                <Input type="email" defaultValue="sales@yourcompany.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Daily Send Limit</Label>
                  <Input type="number" defaultValue="500" />
                  <p className="text-xs text-gray-500">Maximum emails per day to avoid spam filters</p>
                </div>
                <div className="space-y-2">
                  <Label>Send Delay (seconds)</Label>
                  <Input type="number" defaultValue="30" />
                  <p className="text-xs text-gray-500">Delay between each email</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Email Signature</Label>
                <Textarea
                  defaultValue="Best regards,&#10;[Your Name]&#10;[Your Title]&#10;[Company Name]&#10;[Contact Info]"
                  rows={5}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-gray-900">Track Email Opens</h4>
                  <p className="text-sm text-gray-600 mt-1">Add tracking pixel to emails</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-gray-900">Track Link Clicks</h4>
                  <p className="text-sm text-gray-600 mt-1">Monitor which links are clicked</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>Save Email Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                AI & Automation Rules
              </CardTitle>
              <CardDescription>Configure automated workflows and AI features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-gray-900">Auto-categorize Responses</h4>
                  <p className="text-sm text-gray-600 mt-1">AI analyzes and categorizes incoming emails</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-gray-900">Sentiment Analysis</h4>
                  <p className="text-sm text-gray-600 mt-1">Detect positive, neutral, or negative sentiment</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-gray-900">Lead Quality Scoring</h4>
                  <p className="text-sm text-gray-600 mt-1">AI scores leads based on engagement and metadata</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="border-t pt-4 space-y-4">
                <h4 className="text-gray-900">Follow-up Automation</h4>
                
                <div className="space-y-2">
                  <Label>Follow-up Delay (hours)</Label>
                  <Input type="number" defaultValue="72" />
                  <p className="text-xs text-gray-500">Time to wait before sending follow-up to non-responders</p>
                </div>

                <div className="space-y-2">
                  <Label>Maximum Follow-ups</Label>
                  <Select defaultValue="2">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 follow-up</SelectItem>
                      <SelectItem value="2">2 follow-ups</SelectItem>
                      <SelectItem value="3">3 follow-ups</SelectItem>
                      <SelectItem value="4">4 follow-ups</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="text-gray-900">Auto-send Follow-ups</h4>
                    <p className="text-sm text-gray-600 mt-1">Automatically send follow-up emails</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <h4 className="text-gray-900">Auto-attach Documents</h4>
                
                <div className="space-y-2">
                  {[
                    { label: 'Send catalog on first interested response', doc: 'Product Catalog' },
                    { label: 'Send pricing on quote request', doc: 'Pricing Sheet' },
                    { label: 'Send company intro on initial contact', doc: 'Company Intro' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="text-sm text-gray-900">{item.label}</div>
                        <div className="text-xs text-gray-600 mt-1">
                          <FileText className="w-3 h-3 inline mr-1" />
                          {item.doc}
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <Button>Save Automation Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose when to receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {[
                  'New positive response received',
                  'Quote request received',
                  'Call/meeting requested',
                  'Order placed',
                  'Campaign completed',
                  'Daily performance summary',
                  'Weekly analytics report',
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-gray-900">{notification}</span>
                    <Switch defaultChecked={index < 4} />
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <h4 className="text-gray-900">Notification Channels</h4>
                
                <div className="space-y-2">
                  <Label>Email Notifications To</Label>
                  <Input type="email" defaultValue="admin@yourcompany.com" />
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-gray-900">Browser Push Notifications</span>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
