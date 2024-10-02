"use server";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { gql } from "@apollo/client";
import { DataTable } from "../../components/ui/data-table";
import { client } from "../../lib/graphql-client";
import { columns } from "./colums";

export interface Plan {
  id: string;
  name: string;
  plannedAmount: number;
  receivedAmount?: number;
  type: "INCOME" | "EXPENSE";
}

export interface Budget {
  isPreviousMonth: boolean;
  userId: string;
  isEveryDollarBudget: boolean;
  year: string;
  id: string;
  month: string;
  plans: Plan[];
}

export interface CurrentBudget {
  budget: Budget;
}

export interface User {
  currentBudget: CurrentBudget;
}

export default async function Home() {
  async function getData(): Promise<User> {
    const GET_CURRENT_BUDGET = gql`
      query User {
        user(id: "6305819ffd24f0efee85b014") {
          currentBudget {
            budget {
              plans {
                id
                budgetId
                name
                plannedAmount
                receivedAmount
                userId
                deletedAt
                type
              }
              isPreviousMonth
              userId
              isEveryDollarBudget
              year
              id
              month
            }
          }
        }
      }
    `;

    const results = await client.query<{ user: User }>({
      query: GET_CURRENT_BUDGET,
      variables: { userId: "6305819ffd24f0efee85b014" }, // TODO: Remove this hardcode and make sure we are fetching budget before loading this page
    });

    return results.data.user;
  }

  const user = await getData();

  return (
    <div className="flex min-h-full flex-1 flex-row">
      <div className="ml-8 w-3/4 justify-evenly">
        <div className="my-4">
          <Select defaultValue="id">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">October 2024</SelectItem>
              <SelectItem value="dark">November 2024</SelectItem>
              <SelectItem value="system">December 2024</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-4 scroll-m-20 tracking-tight">
            {user.currentBudget.budget.isEveryDollarBudget
              ? "Your budget is an everydollar budget"
              : "You have x amount to budget"}
          </p>
          <div className="xl mt-7">
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Income
            </h2>
            <DataTable
              columns={columns}
              data={user.currentBudget.budget.plans.filter(
                (plan) => plan.type === "INCOME",
              )}
            />
          </div>
          <div className="xl mt-7">
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Plans
            </h2>

            <DataTable
              columns={columns}
              data={user.currentBudget.budget.plans.filter(
                (plan) => plan.type === "EXPENSE",
              )}
            />
          </div>
        </div>
      </div>
      <div className="w-1/4 justify-evenly">ss</div>
    </div>
  );
}
