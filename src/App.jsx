import React, { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      backgroundColor: 'white',
      padding: '20px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    logo: {
      width: '40px',
      height: '40px',
      backgroundColor: '#2563eb',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    main: {
      display: 'flex'
    },
    sidebar: {
      width: '250px',
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 80px)',
      padding: '20px',
      borderRight: '1px solid #ddd'
    },
    content: {
      flex: 1,
      padding: '30px'
    },
    navButton: {
      width: '100%',
      padding: '12px 15px',
      margin: '5px 0',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      fontSize: '14px'
    },
    activeButton: {
      backgroundColor: '#dbeafe',
      color: '#1d4ed8'
    },
    card: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '8px',
      marginBottom: '20px',
      border: '1px solid #ddd'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    }
  }

  const navigation = [
    { id: 'dashboard', name: '🏥 Reception Dashboard' },
    { id: 'appointments', name: '📅 Appointment Booking' },
    { id: 'patients', name: '👥 Patient Records' },
    { id: 'clinical', name: '🔬 Clinical Examination' },
    { id: 'billing', name: '💳 Billing' },
    { id: 'messenger', name: '💬 Team Messenger' },
    { id: 'portal', name: '👤 Patient Portal' },
    { id: 'optiscribe', name: '💊 OptiScribe' },
    { id: 'bi', name: '📊 BI Suite' }
  ]

  const renderDashboard = () => (
    <div>
      <h1 style={{fontSize: '28px', marginBottom: '20px', color: '#1f2937'}}>
        Reception Dashboard
      </h1>
      <p style={{color: '#6b7280', marginBottom: '30px'}}>
        Welcome to OPHTHALMIX - Comprehensive Ophthalmology Practice Management
      </p>
      
      <div style={styles.grid}>
        <div style={{...styles.card, backgroundColor: '#dbeafe'}}>
          <h3 style={{color: '#1e40af', marginBottom: '10px'}}>Today's Appointments</h3>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#2563eb'}}>24</div>
          <p style={{fontSize: '14px', color: '#1e40af'}}>3 pending confirmations</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#dcfce7'}}>
          <h3 style={{color: '#166534', marginBottom: '10px'}}>Total Patients</h3>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#16a34a'}}>1,247</div>
          <p style={{fontSize: '14px', color: '#166534'}}>+12 this week</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#fef3c7'}}>
          <h3 style={{color: '#92400e', marginBottom: '10px'}}>Pending Notes</h3>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#d97706'}}>8</div>
          <p style={{fontSize: '14px', color: '#92400e'}}>Require attention</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#e9d5ff'}}>
          <h3 style={{color: '#7c2d12', marginBottom: '10px'}}>Revenue Today</h3>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#a855f7'}}>£2,450</div>
          <p style={{fontSize: '14px', color: '#7c2d12'}}>+15% vs yesterday</p>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{marginBottom: '20px'}}>Today's Schedule</h3>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f9fafb', borderRadius: '6px', marginBottom: '10px'}}>
          <div>
            <div style={{fontWeight: '500'}}>Mrs. Sarah Johnson</div>
            <div style={{fontSize: '14px', color: '#6b7280'}}>Routine Eye Exam</div>
          </div>
          <div style={{color: '#2563eb', fontWeight: '500'}}>09:30</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f9fafb', borderRadius: '6px', marginBottom: '10px'}}>
          <div>
            <div style={{fontWeight: '500'}}>Mr. David Smith</div>
            <div style={{fontSize: '14px', color: '#6b7280'}}>Glaucoma Follow-up</div>
          </div>
          <div style={{color: '#2563eb', fontWeight: '500'}}>10:15</div>
        </div>
      </div>
    </div>
  )

  const renderPatientPortal = () => (
    <div>
      <h1 style={{fontSize: '28px', marginBottom: '30px', color: '#1f2937'}}>Patient Portal</h1>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={{color: '#2563eb', marginBottom: '15px'}}>📅 Appointments</h3>
          <div style={{padding: '15px', backgroundColor: '#dbeafe', borderRadius: '6px'}}>
            <div style={{fontWeight: '500'}}>Next Appointment</div>
            <div style={{fontSize: '14px', color: '#6b7280'}}>Eye Exam - Monday, Jul 25, 2025</div>
            <div style={{marginTop: '10px'}}>
              <button style={{padding: '5px 15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px', cursor: 'pointer'}}>Confirm</button>
              <button style={{padding: '5px 15px', backgroundColor: '#d1d5db', color: '#374151', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
        
        <div style={styles.card}>
          <h3 style={{color: '#16a34a', marginBottom: '15px'}}>🧪 Test Results</h3>
          <div style={{padding: '15px', backgroundColor: '#dcfce7', borderRadius: '6px', marginBottom: '10px'}}>
            <div style={{fontWeight: '500'}}>Visual Field Test</div>
            <div style={{fontSize: '14px', color: '#16a34a'}}>Normal</div>
          </div>
          <div style={{padding: '15px', backgroundColor: '#fef3c7', borderRadius: '6px'}}>
            <div style={{fontWeight: '500'}}>OCT Scan</div>
            <div style={{fontSize: '14px', color: '#d97706'}}>Mild Changes</div>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={{color: '#a855f7', marginBottom: '15px'}}>💊 Prescriptions</h3>
          <div style={{padding: '15px', backgroundColor: '#e9d5ff', borderRadius: '6px', marginBottom: '10px'}}>
            <div style={{fontWeight: '500'}}>Latanoprost</div>
            <div style={{fontSize: '14px', color: '#16a34a'}}>Active</div>
          </div>
          <div style={{padding: '15px', backgroundColor: '#fee2e2', borderRadius: '6px'}}>
            <div style={{fontWeight: '500'}}>Timolol</div>
            <div style={{fontSize: '14px', color: '#dc2626'}}>Expired</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOptiScribe = () => (
    <div>
      <h1 style={{fontSize: '28px', marginBottom: '10px', color: '#1f2937'}}>OptiScribe</h1>
      <h2 style={{fontSize: '20px', color: '#2563eb', marginBottom: '20px'}}>World's Best Prescribing Module</h2>
      <div style={{display: 'flex', gap: '15px', marginBottom: '30px'}}>
        <span style={{padding: '5px 15px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '14px'}}>NHS Compliant</span>
        <span style={{padding: '5px 15px', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '20px', fontSize: '14px'}}>BNF Integration</span>
        <span style={{padding: '5px 15px', backgroundColor: '#e9d5ff', color: '#7c2d12', borderRadius: '20px', fontSize: '14px'}}>NICE Guidelines</span>
      </div>
      
      <div style={styles.card}>
        <h3 style={{marginBottom: '20px'}}>Smart Prescribing Interface</h3>
        <div style={{display: 'grid', gap: '15px'}}>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: '500'}}>Patient</label>
            <select style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}>
              <option>Select Patient</option>
              <option>Mrs. Sarah Johnson</option>
              <option>Mr. David Smith</option>
            </select>
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '5px', fontWeight: '500'}}>Medication</label>
            <select style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px'}}>
              <option>Select Medication</option>
              <option>Latanoprost 0.005% Eye Drops</option>
              <option>Timolol 0.5% Eye Drops</option>
            </select>
          </div>
          <button style={{padding: '15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500'}}>
            Generate Prescription
          </button>
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return renderDashboard()
      case 'portal': return renderPatientPortal()
      case 'optiscribe': return renderOptiScribe()
      default: 
        return (
          <div>
            <h1 style={{fontSize: '28px', marginBottom: '20px', color: '#1f2937'}}>
              {navigation.find(item => item.id === currentPage)?.name || 'Module'}
            </h1>
            <div style={styles.card}>
              <p>This module is under development. Please check back soon!</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>O</div>
        <div>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', margin: 0}}>OPHTHALMIX</h1>
          <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Ophthalmology Practice Management</p>
        </div>
      </header>

      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <nav>
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  ...styles.navButton,
                  ...(currentPage === item.id ? styles.activeButton : {})
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        <main style={styles.content}>
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
