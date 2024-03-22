// import React, { useState, useEffect } from 'react';
// import CustomMaterialTable from '../components/MaterialTable';
// import CustomModal from '../components/modal';

// const StudentDetails = ({ drawerOpen }) => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [studentData, setStudentData] = useState([]);

//   useEffect(() => {
//     fetchStudentData();
//   }, []); // Fetch data only once when the component mounts

//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/register');
//       if (!response.ok) {
//         throw new Error('Failed to fetch student data');
//       }
//       const data = await response.json();
//       setStudentData(data);
//     } catch (error) {
//       console.error('Error fetching student data:', error.message);
//     }
//   };

//   const columns = [
//     { title: 'ID', field: 'Id' },
//     { title: 'First Name', field: 'studentFirstName' },
//     { title: 'Last Name', field: 'lastName' },
//     {
//       title: 'View Details',
//       render: rowData => (
//         <button onClick={() => handleViewDetails(rowData)}>View</button>
//       ),
//     },
//     { 
//       title: 'Generate Payment Link', 
//       render: rowData => (
//         <button onClick={() => handleGenerateLink(rowData)}>Generate</button>
//       )
//     },
//     { 
//       title: 'Payment Status', 
//       render: rowData => (
//         <button 
//           style={{
//             backgroundColor: rowData.paymentStatus === 'Paid' ? 'green' : 'red',
//             color: 'white',
//             cursor: 'default',
//             borderRadius: '5px', // Round edges
//             border: 'none', // Remove border
//             padding: '4px 8px' // Adjust padding
//           }}
//         >
//           {rowData.paymentStatus}
//         </button>
//       )
//     },
//   ];

//   const handleViewDetails = rowData => {
//     setSelectedRow(rowData);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleGenerateLink = rowData => {
//     // Logic to generate payment link
//     console.log('Generate payment link for ID:', rowData.Id);
//     // Implement your logic to generate the payment link here
//     // Construct SMS message
//     const message = `Dear ${rowData.studentFirstName}, please proceed to make the payment using this link: https://rzp.io/i/pMjIUMB1IB`;

//     // Send SMS using Email to SMS gateway
//     const phoneNumber = rowData.guardianMobile; // Assuming guardianMobile contains the phone number
//     const emailGateway = 'rutujakhurpe@gmail.com'; // Replace with your email to SMS gateway
//     const subject = ''; // Subject can be left empty
//     const email = `${phoneNumber}@${emailGateway}`;
//     const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

//     // Open default email client to send SMS
//     window.location.href = mailToLink;

//   };

//   // const handleGenerateLink = async (rowData) => {
//   //   console.log("rowdata ID " , rowData.Id)
//   //   try {
//   //     // Call the backend endpoint to generate the payment link
//   //     const response = await fetch(`http://localhost:3001/generatePaymentLink?rowId=${rowData.Id}&mobileNumber=${rowData.guardianMobile}`);
//   //     if (!response.ok) {
//   //       throw new Error('Failed to generate payment link');
//   //     }
//   //     const paymentLink = await response.json();

//   //     // Update the state to indicate that the link is generated
//   //     setLinkGenerated(prevState => ({
//   //       ...prevState,
//   //       [rowData.Id]: true,
//   //     }));

//   //     // Log the generated payment link
//   //     console.log('Generated Payment Link:', paymentLink);
//   //   } catch (error) {
//   //     console.error('Error generating payment link:', error);
//   //   }
//   // };

