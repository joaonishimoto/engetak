import CreateRewardForm from "@/components/forms/createReward";
import CreateTaskForm from "@/components/forms/createTask";
import CreateUserForm from "@/components/forms/createUser";
import GiveOrTakePoints from "@/components/forms/giveOrTakePoint";
import { RewardsTable } from "@/components/tables/rewards";
import { TasksTable } from "@/components/tables/tasks";
import { UsersTable } from "@/components/tables/users";
import { Skeleton } from "@/components/ui/skeleton";
import { LightbulbIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full p-5 space-y-5">
      <div className="pb-5
      sm:grid sm:grid-cols-2 sm:gap-5
      ">
        <div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
              Users Table
            </h1>
            <UsersTable />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
              Tasks Table
            </h1>
            <TasksTable />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
              Reward Table
            </h1>
            <RewardsTable />
          </div>
        </div>
        <div className="h-full space-y-16">
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
              Register a New User
            </h1>
            <CreateUserForm />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">     
              Create a New Task
            </h1>
            <CreateTaskForm />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">     
              Create a New Reward
            </h1>
            <CreateRewardForm />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">     
              Give or Take Lúmens
            </h1>
            <GiveOrTakePoints />
          </div>
        </div>
      </div>
    </div>
  )
}