import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Users, Mail, DollarSign, Target, Database, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const kpiData = [
  { label: 'Total Leads', value: '2,847', change: '+12.5%', trend: 'up', icon: Users, color: 'text-blue-600' },
  { label: 'Emails Sent', value: '18,432', change: '+8.2%', trend: 'up', icon: Mail, color: 'text-purple-600' },
  { label: 'Positive Responses', value: '1,234', change: '+15.3%', trend: 'up', icon: CheckCircle, color: 'text-green-600' },
  { label: 'Confirmed Orders', value: '$127,500', change: '+22.7%', trend: 'up', icon: DollarSign, color: 'text-emerald-600' },
];

const campaignPerformance = [
  { name: 'Week 1', sent: 2400, opened: 1800, replied: 400 },
  { name: 'Week 2', sent: 3200, opened: 2600, replied: 520 },
  { name: 'Week 3', sent: 2800, opened: 2200, replied: 480 },
  { name: 'Week 4', sent: 3600, opened: 3000, replied: 680 },
];

const leadsByIndustry = [
  { name: 'Gym Wear', value: 1240, color: '#3b82f6' },
  { name: 'Sportswear', value: 980, color: '#8b5cf6' },
  { name: 'Martial Arts', value: 627, color: '#10b981' },
];

const leadsBySource = [
  { source: 'Amazon', leads: 842, quality: 87 },
  { source: 'Alibaba', leads: 756, quality: 82 },
  { source: 'Google Maps', leads: 634, quality: 78 },
  { source: 'LinkedIn', leads: 421, quality: 92 },
  { source: 'WhatsApp Links', leads: 194, quality: 71 },
];

const topCountries = [
  { country: 'United States', leads: 847, orders: 23 },
  { country: 'United Kingdom', leads: 421, orders: 12 },
  { country: 'Germany', leads: 312, orders: 8 },
  { country: 'Canada', leads: 287, orders: 7 },
  { country: 'Australia', leads: 198, orders: 5 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{kpi.label}</p>
                    <p className={`mt-2 ${kpi.color}`}>{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <Icon className={`w-6 h-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Campaign Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Email engagement metrics over the last 4 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sent" fill="#3b82f6" name="Sent" />
                <Bar dataKey="opened" fill="#8b5cf6" name="Opened" />
                <Bar dataKey="replied" fill="#10b981" name="Replied" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Leads by Industry */}
        <Card>
          <CardHeader>
            <CardTitle>Leads by Industry</CardTitle>
            <CardDescription>Distribution across target sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadsByIndustry}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {leadsByIndustry.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Leads by Source */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Sources Performance</CardTitle>
          <CardDescription>Quality scores and volume by data source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leadsBySource.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-900">{source.source}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{source.leads} leads</span>
                    <Badge variant={source.quality >= 85 ? 'default' : 'secondary'}>
                      Quality: {source.quality}%
                    </Badge>
                  </div>
                </div>
                <Progress value={source.quality} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Countries */}
      <Card>
        <CardHeader>
          <CardTitle>Top Markets</CardTitle>
          <CardDescription>Lead distribution and conversion by country</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCountries.map((country, index) => (
              <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {index + 1}
                  </div>
                  <span className="text-gray-900">{country.country}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Leads</div>
                    <div className="text-gray-900">{country.leads}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Orders</div>
                    <div className="text-green-600">{country.orders}</div>
                  </div>
                  <div className="text-right min-w-[60px]">
                    <div className="text-sm text-gray-600">Conv. Rate</div>
                    <div className="text-gray-900">{((country.orders / country.leads) * 100).toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
