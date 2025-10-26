import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Mail, Clock, CheckCircle, XCircle, FileText, Send, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

const responses = [
  {
    id: 1,
    from: 'john.smith@gymwearplus.com',
    company: 'GymWear Plus',
    subject: 'Re: Premium Gym Wear Manufacturing Partnership',
    preview: 'Thank you for reaching out! We are indeed looking for a reliable manufacturing partner...',
    received: '2025-10-17 09:23',
    sentiment: 'Positive',
    category: 'Interested',
    status: 'New',
  },
  {
    id: 2,
    from: 'sarah.chen@martialartsco.com',
    company: 'Martial Arts Co',
    subject: 'Re: Custom Martial Arts Uniforms',
    preview: 'We would like to request a quote for 5000 units. Could you please send your catalog and pricing?',
    received: '2025-10-17 10:45',
    sentiment: 'Positive',
    category: 'Quote Request',
    status: 'New',
  },
  {
    id: 3,
    from: 'emma@activewearau.com',
    company: 'ActiveWear Australia',
    subject: 'Re: Partnership Opportunity',
    preview: 'We are very interested! When would be a good time for a call to discuss this further?',
    received: '2025-10-16 14:12',
    sentiment: 'Positive',
    category: 'Call Request',
    status: 'Responded',
  },
  {
    id: 4,
    from: 'contact@sportsgear.de',
    company: 'SportsGear Deutschland',
    subject: 'Re: Sportswear Manufacturing',
    preview: 'Thank you for your email. At this time, we are satisfied with our current supplier.',
    received: '2025-10-16 11:30',
    sentiment: 'Negative',
    category: 'Not Interested',
    status: 'Closed',
  },
];

const sentimentColors: Record<string, string> = {
  'Positive': 'bg-green-100 text-green-800',
  'Neutral': 'bg-gray-100 text-gray-800',
  'Negative': 'bg-red-100 text-red-800',
};

const categoryColors: Record<string, string> = {
  'Interested': 'bg-blue-100 text-blue-800',
  'Quote Request': 'bg-purple-100 text-purple-800',
  'Call Request': 'bg-yellow-100 text-yellow-800',
  'Not Interested': 'bg-red-100 text-red-800',
};

export function ResponseHandler() {
  const [selectedResponse, setSelectedResponse] = useState(responses[0]);
  const [replyText, setReplyText] = useState('');

  const newResponses = responses.filter(r => r.status === 'New');
  const respondedResponses = responses.filter(r => r.status === 'Responded');

  const handleAiSuggestion = () => {
    const suggestions: Record<string, string> = {
      'Interested': `Hi ${selectedResponse.from.split('@')[0]},\n\nThank you for your interest in partnering with us! I'm excited to learn more about your needs.\n\nI've attached our comprehensive product catalog and pricing guide. We specialize in high-quality manufacturing with competitive rates and flexible MOQ options.\n\nWould you be available for a brief call this week to discuss your specific requirements?\n\nBest regards`,
      'Quote Request': `Hi ${selectedResponse.from.split('@')[0]},\n\nThank you for your inquiry! I'm pleased to provide you with a customized quote.\n\nPlease find attached:\n- Complete product catalog\n- Pricing sheet for 5000 units\n- MOQ details and bulk discounts\n- Estimated delivery timeline\n\nI'm happy to answer any questions or adjust the quote based on your specific needs.\n\nBest regards`,
      'Call Request': `Hi ${selectedResponse.from.split('@')[0]},\n\nI'd be delighted to schedule a call with you!\n\nI'm available:\n- Tomorrow at 2:00 PM or 4:00 PM\n- Thursday at 10:00 AM or 3:00 PM\n\nPlease let me know what works best for you, or feel free to suggest an alternative time. We can connect via Zoom, WhatsApp, or phone - whatever is most convenient for you.\n\nLooking forward to our conversation!\n\nBest regards`,
    };

    setReplyText(suggestions[selectedResponse.category] || '');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Responses</p>
                <p className="text-gray-900 mt-1">{newResponses.length}</p>
              </div>
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Awaiting Reply</p>
                <p className="text-gray-900 mt-1">{respondedResponses.length}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-gray-900 mt-1">2.4 hours</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Response List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
            <CardDescription>Recent email responses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {responses.map((response) => (
              <div
                key={response.id}
                onClick={() => setSelectedResponse(response)}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedResponse.id === response.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-900 truncate">{response.company}</div>
                    <div className="text-xs text-gray-600 truncate">{response.from}</div>
                  </div>
                  {response.status === 'New' && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1"></div>
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-2 line-clamp-2">{response.preview}</div>
                <div className="flex items-center gap-2">
                  <Badge className={sentimentColors[response.sentiment]} variant="secondary">
                    {response.sentiment}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Response Details & Reply */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{selectedResponse.company}</CardTitle>
                <CardDescription>{selectedResponse.from}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className={categoryColors[selectedResponse.category]}>
                  {selectedResponse.category}
                </Badge>
                <Badge className={sentimentColors[selectedResponse.sentiment]}>
                  {selectedResponse.sentiment}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">Subject: {selectedResponse.subject}</div>
              <div className="text-xs text-gray-500 mb-4">Received: {selectedResponse.received}</div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-900">{selectedResponse.preview}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <Label>Your Reply</Label>
                <Button size="sm" variant="outline" onClick={handleAiSuggestion}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Suggestion
                </Button>
              </div>
              
              <Textarea
                placeholder="Write your response..."
                rows={8}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />

              <div className="mt-4">
                <Label>Attach Documents</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select documents to attach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="catalog">Product Catalog PDF</SelectItem>
                    <SelectItem value="pricing">Pricing Sheet</SelectItem>
                    <SelectItem value="moq">MOQ & Delivery Info</SelectItem>
                    <SelectItem value="intro">Company Introduction</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2 mt-4">
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </Button>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button variant="outline">Schedule Follow-up</Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t pt-4">
              <Label>Quick Actions</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Button variant="outline" size="sm">Send Catalog</Button>
                <Button variant="outline" size="sm">Request Call</Button>
                <Button variant="outline" size="sm">Send Quote</Button>
                <Button variant="outline" size="sm">Schedule Meeting</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
