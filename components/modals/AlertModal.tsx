'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Alert } from '@/assests/data';
import { ArrowDown, Check, Close } from '@/assests';
import CalendarModal from './Calendar';
import Image from 'next/image';

interface AlertProps {
  onClose: () => void;
}

const tabs = [
  { id: 'alerts', label: 'Alerts' },
  { id: 'logs', label: 'Logs' },
];

const option = [
  "Crossing up",
  "Crossing down",
]
const AlertStatus = [
  { id: 'active', label: 'Only Once', condition: "The alert will only trigger once and will not be repeated" },
  { id: 'inactive', label: 'Every Time', condition: "The alert will trigger every time the condition is met, but not more than 1 time per minute" },
];

const AlertModal: React.FC<AlertProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('alerts');
  const [success, setSuccess] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Crossing up');
  const [alertStatus, setAlertStatus] = useState('Only Once');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  }

  const handleSUbmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', {
      dropdownValue,
      alertStatus,
      selectedDate,
      alertName,
    });
    setOpenFormModal(false); 
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000); // Hide success message after 2 seconds
  }
  

  const Log = Alert.filter(alert => alert.status !== "Active");



  return (
    <>
     <div
              className="fixed inset-0 z-0 flex items-center justify-center bg-black/30"
        onClick={onClose}
      >

      </div>
    
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white dark:bg-[#171717] rounded-lg w-full max-w-xl h-[70vh] p-6 shadow-xl relative"
        >
          {/* Title and + Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Alert</h2>
            <button
              onClick={() => setOpenFormModal(true)}
              className="text-white bg-[#171717] px-3 py-1 rounded-full text-lg font-bold"
            >
              +
            </button>
          </div>

          {/* Tabs */}
          <div className="flex mb-4 justify-between border border-[#404040] rounded-xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/2 p-2 text-sm font-medium  ${
                  activeTab === tab.id
                    ? 'bg-[#525252] text-[#FAFAFA]'
                    : 'text-gray-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'alerts' ? (
           <section>
            {Alert.map((alert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 mb-2 border-b-[0.5px] border-[#404040] hover:bg-neutral-800 cursor-pointer"
                >
                <div>
                  <h3 className="text-sm font-semibold">{alert.alert}</h3>
                  <p className={` ${alert.status === "Active" ? "text-[#12B76A]" : "text-[#12B76A]"} text-sm`}>
                  {alert.status} - <span className='text-[#A3A3A3]'>{alert.date}</span>
                  </p>
                </div>
              </div>
            ))}

           </section>
          ) : (
            <section>
            {Log.map((alert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 mb-2 border-b-[0.5px] border-[#404040]"
              >
                <div>
                  <h3 className="text-md font-semibold">{alert.alert}</h3>
                  <p className={` ${alert.status === "Active" ? "text-[#12B76A]" : "text-[#12B76A]"} text-sm`}>
                  {alert.status} - <span className='text-[#A3A3A3]'>{alert.date}</span>
                  </p>
                </div>
              </div>
            ))}

           </section>
            
          )}
        </motion.div>

        {/*  Nested Form Modal inside the same component */}
        <AnimatePresence>
          {openFormModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 px-3 md:px-0 flex items-center justify-center bg-black/40"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-[#171717] rounded-lg w-full max-w-xl p-6 shadow-xl relative"
              >
                {/* Close form modal */}
                <button
                  onClick={() => setOpenFormModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                  <X size={20} />
                </button>

                <h2 className="text-xl font-semibold mb-4">Set Alert</h2>
                <form onSubmit={handleSUbmit} className="space-y-4">
                  <div className="flex justify-between mb-3 items-start gap-2">
                    <label className="block text-sm font-medium text-[#A3A3A3] ">
                      Condition
                    </label>
                    <section className='relative w-[70%]'>
                    <div
                      className="w-full mt-1 flex justify-between px-4 py-5 rounded-full border border-[#525252] dark:bg-[#404040] dark:text-white outline-none"  >
                      
                     <p>  PMS  <span className='text-sm text-[#A3A3A3]'>Premium Motor Spirit</span></p>  
                     <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} className='inline ml-2' />
                        </div>

                        <div
                      className="w-full mt-1 flex justify-between px-4 py-5 rounded-full border border-[#525252] dark:bg-[#404040] dark:text-white outline-none cursor-pointer" onClick={handleDropdownToggle}  >
                      
                     <p> {dropdownValue} </p>  
                     <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} className='inline ml-2' />
                      
                        </div>
                        {showDropdown && (
                          <div className="absolute bg-white border-[#525252] dark:bg-[#404040] rounded-lg shadow-lg mt-2 w-full z-10">
                            {option.map((opt, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  setDropdownValue(opt);
                                  setShowDropdown(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex justify-between cursor-pointer"
                              >
                                {opt}
                                {dropdownValue === opt && (
                                  <Image
                                    src={Check}
                                    alt="Check Icon"
                                    width={16}
                                    height={16}
                                    className="inline ml-2"
                                    />
                                )
                                  }
                              </button>
                            ))}
                          </div>
                        )}

                        <div className='flex items-center gap-1 mt-2 mr-8 md:mr-0' >
                          <p>Price:</p>

                          <div
                      className="w-full mt-1 flex justify-between px-2 md:px-4 py-5 rounded-full border border-[#525252] dark:bg-[#404040] dark:text-white outline-none"  >
                      
                     <input type='number' className='bg-transparent outline-none' placeholder='Enter Price' />
                     <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} className='inline' />
                        </div>

                        </div>                      
                    </section>                
                  </div>


                  <div className='flex justify-between mb-3 items-start gap-2 border-t-[0.8px] py-3 border-[#404040] '>
              <label className="block text-sm font-medium text-[#A3A3A3]">
                Trigger
              </label>

            <section className='relative w-[70%]'>
              <div className="w-full mt-1 flex justify-between text-sm  border border-[#525252] dark:text-white outline-none rounded-xl">
                {AlertStatus.map((status, index) => (
                  <div
                    key={index}
                    onClick={() => setAlertStatus(status.label)}
                    className={`w-full  py-2 px-2  cursor-pointer rounded-lg ${
                      alertStatus === status.label ? 'bg-[#404040] text-white' : ''
                    }`}
                  >
                    {status.label}
                  </div>
                ))}
              </div>

              {/* Animate condition text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={alertStatus} 
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className='text-[#A3A3A3] text-sm mt-2'
                >
                  {AlertStatus.find((s) => s.label === alertStatus)?.condition}
                </motion.p>
              </AnimatePresence>
            </section>
                  </div>

                  <div className="flex justify-between mb-3 items-start gap-2">
      <label className="block text-sm font-medium text-[#A3A3A3]">
        Expiration Date
      </label>

      <section className="relative w-[70%]">
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => setShowCalendar(true)}
  >
    <p>
      {selectedDate
        ? selectedDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'Select end date'}
    </p>
    <Image src={ArrowDown} alt="arrowdown" width={25} height={25} />
  </div>

  {showCalendar && (
    <CalendarModal
      selectedDate={selectedDate}
      onDateChange={(date) => date && setSelectedDate(date)}
      onClose={() => setShowCalendar(false)}
    />
  )}
</section>

    </div>


                  <div className='flex justify-between mb-3 items-start gap-2 border-t-[0.8px] py-3 border-[#404040] '>
              <label className="block text-sm font-medium text-[#A3A3A3]">
                Alert Name
              </label>

            <section className='relative w-[70%]'>
            <div className="w-full mt-1 flex justify-between border bg-[#525252] py-3 rounded-full border-[#525252] dark:text-white outline-none">
        <div className="px-3 w-full">
          <input
            type="text"
            placeholder="Name your Alert"
            value={alertName}
            onChange={(e) => setAlertName(e.target.value)}
            className="bg-transparent outline-none w-full px-2 py-1 text-white"
          />
        </div>

   
      </div>

      {/* Display typed alert name */}
      <p className="mt-2 text-[16px] text-[#FAFAFA] h-14 rounded-t-2xl px-5 py-3  bg-[#404040] border-[#525252] border">
      {alertName}
      </p>
            </section>
          </div>
               
                <div className='flex justify-between'>
                  <button className='bg-[#525252] border-[#525252] border rounded-full w-[45%] py-3 cursor-pointer'>Cancel</button>
                  <button type='submit' className='bg-[#00897B] border-[#525252] border rounded-full w-[45%] py-3 cursor-pointer'>Create alert</button>
                </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      {success && ( <AnimatePresence mode='wait'>
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#00796B] p-3 px-5 flex items-center text-xs text-white rounded-full gap-2 z-50 shadow-md"
  >
    <p>Alert created successfully</p>
    <button
      onClick={() => setSuccess(false)}
      className="bg-[#00897B] rounded-full p-1"
    >
      <Image
        src={Close}
        alt="Close Icon"
        width={17}
        height={17}
        className="cursor-pointer"
      />
    </button>
  </motion.div>
</AnimatePresence>)}


      </motion.div>


     
    </AnimatePresence>
    </>

  );
};

export default AlertModal;
