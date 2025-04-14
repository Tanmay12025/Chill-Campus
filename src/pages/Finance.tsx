
import { useState, useEffect } from "react";
import { DollarSign, CreditCard, FileText, ArrowRight, Calendar, Clock, FileCheck } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Sample financial data
const sampleFinancialData = {
  tuitionFee: 5000,
  hostelFee: 1200,
  libraryFee: 300,
  transportFee: 450,
  miscFee: 250,
  totalDue: 7200,
  totalPaid: 3500,
  paymentHistory: [
    { id: 1, date: "2024-01-15", amount: 2000, type: "Tuition Fee", status: "Paid" },
    { id: 2, date: "2024-01-25", amount: 1200, status: "Paid", type: "Hostel Fee" },
    { id: 3, date: "2024-02-10", amount: 300, status: "Paid", type: "Library Fee" },
  ],
  upcomingPayments: [
    { id: 1, dueDate: "2024-04-30", amount: 1500, type: "Tuition Fee (Installment)", status: "Pending" },
    { id: 2, dueDate: "2024-05-15", amount: 450, type: "Transport Fee", status: "Pending" },
    { id: 3, dueDate: "2024-05-30", amount: 250, type: "Misc Fee", status: "Pending" },
  ]
};

const Finance = () => {
  const [currency, setCurrency] = useState("USD");
  const [currencyRate, setCurrencyRate] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to view financial information",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }
    
    // Get stored currency preference
    const storedCurrency = localStorage.getItem("preferredCurrency") || "USD";
    setCurrency(storedCurrency);
    
    // Set currency conversion rate (simplified for demo)
    if (storedCurrency === "INR") {
      setCurrencyRate(83.34); // 1 USD = 83.34 INR (as of April 2024)
    } else {
      setCurrencyRate(1);
    }
  }, [user, navigate]);

  // Format amount based on selected currency
  const formatAmount = (amount: number) => {
    const convertedAmount = amount * currencyRate;
    
    if (currency === "INR") {
      return `₹${convertedAmount.toLocaleString('en-IN')}`;
    } else {
      return `$${convertedAmount.toLocaleString('en-US')}`;
    }
  };
  
  // Calculate payment progress
  const paymentProgress = (sampleFinancialData.totalPaid / sampleFinancialData.totalDue) * 100;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Financial Management</h1>
        <p className="text-muted-foreground">
          Manage your fees, payments, and financial aid
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatAmount(sampleFinancialData.totalDue)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Amount Paid</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatAmount(sampleFinancialData.totalPaid)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Balance Due</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatAmount(sampleFinancialData.totalDue - sampleFinancialData.totalPaid)}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Payment Progress</CardTitle>
          <CardDescription>Current semester fee payment status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {formatAmount(sampleFinancialData.totalPaid)} paid of {formatAmount(sampleFinancialData.totalDue)}
              </span>
              <span className="text-sm font-medium">{paymentProgress.toFixed(0)}%</span>
            </div>
            <Progress value={paymentProgress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Fee Breakdown</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Tuition Fee</span>
                  <span>{formatAmount(sampleFinancialData.tuitionFee)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Hostel Fee</span>
                  <span>{formatAmount(sampleFinancialData.hostelFee)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Library Fee</span>
                  <span>{formatAmount(sampleFinancialData.libraryFee)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Transport Fee</span>
                  <span>{formatAmount(sampleFinancialData.transportFee)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Miscellaneous</span>
                  <span>{formatAmount(sampleFinancialData.miscFee)}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Next Payment Due</h3>
              {sampleFinancialData.upcomingPayments.length > 0 && (
                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Due: {new Date(sampleFinancialData.upcomingPayments[0].dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-destructive">
                      {sampleFinancialData.upcomingPayments[0].status}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="font-medium">{sampleFinancialData.upcomingPayments[0].type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{formatAmount(sampleFinancialData.upcomingPayments[0].amount)}</span>
                    <Button size="sm">
                      Pay Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            Current currency: {currency === "INR" ? "Indian Rupee (₹)" : "US Dollar ($)"}
          </span>
          <Button variant="outline" size="sm" onClick={() => navigate("/settings")}>
            Change currency in settings
          </Button>
        </CardFooter>
      </Card>
      
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Record of your previous payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Date</th>
                      <th className="text-left py-3 px-2">Fee Type</th>
                      <th className="text-left py-3 px-2">Amount</th>
                      <th className="text-left py-3 px-2">Status</th>
                      <th className="text-left py-3 px-2">Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleFinancialData.paymentHistory.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="py-3 px-2">
                          {new Date(payment.date).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-2">{payment.type}</td>
                        <td className="py-3 px-2 font-medium">{formatAmount(payment.amount)}</td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <Button variant="ghost" size="sm" className="flex items-center h-8">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>View</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Schedule of your upcoming fee payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Due Date</th>
                      <th className="text-left py-3 px-2">Fee Type</th>
                      <th className="text-left py-3 px-2">Amount</th>
                      <th className="text-left py-3 px-2">Status</th>
                      <th className="text-left py-3 px-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleFinancialData.upcomingPayments.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="py-3 px-2">
                          {new Date(payment.dueDate).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-2">{payment.type}</td>
                        <td className="py-3 px-2 font-medium">{formatAmount(payment.amount)}</td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <Button size="sm">Pay Now</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Finance;
