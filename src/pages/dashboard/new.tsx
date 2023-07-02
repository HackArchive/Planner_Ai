import "regenerator-runtime/runtime";

import DashboardLayout from "@/layouts/dashboard-layout";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { NewEventForm } from "@/components/forms/new-event-form";

interface NewContractProps {}

const NewContract: React.FC<NewContractProps> = ({}) => {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Add New Event" text="Create a new event.">
          <Link href="/dashboard/">
            <Button variant="outline">
              <Icons.users className="mr-2 h-4 w-4" />
              View My Events
            </Button>
          </Link>
        </DashboardHeader>

        <NewEventForm />
      </DashboardShell>
    </DashboardLayout>
  );
};

export default NewContract;
