import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactModal = ({ onClose, setCopyNotification }) => {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[2000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-bg-sub border border-white/10 rounded-xl w-full max-w-[380px] shadow-2xl overflow-hidden p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full flex justify-between items-center mb-6 pb-3 border-b border-white/5">
                    <h3 className="text-base font-semibold text-text-main m-0">연락처 정보</h3>
                    <button className="bg-transparent border-none text-text-light text-xl cursor-pointer w-7 h-7 flex items-center justify-center rounded-md transition-colors hover:bg-white/10 hover:text-text-main" onClick={onClose}>×</button>
                </div>

                <div className="w-full flex flex-col gap-3">
                    <a href="https://github.com/banbakbulga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/[0.03] border border-white/5 p-3.5 rounded-lg transition-colors hover:bg-white/[0.06] hover:border-white/10 no-underline">
                        <FaGithub className="text-lg text-text-sub flex-shrink-0" />
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-[11px] text-text-light mb-0.5">GitHub</span>
                            <span className="text-text-main text-sm truncate w-full">github.com/banbakbulga</span>
                        </div>
                    </a>

                    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 p-3.5 rounded-lg transition-colors hover:bg-white/[0.06] hover:border-white/10 cursor-pointer" onClick={copyEmail}>
                        <FaEnvelope className="text-lg text-text-sub flex-shrink-0" />
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-[11px] text-text-light mb-0.5">이메일</span>
                            <span className="text-text-main text-sm truncate w-full">junh9126@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 p-3.5 rounded-lg transition-colors hover:bg-white/[0.06] hover:border-white/10 cursor-pointer" onClick={copyPhone}>
                        <FaPhone className="text-lg text-text-sub flex-shrink-0" />
                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-[11px] text-text-light mb-0.5">전화번호</span>
                            <span className="text-text-main text-sm truncate w-full">010-5766-1639</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactModal;
