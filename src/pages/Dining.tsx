import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";

const Dining = () => {
  

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mess & Restaurant</h1>
        <span className="vit-badge">Chill Campus</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mess Section */}
        <div className="dashboard-card space-y-4">
          <h2 className="text-xl font-semibold">Campus Mess</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="font-medium mb-2">Veg Mess</h3>
              <p className="text-xs text-muted-foreground">Pure vegetarian options with balanced nutrition</p>
              <div className="mt-3 text-sm font-medium">
                <div className="flex justify-between mb-1">
                  <span>Breakfast</span>
                  <span>7:30 - 9:30 AM</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Lunch</span>
                  <span>12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>7:00 - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍲</span>
              </div>
              <h3 className="font-medium mb-2">Jain Mess</h3>
              <p className="text-xs text-muted-foreground">Special Jain preparations without root vegetables</p>
              <div className="mt-3 text-sm font-medium">
                <div className="flex justify-between mb-1">
                  <span>Breakfast</span>
                  <span>7:30 - 9:30 AM</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Lunch</span>
                  <span>12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>7:00 - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍗</span>
              </div>
              <h3 className="font-medium mb-2">Non-Veg Mess</h3>
              <p className="text-xs text-muted-foreground">Protein-rich non-vegetarian options available</p>
              <div className="mt-3 text-sm font-medium">
                <div className="flex justify-between mb-1">
                  <span>Breakfast</span>
                  <span>7:30 - 9:30 AM</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Lunch</span>
                  <span>12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>7:00 - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 border-t pt-4">
            <h3 className="font-medium mb-2">Mess Packages</h3>
            <table className="w-full">
              <thead>
                <tr className="text-sm text-muted-foreground border-b">
                  <th className="font-medium text-left pb-2">Package</th>
                  <th className="font-medium text-right pb-2">Price (Per Month)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Breakfast Only</td>
                  <td className="py-2 text-right">₹3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Lunch Only</td>
                  <td className="py-2 text-right">₹4,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Dinner Only</td>
                  <td className="py-2 text-right">₹4,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Any Two Meals</td>
                  <td className="py-2 text-right">₹7,500</td>
                </tr>
                <tr>
                  <td className="py-2">All Three Meals</td>
                  <td className="py-2 text-right">₹9,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Restaurant Section */}
        <div className="dashboard-card space-y-4">
          <h2 className="text-xl font-semibold">Campus Restaurant</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium border-b pb-2 mb-2">Beverages</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Tea</span>
                  <span>₹15</span>
                </li>
                <li className="flex justify-between">
                  <span>Coffee</span>
                  <span>₹25</span>
                </li>
                <li className="flex justify-between">
                  <span>Cold Coffee</span>
                  <span>₹45</span>
                </li>
                <li className="flex justify-between">
                  <span>Fresh Juice</span>
                  <span>₹50</span>
                </li>
                <li className="flex justify-between">
                  <span>Milkshake</span>
                  <span>₹60</span>
                </li>
              </ul>
              
              <h3 className="font-medium border-b pb-2 mb-2 mt-4">Snacks</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₹20</span>
                </li>
                <li className="flex justify-between">
                  <span>Veg Sandwich</span>
                  <span>₹45</span>
                </li>
                <li className="flex justify-between">
                  <span>French Fries</span>
                  <span>₹60</span>
                </li>
                <li className="flex justify-between">
                  <span>Veg Burger</span>
                  <span>₹65</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Burger</span>
                  <span>₹85</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium border-b pb-2 mb-2">Main Course</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Veg Fried Rice</span>
                  <span>₹80</span>
                </li>
                <li className="flex justify-between">
                  <span>Veg Noodles</span>
                  <span>₹80</span>
                </li>
                <li className="flex justify-between">
                  <span>Paneer Butter Masala</span>
                  <span>₹120</span>
                </li>
                <li className="flex justify-between">
                  <span>Dal Tadka</span>
                  <span>₹90</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Curry</span>
                  <span>₹140</span>
                </li>
              </ul>
              
              <h3 className="font-medium border-b pb-2 mb-2 mt-4">Breads & Rice</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Roti (2 pcs)</span>
                  <span>₹30</span>
                </li>
                <li className="flex justify-between">
                  <span>Butter Naan</span>
                  <span>₹40</span>
                </li>
                <li className="flex justify-between">
                  <span>Jeera Rice</span>
                  <span>₹70</span>
                </li>
                <li className="flex justify-between">
                  <span>Steamed Rice</span>
                  <span>₹60</span>
                </li>
                <li className="flex justify-between">
                  <span>Veg Biryani</span>
                  <span>₹110</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-muted p-3 rounded-lg">
            <h3 className="font-medium mb-2 text-center">Restaurant Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-muted-foreground">
              * Special discounts available for students with valid ID cards
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3 items-center p-3 rounded-lg border">
              <MailIcon className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-muted-foreground">dining@chillcampus.edu</div>
              </div>
            </div>
            <div className="flex gap-3 items-center p-3 rounded-lg border">
              <PhoneIcon className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Phone</div>
                <div className="text-sm text-muted-foreground">+91 9876543210</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
