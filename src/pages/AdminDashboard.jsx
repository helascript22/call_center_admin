import Header from "@/components/header/Header";
import CallAnalyticsChart from "@/components/other/CallAnalyticsChart";
import Sidebar from "@/components/sidebar/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Phone, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <div className="lg:ml-56 ml-16">
        <Header />

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Users", icon: <Users className="h-5 w-5 text-yellow-500" />, value: "2000" },
              { title: "Active Users", icon: <Users className="h-5 w-5 text-green-500" />, value: "200" },
              { title: "Today Calls", icon: <Phone className="h-5 w-5 text-blue-500" />, value: "100" },
              { title: "Used Minutes", icon: <Clock className="h-5 w-5 text-red-500" />, value: "460" },
            ].map((stat, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  <div className="mr-4 rounded-full bg-zinc-800 p-2">{stat.icon}</div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-zinc-900 border-zinc-800 text-white col-span-2">
              <CardHeader>
                <CardTitle>Call Analytics (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <CallAnalyticsChart />
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityTimeline />
              </CardContent>
            </Card>
          </div>

          {/* User List */}
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle>User List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-800">
                    <TableHead className="text-zinc-400">User</TableHead>
                    <TableHead className="text-zinc-400">Status</TableHead>
                    <TableHead className="text-zinc-400">Minutes Used</TableHead>
                    <TableHead className="text-zinc-400">Last Login</TableHead>
                    <TableHead className="text-zinc-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3].map((i) => (
                    <TableRow key={i} className="border-zinc-800">
                      <TableCell>JetteJ@gmail.com</TableCell>
                      <TableCell>
                      <Badge
                        variant={i === 2 ? "destructive" : "success"}
                        className={`bg-transparent border ${i === 2 ? "border-red-500" : "border-green-500"} rounded-full`}>
                        <span className="flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${i === 2 ? "bg-red-500" : "bg-green-500"}`} />
                          {i === 2 ? "Inactive" : "Active"}
                        </span>
                      </Badge>
                      </TableCell>
                      <TableCell>60 min</TableCell>
                      <TableCell>30 / 03 /2025</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 border-blue-600 text-blue-600  bg-transparent hover:bg-blue-100"
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem> 
                    <div className="text-sm text-zinc-400">1 of 10</div>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

// ActivityTimeline component
function ActivityTimeline() {
  const activities = [
    { type: "user", text: "User Alex added", time: "10 Minutes Ago", color: "blue" },
    { type: "reset", text: "Minutes reset for Jhone", time: "19 Minutes Ago", color: "red" },
    { type: "system", text: "System Update", time: "2 hours Ago", color: "green" },
    { type: "user", text: "User Alex added", time: "10 Minutes Ago", color: "blue" },
    { type: "user", text: "User Alex added", time: "10 Minutes Ago", color: "blue" },
    { type: "reset", text: "Minutes reset for Jette", time: "10 Minutes Ago", color: "red" },
    { type: "user", text: "User Alex added", time: "10 Minutes Ago", color: "blue" },
    { type: "system", text: "System Update", time: "10 Minutes Ago", color: "green" },
  ];

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {activities.map((activity, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full bg-${activity.color}-500`}></div>
            {i < activities.length - 1 && <div className="w-0.5 h-full bg-zinc-800 mt-1" />}
          </div>
          <div>
            <div className="font-medium">{activity.text}</div>
            <div className="text-xs text-zinc-400">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
