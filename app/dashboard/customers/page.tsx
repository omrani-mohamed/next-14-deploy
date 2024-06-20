import { lusitana } from "@/app/ui/fonts";
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';


export default async function DashboardPage({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }){
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
        <div className="w-full">
            <Table customers={customers} />
        </div>
        );
}