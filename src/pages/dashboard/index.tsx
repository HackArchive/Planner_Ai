/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { type NextPage } from "next";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Icons } from "@/components/icons";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import { useSession } from "next-auth/react";
import LayoutLoading from "@/layouts/loading-layout";

const AllEmployeesPage: NextPage = () => {
  const { data, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const [events, setEvents] = useState<AppEvent[]>([]);

  const loadMyEvents = useCallback(() => {
    if (isLoading) return;

    try {
      setIsLoading(true);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadMyEvents();
  }, [loadMyEvents]);

  if (status === "loading" || isLoading) {
    return (
      <LayoutLoading
        heading="My Events"
        text="Create and manage employees."
        buttonLabel="Add Event"
      />
    );
  }

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader
          heading="My Evebts"
          text="Create and manage your events."
        >
          <Link href="/dashboard/new">
            <Button variant="outline">
              <Icons.add className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </Link>
        </DashboardHeader>

        <Table>
          <TableCaption>A list of all events created by you.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {events.map((event, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{event.name}</TableCell>
                <TableCell>{`${event.city}`}</TableCell>
                <TableCell>{`${event.location}`}</TableCell>
                <TableCell>{event.startDate}</TableCell>
                <TableCell>{event.endDate}</TableCell>

                <TableCell className="text-right">
                  <Link
                    href={`/employees/update?username=${event.id}`}
                    className="mr-2"
                  >
                    <Button className="rounded-full">
                      <Icons.edit className="h-4 w-4" />
                    </Button>
                  </Link>

                  {/* TODO: Fix ID */}
                  <Button className="rounded-full" onClick={() => {}}>
                    <Icons.trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardShell>
    </DashboardLayout>
  );
};

export default AllEmployeesPage;
