import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  id: string;
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  icon?: string;
}

const Notification = ({ id, title, message, isVisible, onClose, icon = "fas fa-check" }: NotificationProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id={id}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 gradient-border"
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start">
            <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3">
              <i className={`${icon} text-[#f2c0DD]`}></i>
            </div>
            <div>
              <h4 className="font-medium text-[#A3886b]">{title}</h4>
              <p className="text-sm text-[#25092e] opacity-80 mt-1">{message}</p>
            </div>
            <button 
              className="ml-4 text-[#25092e] opacity-70 hover:opacity-100" 
              onClick={onClose}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
