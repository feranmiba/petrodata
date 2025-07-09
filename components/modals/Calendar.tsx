'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/calendarStyles.css'


interface CalendarModalProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  selectedDate,
  onDateChange,
  onClose,
}) => {
  const [endDate, setEndDate] = useState<Date | null>(selectedDate);
  const [currentMonth, setCurrentMonth] = useState(new Date());



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white dark:bg-[#171717] p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Selected Date */}
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <p className="font-medium">End Date</p>
            <p>{endDate ? endDate.toDateString() : '--'}</p>
          </div>

          {/* Calendar */}
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            inline
            dateFormat="MMMM d, yyyy"
            openToDate={currentMonth}
          />

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={onClose}
            className='bg-[#525252] border-[#525252] border rounded-full w-[45%] py-3 cursor-pointer'
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDateChange(endDate);
                onClose();
              }}
             className='bg-[#00897B] border-[#525252] border rounded-full w-[45%] py-3 cursor-pointer'
            >
              Apply
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CalendarModal;


