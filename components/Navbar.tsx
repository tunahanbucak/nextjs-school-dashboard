import React from "react";
import {
  Bell,
  Mail,
  Search,
  MessageCircleMore,
  Navigation,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { role } from "@/lib/data";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs  ring-[1.5px] ring-gray-300   rounded-full px-2">
        <Search width={16} height={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Arama..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end w-full ">
        <Button className="flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-100 relative">
          <Bell width={20} height={20} />
          <Badge className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            5
          </Badge>
        </Button>
        <Button className="flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-100">
          <MessageCircleMore width={20} height={20} />
        </Button>
        <Button className="flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-100">
          <Navigation width={20} height={20} />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-sm font-medium">Tunahan BUCAK</span>
            <span className="text-xs text-gray-500 uppercase">{role}</span>
          </div>
          <Avatar>
            <AvatarImage src="/avatar.png" alt="User Profile" />
            <AvatarFallback>TB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
