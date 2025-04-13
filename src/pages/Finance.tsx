
import { useState } from "react";
import { 
  DollarSign, 
  Calendar, 
  CreditCard, 
  FileText, 
  Download, 
  Plus, 
  CheckCircle, 
  AlertCircle, 
  ArrowDownRight,
  ArrowUpRight,
  Filter
} from "lucide-react";

const Finance = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [filter, setFilter] = useState("all");
  
  const financialSummary = {
    totalFees: 12000,
    paidAmount: 8500,
    pendingAmount: 3500,
    dueDate: "May 15, 2025",
    scholarshipAmount: 2000,
    transactions: [
      {
        id: 1,
        date: "February 15, 2025",
        amount: 4500,
        type: "payment",
        method: "Credit Card",
        status: "completed",
        description: "Semester Fee Payment (First Installment)"
      },
      {
        id: 2,
        date: "March 20, 2025",
        amount: 4000,
        type: "payment",
        method: "Bank Transfer",
        status: "completed",
        description: "Semester Fee Payment (Second Installment)"
      },
      {
        id: 3,
        date: "April 5, 2025",
        amount: 2000,
        type: "credit",
        method: "Scholarship",
        status: "completed",
        description: "Merit Scholarship Credit"
      },
      {
        id: 4,
        date: "January 10, 2025",
        amount: 500,
        type: "payment",
        method: "Cash",
        status: "completed",
        description: "Library Fine Payment"
      },
      {
        id: 5,
        date: "May 15, 2025",
        amount: 3500,
        type: "due",
        method: "Pending",
        status: "pending",
        description: "Semester Fee Payment (Final Installment)"
      }
    ]
  };
  
  const filteredTransactions = filter === "all" 
    ? financialSummary.transactions 
    : financialSummary.transactions.filter(tx => tx.type === filter);

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Financial Management</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "overview" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "transactions" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab("payment")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "payment" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Make Payment
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Total Fee</h3>
                  <div className="text-2xl font-bold">${financialSummary.totalFees}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-muted rounded-full h-2 mb-1">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(financialSummary.paidAmount / financialSummary.totalFees) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Paid: ${financialSummary.paidAmount}</span>
                  <span>Remaining: ${financialSummary.pendingAmount}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Next Payment Due</h3>
                  <div className="text-2xl font-bold">${financialSummary.pendingAmount}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium ml-2">{financialSummary.dueDate}</span>
                </div>
                <div className="mt-3">
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Scholarship/Aid</h3>
                  <div className="text-2xl font-bold">${financialSummary.scholarshipAmount}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Applied to current semester</span>
                </div>
                <div className="mt-3">
                  <button className="w-full px-4 py-2 border rounded-md hover:bg-muted text-sm">
                    View Scholarship Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <button 
                onClick={() => setActiveTab("transactions")}
                className="text-sm text-primary hover:underline"
              >
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {financialSummary.transactions.slice(0, 3).map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-3">{transaction.date}</td>
                      <td className="px-4 py-3">{transaction.description}</td>
                      <td className="px-4 py-3">
                        <div className={`flex items-center ${
                          transaction.type === "credit" ? "text-green-600" : transaction.type === "due" ? "text-amber-600" : ""
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowDownRight size={16} className="mr-1" />
                          ) : transaction.type === "payment" ? (
                            <ArrowUpRight size={16} className="mr-1" />
                          ) : null}
                          ${transaction.amount}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {transaction.status === "completed" ? (
                          <span className="flex items-center text-green-600">
                            <CheckCircle size={14} className="mr-1" />
                            Completed
                          </span>
                        ) : (
                          <span className="flex items-center text-amber-600">
                            <AlertCircle size={14} className="mr-1" />
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-full mr-4">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-blue-800">Need Financial Assistance?</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Our financial aid office is here to help! Learn about payment plans, 
                  scholarships, and financial aid options available to you.
                </p>
                <div className="mt-3">
                  <button className="px-3 py-1.5 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                    Contact Financial Aid Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "transactions" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-muted rounded-md px-3 py-1.5">
                <Filter size={16} className="mr-2" />
                <select 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="all">All Transactions</option>
                  <option value="payment">Payments</option>
                  <option value="credit">Credits</option>
                  <option value="due">Pending</option>
                </select>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-3 py-1.5 border rounded-md hover:bg-muted">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
          
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Description</th>
                    <th className="px-4 py-3 text-left">Method</th>
                    <th className="px-4 py-3 text-left">Amount</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-3">{transaction.date}</td>
                      <td className="px-4 py-3">{transaction.description}</td>
                      <td className="px-4 py-3">{transaction.method}</td>
                      <td className="px-4 py-3">
                        <div className={`flex items-center ${
                          transaction.type === "credit" ? "text-green-600" : transaction.type === "due" ? "text-amber-600" : ""
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowDownRight size={16} className="mr-1" />
                          ) : transaction.type === "payment" ? (
                            <ArrowUpRight size={16} className="mr-1" />
                          ) : null}
                          ${transaction.amount}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {transaction.status === "completed" ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs uppercase">
                            Completed
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-xs uppercase">
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-primary hover:underline text-sm">
                          Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "payment" && (
        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Make a Payment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Payment For</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Semester Fee - Spring 2025</option>
                        <option>Hostel Fee</option>
                        <option>Library Fine</option>
                        <option>Other Fees</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                        <input type="text" className="w-full p-2 pl-7 border rounded-md" defaultValue="3500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Payment Method</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="cc" name="paymentMethod" className="mr-2" defaultChecked />
                          <label htmlFor="cc">Credit/Debit Card</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="bank" name="paymentMethod" className="mr-2" />
                          <label htmlFor="bank">Bank Transfer</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="wallet" name="paymentMethod" className="mr-2" />
                          <label htmlFor="wallet">Digital Wallet</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="XXXX XXXX XXXX XXXX" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Expiry Date</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">CVV</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="XXX" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name on Card</label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="John Doe" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Amount</span>
                    <span>$3,500.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Transaction Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>$3,500.00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t flex justify-end">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;
