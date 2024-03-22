import React, { useState, useEffect } from 'react';
import CustomMaterialTable from '../components/MaterialTable';
import CustomModal from '../components/modal';

const PaymentDetails = ({ drawerOpen }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentData, setPaymentData] = useState([]);

  const pData =[
    {
        "id": 1,
        "full_name": "John Doe",
        "mobile_number": "1234567890",
        "1st_installment_amount": 1000,
        "1st_due_date": "2024-04-01",
        "paymentStatus1": "Paid",
        "2nd_installment_amount": 800,
        "2nd_due_date": "2024-05-01",
        "paymentStatus2": "Paid",
        "3rd_installment_amount": 700,
        "3rd_due_date": "2024-06-01",
        "paymentStatus3": "Pending"
    },
    {
        "id": 2,
        "full_name": "Jane Smith",
        "mobile_number": "2345678901",
        "1st_installment_amount": 1200,
        "1st_due_date": "2024-04-05",
        "paymentStatus1": "Pending",
        "2nd_installment_amount": 900,
        "2nd_due_date": "2024-05-05",
        "paymentStatus2": "Pending",
        "3rd_installment_amount": 600,
        "3rd_due_date": "2024-06-05",
        "paymentStatus3": "Pending"
    },
    {
        "id": 3,
        "full_name": "Alice Johnson",
        "mobile_number": "3456789012",
        "1st_installment_amount": 1100,
        "1st_due_date": "2024-04-10",
        "paymentStatus1": "Paid",
        "2nd_installment_amount": 850,
        "2nd_due_date": "2024-05-10",
        "paymentStatus2": "Paid",
        "3rd_installment_amount": 650,
        "3rd_due_date": "2024-06-10",
        "paymentStatus3": "Pending"
    },
    {
        "id": 4,
        "full_name": "Michael Brown",
        "mobile_number": "4567890123",
        "1st_installment_amount": 1300,
        "1st_due_date": "2024-04-15",
        "paymentStatus1": "Pending",
        "2nd_installment_amount": 750,
        "2nd_due_date": "2024-05-15",
        "paymentStatus2": "Pending",
        "3rd_installment_amount": 700,
        "3rd_due_date": "2024-06-15",
        "paymentStatus3": "Pending"
    },
    {
        "id": 5,
        "full_name": "Emily Davis",
        "mobile_number": "5678901234",
        "1st_installment_amount": 1400,
        "1st_due_date": "2024-04-20",
        "paymentStatus1": "Paid",
        "2nd_installment_amount": 800,
        "2nd_due_date": "2024-05-20",
        "paymentStatus2": "Paid",
        "3rd_installment_amount": 650,
        "3rd_due_date": "2024-06-20",
        "paymentStatus3": "Pending"
    },
]


  useEffect(() => {
    fetchPaymentData();
    setPaymentData(pData);
  }, []); // Fetch data only once when the component mounts
  

  const fetchPaymentData = async () => {
    try {
      const response = await fetch('http://localhost:3001/register');
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setPaymentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error.message);
    }
  };

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Full Name', field: 'full_name' },
    { title: 'Mobile no', field: 'mobile_number' },
    {
      title: '1st Installment', 
      render: rowData => (
        <p>3500</p>
      )
    },
    { 
      title: 'Payment Status', 
      render: rowData => (
        <button 
          style={{
            backgroundColor: rowData.paymentStatus1 === 'Paid' ? 'green' : 'red',
            color: 'white',
            cursor: 'default',
            borderRadius: '5px', // Round edges
            border: 'none', // Remove border
            padding: '4px 8px' // Adjust padding
          }}
        >
          {rowData.paymentStatus1}
        </button>
      )
    },
    { 
      title: '2nd Installment',render: rowData => (
        <p>3500</p>
      )
    },
    { 
      title: 'Payment Status', 
      render: rowData => (
        <button 
          style={{
            backgroundColor: rowData.paymentStatus2 === 'Paid' ? 'green' : 'red',
            color: 'white',
            cursor: 'default',
            borderRadius: '5px', // Round edges
            border: 'none', // Remove border
            padding: '4px 8px' // Adjust padding
          }}
        >
          {rowData.paymentStatus2}
        </button>
      )
    },
    { 
      title: '3rd Installment',render: rowData => (
        <p>3500</p>
      )
    },
    { 
      title: 'Payment Status', 
      render: rowData => (
        <button 
          style={{
            backgroundColor: rowData.paymentStatus3 === 'Paid' ? 'green' : 'red',
            color: 'white',
            cursor: 'default',
            borderRadius: '5px', // Round edges
            border: 'none', // Remove border
            padding: '4px 8px' // Adjust padding
          }}
        >
          {rowData.paymentStatus3}
        </button>
      )
    },
  ];

  const handleViewDetails = rowData => {
    setSelectedRow(rowData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGenerateLink = rowData => {
    // Logic to generate payment link
    console.log('Generate payment link for ID:', rowData.Id);
    // Implement your logic to generate the payment link here
  };

  return (
    <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
      <CustomMaterialTable
        columns={columns}
        data={paymentData}
        options={{
          sorting: true,
          search: true,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          toolbarButtonAlignment: 'left',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            fontWeight: 'bold',
          },
        }}
      />
      <CustomModal
        show={modalOpen}
        onHide={handleCloseModal}
        title="Full Details"
      >
        {selectedRow && (
          <div>
            <p>ID: {selectedRow.Id}</p>
            <p>First Name: {selectedRow.studentFirstName}</p>
            <p>Middle Name: {selectedRow.middleName}</p>
            <p>Last Name: {selectedRow.lastName}</p>
            <p>Date of Birth: {selectedRow.dob}</p>
            <p>Class: {selectedRow.STD}</p>
            <p>Dicision: {selectedRow.division}</p>
            <p>Guardian Name: {selectedRow.guardianName}</p>
            <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
            <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
            <p>Pickup Adress: {selectedRow.pickupAddress}</p>
            <p>Drop Adress: {selectedRow.dropAddress}</p>
            <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>
            
            {/* Add more fields as needed... */}
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default PaymentDetails;