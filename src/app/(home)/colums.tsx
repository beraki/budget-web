"use client";

import { LoaderCircle, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Plan } from "./page";
import { EditableCell } from "../../components/ui/editable-cell";

export const columns: ColumnDef<Plan>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: EditableCell,
  },
  {
    accessorKey: "plannedAmount",
    header: "Amount",
    cell: EditableCell,
  },
  {
    accessorKey: "receivedAmount",
    header: "Amount Received",
    cell: EditableCell,
  },
  {
    id: "loading",
    cell: () => <LoaderCircle className="animate-spin" />,
  },
  {
    id: "action",
    cell: () => <Trash className="none" />,
  },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => {
  //       const payment = row.original;

  //       return (
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <MoreHorizontal className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem
  //               onClick={() => navigator.clipboard.writeText(payment.id)}
  //             >
  //               Copy payment ID
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem>View customer</DropdownMenuItem>
  //             <DropdownMenuItem>View payment details</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       );
  //     },
  //   },
];