//   return (
//     <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
//       <CustomMaterialTable
//         columns={columns}
//         data={studentData}
//         options={{
//           sorting: true,
//           search: true,
//           paging: true,
//           pageSize: 10,
//           pageSizeOptions: [5, 10, 20],
//           toolbarButtonAlignment: 'left',
//           headerStyle: {
//             backgroundColor: '#f2f2f2',
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <CustomModal
//         show={modalOpen}
//         onHide={handleCloseModal}
//         title="Full Details"
//       >
//         {selectedRow && (
//           <div>
//             <p>ID: {selectedRow.Id}</p>
//             <p>First Name: {selectedRow.studentFirstName}</p>
//             <p>Middle Name: {selectedRow.middleName}</p>
//             <p>Last Name: {selectedRow.lastName}</p>
//             <p>Date of Birth: {selectedRow.dob}</p>
//             <p>Class: {selectedRow.STD}</p>
//             <p>Dicision: {selectedRow.division}</p>
//             <p>Guardian Name: {selectedRow.guardianName}</p>
//             <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
//             <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
//             <p>Pickup Adress: {selectedRow.pickupAddress}</p>
//             <p>Drop Adress: {selectedRow.dropAddress}</p>
//             <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>

//             {/* Add more fields as needed... */}
//           </div>
//         )}
//       </CustomModal>
//     </div>
//   );
// };

// export default StudentDetails;


//zuber code 
// import React, { useState, useEffect } from 'react';
// import CustomMaterialTable from '../components/MaterialTable';
// import CustomModal from '../components/modal';

// const StudentDetails = ({ drawerOpen }) => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [studentData, setStudentData] = useState([]);
//   const [linkGenerated, setLinkGenerated] = useState({});

//   useEffect(() => {
//     fetchStudentData();
//   }, []); // Fetch data only once when the component mounts

//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/register');
//       if (!response.ok) {
//         throw new Error('Failed to fetch student data');
//       }
//       const data = await response.json();
//       setStudentData(data);
//     } catch (error) {
//       console.error('Error fetching student data:', error.message);
//     }
//   };

//   const columns = [
//     { title: 'ID', field: 'Id' },
//     { title: 'First Name', field: 'studentFirstName' },
//     { title: 'Last Name', field: 'lastName' },
//     {
//       title: 'View Details',
//       render: rowData => (
//         <button onClick={() => handleViewDetails(rowData)}>View</button>
//       ),
//     },
//     { 
//       title: 'Generate Payment Link', 
//       render: rowData => (
//         <button 
//           onClick={() => handleGenerateLink(rowData)}
//           style={{
//             backgroundColor: linkGenerated[rowData.Id] ? '#90EE90' : '', // Light green if link is generated
//             cursor: 'pointer',
//           }}
//         >
//           Generate
//         </button>
//       )
//     },
//     { 
//       title: 'Payment Status', 
//       render: rowData => (
//         <button 
//           style={{
//             backgroundColor: rowData.paymentStatus === 'Paid' ? 'green' : 'red',
//             color: 'white',
//             cursor: 'default',
//             borderRadius: '5px', // Round edges
//             border: 'none', // Remove border
//             padding: '4px 8px' // Adjust padding
//           }}
//         >
//           {rowData.paymentStatus}
//         </button>
//       )
//     },
//   ];

//   const handleViewDetails = rowData => {
//     setSelectedRow(rowData);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleGenerateLink = rowData => {
//     // Logic to generate payment link
//     console.log('Generate payment link for ID:', rowData.Id);
//     // Implement your logic to generate the payment link here

//     // Assuming the link is successfully generated
//     setLinkGenerated(prevState => ({
//       ...prevState,
//       [rowData.Id]: true,
//     }));
//   };

