import { EyeIcon } from "lucide-react";
import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{post._createdAt}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
