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

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1">
        <Search width={16} height={16} className="text-gray-500" />
        <Input
          className="border-0 outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center space-x-4 justify-end w-full">
        <Button className="relative p-1" variant="outline">
          <Bell width={20} height={20} />
          <Badge className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            5
          </Badge>
        </Button>
        <Button className="p-1" variant="outline">
          <MessageCircleMore width={20} height={20} />
        </Button>
        <Button className="p-1" variant="outline">
          <Navigation width={20} height={20} />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-sm font-medium">Tunahan BUCAK</span>
            <span className="text-xs text-gray-500">ADMIN</span>
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