//   return (
//     <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
//       <CustomMaterialTable
//         columns={columns}
//         data={studentData}
//         options={{
//           sorting: true,
//           search: true,
//           paging: true,
//           pageSize: 10,
//           pageSizeOptions: [5, 10, 20],
//           toolbarButtonAlignment: 'left',
//           headerStyle: {
//             backgroundColor: '#f2f2f2',
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <CustomModal
//         show={modalOpen}
//         onHide={handleCloseModal}
//         title="Full Details"
//       >
//         {selectedRow && (
//           <div>
//             <p>ID: {selectedRow.Id}</p>
//             <p>First Name: {selectedRow.studentFirstName}</p>
//             <p>Middle Name: {selectedRow.middleName}</p>
//             <p>Last Name: {selectedRow.lastName}</p>
//             <p>Date of Birth: {selectedRow.dob}</p>
//             <p>Class: {selectedRow.STD}</p>
//             <p>Dicision: {selectedRow.division}</p>
//             <p>Guardian Name: {selectedRow.guardianName}</p>
//             <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
//             <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
//             <p>Pickup Adress: {selectedRow.pickupAddress}</p>
//             <p>Drop Adress: {selectedRow.dropAddress}</p>
//             <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>
//             {/* Add more fields as needed... */}
//           </div>
//         )}
//       </CustomModal>
//     </div>
//   );
// };

// export default StudentDetails;


// //zuber code 2
// import React, { useState, useEffect } from 'react';
// import CustomMaterialTable from '../components/MaterialTable';
// import CustomModal from '../components/modal';

// const StudentDetails = ({ drawerOpen }) => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [studentData, setStudentData] = useState([]);
//   const [linkGenerated, setLinkGenerated] = useState({});

//   useEffect(() => {
//     fetchStudentData();
//   }, []); // Fetch data only once when the component mounts

//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/register');
//       if (!response.ok) {
//         throw new Error('Failed to fetch student data');
//       }
//       const data = await response.json();
//       setStudentData(data);
//     } catch (error) {
//       console.error('Error fetching student data:', error.message);
//     }
//   };

//   const handleViewDetails = rowData => {
//     setSelectedRow(rowData);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

// //   const handleGenerateLink = async rowData => {
// //     try {
// //       const response = await fetch('http://localhost:3001/generate-payment-link', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(rowData) 
// //     });

// //     if (response.ok) {
// //       const paymentLink = await response.json();  //perfect code
// //       console.log(paymentLink);
// //       // Do something with the payment link, such as redirecting the user to the payment page
// //     } else {
// //       console.error('Failed to generate payment link');
// //     }
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// //fetch and add payment details , code form chatgpt
// const handleGenerateLink = async rowData => {
//   try {
//     const response = await fetch('http://localhost:3001/generate-payment-link', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(rowData)
//     });

//     if (response.ok) {
//       const paymentDetails = await response.json();
//       console.log(paymentDetails); // Payment details fetched from Razorpay API
//       // Send payment details to the backend
//       await sendPaymentDetailsToServer(paymentDetails);
//       // Do something with the payment link, such as redirecting the user to the payment page
//     } else {
//       console.error('Failed to generate payment link');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const sendPaymentDetailsToServer = async paymentDetails => {
//   try {
//     const response = await fetch('http://localhost:3001/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(paymentDetails)
//     });

//     if (!response.ok) {
//       console.error('Failed to send payment details to the server');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// //{
//   //     amount: rowData.amount,
//   //     currency: rowData.currency,
//   //     accept_partial: true,
//   //     expire_by: 1609492999,
//   //     reference_id: rowData.Id,
//   //     description: 'Payment for student fees',
//   //     customer: {
//   //       name: `${rowData.studentFirstName} ${rowData.lastName}`,
//   //       contact: rowData.guardianMobile,
//   //       //email: rowData.email // assuming you have email in your data
//   //     },
//   //     notify: {
//   //       sms: true,
//   //       email: false
//   //     },
//   //     reminder_enable: true,
//   //     notes: {
//   //       student_id: rowData.Id,
//   //       class: rowData.STD,
//   //       division: rowData.division
//   //     },
//   //     callback_url: 'https:\/\/rzp.io\/i\/PIteZlPhVk',
//   //     callback_method: 'get'
//   //   })
//   // }

//       // const data = await response.json();
//       // console.log('Generated payment link:', data);

//       // // Assuming the link is successfully generated
//       // setLinkGenerated(prevState => ({
//       //   ...prevState,
//       //   [rowData.Id]: true,
//       // }));
//     // } catch (error) {
//     //   console.error('Error generating payment link:', error.message);
//     // }


