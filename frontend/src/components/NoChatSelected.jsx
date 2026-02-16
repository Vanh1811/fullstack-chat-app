import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-10 sm:p-16 bg-base-100/40">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-semibold section-title">Welcome to Chatty</h2>
        <p className="text-base-content/70">
          Pick a contact on the left to start a conversation. You can also search for people or
          filter by who is online.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
