import React from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
const catagories = ['men', 'women', 'kids']
export default function Search() {
    return (
        <form action='/search' method='GET' className='flex items-stretch h-10'>
            <Select name="category">
                <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-200 text-black border-r
                    rounded-r-none rounded-l-md'>
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent position='popper'>
                    <SelectItem value='all'>All</SelectItem>
                    {catagories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input
                className='flex-1 rounded-none dark:border-gray-200 bg-gray-200 text-black text-base h-full'
                placeholder={`Search site ${APP_NAME}`} name='q' type='search'
            />
            <button type='submit'
                className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'>
                <SearchIcon className='w-6 h-6' />
            </button>
        </form>
    )
}
