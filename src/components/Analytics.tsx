import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { TrendingUp, Mail, Eye, MessageSquare, DollarSign } from 'lucide-react';

const conversionFunnel = [
  { stage: 'Emails Sent', value: 18432, percentage: 100 },
  { stage: 'Emails Opened', value: 14123, percentage: 76.6 },
  { stage: 'Responses', value: 1834, percentage: 13.0 },
  { stage: 'Qualified Leads', value: 892, percentage: 48.6 },
  { stage: 'Quotes Sent', value: 421, percentage: 47.2 },
  { stage: 'Orders Placed', value: 87, percentage: 20.7 },
];

const timeSeriesData = [
  { date: 'Oct 1', sent: 420, opened: 320, replied: 45, orders: 3 },
  { date: 'Oct 3', sent: 510, opened: 390, replied: 52, orders: 4 },
  { date: 'Oct 5', sent: 480, opened: 365, replied: 48, orders: 5 },
  { date: 'Oct 7', sent: 620, opened: 475, replied: 68, orders: 6 },
  { date: 'Oct 9', sent: 580, opened: 445, replied: 61, orders: 4 },
  { date: 'Oct 11', sent: 690, opened: 530, replied: 74, orders: 7 },
  { date: 'Oct 13', sent: 640, opened: 490, replied: 69, orders: 8 },
  { date: 'Oct 15', sent: 720, opened: 550, replied: 82, orders: 9 },
  { date: 'Oct 17', sent: 770, opened: 590, replied: 87, orders: 11 },
];

const industryPerformance = [
  { industry: 'Gym Wear', sent: 7240, opened: 5532, replied: 723, orders: 34, revenue: 48200 },
  { industry: 'Sportswear', sent: 6180, opened: 4702, replied: 612, orders: 29, revenue: 41500 },
  { industry: 'Martial Arts', sent: 5012, opened: 3889, replied: 499, orders: 24, revenue: 37800 },
];

const emailEngagement = [
  { metric: 'Open Rate', value: 76.6, benchmark: 65, color: '#3b82f6' },
  { metric: 'Click Rate', value: 13.2, benchmark: 8, color: '#8b5cf6' },
  { metric: 'Reply Rate', value: 10.0, benchmark: 5, color: '#10b981' },
  { metric: 'Conversion Rate', value: 4.7, benchmark: 2, color: '#f59e0b' },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Analytics & Insights</h2>
          <p className="text-gray-600 text-sm mt-1">Track campaign performance and ROI metrics</p>
        </div>
        <Select defaultValue="30">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
            <SelectItem value="365">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
          <CardDescription>Lead progression through sales stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {conversionFunnel.map((stage, index) => {
              const width = stage.percentage;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-900">{stage.stage}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">{stage.value.toLocaleString()}</span>
                      {index > 0 && (
                        <span className="text-green-600 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {stage.percentage.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-end px-3 text-white text-sm transition-all duration-500"
                      style={{ width: `${width}%` }}
                    >
                      {width > 15 && `${width.toFixed(1)}%`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Time Series Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance Over Time</CardTitle>
          <CardDescription>Daily email engagement metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="sent" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Sent" />
              <Area type="monotone" dataKey="opened" stackId="2" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Opened" />
              <Area type="monotone" dataKey="replied" stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Replied" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Industry Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance by Industry</CardTitle>
          <CardDescription>Campaign results across target sectors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {industryPerformance.map((industry, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-gray-900">{industry.industry}</h4>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-green-600">${industry.revenue.toLocaleString()}</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-900">{industry.sent}</div>
                    <div className="text-xs text-gray-600">Sent</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Eye className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-900">{industry.opened}</div>
                    <div className="text-xs text-gray-600">Opened</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-green-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-900">{industry.replied}</div>
                    <div className="text-xs text-gray-600">Replied</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <DollarSign className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-900">{industry.orders}</div>
                    <div className="text-xs text-gray-600">Orders</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Open Rate: {((industry.opened / industry.sent) * 100).toFixed(1)}%</span>
                  <span className="text-gray-600">Reply Rate: {((industry.replied / industry.sent) * 100).toFixed(1)}%</span>
                  <span className="text-gray-600">Conv. Rate: {((industry.orders / industry.sent) * 100).toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Email Engagement Benchmarks */}
      <Card>
        <CardHeader>
          <CardTitle>Email Engagement vs Industry Benchmarks</CardTitle>
          <CardDescription>Your performance compared to B2B industry averages</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emailEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="metric" stroke="#6b7280" />
              <YAxis stroke="#6b7280" unit="%" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b82f6" name="Your Performance" />
              <Bar dataKey="benchmark" fill="#e5e7eb" name="Industry Benchmark" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
