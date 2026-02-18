import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactModal = ({ onClose, setCopyNotification }) => {
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            if (setCopyNotification) {
                setCopyNotification({ show: true, message: `${type} 복사되었습니다!` });
                setTimeout(() => setCopyNotification({ show: false, message: '' }), 2000);
            }
        } catch (err) {
            console.error('Failed to copy means:', err);
        }
    };

    const copyEmail = () => copyToClipboard('junh9126@gmail.com', '이메일이');
    const copyPhone = () => copyToClipboard('010-5766-1639', '전화번호가');

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[2000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-[#1e1e1e]/95 backdrop-blur-xl border border-border-main rounded-2xl w-full max-w-[400px] shadow-2xl overflow-hidden p-8 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-border-main">
                    <h3 className="text-xl font-bold text-text-main m-0">연락처 정보</h3>
                    <button className="bg-transparent border-none text-text-sub text-2xl cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-text-main" onClick={onClose}>×</button>
                </div>

                <div className="w-full flex flex-col gap-6">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl transition-colors hover:bg-white/10">
                        <FaGithub className="text-2xl text-secondary flex-shrink-0" />
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-sm text-text-light mb-1 font-medium">GitHub</span>
                            <a href="https://github.com/banbakbulga" target="_blank" rel="noopener noreferrer" className="text-text-main no-underline text-base truncate w-full hover:text-secondary hover:underline transition-colors">
                                github.com/banbakbulga
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl transition-colors hover:bg-white/10 group relative">
                        <div className="relative">
                            <FaEnvelope
                                className="text-2xl text-secondary flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
                                onClick={copyEmail}
                                onMouseEnter={() => setShowEmailTooltip(true)}
                                onMouseLeave={() => setShowEmailTooltip(false)}
                            />
                            <AnimatePresence>
                                {showEmailTooltip && (
                                    <motion.div
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-text-main text-bg-main text-xs py-1 px-2 rounded whitespace-nowrap z-10 pointer-events-none"
                                        initial={{ opacity: 0, y: 5, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                    >
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-text-main"></div>
                                        junh9126@gmail.com
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-sm text-text-light mb-1 font-medium">이메일</span>
                            <span className="text-text-main text-base truncate w-full cursor-pointer hover:text-secondary group-hover:text-secondary transition-colors" onClick={copyEmail}>junh9126@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl transition-colors hover:bg-white/10 group relative">
                        <div className="relative">
                            <FaPhone
                                className="text-2xl text-secondary flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
                                onClick={copyPhone}
                                onMouseEnter={() => setShowPhoneTooltip(true)}
                                onMouseLeave={() => setShowPhoneTooltip(false)}
                            />
                            <AnimatePresence>
                                {showPhoneTooltip && (
                                    <motion.div
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-text-main text-bg-main text-xs py-1 px-2 rounded whitespace-nowrap z-10 pointer-events-none"
                                        initial={{ opacity: 0, y: 5, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                    >
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-text-main"></div>
                                        010-5766-1639
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-sm text-text-light mb-1 font-medium">전화번호</span>
                            <span className="text-text-main text-base truncate w-full cursor-pointer hover:text-secondary group-hover:text-secondary transition-colors" onClick={copyPhone}>010-5766-1639</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactModal;
