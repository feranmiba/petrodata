import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/assests/logo.svg?url'
import Image from 'next/image';
import { Sparkles } from '@/assests';


interface SearchProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchProps> = ({ onClose }) => {
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
                        className="bg-white dark:bg-[#171717] rounded-lg w-full max-w-3xl h-[50vh] p-6 shadow-xl relative"
                      >

              <section>
                <div className='flex items-center gap-2'>
                  <Image src={Logo} alt="logo" width={20} height={20} />
                  <p className='bg-[#262626] p-2 rounded'>Ask Petrodata AI</p>
                </div>

                <div>
                  <div className='flex items-center gap-2 mt-4 p-2 rounded-lg'>
                  <Image src={Sparkles} alt="sparkle" width={20} height={20} />
                    <input
                      type="text"
                      placeholder="Search using petodata AI"
                      className='w-full bg-transparent outline-none'
                    />
                  </div>

                </div>

              </section>
              </motion.div>

            </motion.div>
            </AnimatePresence>


   
   </>
  )
}

export default SearchModal;