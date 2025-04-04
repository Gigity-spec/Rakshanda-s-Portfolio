import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Define the website content for chatbot answers
const websiteContent = {
  name: "Rakshinda Jabeen",
  title: "English Teacher (CELTA Certified)",
  experience: "Over 20+ years of experience in English language instruction and academia. Specializing in EFL teaching, curriculum design, and literature studies.",
  skills: [
    "EFL/ESL Teaching",
    "Curriculum Development",
    "Literature Instruction",
    "Academic Writing",
    "Research Methodology",
    "Student Assessment",
    "Educational Technology",
    "Classroom Management"
  ],
  certifications: [
    "Certificate in Teaching English to Speakers of Other Languages (CELTA)",
    "Post Graduate Certificate in Education (PGCE)"
  ],
  celta: {
    name: "Cambridge CELTA (Certificate in Teaching English to Speakers of Other Languages)",
    institution: "Cambridge University",
    description: "The Cambridge CELTA certification represents the gold standard in English language teaching qualifications. This internationally recognized credential demonstrates expertise in teaching methodologies, classroom management, and student assessment techniques for adult learners.",
    qualifications: [
      "Teaching Methodologies - Expert knowledge of communicative language teaching and student-centered approaches",
      "Lesson Planning - Comprehensive skills in creating effective, engaging lesson plans for various language proficiency levels",
      "Classroom Management - Advanced techniques for creating positive, productive learning environments",
      "Student Assessment - Thorough understanding of formative and summative assessment strategies",
      "International Recognition - Globally respected qualification accepted by institutions worldwide"
    ]
  },
  publications: [
    "Probing the Approaches to Teaching Literature to EFL Students (Featured Research Paper, DOI: 10.7575/aiac.ijels.v.3n.2p.15)",
    "Stylistic Analysis of The Road Not Taken by Robert Frost",
    "Analyzing Reader-Response in Teaching of English Literature",
    "Exploring Language through Text Analysis",
    "Contemporary Methods in English Language Teaching"
  ],
  education: [
    "Master's in English Literature",
    "Bachelor's in English Language and Literature",
    "Post Graduate Certificate in Education (PGCE)"
  ],
  workHistory: [
    "King Khalid University - Assistant Professor (2015-Present)",
    "Higher Education Commission - English Language Specialist (2010-2015)",
    "International School of Languages - Senior English Teacher (2005-2010)"
  ],
  contactInfo: {
    email: "rwahla7@gmail.com",
    whatsapp: "+966 55 920 1358",
    linkedin: "https://www.linkedin.com/in/rakhshinda-jabeen-4abb4235/"
  }
};

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! I'm a virtual assistant for ${websiteContent.name}. How can I help you learn more about her qualifications or experience?`
    }
  ]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Create bot response based on user input
    setTimeout(() => {
      const botResponse = generateResponse(input.trim().toLowerCase());
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  const generateResponse = (query: string): string => {
    // Simple greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/i.test(query) || 
        /^(hi|hello|hey) there$/i.test(query) || 
        /^(hi|hello|hey)(\s|$)/i.test(query)) {
      return `Hello! It's nice to meet you. I'm Rakshinda's virtual assistant. How can I help you today? Feel free to ask about her qualifications, experience, publications, or anything else you'd like to know.`;
    }
    
    // "How are you" type questions
    if (/how are you|how('s| is) it going|what's up/i.test(query)) {
      return `I'm doing well, thank you for asking! I'm here to help you learn more about Rakshinda Jabeen. What would you like to know about her professional qualifications or experience?`;
    }
    
    // Thank you responses
    if (/thank(s| you)|appreciate it/i.test(query)) {
      return `You're welcome! I'm happy to assist. Is there anything else you'd like to know about Rakshinda's qualifications or experience?`;
    }
    
    // CELTA specific questions
    if (query.includes('celta') || 
        (query.includes('teaching') && query.includes('certificate')) || 
        (query.includes('english') && query.includes('certificate')) ||
        (query.includes('what') && query.includes('certification'))) {
      return `${websiteContent.celta.name} from ${websiteContent.celta.institution}\n\n${websiteContent.celta.description}\n\nKey qualifications gained through CELTA:\n\n• ${websiteContent.celta.qualifications.join('\n• ')}\n\nThis certification is highly respected in the field of English language teaching. Would you like to know about Rakshinda's other qualifications as well?`;
    }
    
    // Experience-related questions
    if (query.includes('experience') || query.includes('work history') || query.includes('background') || query.includes('job')) {
      return `${websiteContent.name} has ${websiteContent.experience}\n\nHer professional journey includes:\n\n${websiteContent.workHistory.join('\n')}\n\nShe has a proven track record of excellence in teaching and curriculum development. Is there a specific aspect of her experience you're interested in?`;
    }
    
    // Skills-related questions
    if (query.includes('skill') || query.includes('abilities') || query.includes('capable') || query.includes('can do') || query.includes('what can she do')) {
      return `${websiteContent.name}'s key professional skills include:\n\n• ${websiteContent.skills.join('\n• ')}\n\nThese skills have been developed over her 20+ years in the field. Would you like more details about any specific skill area?`;
    }
    
    // Education-related questions
    if (query.includes('education') || query.includes('degree') || query.includes('qualification') || query.includes('study')) {
      return `${websiteContent.name}'s educational background includes:\n\n• ${websiteContent.education.join('\n• ')}\n\nHer strong academic foundation complements her extensive practical experience in the field. Would you like to know about her certifications as well?`;
    }
    
    // Publication-related questions
    if (query.includes('publication') || query.includes('research') || query.includes('paper') || query.includes('article') || query.includes('write')) {
      return `${websiteContent.name} has contributed significantly to the field through these publications:\n\n• ${websiteContent.publications.join('\n• ')}\n\nHer research demonstrates her expertise in English language teaching methodologies and literature analysis. Is there a particular publication you're interested in?`;
    }
    
    // General certification-related questions
    if (query.includes('certification') || query.includes('certificate') || query.includes('qualified')) {
      return `${websiteContent.name} holds the following certifications:\n\n• ${websiteContent.certifications.join('\n• ')}\n\nThe CELTA certification is particularly notable as it's the gold standard for English language teaching worldwide. Would you like specific details about the CELTA certification?`;
    }
    
    // Contact information questions
    if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('whatsapp') || query.includes('reach') || query.includes('message')) {
      return `You can contact ${websiteContent.name} through any of these channels:\n\n• Email: ${websiteContent.contactInfo.email}\n• WhatsApp: ${websiteContent.contactInfo.whatsapp}\n• LinkedIn: ${websiteContent.contactInfo.linkedin}\n\nShe typically responds within 1-2 business days. Is there something specific you'd like to discuss with her?`;
    }
    
    // About/Introduction questions
    if (query.includes('who is') || query.includes('about') || query.includes('tell me about') || query.includes('introduction')) {
      return `${websiteContent.name} is a ${websiteContent.title} with ${websiteContent.experience}\n\nShe has worked at prestigious institutions including King Khalid University where she currently serves as an Assistant Professor. Her expertise spans curriculum development, literature instruction, and research methodology. What specific aspect of her background would you like to know more about?`;
    }
    
    // Default response for unrecognized questions
    return `Thank you for your question. While I don't have specific information about that, I'd be happy to tell you about ${websiteContent.name}'s qualifications as a ${websiteContent.title}.\n\nShe has ${websiteContent.experience} and is CELTA certified from Cambridge University. Would you like to know about her experience, skills, education, publications, or professional certifications? I'm here to help with any specific information you need.`;
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-[#A3886b] hover:bg-[#8a7158] transition-colors duration-300 shadow-lg flex items-center justify-center"
          aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        >
          {isOpen ? (
            <i className="fas fa-times text-xl"></i>
          ) : (
            <i className="fas fa-comment-dots text-xl"></i>
          )}
        </Button>
      </div>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#A3886b] text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#f2c0DD] flex items-center justify-center text-[#A3886b] font-bold text-lg mr-2">
                RJ
              </div>
              <div>
                <h3 className="font-medium">{websiteContent.name} Assistant</h3>
                <p className="text-xs opacity-80">Ask about qualifications & experience</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-[#8a7158] rounded-full"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block rounded-lg p-3 max-w-[85%] whitespace-pre-line ${
                    message.sender === 'user'
                      ? 'bg-[#f2c0DD] text-[#25092e]'
                      : 'bg-[#eee] text-[#25092e]'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 bg-white">
            <div className="flex">
              <Input
                type="text"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 focus-visible:ring-[#A3886b]"
                aria-label="Type your message"
              />
              <Button 
                type="submit" 
                className="ml-2 bg-[#A3886b] hover:bg-[#8a7158]"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;