//   const columns = [
//     { title: 'ID', field: 'Id' },
//     { title: 'First Name', field: 'studentFirstName' },
//     { title: 'Last Name', field: 'lastName' },
//     {
//       title: 'View Details',
//       render: rowData => (
//         <button  onClick={() => handleViewDetails(rowData)}>View</button>
//       ),
//     },
//     { 
//       title: 'Generate Payment Link', 
//       render: rowData => (
//         <button 
//           onClick={() => handleGenerateLink(rowData)}
//           style={{
//             backgroundColor: linkGenerated[rowData.Id] ? '#90EE90' : '', // Light green if link is generated
//             cursor: 'pointer',
//           }}
//         >
//           Generate
//         </button>
//       )
//     },
//     { 
//       title: 'Payment Status', 
//       render: rowData => (
//         <button 
//           style={{
//             backgroundColor: rowData.paymentStatus === 'Paid' ? 'green' : 'red',
//             color: 'white',
//             cursor: 'default',
//             borderRadius: '5px', // Round edges
//             border: 'none', // Remove border
//             padding: '4px 8px' // Adjust padding
//           }}
//         >
//           {rowData.paymentStatus}
//         </button>
//       )
//     },
//   ];

//   return (
//     <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
//       <CustomMaterialTable
//         columns={columns}
//         data={studentData}
//         options={{
//           sorting: true,
//           search: true,
//           paging: true,
//           pageSize: 10,
//           pageSizeOptions: [5, 10, 20],
//           toolbarButtonAlignment: 'left',
//           headerStyle: {
//             backgroundColor: '#f2f2f2',
//             fontWeight: 'bold',
//           },
//         }}
//       />
//       <CustomModal
//         show={modalOpen}
//         onHide={handleCloseModal}
//         title="Full Details"
//       >
//         {selectedRow && (
//           <div>
//             <p>ID: {selectedRow.Id}</p>
//             <p>First Name: {selectedRow.studentFirstName}</p>
//             <p>Middle Name: {selectedRow.middleName}</p>
//             <p>Last Name: {selectedRow.lastName}</p>
//             <p>Date of Birth: {selectedRow.dob}</p>
//             <p>Class: {selectedRow.STD}</p>
//             <p>Division: {selectedRow.division}</p>
//             <p>Guardian Name: {selectedRow.guardianName}</p>
//             <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
//             <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
//             <p>Pickup Address: {selectedRow.pickupAddress}</p>
//             <p>Drop Address: {selectedRow.dropAddress}</p>
//             <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>
//             {/* Add more fields as needed... */}
//           </div>
//         )}
//       </CustomModal>
//     </div>
//   );
// };

// export default StudentDetails;


//priyanka updated code
import React, { useState, useEffect } from 'react';
import CustomMaterialTable from '../components/MaterialTable';
import CustomModal from "../components/modal";

