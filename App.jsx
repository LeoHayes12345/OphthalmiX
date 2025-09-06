import React, { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const navigationItems = [
    { id: 'dashboard', name: 'Reception Dashboard', icon: '🏥' },
    { id: 'appointments', name: 'Appointment Booking', icon: '📅' },
    { id: 'patients', name: 'Patient Records', icon: '👥' },
    { id: 'clinical', name: 'Clinical Examination', icon: '🔬' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'messenger', name: 'Team Messenger', icon: '💬' },
    { id: 'portal', name: 'Patient Portal', icon: '👤' },
    { id: 'bi', name: 'BI Suite', icon: '📊' }
  ]

  const apiSoftware = [
    { id: 'optiscribe', name: 'OptiScribe', description: 'World\'s Best Prescribing Module - NHS Compliant' },
    { id: 'optix', name: 'Optix', description: 'Practice Management System' },
    { id: 'locumpal', name: 'LocumPal', description: 'Healthcare Staffing Platform' },
    { id: 'necrego', name: 'NEC Rego', description: 'Referral Management System' }
  ]

  const renderDashboard = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reception Dashboard</h1>
        <p className="text-gray-600">Welcome to OPHTHALMIX - Comprehensive Ophthalmology Practice Management</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Today's Appointments</h3>
          <p className="text-3xl font-bold text-blue-600">24</p>
          <p className="text-sm text-blue-700">3 pending confirmations</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Total Patients</h3>
          <p className="text-3xl font-bold text-green-600">1,247</p>
          <p className="text-sm text-green-700">+12 this week</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Pending Notes</h3>
          <p className="text-3xl font-bold text-yellow-600">8</p>
          <p className="text-sm text-yellow-700">Require attention</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Revenue Today</h3>
          <p className="text-3xl font-bold text-purple-600">£2,450</p>
          <p className="text-sm text-purple-700">+15% vs yesterday</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Mrs. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Routine Eye Exam</p>
              </div>
              <span className="text-sm font-medium text-blue-600">09:30</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Mr. David Smith</p>
                <p className="text-sm text-gray-600">Glaucoma Follow-up</p>
              </div>
              <span className="text-sm font-medium text-blue-600">10:15</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Ms. Emily Brown</p>
                <p className="text-sm text-gray-600">Cataract Consultation</p>
              </div>
              <span className="text-sm font-medium text-blue-600">11:00</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <div className="text-2xl mb-2">👤</div>
              <div className="text-sm font-medium">New Patient</div>
            </button>
            <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm font-medium">Book Appointment</div>
            </button>
            <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <div className="text-2xl mb-2">📝</div>
              <div className="text-sm font-medium">Clinical Note</div>
            </button>
            <button className="p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <div className="text-2xl mb-2">💳</div>
              <div className="text-sm font-medium">Process Payment</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPatientPortal = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">📅 Appointments</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-medium">Next Appointment</p>
              <p className="text-sm text-gray-600">Eye Exam - Monday, Jul 25, 2025</p>
              <div className="mt-2 space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded">Confirm</button>
                <button className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-green-600">🧪 Test Results</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded">
              <p className="font-medium">Visual Field Test</p>
              <p className="text-sm text-green-600">Normal</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded">
              <p className="font-medium">OCT Scan</p>
              <p className="text-sm text-yellow-600">Mild Changes</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">💊 Prescriptions</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-medium">Latanoprost</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
            <div className="p-3 bg-red-50 rounded">
              <p className="font-medium">Timolol</p>
              <p className="text-sm text-red-600">Expired</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-orange-600">💬 Messages</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded">
              <p className="font-medium">Message from Dr. Adams</p>
              <p className="text-sm text-gray-600">Your test results are ready...</p>
            </div>
            <button className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Message Clinic
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-red-600">💳 Billing</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded">
              <p className="font-medium">Outstanding Invoice</p>
              <p className="text-sm text-red-600">£200</p>
            </div>
            <button className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOptiScribe = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">OptiScribe</h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">World's Best Prescribing Module</h2>
        <div className="flex space-x-4 mb-6">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">NHS Compliant</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">BNF Integration</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">NICE Guidelines</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Smart Prescribing Interface</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Patient</option>
                <option>Mrs. Sarah Johnson</option>
                <option>Mr. David Smith</option>
                <option>Ms. Emily Brown</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Medication</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Medication</option>
                <option>Latanoprost 0.005% Eye Drops</option>
                <option>Timolol 0.5% Eye Drops</option>
                <option>Prednisolone 1% Eye Drops</option>
                <option>Chloramphenicol 0.5% Eye Drops</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dosage</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="1 drop" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Once daily</option>
                  <option>Twice daily</option>
                  <option>Three times daily</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="28 days" />
            </div>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Generate Prescription
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">NHS Compliance Features</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>BNF Integration - British National Formulary</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>NICE Guidelines - Clinical Excellence</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Drug Interaction Checks</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Allergy Alerts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Electronic Prescribing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Audit Trail</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Recent Prescriptions</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Latanoprost - Mrs. Johnson</span>
                <span className="text-blue-600">Today</span>
              </div>
              <div className="flex justify-between">
                <span>Prednisolone - Mr. Smith</span>
                <span className="text-blue-600">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTeamMessenger = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Team Messenger</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Channels</h3>
          <div className="space-y-2">
            <div className="p-3 bg-blue-50 rounded cursor-pointer hover:bg-blue-100">
              <div className="flex justify-between items-center">
                <span className="font-medium"># General</span>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">3</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              <span className="font-medium"># Clinical Updates</span>
            </div>
            <div className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              <span className="font-medium"># Admin Notices</span>
            </div>
            <div className="p-3 bg-red-50 rounded cursor-pointer hover:bg-red-100">
              <div className="flex justify-between items-center">
                <span className="font-medium"># Emergency</span>
                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold"># General</h3>
            <p className="text-sm text-gray-600">Team coordination and daily updates</p>
          </div>
          <div className="p-4 h-96 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  DA
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Dr. Adams</span>
                    <span className="text-xs text-gray-500">9:30 AM</span>
                  </div>
                  <p className="text-sm text-gray-700">Good morning team! Please remember we have the morning huddle at 10 AM to discuss today's appointments.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  SJ
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Sarah (Nurse)</span>
                    <span className="text-xs text-gray-500">9:45 AM</span>
                  </div>
                  <p className="text-sm text-gray-700">The OCT machine calibration is complete. Ready for today's scans.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  MB
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Mike (Reception)</span>
                    <span className="text-xs text-gray-500">10:15 AM</span>
                  </div>
                  <p className="text-sm text-gray-700">We have a walk-in emergency patient. Mrs. Thompson with sudden vision loss. Can someone see her urgently?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBilling = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Billing System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Today's Revenue</h3>
          <p className="text-3xl font-bold text-green-600">£2,450</p>
          <p className="text-sm text-green-700">+15% vs yesterday</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Outstanding Bills</h3>
          <p className="text-3xl font-bold text-yellow-600">£8,750</p>
          <p className="text-sm text-yellow-700">12 invoices pending</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">PMI Claims</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-blue-700">Active claims</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">NHS Claims</h3>
          <p className="text-3xl font-bold text-purple-600">28</p>
          <p className="text-sm text-purple-700">Processed this month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
              <div>
                <span className="font-medium text-blue-900">Self-Pay</span>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <span className="text-blue-600 font-bold">45%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded">
              <div>
                <span className="font-medium text-green-900">PMI</span>
                <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
              </div>
              <span className="text-green-600 font-bold">35%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded">
              <div>
                <span className="font-medium text-purple-900">NHS</span>
                <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <span className="text-purple-600 font-bold">20%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-sm text-gray-600">Cataract Surgery</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-600">£430</p>
                <p className="text-xs text-red-600">Overdue</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Eye Examination</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-600">£250</p>
                <p className="text-xs text-yellow-600">Pending</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <div>
                <p className="font-medium">Michael Brown</p>
                <p className="text-sm text-gray-600">Glaucoma Treatment</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">£180</p>
                <p className="text-xs text-green-600">Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return renderDashboard()
      case 'portal': return renderPatientPortal()
      case 'optiscribe': return renderOptiScribe()
      case 'messenger': return renderTeamMessenger()
      case 'billing': return renderBilling()
      default: 
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{navigationItems.find(item => item.id === currentPage)?.name}</h1>
            <p className="text-gray-600">This module is under development. Please check back soon!</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">OPHTHALMIX</h1>
                <p className="text-sm text-gray-600">Ophthalmology Practice Management</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Welcome, Dr. Adams | Chatham Eye Clinic
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                API Software
              </h3>
              <div className="space-y-1">
                {apiSoftware.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded text-left transition-colors text-sm ${
                      currentPage === item.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">🔗</span>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App