const StudentDetails = ({ drawerOpen }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [linkGenerated, setLinkGenerated] = useState({});

  useEffect(() => {
    fetchStudentData();
  }, []); // Fetch data only once when the component mounts

  const fetchStudentData = async () => {
    try {
      const response = await fetch('http://localhost:3001/register');
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error.message);
    }
  };

  const handleViewDetails = rowData => {
    setSelectedRow(rowData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleGenerateLink = async rowData => {
    try {
      const response = await fetch('http://localhost:3001/generate-payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rowData)
      });

      if (response.ok) {
        const paymentLink = await response.json();  //perfect code
        console.log(paymentLink);
        // Do something with the payment link, such as redirecting the user to the payment page
        setLinkGenerated(prevState => ({
          ...prevState,
          [rowData.Id]: true
        }));
      } else {
        console.error('Failed to generate payment link');
      }
    } catch (error) {
      console.error(error);
    }
  };

  //fetch and add payment details , code form chatgpt
  // const handleGenerateLink = async rowData => {
  //   try {
  //     const response = await fetch('http://localhost:3001/generate-payment-link', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(rowData)
  //     });

  //     if (response.ok) {
  //       const paymentDetails = await response.json();
  //       console.log(paymentDetails); // Payment details fetched from Razorpay API
  //       // Send payment details to the backend
  //       await sendPaymentDetailsToServer(paymentDetails);
  //       // Do something with the payment link, such as redirecting the user to the payment page
  //     } else {
  //       console.error('Failed to generate payment link');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const sendPaymentDetailsToServer = async paymentDetails => {
  //   try {
  //     const response = await fetch('http://localhost:3001/payment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(paymentDetails)
  //     });

  //     if (!response.ok) {
  //       console.error('Failed to send payment details to the server');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //{
  //     amount: rowData.amount,
  //     currency: rowData.currency,
  //     accept_partial: true,
  //     expire_by: 1609492999,
  //     reference_id: rowData.Id,
  //     description: 'Payment for student fees',
  //     customer: {
  //       name: ${rowData.studentFirstName} ${rowData.lastName},
  //       contact: rowData.guardianMobile,
  //       //email: rowData.email // assuming you have email in your data
  //     },
  //     notify: {
  //       sms: true,
  //       email: false
  //     },
  //     reminder_enable: true,
  //     notes: {
  //       student_id: rowData.Id,
  //       class: rowData.STD,
  //       division: rowData.division
  //     },
  //     callback_url: 'https:\/\/rzp.io\/i\/PIteZlPhVk',
  //     callback_method: 'get'
  //   })
  // }

  // const data = await response.json();
  // console.log('Generated payment link:', data);

  // // Assuming the link is successfully generated
  // setLinkGenerated(prevState => ({
  //   ...prevState,
  //   [rowData.Id]: true,
  // }));
  // } catch (error) {
  //   console.error('Error generating payment link:', error.message);
  // }


  const columns = [
    { title: 'ID', field: 'Id' },
    { title: 'FirstName', field: 'studentFirstName' },
    { title: 'Middle Name', field: 'middleName' },
    { title: 'Last Name', field: 'lastName' },
    {
      title: 'Generate Link',
      render: rowData => (
        <button
          onClick={() => handleGenerateLink(rowData)}
          style={{
            backgroundColor: linkGenerated[rowData.Id] ? '#53a463' : '', // Light green if link is generated
            cursor: 'pointer',
          }}
        >
          Generate
        </button>
      )
    },
    {
      title: 'View Details',
      render: rowData => (
        <button onClick={() => handleViewDetails(rowData)}>View</button>

      ),

    },


  ];

  return (
    <div style={{ maxWidth: drawerOpen ? 'calc(100% - 240px)' : '100%' }}>
      <CustomMaterialTable
        columns={columns}
        data={studentData}
        options={{
          sorting: true,
          search: true,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          toolbarButtonAlignment: 'left',
          headerStyle: {
            backgroundColor: '#e5e5e5', //#e5e5e5
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
            {/* <p>Middle Name: {selectedRow.middleName}</p> */}
            <p>Last Name: {selectedRow.lastName}</p>
            <p>Date of Birth: {selectedRow.dob}</p>
            <p>Class: {selectedRow.STD}</p>
            <p>Division: {selectedRow.division}</p>
            <p>Guardian Name: {selectedRow.guardianName}</p>
            <p>Guardian Mobile: {selectedRow.guardianMobile}</p>
            <p>Alternate Mobile Number: {selectedRow.alternateMobile}</p>
            <p>Pickup Address: {selectedRow.pickupAddress}</p>
            <p>Drop Address: {selectedRow.dropAddress}</p>
            <p>Emergency Mobile Number: {selectedRow.emergencyMobile}</p>
            <p>Service type : {selectedRow.serviceType}</p>
            {/* Add more fields as needed... */}
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default StudentDetails;